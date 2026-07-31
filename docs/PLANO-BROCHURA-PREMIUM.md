# Plano de Execução — Brochura Premium Yes, We Do

**Cliente:** Miguel Rodrigues (Yes, We Do)
**Opção aprovada:** Opção 2 — Brochura Premium
**Valor fechado:** 400€ (tabela era 450€ — desconto de fecho)
**Aprovado em:** 2026-07-30
**Prazo:** 2 semanas (entrega alvo: 2026-08-13)
**Revisões incluídas:** 2 rondas

---

## 1. Âmbito confirmado

| Entregável | Descrição |
|---|---|
| 🖨️ **Print** | PDF pronto para gráfica, 16 páginas, A4, CMYK, 3mm bleed, marcas de corte, 300dpi, QR code para a versão online |
| 💻 **Digital** | `yes-wedo.pt/brochura` — flipbook interativo, vídeos embebidos, botões WhatsApp/chamada/orçamento, animações GSAP, atualizável, estatísticas |

**Fora de âmbito (a orçamentar à parte se pedido):** impressão física, sessão fotográfica nova, redação de textos institucionais de raiz por copywriter externo, tradução para outros idiomas.

---

## 2. Princípio de arquitetura: uma fonte, dois destinos

O erro clássico é desenhar duas vezes. Aqui não:

```
data/brochura-content.json   ← ÚNICA fonte de conteúdo (textos, imagens, ordem)
        │
        ├──►  /brochura/index.html        (web · flipbook · GSAP · vídeo)
        │
        └──►  /brochura/print.html        (Paged.js · A4 · bleed · marcas)
                     │
                     └─► Chrome headless → PDF RGB → Ghostscript → PDF/X CMYK
```

**Vantagem comercial:** quando o Miguel quiser trocar um trabalho, editam-se 3 linhas de JSON e ambos os formatos ficam atualizados. É exatamente o "atualizável sem reimprimir" que foi vendido — e reduz o custo das 2 rondas de revisão para quase zero.

Coerência de marca garantida por reutilização dos tokens que já existem em `css/style.css`:
`--orange #F04320` · `--blue #529BCA` · `--magenta #BA046A` · `--dark-blue #0F1B2D` · Space Grotesk + Inter (fonts já self-hosted no repo).

---

## 3. Estrutura editorial — 16 páginas

| # | Página | Conteúdo | Fonte do material |
|---|---|---|---|
| 1 | **Capa** | Logo + tagline + imagem-herói + textura gerada | `logo-stacked-tagline.png` + arte AI |
| 2 | Abre-alas / manifesto | Frase-manifesto a toda a página sobre fundo escuro | Copy nova |
| 3–4 | **Quem somos** | Spread duplo: história, foto dos sócios, números: **10+ anos · 105+ clientes · 150+ projetos · 100% dedicação** | `socios.webp` + secção About do site |
| 5 | **Mapa de serviços** | Grelha com os 12 serviços — visão geral rápida | Secção Services do site |
| 6 | Reclames Luminosos | 1 hero + 2 apoio + texto técnico + aplicações | 7 projetos reais no repo |
| 7 | Letras Recortadas | idem | 5 projetos |
| 8 | Sinaléticas | idem | 7 projetos |
| 9 | Lonas & Impressão Grandes Formatos | idem | 10 projetos |
| 10 | Stands & Eventos | spread mais forte — é onde há mais material | 21 projetos |
| 11 | Decoração de Viaturas | ⚠️ só 1 projeto no repo — **precisamos de fotos** | 1 projeto |
| 12 | Decoração de Montras | ⚠️ só 2 projetos — **precisamos de fotos** | 2 projetos |
| 13 | **Confiam em nós** | **Tratamento híbrido** — 9 logótipos reais a branco monocromático + restantes clientes em lista tipográfica + os 4 números. Ver `brochura/preview-clientes.html` (opção C) | ✅ `img/brochura/logos/` |
| 14 | **Como trabalhamos** | 5 passos: Briefing → Projeto → Produção → Instalação → Manutenção | Secção Process do site |
| 15 | Porquê a Yes, We Do | Diferenciais + garantias + cobertura geográfica | Copy nova |
| 16 | **Contra-capa** | Contactos, morada, QR code grande para `/brochura/`, redes | Dados do site |

Base disponível hoje: **53 projetos reais** já otimizados em WebP no repo + 1 vídeo. Zero necessidade de banco de imagens para os trabalhos.

---

## 4. Onde entra a geração de imagem (Codex `image_gen`)

Confirmado: o `codex exec` local tem a ferramenta `image_gen.imagegen` disponível — dá para gerar por CLI e gravar direto no repo.

**Regra inegociável:** IA **nunca** gera trabalhos da Yes, We Do. Os reclames, stands e viaturas são todos fotografias reais. Uma brochura de sinalética com um reclame inventado é um risco reputacional direto — o cliente vê o produto ao vivo.

