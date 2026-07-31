# SPEC de Execução — Brochura Premium Yes, We Do

> **Este documento é a instrução completa de execução.** Complementa `docs/PLANO-BROCHURA-PREMIUM.md` (plano de negócio/cronograma). Aqui está o COMO, ao detalhe, para que qualquer sessão de trabalho consiga executar sem redescobrir decisões.
>
> **Objetivo comercial acima de tudo:** isto não é um catálogo — é uma **ferramenta de venda**. O Miguel e a equipa vão abrir isto num telemóvel ou tablet à frente de um cliente, ou enviar um link por WhatsApp depois de uma reunião. Cada decisão de design e técnica serve isso: mostrar rápido, impressionar, explicar cada serviço, e converter em contacto.

---

## 0. Regras invioláveis (herdadas do projeto)

1. **Caminhos absolutos** — todo `src`, `href`, `fetch()` e caminho em JSON começa por `/`. (`trailingSlash: true` já partiu o portfolio uma vez.)
2. **Zero CDN** — tudo self-hosted: fonts, GSAP, StPageFlip. O site inteiro segue esta regra.
3. **Minificar antes de deploy** — CSS/JS da brochura minificados; HTML referencia só os `.min.`.
4. **IA para preencher lacunas, com rasto documentado** — as fotos de reclames/stands/lonas/sinaléticas/letras são todas reais (53 WebP no repo). Nas duas categorias sem material (Viaturas: 1 foto · Montras: 2 fotos) foram geradas imagens por IA com marcas fictícias. **Todo o inventário e a decisão sobre como rotulá-las está em `img/brochura/ASSETS.md`** — manter esse ficheiro atualizado.
5. **pt-PT** em todo o conteúdo visível.
6. **Coerência com o site** — mesmos tokens, mesmas fonts, mesmo tom. Quem vê a brochura e o site vê UMA marca.

---

## 1. Conceito criativo

**Nome do conceito: "Luz Própria".**
A Yes We Do vive de fazer marcas brilhar fisicamente — reclames luminosos, néons, letras recortadas. A brochura usa isso como metáfora central: fundo escuro (`--dark-blue #0F1B2D`), e a luz (laranja `#F04320`, glows, néon) é o que revela o conteúdo. Cada secção "acende". No digital, as animações reforçam: títulos que ganham glow ao entrar, contornos de néon que se desenham (`stroke-dashoffset`), imagens que emergem da escuridão.

**Narrativa da brochura (arco de venda):**
1. Impacto (capa + manifesto) → 2. Confiança (quem somos + números) → 3. Capacidade (mapa de serviços) → 4. Prova (7 secções de serviço com trabalhos reais) → 5. Prova social (logos de clientes) → 6. Processo (como é fácil trabalhar connosco) → 7. Ação (contactos + CTA).

**Tom do copy:** direto, confiante, orgulhoso do trabalho feito. Frases curtas. Nada de "soluções inovadoras de comunicação visual" — antes "Fazemos, instalamos, e fica a brilhar." O nome da empresa É o tom: *Yes, We Do*. Usar como device recorrente: cada secção de serviço pode fechar com uma variação — "Reclames? Yes, we do." Isto dá unidade e é memorável.

---

## 2. Design system da brochura

### Tokens (reutilizar de `css/style.css`)
```css
--orange: #F04320;      /* ação, glow, destaques */
--blue: #529BCA;        /* apoio, links, detalhes técnicos */
--magenta: #BA046A;     /* acentos raros — máx 1x por spread */
--dark: #111827;
--dark-blue: #0F1B2D;   /* fundo dominante */
--paper: #F5F2EC;       /* NOVO: páginas "claras" para respiração — off-white quente */
```

### Tipografia
- **Space Grotesk** — títulos, números grandes, marcadores de página. Pesos 500/700.
- **Inter** — corpo, legendas, dados técnicos. Pesos 400/600.
- Escala (digital, base 16px): display 64/72, h1 40/48, h2 28/36, corpo 17/28, legenda 13/20, micro 11/16 (uppercase, tracking 0.08em).
- Print (A4): display 54pt, h1 30pt, h2 20pt, corpo 10.5/16pt, legenda 8pt. Nunca texto < 7pt.

