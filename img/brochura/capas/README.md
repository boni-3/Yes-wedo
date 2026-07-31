# Capas da Brochura — arquivo de trabalho

Todas as versões de capa geradas, guardadas em PNG à resolução original, para a Yes, We Do poder ajustar, recortar ou usar noutros suportes.

**Formato:** PNG, vertical, proporção A4 (1:1.414). Versões processadas em:
- `/img/brochura/<nome>.webp` — web
- `/img/brochura/print/<nome>.jpg` — impressão, 2551 px @ 300 dpi

---

## Escuras — logo como reclame luminoso

| Ficheiro | Descrição | Logo |
|---|---|---|
| `capa-logo-fachada.png` | Reclame 3D retroiluminado em fachada de betão, ao anoitecer | Gerado (~95% fiel) |
| `capa-logo-betao.png` | Letras 3D com volume e sombra em parede de betão, reflexo no chão | Gerado (**o mais fiel**) |
| `capa-logo-neon.png` | Logo em tubo de néon aceso sobre tijolo escuro | Gerado |
| `capa-comp-fachada.png` | Fundo gerado + **logótipo real** sobreposto com halo | **Real, exato** |
| `capa-comp-betao.png` | Parede de betão com foco + **logótipo real** | **Real, exato** |
| `capa-comp-oficina.png` | Oficina com plotter e rolos de vinil + **logótipo real** | **Real, exato** |

## Claras — letras recortadas, luz natural

| Ficheiro | Descrição |
|---|---|
| `capa-clara-fachada.png` | Letras PVC em fachada branca/cinzenta clara, céu azul, sombra do sol |
| `capa-clara-rececao.png` | Interior de receção branca, luz natural de janela |
| `capa-clara-pedra.png` | Parede de pedra clara, sol rasante, sombras longas |
| `capa-clara-estudio.png` | Letras pousadas sobre fundo branco de estúdio, estilo catálogo |
| `capa-clara-vidro.png` | Vinil recortado em fachada de vidro com reflexo do céu |
| `capa-clara-instalacao.png` | Parede clara com as letras aplicadas, escada encostada — acabado de instalar |

## Construídas em CSS — logótipo real, sem IA

Não são ficheiros de imagem: estão codificadas em `brochura/preview-capas-claras.html`
(secção B). Usam o logótipo real, por isso são 100% exatas.

| Variante | Descrição |
|---|---|
| Papel + logo | Off-white, logótipo grande, tipografia. Calma. |
| Branco total | Branco puro, máximo espaço negativo. |
| Bloco de cor | Faixa laranja + azul da marca, logo a branco. Gráfica, muito "agência". |
| Mosaico de trabalhos | 9 trabalhos reais em grelha + logo. ⚠️ Traz de volta o problema dos logótipos de clientes a competir. |

## Abstratas — sem logo no fundo

| Ficheiro | Descrição |
|---|---|
| `capa-arte-v1.png` | Tubos de néon desfocados, bokeh |
| `capa-arte-v2.png` | Letras 3D retroiluminadas (**chumbada pelo cliente**) |
| `capa-arte-v3.png` | Rastos de luz nas três cores da marca |

## Fundos sem logótipo (para compor à mão)

`capa-fachada.png` · `capa-betao.png` · `capa-oficina.png`

---

## ⚠️ Nota sobre fidelidade do logótipo

As capas com **logo gerado** foram criadas dando o ficheiro real do logótipo como referência ao modelo de imagem. O resultado é reconhecível e muito próximo, mas **não é matematicamente idêntico** — sobretudo o entrelaçado do "WE". Para uso final há duas saídas:

1. Usar uma das versões `capa-comp-*`, onde o logótipo é o ficheiro real sobreposto (exato, mas mais plano).
2. Pegar numa capa gerada e substituir o logótipo pelo real, mantendo a iluminação e a sombra da cena. Funciona bem nas versões frontais (`capa-logo-betao`, `capa-clara-*`), onde não há perspetiva a corrigir.

---

## Como gerar mais

```bash
# capa com o logo como referência visual
./gen-capa-com-logo.sh <nome> "<prompt em pt sem acentos>"

# fundo sem logo + logótipo real sobreposto
./gen-brochura-img.sh <nome-fundo> "<prompt>"
./compor-capa.sh <nome-fundo> <nome-saida> [escala%] [offsetY%] [cor-halo]

# processar para web + impressão
./proc-brochura-img.sh <nome>
```

O logótipo de referência está em `/img/brochura/ref/logo-yeswedo.png` (fundo escuro) e
`/img/brochura/ref/logo-yeswedo-alpha.png` (transparente, para compor).
