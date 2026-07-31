#!/bin/bash
# Gera uma capa usando o logótipo Yes, We Do como REFERÊNCIA visual.
# Passa o ficheiro do logo ao Codex para que o image_gen o reproduza fielmente.
#
# Uso: ./gen-capa-com-logo.sh <nome> "<prompt>"

set -euo pipefail

NAME="${1:?falta o nome}"
PROMPT="${2:?falta o prompt}"
ROOT="$(cd "$(dirname "$0")" && pwd)"
REF="$ROOT/img/brochura/ref/logo-yeswedo.png"
OUT="$ROOT/img/brochura/raw/$NAME.png"

mkdir -p "$ROOT/img/brochura/raw"

codex exec --skip-git-repo-check --sandbox workspace-write \
  "Tens um ficheiro de referencia com o logotipo da marca 'Yes, We Do': $REF

PASSO 1: usa a ferramenta view_image para veres esse ficheiro e perceberes exatamente a forma do logotipo.

PASSO 2: usa a ferramenta image_gen, passando esse ficheiro como imagem de referencia/input se a ferramenta o permitir, para gerar esta imagem: $PROMPT

O logotipo tem de ficar RECONHECIVEL e FIEL ao original: a palavra 'yes' pequena em cima, 'WE' em laranja com letras arredondadas entrelacadas, e 'DO' em azul por baixo, tudo em composicao empilhada quadrada.

PASSO 3: grava o ficheiro gerado exatamente em: $OUT

Nao facas mais nada." \
  2>&1 | tail -6

if [ -f "$OUT" ]; then
  echo "✅ $NAME → $OUT ($(du -h "$OUT" | cut -f1))"
else
  echo "❌ $NAME — não foi criado"
  exit 1
fi