### Grelha
- Digital: 12 colunas, gutter 24px, margens 5% da largura da página.
- Print: A4, margens 15mm, bleed 3mm, grelha 12 col / gutter 5mm. Baseline grid 4mm. Texto nunca a < 8mm do corte.

### Ritmo visual das 16 páginas
Alternar: página escura densa → página com imagem full-bleed → página `--paper` de respiração. Nunca 3 páginas escuras seguidas. As páginas de serviço (6–12) seguem um template comum (ver §4) mas variam o layout da imagem hero (esquerda/direita/full) para não parecer repetido.

### Marcadores de página
Rodapé de cada página: número em Space Grotesk + micro-label da secção + linha fina laranja. No digital, este rodapé é também a barra de progresso.

---

## 3. Fonte única de conteúdo — `data/brochura-content.json`

Schema:
```json
{
  "meta": { "version": "1.0", "updated": "2026-08-01" },
  "pages": [
    {
      "id": "reclames",
      "template": "servico",
      "titulo": "Reclames Luminosos",
      "tagline": "A sua marca vista de longe, dia e noite.",
      "corpo": "…2-3 parágrafos…",
      "specs": ["LED de baixo consumo", "Estrutura em alumínio", "Licenciamento incluído", "Manutenção"],
      "hero": "/img/portfolio/reclame-lusiadas.webp",
      "apoio": ["/img/portfolio/homy-casa-reclame.webp", "/img/portfolio/lusiadas-maia-shopping.webp"],
      "video": null,
      "cta": "Reclames? Yes, we do."
    }
  ]
}
```
- Templates: `capa`, `manifesto`, `quem-somos`, `mapa-servicos`, `servico`, `clientes`, `processo`, `porque-nos`, `contactos`.
- `print.html` e `index.html` leem AMBOS este JSON (no print, inline via build step para não depender de fetch no headless).
- Curadoria de imagens: escolher por qualidade fotográfica, não por ordem. As melhores do repo: `reclame-lusiadas`, `liu-jo-stand-porto`, `spmec-photobooth`, `steve-madden`, `abreu-expo-premio`, `homy-casa-jysk`, `renault-decoracao-viatura`. Usar `imageFull` (uncropped) quando existir para full-bleed.

---

## 4. VERSÃO DIGITAL — `/brochura/` (o entregável estrela)

### 4.1 Arquitetura de experiência — dois modos, mesmo conteúdo

**Desktop/tablet landscape (≥1024px): FLIPBOOK.**
- StPageFlip (MIT, self-hosted em `/brochura/vendor/page-flip.browser.js`), spreads de 2 páginas, sombra realista na dobra.
- Navegação: clique nas margens, arrasto do canto, setas do teclado, thumbnails no rodapé (strip colapsável com miniatura de cada página).
- Botão **"Apresentar"** → fullscreen API. É o modo reunião: o Miguel liga o portátil ao ecrã do cliente e apresenta como um deck. Neste modo, cursor auto-esconde e aparecem só setas discretas.

**Mobile portrait (<1024px): SCROLL VERTICAL com snap por página.**
- Cada página = um ecrã (`scroll-snap-type: y mandatory`), transições GSAP ao entrar.
- Barra de progresso fina no topo (laranja) + índice hamburger com salto direto a cada secção.
- Flipbook em telemóvel é ilegível — não negociar isto. O cliente final vai receber o link por WhatsApp e abrir no telemóvel: esta é a experiência MAIS importante das duas.

### 4.2 Funcionalidades de venda (o que faz disto uma ferramenta comercial)

