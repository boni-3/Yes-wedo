#!/bin/bash
# ==============================================================================
# Brochura Yes, We Do — build do PDF de impressão
#
#   brochura/print.html  +  data/brochura-content.json
#        │  Paged.js (A4, bleed 3 mm, marcas de corte)
#        ▼
#   Chrome headless  →  PDF RGB 300 dpi
#        ▼
#   Ghostscript      →  PDF CMYK (prepress)
#
# Serve os ficheiros por HTTP local em vez de file:// — assim os caminhos
# absolutos (/img/..., /css/...) funcionam exatamente como em produção
# e o fetch() do JSON não é bloqueado por CORS.
#
# Uso:  ./build-brochura-pdf.sh             → RGB + CMYK (texto em curvas)
#       ./build-brochura-pdf.sh --rgb       → só RGB (rápido, para iterar no design)
#       ./build-brochura-pdf.sh --com-texto → CMYK mantendo o texto pesquisável
#
# NOTA SOBRE FONTES: o Chrome exporta as nossas fontes variáveis (Inter e
# Space Grotesk são variable fonts) como Type 3. São vetoriais e imprimem bem,
# mas muitos preflights de gráfica assinalam ou rejeitam Type 3.
# Por isso o build converte o texto em curvas por omissão (-dNoOutputFonts):
# é o que se entrega normalmente a uma gráfica e elimina o problema de raiz.
# O PDF deixa de ser pesquisável — irrelevante num ficheiro para impressão.
# ==============================================================================

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
OUT="$ROOT/docs/entrega"
PORT=8788
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SO_RGB=false
CURVAS=true
[ "${1:-}" = "--rgb" ] && SO_RGB=true
[ "${1:-}" = "--com-texto" ] && CURVAS=false

mkdir -p "$OUT"
cd "$ROOT"

# ---------- 1. servidor local ----------
echo "▸ servidor local na porta ${PORT}…"
python3 -m http.server "$PORT" --bind 127.0.0.1 >/dev/null 2>&1 &
SRV=$!
cleanup() { kill "$SRV" 2>/dev/null || true; }
trap cleanup EXIT

for i in $(seq 1 30); do
  curl -sf "http://127.0.0.1:$PORT/data/brochura-content.json" -o /dev/null && break
  sleep 0.2
  [ "$i" = 30 ] && { echo "❌ servidor não arrancou"; exit 1; }
done

# ---------- 2. Chrome headless → PDF RGB ----------
echo "▸ Chrome headless a paginar com Paged.js…"
# O Chrome headless escreve o PDF e às vezes não sai sozinho (bug conhecido do
# --print-to-pdf). Lançamos em background, esperamos que o ficheiro estabilize
# de tamanho, e matamos o processo.
PROFILE="$(mktemp -d)"
rm -f "$OUT/brochura-rgb.pdf"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-first-run \
  --user-data-dir="$PROFILE" \
  --virtual-time-budget=60000 \
  --run-all-compositor-stages-before-draw \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT/brochura-rgb.pdf" \
  "http://127.0.0.1:$PORT/brochura/print.html" >/dev/null 2>&1 &
CHROME_PID=$!

PREV=0
for i in $(seq 1 120); do          # até 2 minutos
  sleep 1
  if [ -f "$OUT/brochura-rgb.pdf" ]; then
    SZ=$(stat -f%z "$OUT/brochura-rgb.pdf" 2>/dev/null || echo 0)
    # tamanho estável e não vazio duas leituras seguidas → escrita terminou
    [ "$SZ" -gt 100000 ] && [ "$SZ" = "$PREV" ] && break
    PREV=$SZ
  fi
  kill -0 "$CHROME_PID" 2>/dev/null || break
done
kill "$CHROME_PID" 2>/dev/null || true
wait "$CHROME_PID" 2>/dev/null || true
rm -rf "$PROFILE"

[ -s "$OUT/brochura-rgb.pdf" ] || { echo "❌ o Chrome não produziu PDF"; exit 1; }

# Inspeção do PDF em Python — o interpretador PostScript do gs fica pendurado
# à espera de stdin quando invocado assim, e travava o build.
PAGS=$(python3 - "$OUT/brochura-rgb.pdf" <<'PY'
import re, sys
d = open(sys.argv[1], 'rb').read()
n = len(re.findall(rb'/Type\s*/Page[^s]', d))
mb = set(m.strip().decode() for m in re.findall(rb'/MediaBox\s*\[([^\]]+)\]', d))
for box in mb:
    v = [float(x) for x in box.split()]
    print(f"     MediaBox: {v[2]*25.4/72:.1f} × {v[3]*25.4/72:.1f} mm "
          f"(A4 + bleed = 216.0 × 303.0)", file=sys.stderr)
print(n)
PY
)
echo "  ✅ RGB: $(du -h "$OUT/brochura-rgb.pdf" | cut -f1) · ${PAGS} páginas"

if [ "$PAGS" != "16" ]; then
  echo "  ⚠️  ATENÇÃO: ${PAGS} páginas, deviam ser 16 (múltiplo de 4 para agrafo a cavalo)"
fi

$SO_RGB && { echo "▸ --rgb: terminado."; exit 0; }

# ---------- 3. Ghostscript → CMYK ----------
if $CURVAS; then
  echo "▸ Ghostscript → CMYK, texto convertido em curvas…"
  FONTES=(-dNoOutputFonts)
else
  echo "▸ Ghostscript → CMYK, texto mantido (atenção: fontes Type 3)…"
  FONTES=(-dEmbedAllFonts=true -dSubsetFonts=true)
fi

gs -dSAFER -dBATCH -dNOPAUSE -dQUIET \
   -sDEVICE=pdfwrite \
   -dPDFSETTINGS=/prepress \
   -sColorConversionStrategy=CMYK \
   -dProcessColorModel=/DeviceCMYK \
   -dConvertCMYKImagesToRGB=false \
   -dAutoFilterColorImages=false \
   -dColorImageFilter=/DCTEncode \
   -dColorImageResolution=300 \
   -dDownsampleColorImages=true \
   "${FONTES[@]}" \
   -sOutputFile="$OUT/brochura-cmyk.pdf" \
   "$OUT/brochura-rgb.pdf"

echo "  ✅ CMYK: $(du -h "$OUT/brochura-cmyk.pdf" | cut -f1)"
if command -v pdffonts >/dev/null 2>&1; then
  NF=$(pdffonts "$OUT/brochura-cmyk.pdf" 2>/dev/null | tail -n +3 | grep -c . || true)
  if [ "$NF" = "0" ]; then
    echo "     ✅ zero fontes — todo o texto em curvas, sem risco de preflight"
  else
    echo "     ⚠️  $NF fontes no ficheiro — verificar se a gráfica aceita Type 3"
  fi
fi
echo
echo "▸ Ficheiros:"
echo "   $OUT/brochura-rgb.pdf    → visualização digital / envio por email"
echo "   $OUT/brochura-cmyk.pdf   → gráfica"
echo
echo "ℹ️  Cor: testado com o perfil CoatedFOGRA39 real."
echo "   Laranja #F04320 → C0 M83 Y90 K0 (desvio impercetível, não precisa de Pantone)"
echo "   Azul    #529BCA → C67 M27 Y7 K0"
echo "   Ainda assim, pedir prova de cor contratual à gráfica antes da tiragem."
echo "   Ver docs/BROCHURA-SPECS-IMPRESSAO.md."
