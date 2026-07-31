#!/usr/bin/env python3
"""
Versões leves das imagens para a brochura DIGITAL → img/brochura/web/

Porquê copiar em vez de recomprimir no sítio: várias destas imagens são
partilhadas com o site e com o portfólio (cleva.webp está no index.html,
lusiadas-porto-contentor.webp no portfolio-data.json). Mexer nelas mudava
o site. Aqui ficam cópias só nossas.

Dimensão: 1200 px de largura. Na brochura a página tem 700 px e a imagem
ocupa ~594 px — 1200 cobre ecrãs retina 2x sem desperdício.

Uso:  ./prep-web-images.sh
"""
import json, os, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "img/brochura/web")
LARGURA, Q = 1200, 78

os.makedirs(OUT, exist_ok=True)


def sh(c):
    return subprocess.run(c, capture_output=True, text=True)


def recolhe():
    d = json.load(open(os.path.join(ROOT, "data/brochura-content.json")))
    alvos = set()
    for pg in d["pages"]:
        for k in ("arte", "fundo", "imagem", "hero", "videoPoster"):
            if pg.get(k):
                alvos.add(pg[k])
        for a in pg.get("apoio") or []:
            alvos.add(a)
    return sorted(alvos)


def main():
    alvos = recolhe()
    antes = depois = 0
    feitas = 0
    print(f"\n{len(alvos)} imagens → {LARGURA}px q{Q}\n")

    for rel in alvos:
        src = os.path.join(ROOT, rel.lstrip("/"))
        if not os.path.exists(src):
            print(f"  ⚠️  não existe: {rel}")
            continue
        nome = os.path.basename(src)
        dst = os.path.join(OUT, nome)

        a = os.path.getsize(src)
        # `-resize 1200x>` só reduz; nunca amplia uma imagem já pequena
        r = sh(["magick", src, "-resize", f"{LARGURA}x>", "-strip",
                "-quality", str(Q), "-define", "webp:method=6", dst])
        if r.returncode != 0 or not os.path.exists(dst):
            print(f"  ❌ falhou: {nome}")
            continue
        b = os.path.getsize(dst)
        antes += a; depois += b; feitas += 1
        if a > 100 * 1024:
            print(f"  {nome:<44} {a/1024:5.0f} → {b/1024:5.0f} KB")

    poup = (1 - depois / antes) * 100 if antes else 0
    print(f"\n{feitas} prontas · {antes/1024/1024:.1f} MB → {depois/1024/1024:.1f} MB "
          f"({poup:.0f}% menos)")
    print("\nO brochura.js mapeia automaticamente para esta pasta (função web()).")
    print("Se faltar alguma, usa a original — nunca fica sem imagem.")


if __name__ == "__main__":
    main()
