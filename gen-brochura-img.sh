#!/bin/bash
# Gera uma imagem para a brochura via Codex CLI (image_gen).
# Uso: ./gen-brochura-img.sh <nome-ficheiro-sem-extensao> "<prompt>"
#
# Output: img/brochura/raw/<nome>.png
# Depois processar com ./proc-brochura-img.sh

set -euo pipefail

NAME="${1:?falta o nome do ficheiro}"
PROMPT="${2:?falta o prompt}"
ROOT="$(cd "$(dirname "$0")" && pwd)"
OUT="$ROOT/img/brochura/raw/$NAME.png"

mkdir -p "$ROOT/img/brochura/raw"

codex exec --skip-git-repo-check --sandbox workspace-write \
  "Usa a ferramenta image_gen para gerar UMA imagem com este prompt: $PROMPT

Depois grava/copia o ficheiro gerado exatamente para: $OUT
Nao facas mais nada, nao escrevas codigo, nao alteres outros ficheiros." \
  2>&1 | tail -5

if [ -f "$OUT" ]; then
  echo "✅ $NAME → $OUT ($(du -h "$OUT" | cut -f1))"
else
  echo "❌ $NAME — ficheiro nao foi criado"
  exit 1
fi