1. **Deep links por secção** — `yes-wedo.pt/brochura#reclames` abre diretamente nessa página (hash routing, funciona nos dois modos). Uso real: o vendedor está ao telefone com um cliente de restauração → envia o link direto dos reclames. Cada página de serviço tem um botão "partilhar" que copia o link da secção / abre share sheet nativo (`navigator.share`).
2. **CTA contextual pré-preenchido** — o botão "Pedir orçamento" de cada secção abre WhatsApp com mensagem pronta:
   `https://wa.me/351912320366?text=Olá!%20Vi%20a%20vossa%20brochura%20e%20tenho%20interesse%20em%20Reclames%20Luminosos.`
   **Números oficiais** (confirmados em `index.html`, o site é nosso): **+351 912 320 366** (principal, usar nos CTA) e **+351 919 755 990** (secundário, listar nos contactos). O lead chega já qualificado por serviço.
3. **Barra de ação persistente** (rodapé mobile / canto desktop): WhatsApp · Chamada (`tel:`) · Orçamento (link para `/#contact` ou WhatsApp). Sempre visível, nunca intrusiva.
4. **Vídeo embebido** — página das Lonas usa `instalacao-lona-hospital.mp4` inline (autoplay muted loop playsinline, poster WebP). Pausa ao sair da página (IntersectionObserver). Se houver mais vídeos do cliente, entram nas respetivas secções.
5. **OG tags dedicadas** — partilhar o link no WhatsApp mostra um card bonito: og:image própria da brochura (gerar uma, 1200×630, capa adaptada), título "Brochura Yes, We Do — Publicidade que se vê".
6. **Modo offline-friendly** — tudo estático, sem dependências externas; depois do primeiro load funciona com rede fraca (relevante em reuniões).

### 4.3 Animações GSAP (specs)

Reutilizar os vendor files do site (`/js/vendor/gsap.min.js`, `ScrollTrigger`). Linguagem de animação = a do site, com o tema "luz":
- **Entrada de página (mobile scroll):** título sobe 20px + fade + `text-shadow` laranja que acende de 0 → glow em 0.6s (`power2.out`). Imagens: `clip-path: inset(0 0 100% 0)` → revelam de cima. Stagger 0.08s nos elementos.
- **Números (página quem-somos):** counters 0→N ao entrar (mesma lógica do site).
- **Linhas de néon:** SVG `<line>`/`<rect>` com `stroke-dashoffset` animado — usada como divisor de secção.
- **Flipbook desktop:** o próprio page-turn é a animação principal; dentro da página, só micro-animações on-load do spread (não competir com o flip).
- `prefers-reduced-motion: reduce` → tudo vira fade simples de 0.2s. Obrigatório.
- Performance: só `transform`/`opacity`/`clip-path`. Nada de animar `box-shadow` (usar pseudo-elemento com opacity para o glow).

### 4.4 Loading e primeira impressão
- Preload da capa + fonts (`<link rel="preload">`). Splash mínimo: logo com glow a pulsar 1x sobre `--dark-blue`, máx 800ms ou até `DOMContentLoaded` — o que vier primeiro. Nunca spinner.
- Imagens: capa e página atual `loading="eager"`, resto `lazy`. Total da página inicial < 900KB. LCP alvo < 2.0s em 4G.

### 4.5 Analytics (GA4)
Eventos: `brochura_open` (com `ref` de query string — permite `?ref=qr` no QR impresso vs `?ref=wa` em partilhas), `page_view_brochura` (com `page_id`), `video_play`, `cta_whatsapp` (com `servico`), `cta_call`, `share_section`, `presentation_mode`. Isto responde exatamente ao prometido: "visualizações e páginas mais consultadas" — e de bónus diz ao Miguel QUE SERVIÇOS geram mais interesse.

### 4.6 SEO/A11y
- Entra no `sitemap.xml`; title/description próprios; JSON-LD `Brochure`→ usar `CreativeWork`.
- Todo o conteúdo é HTML real (não canvas/imagens de texto) → indexável e acessível. Alt em todas as imagens, navegação por teclado completa no flipbook, `aria-live` no indicador de página, contraste AA (texto sobre foto sempre com scrim gradiente).

---

## 5. VERSÃO PRINT — pipeline

### 5.1 Layout
`/brochura/print.html` + Paged.js (self-hosted em `vendor/`): `@page { size: 210mm 297mm; bleed: 3mm; marks: crop; }`. Mesmo JSON, mesmos templates CSS com folha `print.css` própria (tamanhos em mm/pt, sem animações).