A IA entra só em elementos gráficos abstratos:

| Uso | Quantidade | Descrição |
|---|---|---|
| Texturas de fundo | 4–6 | Gradientes/ruído escuros com glow neon laranja, para separadores de secção |
| Arte de capa | 3 variantes | Composição abstrata de luz neon sobre fundo escuro |
| Ícones de serviço | 12 | Set coerente, monocromático, estilo linha — alternativa: SVG à mão (mais leve e mais controlável) |
| Padrões geométricos | 2–3 | Elementos de layout, marcas d'água, faixas |
| **Mockups de apresentação** | 4–5 | Brochura pousada em mesa, aberta, mão a segurar — **para vender o trabalho ao Miguel e para o teu portfólio**, não vão dentro da brochura |

Pipeline: gerar a 1024–2048px → `magick` upscale/crop → `cwebp -q 82` para web, PNG 300dpi para print.

---

## 5. Decisões técnicas — o que recomendo

### 5.1 Flipbook: **StPageFlip** (MIT) no desktop, scroll vertical no telemóvel
Fazer o page-turn 3D à mão em GSAP dá 2 dias e nunca fica tão bom como uma lib madura. StPageFlip é MIT, ~50KB, sem dependências, self-hosted — encaixa na regra do projeto de zero CDN.
No telemóvel, flipbook é má experiência (páginas A4 ilegíveis num ecrã de 6"). Aí serve-se a **mesma conteúdo em scroll vertical com snap por página** — que é o que a Foleon e os melhores digital brochures fazem. O cliente continua a ver "virar página" no portátil e leitura confortável no telemóvel.

### 5.2 Print: HTML + Paged.js → Chrome headless → Ghostscript CMYK
`gs` já está instalado. Fluxo:
1. `paged.js` faz a paginação A4 com 3mm bleed e marcas de corte
2. Chrome headless exporta PDF a 300dpi
3. Ghostscript converte para CMYK com perfil **FOGRA39** (padrão europeu) e gera PDF/X-3

⚠️ **Risco a assumir e testar cedo:** a conversão RGB→CMYK escurece o `#F04320` (laranja saturado fora do gamut CMYK). Mitigação: fazer uma prova de cor logo na semana 1 e, se necessário, definir um laranja alternativo só para print. Fallback: entregar PDF RGB em alta e deixar a conversão à gráfica — a maioria das gráficas do Porto aceita e faz melhor perfilagem que nós.

### 5.3 Estatísticas: GA4
O site ainda não tem analytics (pendente há meses). Instalar GA4 na brochura resolve o requisito "estatísticas de visualizações e páginas mais consultadas" com eventos por página virada. **Oportunidade:** propor a instalação do GA4 no site inteiro junto com isto.

### 5.4 Rota
`/brochura/` — pasta nova, mesmo padrão do `/copinow/` e `/simulador/`. `vercel.json` já tem `cleanUrls` + `trailingSlash`.
⚠️ **Todos os caminhos de assets têm de começar por `/`** (regra do CLAUDE.md — foi o bug que partiu o portfolio).
Indexável no Google (ao contrário do copinow) → entra no `sitemap.xml`.

---

## 6. Cronograma — 2 semanas

### Semana 1 — Fundações e design
| Dia | Trabalho |
|---|---|
| 1 | Recolher material em falta do cliente (ver §7). Estrutura de pastas, `brochura-content.json`, escrita do copy das 16 páginas |
| 2 | Geração dos assets AI (texturas, capa, padrões) + tratamento das fotos para print (300dpi) |
| 3 | Layout print em HTML/Paged.js — páginas 1–8 |
| 4 | Layout print — páginas 9–16. **Primeiro teste de conversão CMYK** |
| 5 | PDF v1 completo + mockups de apresentação → **enviar ao Miguel (ronda 1)** |

### Semana 2 — Interativo e entrega
| Dia | Trabalho |
|---|---|
| 6 | `/brochura/index.html` — estrutura, StPageFlip, CSS partilhado com o site |
| 7 | Animações GSAP, vídeos embebidos, botões WhatsApp/chamada/orçamento |
| 8 | Versão mobile (scroll-snap), acessibilidade, performance, GA4 |
| 9 | Aplicar correções da ronda 1 nos dois formatos + gerar QR code final |
| 10 | Deploy, teste em dispositivos reais, **entrega final** + ronda 2 se necessário |

---

## 7. O que precisamos do cliente

**Atualizado a 2026-07-30.** A maior parte já foi resolvida por nós — o que sobra é pouco e não trava o arranque.

| # | Item | Estado |
|---|---|---|
| 1 | Fotos de Viaturas / Montras | ✅ Cobertas provisoriamente por imagens geradas (ver `img/brochura/ASSETS.md`). O Miguel vê o layout na ronda 1 e decide. |
| 2 | Nº de WhatsApp para os CTA | ✅ Tirado do próprio site: 912 320 366 |
| 3 | Specs de impressão | ✅ Propostas por nós em `docs/BROCHURA-SPECS-IMPRESSAO.md` — ele só aprova |
| 4 | Logótipos vetoriais dos clientes | ✅ **9 obtidos das fontes oficiais** (ver `img/brochura/logos/FONTES.md`). Os restantes ~11 ficam em texto no tratamento híbrido — a página funciona já. |
| 5 | Números | ✅ **105+ clientes** (dado pelo Ryan). ⚠️ Falta confirmar se **150+ projetos** também subiu. |
| 6 | Texto institucional novo vs. o do site | ⚠️ Escrevo eu, ele aprova. Não bloqueia. |
| 7 | Mais 2-3 vídeos de instalação | ⚠️ Desejável. Vídeo é dos conteúdos que melhor vende no digital. |
| 8 | "Essa parte do site a atualizar" | ❌ Pendente desde julho |

### Mensagem pronta para enviar (WhatsApp)

> Bom dia Miguel! 👍 Já arranquei com a brochura.
>
> Boas notícias: a parte das **especificações de impressão** trato eu — já deixei tudo definido (A4, 16 páginas, papel, acabamento) para não terem de decidir nada técnico. Explico na entrega e vocês só aprovam.
>
> Já tratei também dos **logótipos dos vossos clientes** — fui buscar os oficiais da Lusíadas, HeyDoc, Renault, JYSK, Liu Jo, Steve Madden, Vogue, Abreu e SPMEC. Se tiverem os dos restantes (HomyCasa, Cleva, Weego, Amani Spa…), mandem, mas não é bloqueio.
>
> Só preciso de **2 coisas vossas**:
>
> 1️⃣ **Confirmar os números.** Fiquei com **+105 clientes**. E os **+150 projetos** — continua certo ou já é mais? 😄
> (Já agora: o site ainda diz "+80 clientes". Atualizo isso de borla enquanto faço a brochura.)
>
> 2️⃣ Se tiverem **vídeos de instalação** no telemóvel, mandem 2 ou 3. Na versão digital os vídeos são o que mais impressiona quem está a ver.
>
> **Sobre fotos:** repararam que de *decoração de viaturas* e *montras* quase não há fotos no portfólio. Montei essas páginas com imagens de referência para verem o layout — quando virem a primeira versão percebem logo que fotos vale a pena tirar, e eu troco.
>
> Ah, e ficou pendente desde julho: **qual era a parte do site que queriam atualizar?** 🙂

---

## 8. Critérios de qualidade — o que faz isto premium e não mais um PDF

- [ ] Grelha tipográfica consistente nas 16 páginas (baseline grid, não "cada página à sua maneira")
- [ ] Ritmo visual: alternância entre spreads de imagem cheia e páginas de respiração
- [ ] Zero texto sobre imagem sem contraste garantido (WCAG AA mesmo em print)
- [ ] Web: LCP < 2.5s, imagens em WebP com `loading="lazy"` fora da primeira página
- [ ] Web: funciona sem JS (fallback para scroll simples), teclado navegável, `prefers-reduced-motion` respeitado
- [ ] Print: 300dpi verificado imagem a imagem, bleed 3mm, sem texto a menos de 5mm do corte
- [ ] Coerência total com o site — quem vê a brochura e depois o site vê a mesma marca
- [ ] Ficheiro final testado com o pré-flight da gráfica antes de entregar

---

## 9. Extras a propor depois da entrega (upsell)

| Extra | Valor sugerido |
|---|---|
| Instalação GA4 no site completo | 80€ |
| Versão inglesa da brochura (print + web) | 150€ |
| Mini-brochuras A5 por área de serviço (7 versões) | 300€ |
| Manutenção/atualização anual da brochura online | 120€/ano |
| Gestão da impressão junto da gráfica | 15% sobre o custo |

---

## 10. Ficheiros a criar

```
data/brochura-content.json          # fonte única de conteúdo
brochura/
├── index.html                      # versão web interativa
├── print.html                      # layout de impressão (Paged.js)
├── brochura.css                    # estilos partilhados
├── brochura.js                     # flipbook + GSAP + analytics
└── vendor/page-flip.browser.js     # StPageFlip self-hosted
img/brochura/                       # texturas AI, capa, padrões, versões 300dpi
build-brochura-pdf.sh               # Chrome headless + Ghostscript CMYK
docs/entrega/                       # PDF final + mockups de apresentação
```

`vercel.json` e `sitemap.xml` a atualizar. Minificação de CSS/JS obrigatória antes de deploy (regra do projeto).
