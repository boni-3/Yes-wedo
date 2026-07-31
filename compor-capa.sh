#!/bin/bash
# Compõe o logótipo REAL da Yes, We Do sobre um fundo, com halo de retroiluminação.
#
# Porquê assim e não gerar tudo por IA: um modelo de imagem não reproduz um
# logótipo custom com fidelidade — aproxima-o. Aqui o logo é o ficheiro
# vetorial/PNG verdadeiro da marca, só o ambiente é que é gerado.
#
# Uso: ./compor-capa.sh <fundo-sem-extensao> <nome-saida> [escala%] [offsetY%] [cor-halo]

set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"

BG="$ROOT/img/brochura/raw/${1:?falta o fundo}.png"
OUT="$ROOT/img/brochura/raw/${2:?falta o nome de saida}.png"
ESC="${3:-42}"          # largura do logo em % da largura da página
OFY="${4:-26}"          # distância do topo em % da altura
HALO="${5:-#F04320}"    # cor do halo

LOGO="$ROOT/img/brochura/ref/logo-yeswedo-alpha.png"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

W=$(magick identify -format "%w" "$BG")
H=$(magick identify -format "%h" "$BG")
LW=$(( W * ESC / 100 ))
Y=$(( H * OFY / 100 ))

# Logo à escala, com margem à volta para o desfoque do halo ter espaço
PAD=$(( LW / 4 ))
magick "$LOGO" -resize "${LW}x" -bordercolor none -border "$PAD" "$TMP/logo.png"
CW=$(magick identify -format "%w" "$TMP/logo.png")
CH=$(magick identify -format "%h" "$TMP/logo.png")

# Halo correto: extrair o alfa como máscara em tons de cinza, desfocar essa
# máscara, e usá-la como transparência de uma camada de cor sólida.
# (Colorizar o PNG diretamente pintava também os pixels transparentes e
#  produzia um retângulo opaco.)
halo_de() {  # $1 = raio de desfoque, $2 = intensidade, $3 = ficheiro de saída
  magick "$TMP/logo.png" -alpha extract -blur 0x$1 \
    -evaluate multiply "$2" "$TMP/mask.png"
  magick -size "${CW}x${CH}" xc:"$HALO" "$TMP/mask.png" \
    -alpha off -compose CopyOpacity -composite "$3"
}
halo_de $(( LW / 16 )) 0.85 "$TMP/halo.png"    # halo próximo, mais intenso
halo_de $(( LW / 5 ))  0.55 "$TMP/halo2.png"   # luz difusa na parede

magick "$BG" \
  \( "$TMP/halo2.png" \) -gravity north -geometry +0+$Y -compose screen -composite \
  \( "$TMP/halo.png"  \) -gravity north -geometry +0+$Y -compose screen -composite \
  \( "$TMP/logo.png"  \) -gravity north -geometry +0+$Y -compose over   -composite \
  "$OUT"

echo "✅ $(basename "$OUT")  (logo a ${ESC}% da largura, ${OFY}% do topo, halo $HALO)"
