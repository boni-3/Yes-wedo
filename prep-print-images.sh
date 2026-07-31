#!/usr/bin/env python3
"""
Prepara as imagens da brochura em resolução de impressão (300 dpi).

Lê data/brochura-content.json, recolhe todas as imagens referenciadas e produz
versões de alta resolução em img/brochura/print/.

Regra de dimensão (a 300 dpi):
  hero / capa / vídeo-poster / retratos  → 2551 px  (A4 full-bleed = 216 mm)
  apoio (imagens pequenas)               → 1400 px  (chega até 118 mm a 300 dpi)

Upscale por Real-ESRGAN (Upscayl) quando o original é mais pequeno que o alvo.
Saída em JPEG q94 — visualmente sem perdas a 300 dpi e mantém o repo com tamanho sensato.

Uso:  ./prep-print-images.sh
"""
import json, os, subprocess, sys, shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "img/brochura/print")
TMP = os.path.join(OUT, ".tmp")
UP_BIN = "/Applications/Upscayl.app/Contents/Resources/bin/upscayl-bin"
UP_MODELS = "/Applications/Upscayl.app/Contents/Resources/models"

W_HERO, W_APOIO = 2551, 1400

os.makedirs(OUT, exist_ok=True)
os.makedirs(TMP, exist_ok=True)


def sh(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def width_of(path):
    r = sh(["magick", "identify", "-format", "%w", path])
    return int(r.stdout.strip()) if r.returncode == 0 and r.stdout.strip() else 0


def collect():
    """Devolve {caminho_absoluto: largura_alvo}, o maior alvo ganha."""
    data = json.load(open(os.path.join(ROOT, "data/brochura-content.json")))
    want = {}

    def add(rel, target):
        if not rel or rel.lower().endswith(".svg") or rel.lower().endswith(".mp4"):
            return
        p = os.path.join(ROOT, rel.lstrip("/"))
        if os.path.exists(p):
            want[p] = max(want.get(p, 0), target)
        else:
            print(f"  ⚠️  não existe: {rel}")

    for pg in data["pages"]:
        for k in ("arte", "logo", "fundo", "imagem", "hero", "videoPoster"):
            add(pg.get(k), W_HERO)
        for a in pg.get("apoio") or []:
            add(a, W_APOIO)
        for l in pg.get("logos") or []:
            add(l.get("ficheiro"), W_APOIO)
    return want


def process(src, target):
    name = os.path.splitext(os.path.basename(src))[0]
    dst = os.path.join(OUT, f"{name}.jpg")
    w = width_of(src)
    if w == 0:
        print(f"  ❌ ilegível: {src}")
        return False

    source = src
    if w < target and os.path.isfile(UP_BIN):
        up = os.path.join(TMP, f"{name}-up.png")
        r = sh([UP_BIN, "-i", src, "-o", up, "-s", "4",
                "-n", "ultrasharp-4x", "-m", UP_MODELS])
        if r.returncode == 0 and os.path.exists(up):
            source = up
        else:
            print(f"  ⚠️  upscale falhou, uso original: {name}")

    # nunca ampliar acima do alvo; se o original já é maior, só reduz
    sh(["magick", source, "-resize", f"{target}x{target}>",
        "-units", "PixelsPerInch", "-density", "300",
        "-quality", "94", "-strip", dst])

    if os.path.exists(dst):
        nw = width_of(dst)
        size = os.path.getsize(dst) / 1024
        flag = "✅" if nw >= min(target, 1400) else "⚠️ "
        print(f"  {flag} {name:<44} {w:>5}px → {nw:>5}px  {size:>7.0f} KB")
        return True
    print(f"  ❌ falhou: {name}")
    return False


def main():
    want = collect()
    print(f"\n{len(want)} imagens a processar (hero={W_HERO}px · apoio={W_APOIO}px @300dpi)\n")
    ok = sum(process(p, t) for p, t in sorted(want.items()))
    shutil.rmtree(TMP, ignore_errors=True)
    total = sum(os.path.getsize(os.path.join(OUT, f))
                for f in os.listdir(OUT) if not f.startswith("."))
    print(f"\n{ok}/{len(want)} prontas → img/brochura/print/  ({total/1024/1024:.0f} MB no total)")
    print("\nNota: estes ficheiros são artefactos de build. Se o repo crescer demais,")
    print("acrescentar 'img/brochura/print/' ao .gitignore e regerar quando preciso.")


if __name__ == "__main__":
    main()
