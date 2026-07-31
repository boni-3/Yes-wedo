#!/bin/bash
# Processa as imagens geradas em img/brochura/raw/ para os dois destinos:
#   - Web:   img/brochura/<nome>.webp        (1536x1024, q82, ~100-200KB)
#   - Print: img/brochura/print/<nome>.png   (2551px largura = A4 full-bleed @300dpi)
#
# Uso: ./proc-brochura-img.sh            → processa tudo o que está em raw/
#      ./proc-brochura-img.sh nome       → processa só um

set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
RAW="$ROOT/img/brochura/raw"
WEB="$ROOT/img/brochura"
PRINT="$ROOT/img/brochura/print"
mkdir -p "$PRINT"

# Largura alvo para print: A4 (210mm) + 3mm bleed cada lado = 216mm @ 300dpi = 2551px
PRINT_W=2551

process() {
  local f="$1"
  local name; name="$(basename "$f" .png)"
  local w; w=$(magick identify -format "%w" "$f")
  echo "→ $name (origem: ${w}px)"

  # ---- WEB ----
  # Landscape → crop 3:2 1536x1024 (igual ao resto do portfólio)
  # Portrait (capas A4) → preserva o rácio, limita a 1600px de altura
  local h; h=$(magick identify -format "%h" "$f")
  if [ "$h" -gt "$w" ]; then
    magick "$f" -resize x1600 -strip "$PRINT/.tmp-web.png"
  else
    magick "$f" -resize 1536x1024^ -gravity center -extent 1536x1024 \
      -strip "$PRINT/.tmp-web.png"
  fi
  cwebp -q 82 -quiet "$PRINT/.tmp-web.png" -o "$WEB/$name.webp"
  rm -f "$PRINT/.tmp-web.png"

  # ---- PRINT: upscale IA se necessário, 300dpi ----
  # Real-ESRGAN via Upscayl (mesmo motor que o telegram-bot usa)
  UP_BIN="/Applications/Upscayl.app/Contents/Resources/bin/upscayl-bin"
  UP_MODELS="/Applications/Upscayl.app/Contents/Resources/models"
  if [ "$w" -lt "$PRINT_W" ] && [ -x "$UP_BIN" ]; then
    echo "  upscale IA 4x (ultrasharp-4x)…"
    if "$UP_BIN" -i "$f" -o "$PRINT/.tmp-up.png" -s 4 -n ultrasharp-4x -m "$UP_MODELS" >/dev/null 2>&1; then
      SRC="$PRINT/.tmp-up.png"
    else
      echo "  ⚠️  upscale falhou — a usar original"
      SRC="$f"
    fi
  else
    SRC="$f"
  fi
  # -units ANTES de -density, senão o ImageMagick converte o valor para px/cm
  magick "$SRC" -resize "${PRINT_W}x" -units PixelsPerInch -density 300 \
    -quality 100 "$PRINT/$name.png"
  rm -f "$PRINT/.tmp-up.png"

  echo "  ✅ web: $(du -h "$WEB/$name.webp" | cut -f1)  print: $(du -h "$PRINT/$name.png" | cut -f1) @300dpi"
}

if [ $# -ge 1 ]; then
  process "$RAW/$1.png"
else
  shopt -s nullglob
  for f in "$RAW"/*.png; do process "$f"; done
fi

echo
echo "Feito. Web → img/brochura/*.webp   Print → img/brochura/print/*.png"