### 5.2 Build — `build-brochura-pdf.sh`
```bash
# 1. Inline do JSON no HTML (evitar fetch em headless)
# 2. Chrome headless → PDF RGB 300dpi
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --print-to-pdf=brochura-rgb.pdf --no-pdf-header-footer \
  "file://$PWD/brochura/print-built.html"
# 3. Ghostscript → CMYK (FOGRA39 se o ICC estiver disponível; senão DeviceCMYK)
gs -dSAFER -dBATCH -dNOPAUSE -sDEVICE=pdfwrite \
   -sColorConversionStrategy=CMYK -dProcessColorModel=/DeviceCMYK \
   -dPDFSETTINGS=/prepress -sOutputFile=brochura-cmyk.pdf brochura-rgb.pdf
```
- **Teste de cor no dia 4 (não negociável):** imprimir 1 página de prova numa gráfica local. O `#F04320` vai perder saturação em CMYK (≈ 0/85/95/0). Se ficar "morto", opções: (a) ajustar para um laranja print-friendly só no `print.css`; (b) propor ao Miguel 5ª cor Pantone (Orange 021 C) como upgrade de gráfica; (c) entregar RGB e deixar a gráfica perfilar. Decidir com prova na mão.
- Verificar DPI efetivo de cada imagem: as WebP 1536×1024 aguentam ~13×8.6cm a 300dpi — para full-bleed A4 usar as originais PNG/JPG do repo (existem, ver Gotcha #4 do CLAUDE.md) ou upscale Real-ESRGAN (pipeline do bot já existe na máquina).

### 5.3 QR codes
- Contra-capa: QR grande → `https://yes-wedo.pt/brochura?ref=qr`. Gerar com o mesmo pipeline usado em `docs/qr-code-yeswedo.svg` (já há QR no repo — manter estilo).
- Cada página de serviço: micro-QR discreto no rodapé → deep link da secção (`#reclames?ref=qr`). A ponte print→digital é um argumento de venda da Opção 2: dizer isto ao Miguel na entrega.

---

## 6. Assets AI — prompts prontos (Codex `image_gen` via CLI)

Comando base (validado nesta sessão):
```bash
codex exec --skip-git-repo-check --sandbox workspace-write \
  "Usa image_gen para gerar: <PROMPT>. Grava em ./img/brochura/<nome>.png"
```

| Asset | Prompt (resumo) | Uso |
|---|---|---|
| `textura-secao-{1..4}.png` | "Textura abstrata escura azul-petróleo #0F1B2D, glow néon difuso {laranja #F04320 / azul #529BCA} num {canto/borda}, grão fino tipo parede de betão à noite, sem objetos, sem texto, 2048px" | Fundos de separadores (validado — o teste ficou bom) |
| `capa-arte-v{1..3}.png` | "Composição abstrata premium: tubos de néon laranja #F04320 desfocados em bokeh sobre fundo azul-escuro #0F1B2D, profundidade, atmosfera de cidade à noite, sem letras, sem logos, vertical A4" | Capa (3 variantes → escolher 1, apresentar as 3 ao Miguel na ronda 1) |
| `padrao-geometrico.png` | "Padrão geométrico linear minimalista, linhas finas laranja sobre transparente/escuro, inspirado em plantas técnicas de sinalética, subtil" | Marca d'água / guardas |
| `og-brochura.jpg` | Adaptação da capa escolhida, 1200×630, com espaço para logo (logo real sobreposto com `magick composite`) | OG image |
| `mockup-{mesa,mao,aberta,tablet}.png` | "Fotografia de produto: brochura A4 {pousada em mesa de madeira escura / segura por mão / aberta em spread / ao lado de tablet com a mesma brochura no ecrã}, iluminação de estúdio quente, fundo desfocado" + depois compor as páginas REAIS por cima com `magick` distort perspective | Apresentação ao Miguel + portfólio do Ryan |
| Ícones dos 12 serviços | **NÃO gerar por IA** — desenhar em SVG à mão (linha 1.5px, cantos arredondados, estilo do site). IA não dá consistência num set de 12 | Mapa de serviços + páginas |

Pós-processamento: `magick` para crop/níveis → `cwebp -q 82` (web) + PNG 300dpi (print). Logos reais SEMPRE compostos por cima, nunca gerados.

---

## 7. Estrutura de ficheiros final

```
data/brochura-content.json
brochura/
├── index.html          # digital (flipbook + scroll)
├── print.html          # fonte do print
├── brochura.css        # + brochura.min.css
├── print.css
├── brochura.js         # + brochura.min.js
└── vendor/
    ├── page-flip.browser.js
    └── paged.polyfill.js
img/brochura/           # texturas, capa, padrões, og, versões -print 300dpi
build-brochura-pdf.sh
docs/entrega/
├── brochura-cmyk.pdf   # p/ gráfica
├── brochura-rgb.pdf    # p/ visualização digital (bónus)
└── mockups/
```
Atualizar: `sitemap.xml`, `llms.txt`, e link "Brochura" no footer do site (decidir com Ryan se vai já ao menu).

---

## 8. Ordem de execução (para a próxima sessão)

1. **Copy completo** das 16 páginas → `brochura-content.json` (usa o tom §1; specs técnicos de cada serviço podem precisar de confirmação do Miguel — marcar `[CONFIRMAR]` inline).
2. **Assets AI** (§6) — correr em lote, rever, selecionar.
3. **`print.html` + `print.css`** página a página → PDF v1 → prova de cor.
4. **`index.html` digital**: primeiro o modo mobile scroll (mais importante), depois flipbook desktop, depois modo apresentar.
5. **GA4 + deep links + CTAs + OG**.
6. **Mockups** + página de entrega → ronda 1 com o Miguel.
7. QA (checklist §8 do PLANO) → correções → entrega final.

**Estado dos bloqueios (2026-07-30):**

| Bloqueio | Estado |
|---|---|
| Fotos de Viaturas e Montras | ✅ **Resolvido provisoriamente** — 6 imagens geradas por IA (ver `img/brochura/ASSETS.md`). O Miguel vê o layout montado na ronda 1 e decide se manda fotos reais. |
| Número de WhatsApp para CTA | ✅ **Resolvido** — +351 912 320 366 (do próprio site). |
| Specs de impressão | ✅ **Resolvido** — propostas por nós em `docs/BROCHURA-SPECS-IMPRESSAO.md`. O cliente só tem de aprovar. |
| Logos vetoriais dos clientes | ❌ **Continua em falta** — só o cliente os tem. |
| Números da secção "Quem somos" | ✅ **10+ anos · 105+ clientes · 150+ projetos · 100% dedicação.** O site está desatualizado (diz 80+ clientes) — atualizar de borla, é um bom gesto. ⚠️ Falta só confirmar se os 150+ projetos também subiram. |
| Logótipos dos clientes | ✅ **9 obtidos das fontes oficiais** — ver `img/brochura/logos/FONTES.md`. Página 13 usa tratamento híbrido (logos + nomes em texto), não depende dos que faltam. |
| Mais vídeos de instalação | ⚠️ Desejável, não bloqueia. Só há 1 no repo. |
| "Parte do site a atualizar" | ❌ Pendente desde julho. |

---

## 9. Definição de "espetacular" — critérios de aceitação finais

- [ ] Recebido por WhatsApp num telemóvel médio: abre em <2s, card OG bonito, scroll fluido 60fps, CTA WhatsApp funciona à primeira.
- [ ] Numa reunião: modo Apresentar em fullscreen parece um deck de agência topo, page-turn suave, vídeos correm.
- [ ] O Miguel consegue dizer "envia-me o link só dos reclames" — e existe.
- [ ] O PDF impresso numa gráfica real tem cor viva, corte certo, sem texto tremido.
- [ ] Passado um mês, trocar um trabalho = editar JSON + 1 comando de build + push.
- [ ] O GA4 mostra ao Miguel que serviços despertam mais interesse — relatório simples que o Ryan pode enviar mensalmente (semente do avenço de manutenção).
