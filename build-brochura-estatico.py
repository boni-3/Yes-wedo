#!/usr/bin/env python3
"""
Injeta no brochura/index.html um bloco <noscript> com o conteúdo real das 16
páginas, gerado a partir de data/brochura-content.json.

Serve dois objetivos ao mesmo tempo:
  1. Quem tiver o JS bloqueado vê a brochura na mesma (texto + contactos + PDF)
  2. Os motores de busca encontram texto real em HTML, não só JS

Corre ANTES do deploy. É idempotente: substitui sempre o bloco entre os
marcadores, nunca acumula.

Uso:  ./build-brochura-estatico.py
"""
import json, os, re, html

ROOT = os.path.dirname(os.path.abspath(__file__))
INI = "<!-- ESTATICO:INICIO -->"
FIM = "<!-- ESTATICO:FIM -->"


def e(t):
    return html.escape(str(t or ""))


def bloco(d):
    o = [INI, '<noscript>', '<div class="sem-js">',
         '<header class="sem-js__topo">',
         f'<img src="/img/logo-stacked-tagline.png" alt="{e(d["empresa"]["nome"])}" width="160">',
         '<p>Esta brochura é interativa e precisa de JavaScript. '
         'Em baixo fica o conteúdo completo em texto — e o PDF para descarregar.</p>',
         '<p class="sem-js__acoes">'
         '<a href="/brochura/Brochura-Yes-We-Do.pdf" download>Descarregar a brochura em PDF</a>'
         f' &middot; <a href="https://wa.me/{d["empresa"]["whatsapp"]}">WhatsApp</a>'
         f' &middot; <a href="tel:{d["empresa"]["telefones"][0].replace(" ", "")}">'
         f'{e(d["empresa"]["telefones"][0])}</a>'
         f' &middot; <a href="mailto:{d["empresa"]["email"]}">{e(d["empresa"]["email"])}</a>'
         '</p>', '</header>']

    for p in d["pages"]:
        o.append(f'<section id="sem-js-{e(p["id"])}">')
        if p.get("kicker"):
            o.append(f'<p class="sem-js__kicker">{e(p["kicker"])}</p>')
        if p.get("titulo"):
            o.append(f'<h2>{e(p["titulo"])}</h2>')
        if p.get("tagline"):
            o.append(f'<p><strong>{e(p["tagline"])}</strong></p>')
        for t in p.get("corpo") or []:
            o.append(f'<p>{e(t)}</p>')
        if p.get("intro"):
            o.append(f'<p>{e(p["intro"])}</p>')
        if p.get("assinatura"):
            o.append(f'<p>{e(p["assinatura"])}</p>')
        if p.get("destaque"):
            o.append(f'<p>{e(p["destaque"])}</p>')
        if p.get("specs"):
            o.append('<ul>' + ''.join(f'<li>{e(s)}</li>' for s in p["specs"]) + '</ul>')
        if p.get("servicos"):
            o.append('<ul>' + ''.join(
                f'<li><strong>{e(s["nome"])}</strong> — {e(s["desc"])}</li>'
                for s in p["servicos"]) + '</ul>')
        if p.get("passos"):
            o.append('<ol>' + ''.join(
                f'<li><strong>{e(s["nome"])}</strong> — {e(s["desc"])}</li>'
                for s in p["passos"]) + '</ol>')
        if p.get("razoes"):
            o.append('<ul>' + ''.join(
                f'<li><strong>{e(r["titulo"])}</strong> — {e(r["desc"])}</li>'
                for r in p["razoes"]) + '</ul>')
        if p.get("logos") or p.get("nomes"):
            nomes = [l["nome"] for l in p.get("logos") or []] + list(p.get("nomes") or [])
            o.append('<p>' + ' &middot; '.join(e(n) for n in nomes) +
                     (f' &middot; {e(p["remate"])}' if p.get("remate") else '') + '</p>')
        elif p.get("remate"):
            o.append(f'<p><strong>{e(p["remate"])}</strong></p>')
        if p.get("cta"):
            o.append(f'<p><strong>{e(p["cta"])}</strong></p>')
        if p.get("ctas"):
            o.append('<ul>' + ''.join(
                f'<li>{e(c["label"])}: {e(c["valor"])}</li>' for c in p["ctas"]) + '</ul>')
        o.append('</section>')

    emp = d["empresa"]
    o.append(f'<footer><p>{e(emp["razaoSocial"])} &middot; {e(emp["morada"])} '
             f'&middot; {e(emp["site"])}</p></footer>')
    o += ['</div>', '</noscript>', FIM]
    return '\n'.join(o)


def main():
    d = json.load(open(os.path.join(ROOT, "data/brochura-content.json"), encoding="utf-8"))
    novo = bloco(d)

    p = os.path.join(ROOT, "brochura/index.html")
    s = open(p, encoding="utf-8").read()

    if INI in s and FIM in s:
        s = re.sub(re.escape(INI) + r".*?" + re.escape(FIM), lambda _: novo, s, flags=re.S)
    else:
        s = s.replace("</body>", novo + "\n</body>")

    open(p, "w", encoding="utf-8").write(s)

    palavras = len(re.findall(r"\w+", re.sub(r"<[^>]+>", " ", novo)))
    print(f"✅ bloco estático injetado — {len(d['pages'])} secções, ~{palavras} palavras "
          f"em HTML real ({len(novo)/1024:.0f} KB)")


if __name__ == "__main__":
    main()
