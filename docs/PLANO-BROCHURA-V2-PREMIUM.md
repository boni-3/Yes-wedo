# Brochura V2 Premium — Plano de execução

> **Estado: IMPLEMENTADO a 2026-08-02.** Testado localmente, **por publicar**.
> Estado atual e o que falta validar: `docs/BROCHURA-ESTADO.md`.
> Desvios ao plano durante a execução, e porquê:
> - **Grão de papel** ficou como `background-image` da própria `.pg`, não como
>   camada com `mix-blend-mode` por cima (§4.2 deixava a escolha em aberto):
>   as fotografias ficam limpas e não há elemento blendado a ser recomposto a
>   cada virar de página.
> - **Lonas (p9)** não leva ficha no `hero` — nessa página o destaque é o
>   vídeo e o `hero` nunca chega a ser mostrado no digital. As fichas foram
>   para as 3 imagens de apoio.
> - **Inclinação de repouso** da ficha passa a 0° abaixo de 900px de largura;
>   a -6° a fotografia encostava aos cantos.
> - **O modo noite mudou de abordagem por completo (§2).** O plano mandava
>   pintar brilho por cima da foto de dia com gradientes e `mix-blend-mode`.
>   Foi feito, afinado, e ficava mau: lia-se como nevoeiro esbranquiçado, não
>   como um reclame aceso. Substituído por **fotografias noturnas reais das
>   mesmas cenas**, geradas por IA (image-to-image, Codex `image_gen`) e
>   reveladas por cross-fade. As coordenadas `luzes` desapareceram; entrou o
>   mapa `noite`. Ideia do Ryan, e resolveu o que nenhum filtro resolvia.
> - **Selo `Simulação noturna`** acrescentado (não estava no plano): as
>   imagens noturnas retratam edifícios de clientes reais em fotografias que
>   nunca foram tiradas. Ver `img/brochura/ASSETS.md`.
> - **Capa e contracapa centradas** no folheto de duas páginas (bug que a
>   lombada tornou visível).
> - **A StPageFlip reescreve o `class` do `.pg`** e apaga classes de runtime.
>   O estado do modo noite teve de mudar de `.pg--noite` para `.pg__in.noite`.
> - **Corrigido um bug pré-existente**: `StPageFlip.destroy()` remove o
>   `#folheto` do DOM, o que partia a brochura ao atravessar os 1024px.
> Este documento é autossuficiente: um modelo sem contexto da conversa deve
> conseguir implementar tudo só com isto + os ficheiros do repo.
> Ler primeiro `docs/BROCHURA-ESTADO.md` (estado geral) e este plano inteiro.

**Fora de âmbito nesta fase** (decidido pelo Ryan): personalização por URL
(`?para=Nome`), antes/depois com slider, índice com miniaturas, modo quiosque,
háptica, pinch-zoom, cursor personalizado. Não implementar nada disto agora.

---

## 0. Contexto e restrições

- A brochura digital vive em `/brochura/` (https://yes-wedo.pt/brochura/, com
  `noindex`). Está **entregue ao cliente e à espera de aprovação** — a V2 é um
  upgrade por cima do que está publicado. Nada do que está pode partir.
- **Fonte única de conteúdo**: `data/brochura-content.json`. Alimenta o digital
  (`brochura/index.html` + `brochura.js`) e o print (`brochura/print.html` +
  `print.js`). Campos novos têm de ser **ignorados pelo print sem erro** —
  verificar que `print.js` continua a funcionar (ele só lê campos conhecidos,
  mas confirmar).
- O digital corre StPageFlip (folheto) em desktop (≥1024px, spreads de 2) e em
  telemóvel (retrato, 1 página). GSAP já está carregado (self-hosted, o mesmo
  do site). **Não adicionar dependências externas nem CDNs.**
- O HTML só carrega `.min.` — minificar sempre no fim (comandos na secção 8).
- `./build-brochura-estatico.py` regenera o `<noscript>` a partir do JSON e
  **tem de correr antes de cada deploy**. As fichas novas NÃO precisam de
  entrar no noscript (a página é noindex), mas o script tem de continuar a
  correr sem erro com os campos novos no JSON.
- Os scripts `prep-web-images.sh` / `prep-print-images.sh` leem caminhos de
  imagem do JSON. **Esta V2 não adiciona imagens novas** — não é preciso
  corrê-los. Se durante a implementação se adicionar alguma imagem, correr os
  dois e verificar que a página não sai vazia (falha em silêncio — já mordeu
  duas vezes).
- **Não fazer polling a yes-wedo.pt** para verificar deploys (ativa o Security
  Checkpoint da Vercel → 403 no site inteiro). Testar localmente com
  `npx serve .` na raiz do repo (os caminhos são absolutos, funciona).
- Testes headless: Chrome headless tem largura mínima 500px (testar mobile a
  ≥600px com device emulation) e congela o relógio do GSAP — usar
  `--force-prefers-reduced-motion` para capturar o estado final.

### Arquitetura atual do brochura.js (mapa rápido)

| Peça | Onde | Nota |
|---|---|---|
| Templates de página | objeto `T` (`T.servico`, `T.capa`, …) | geram HTML por string |
| `render(p, d)` | envolve cada template em `.pg.pg--<template>.pg--<id>` | `id="p-<id>"` |
| `montaFlip(retrato)` | monta o StPageFlip, controlos, teclado | `atualiza()` corre a cada flip |
| `animaPagina(pg)` | GSAP de entrada, idempotente via `data-animada` | respeita `prefers-reduced-motion` |
| `lightbox(src, legenda)` | ampliar fotos, `role=dialog`, foco preso | é aqui que entra o tilt 3D |
| `ligaAcoes()` | delegação global de cliques | **padrão StPageFlip**: elementos interativos precisam de `stopPropagation` em `mousedown/touchstart/pointerdown` (capture), senão o arrasto vira a página por baixo — ver o listener existente |
| `ev(nome, dados)` | eventos GA4 (não rebenta sem gtag) | usar para todos os eventos novos |
| `esc(s)` | escape de HTML | usar em TODO o texto vindo do JSON |

CSS relevante em `brochura.css`: `.serv__hero` (foto hero, 280px), `.apoio__w`
(wrapper das fotos de apoio), `.lb` (lightbox), `.pg__in` (conteúdo da página),
tokens do site (`--orange:#F04320`, `--dark-blue:#0F1B2D`, Space Grotesk/Inter).

---

## 1. Hotspots + Ficha de projeto 3D ⭐ (núcleo da V2)

**Conceito.** Fotos com história deixam de abrir um lightbox mudo: passam a
abrir um "case study" — a imagem descola da brochura em 3D e ao lado aparece a
ficha do projeto (cliente, o que a Yes, We Do fez ali, tags, CTA WhatsApp).

### 1.1 Dados — `data/brochura-content.json`

Novo campo opcional por página: **`fichas`**, um objeto keyed pelo caminho da
imagem (o mesmo string que está em `hero` / `apoio`). Não mexer na estrutura
de `apoio` (o `print.js` e os scripts de imagens dependem dela ser um array de
strings).

```json
"fichas": {
  "/img/portfolio/reclame-lusiadas.webp": {
    "cliente": "Lusíadas Saúde",
    "local": "Hospital Paços de Ferreira",
    "servicos": [
      "Letras monobloco em alumínio",
      "Iluminação LED integrada",
      "Instalação em altura com plataforma"
    ],
    "descricao": "Reclame de fachada visível a centenas de metros. Projeto, fabrico e instalação pela Yes, We Do.",
    "tags": ["Reclames Luminosos", "Saúde"]
  }
}
```

Campos: `cliente` (obrigatório), `local`, `servicos[]` (obrigatório, 2–4
itens), `descricao` (1–2 frases), `tags[]`. Sem `ano` (não temos datas
confirmadas). Conteúdo inicial na secção 7 — **marcar cada ficha com
`"_confirmar": "validar com o Miguel"`** porque o detalhe técnico é inferido.

### 1.2 Hotspot (o convite)

- Nas imagens que têm ficha (`hero` ou `apoio`), renderizar por cima do
  wrapper um botão `.hotspot`: círculo de 28px (36px de área de toque),
  fundo `--orange`, ícone «+» branco, com um anel `::after` a expandir em
  loop (animação tipo radar, 2s, `@keyframes`). Posição: canto inferior
  direito da imagem, 10px de margem.
- `aria-label="Ver detalhes deste projeto"`. Navegável por teclado.
- `prefers-reduced-motion`: anel estático (sem pulso), hotspot mantém-se.
- Acrescentar `.hotspot` ao listener de `stopPropagation` em `ligaAcoes()`
  (senão o toque começa a virar a página).
- O clique na própria imagem mantém o comportamento atual (lightbox simples);
  só o hotspot abre a ficha. Assim nada do que existe muda de comportamento.

### 1.3 Painel ficha 3D

Novo componente `fichaModal(src, ficha, pageId)` — separado do `lightbox()`,
mas com a mesma disciplina (dialog, foco preso, Esc, `stopPropagation`):

- Overlay escuro (`rgba(15,27,45,.92)`, o `--dark-blue`).
- Dentro, um contentor com `perspective: 1200px` e duas peças:
  1. **A foto** (`.ficha__img`): entra com GSAP de `scale:.6, rotateY:-18deg,
     opacity:0` para `scale:1, rotateY:-6deg` (fica ligeiramente inclinada —
     é isto que dá o "saiu da brochura"), sombra profunda
     (`box-shadow: 0 40px 80px rgba(0,0,0,.5)`), cantos arredondados.
  2. **A ficha** (`.ficha__card`): cartão claro (mesmo papel off-white das
     páginas) que desliza da direita com stagger ~0.15s depois da foto.
     Conteúdo: kicker "Projeto" laranja → `cliente` em Space Grotesk →
     `local` discreto → lista `servicos` com os quadrados laranja (mesma
     estética dos `.specs` existentes) → `descricao` → `tags` como pills →
     CTA `Quero algo assim` = link WhatsApp reutilizando `waLink()` com o
     texto `'Olá! Vi o projeto "' + cliente + '" na vossa brochura e queria algo assim.'`
- **Layout**: desktop lado a lado (foto ~58% / ficha ~42%); telemóvel
  empilhado (foto em cima, ficha desliza de baixo), `max-height` com scroll
  interno na ficha se preciso.
- **Tilt interativo** (partilhado com a secção 3 — implementar uma única
  função `liga3d(el)` reutilizável):
  - Desktop: `pointermove` no overlay → `rotateX/rotateY` da foto até ±6°,
    suavizado com `gsap.quickTo` (duration .4, ease power2).
  - Telemóvel: `deviceorientation` → mapear beta/gamma para ±6°. **iOS 13+
    exige `DeviceOrientationEvent.requestPermission()` dentro de um gesto** —
    chamar no toque que abre a ficha, dentro de try/catch, e se for negado
    seguir sem tilt, em silêncio. Nunca mostrar pedido de permissão a frio.
  - `prefers-reduced-motion`: sem tilt, entrada por fade simples.
- Fechar: X, clique no overlay, Esc. Devolver o foco ao hotspot de origem
  (seguir o padrão do `lightbox()` atual: guarda `document.activeElement`).
- GA4: `ficha_open` `{page_id, cliente}` ao abrir; `ficha_cta` `{cliente}` no
  clique do CTA.

---

## 2. Interruptor "apagar a luz" — página Reclames (id `reclames`) 💡

**Conceito.** Um interruptor na página 6. Ao ligar, a página entra em modo
noite e os reclames nas fotografias acendem. É o espelho digital do verniz UV
localizado proposto para o print (ver `docs/BROCHURA-SPECS-IMPRESSAO.md`) —
a mesma história nos dois suportes.

### 2.1 Dados

Nas imagens da página `reclames` (hero + apoio), coordenadas da zona do
reclame, em percentagem da imagem, no novo campo `luz` dentro de `fichas`
(ou num campo irmão `luzes` keyed por src, à escolha do implementador — mas
documentar no JSON com `_nota`):

```json
"luzes": {
  "/img/portfolio/reclame-lusiadas.webp":   { "x": 34, "y": 22, "w": 44, "h": 30 },
  "/img/portfolio/homy-casa-reclame.webp":  { "x": 25, "y": 35, "w": 50, "h": 30 },
  "/img/portfolio/amani-spa.webp":          { "x": 30, "y": 30, "w": 40, "h": 35 },
  "/img/portfolio/espinho-auto.webp":       { "x": 28, "y": 25, "w": 45, "h": 40 }
}
```

⚠️ **Estes valores são chutes iniciais — afinar visualmente** abrindo as 4
imagens (`img/brochura/web/…`) e ajustando até o brilho cair sobre as letras
do reclame. É trabalho de olho, contar 15–20 min.

### 2.2 Interação

- Botão `.luz-btn` na página `reclames`, junto ao kicker: um interruptor
  desenhado em SVG inline (estilo dos ícones `ICO` existentes) com rótulo
  «Ver de noite» / «Ver de dia». `aria-pressed`. `stopPropagation` como os
  outros interativos.
- Estado ligado = classe `pg--noite` na `.pg`:
  - Fundo da página transita para `--dark-blue` (~.8s ease); texto passa a
    claro (definir overrides mínimos: `.pg--noite .h1`, `.corpo p`, `.specs li`,
    `.kicker` — manter o laranja como está, funciona nos dois fundos).
  - Cada imagem com entrada em `luzes` ganha, via wrapper posicionado:
    1. um véu escuro sobre a foto (`filter: brightness(.45) saturate(.8)` na
       img, com transition);
    2. uma camada `.luz-glow` posicionada com as coordenadas (%), com
       `background: radial-gradient(ellipse, rgba(255,240,200,.9), transparent 70%)`
       e `mix-blend-mode: screen`, `filter: blur(6px)` — o reclame "acende";
    3. um segundo glow maior e mais fraco (halo) para o derrame de luz.
  - GSAP: acender com ligeiro flicker (opacity 0 → .6 → .3 → 1 em ~.7s),
    como um LED real a arrancar. `prefers-reduced-motion`: transição direta.
- O estado é por sessão, não persiste. Ao sair da página (flip), pode ficar
  como está — sem reset forçado.
- Funciona igual no lightbox? **Não** — âmbito é só a página. Não complicar.
- GA4: `luz_toggle` `{ligado}`.

---

## 3. Tilt 3D no lightbox (todas as fotos)

Aplicar a função `liga3d(el)` (secção 1.3) também ao `lightbox()` existente:

- Envolver a `<img>` num wrapper com `perspective`; tilt ±6° com o rato
  (desktop) ou giroscópio (telemóvel, com a mesma regra de permissão iOS).
- Sombra profunda na imagem para a inclinação se ler como profundidade.
- Entrada: o lightbox atual já faz `scale(.94)→1`; enriquecer para
  `scale .9 + rotateY -10° → 0` com GSAP quando disponível, mantendo o
  fallback CSS atual quando não há GSAP.
- `prefers-reduced-motion`: comportamento atual, sem tilt.
- Sem eventos GA4 novos (o `foto_zoom` existente chega).

---

## 4. Polish de objeto físico

### 4.1 Lombada / bordas de páginas

- No modo flip (desktop), pseudo-elementos nas laterais do `#folheto` com
  `repeating-linear-gradient` vertical fino (linhas de 1px, tons do papel
  off-white ligeiramente escurecidos) a simular a espessura das folhas
  empilhadas — 6–8px de largura de cada lado.
- Dinâmico: em `atualiza()`, definir `--folhas-esq` e `--folhas-dir` (0–1,
  proporção de páginas viradas) e usar nas larguras — a pilha da esquerda
  cresce à medida que se avança. Subtileza > exatidão.
- Modo retrato (telemóvel): só a pilha do lado direito, mais fina (4px).
- Na capa (índice 0) não há pilha à esquerda.

### 4.2 Grain de papel

- Overlay de textura em todas as `.pg`: `::before` com um SVG
  `feTurbulence` inline em data-URI (fractalNoise, ~2KB), `opacity: .035`,
  `pointer-events: none`, `mix-blend-mode: multiply`.
- **Só no digital** — não tocar em `print.css`.
- Verificar que não escurece percetivelmente as fotos (se escurecer, excluir
  `.pg__bg` da área do grain limitando o `::before` ao `.pg__in`… decisão
  visual do implementador; documentar a escolha em comentário).

### 4.3 Entrada cinematográfica

- Depois do splash sair, o folheto (fechado, a mostrar a capa — o StPageFlip
  com `showCover: true` já arranca assim) entra com GSAP:
  `scale .92, y 24, opacity 0 → 1` (~.9s, power3.out) + sombra a assentar.
- **Não** auto-abrir a capa — a dica existente («Arraste o canto…») já ensina
  o gesto, e quem chega por link direto com hash (`#reclames`) salta logo de
  página (via `saltaInicial()`); a entrada não pode atrasar nem interferir
  com esse salto.
- `prefers-reduced-motion` ou sem GSAP: aparecer como hoje.

---

## 5. Acessibilidade (transversal, não negociável)

- Hotspot, interruptor e fichas: operáveis por teclado, `aria-label`/`aria-pressed`
  corretos, foco visível (outline laranja como no resto do site).
- `fichaModal`: `role="dialog"`, `aria-modal`, foco preso (seguir o padrão do
  `lightbox()` atual), Esc fecha, foco devolvido à origem.
- `prefers-reduced-motion`: cada feature tem fallback definido acima. O padrão
  do ficheiro é a flag `SEM_MOVIMENTO` — usá-la.
- Texto no modo noite: contraste AA sobre `--dark-blue` (usar os mesmos tons
  claros da classe `.sheet--dark` que já existe preparada no print, se servir).

## 6. Eventos GA4 novos (usar sempre `ev()`)

| Evento | Dados | Quando |
|---|---|---|
| `ficha_open` | `page_id`, `cliente` | abrir ficha 3D |
| `ficha_cta` | `cliente` | clique no CTA da ficha |
| `luz_toggle` | `ligado` | interruptor da página reclames |

O snippet GA4 continua comentado no `<head>` (pendente ID — ver
BROCHURA-ESTADO.md §5). Os eventos empilham no `dataLayer` na mesma.

---

## 7. Conteúdo inicial das fichas (rascunho — validar com o Miguel)

Criar `fichas` nestas páginas/imagens. Tudo com `"_confirmar"`. O texto abaixo
é o rascunho aprovado pelo Ryan para arrancar; o detalhe técnico foi inferido
do copy existente das páginas.

**p6 `reclames` — hero `/img/portfolio/reclame-lusiadas.webp`**
cliente: Lusíadas Saúde · local: Hospital Paços de Ferreira ·
serviços: Letras monobloco em alumínio / Iluminação LED integrada /
Instalação em altura com plataforma ·
descrição: "Reclame de fachada dimensionado para ser lido à distância, dia e
noite. Projeto, fabrico e instalação pela Yes, We Do." ·
tags: Reclames Luminosos, Saúde

**p6 apoio** — `homy-casa-reclame.webp` (HomyCasa — reclame de fachada,
letras monobloco, LED), `amani-spa.webp` (Amani Spa — néon LED decorativo,
interior), `espinho-auto.webp` (Espinho Auto — caixa luminosa personalizada).
Estrutura igual, 2–3 serviços cada.

**p7 `letras-recortadas` — hero `/img/portfolio/lusiadas-letras-recortadas.webp`**
cliente: Lusíadas Saúde · serviços: Letras recortadas em relevo / Aplicação
com espaçadores / Alinhamento a laser · tags: Letras Recortadas, Saúde

**p8 `sinaleticas` — hero `/img/portfolio/lusiadas-sinaletica-interior.webp`**
cliente: Lusíadas Saúde · serviços: Sistema de sinalética interior /
Direcional e identificativa / Materiais para uso intensivo · tags: Sinalética, Saúde

**p9 `lonas`** — a página usa vídeo como destaque; pôr ficha nas imagens de
apoio: `spmec-lona-grande.webp` (SPMEC — lona de grande formato),
`lusiadas-porto-contentor.webp`, `lusiadas-braga-lona.webp` (rede
microperfurada / instalação em altura).

**p10 `stands` — hero `/img/portfolio/liu-jo-stand-porto.webp`**
cliente: Liu Jo · local: Porto · serviços: Produção de stand / Montagem no
local / Cumprimento de prazo de feira · tags: Stands & Eventos, Moda.
Apoio: `vogue-photobooth.webp` (Vogue Fashion Night — photobooth),
`steve-madden.webp`, `spmec-press-wall.webp` (press wall de congresso).

**p11 `viaturas` — hero `/img/portfolio/renault-decoracao-viatura.webp`**
cliente: Renault · serviços: Decoração parcial em vinil de fundição /
Desenho adaptado à forma do veículo / Removível sem danificar a pintura.
⚠️ **NÃO criar fichas para as 3 imagens de apoio desta página nem da p12** —
são geradas por IA (marcas fictícias, ver `img/brochura/ASSETS.md`). Uma
ficha de projeto sobre um trabalho que não existe seria mentir ao leitor.

**p12 `montras` — hero `/img/portfolio/cs-pet-care-montra.webp`**
cliente: C's Pet Care · serviços: Vinil recortado e impresso / Identidade
permanente de montra. (Apoio: sem fichas — IA, ver acima.)

**p3 `quem-somos`** — sem ficha (a foto dos sócios não é um projeto).

## 8. Ordem de implementação, build e critérios de aceitação

**Ordem sugerida** (cada passo deixa a brochura num estado publicável):
1. `liga3d()` + tilt no lightbox (§3) — pequeno, cria a fundação 3D
2. Fichas no JSON (§7) + hotspots + fichaModal (§1)
3. Interruptor de luz (§2)
4. Polish físico (§4)

**Build após cada alteração** (o HTML só carrega `.min.`):
```bash
./build-brochura-estatico.py
npx clean-css-cli brochura/brochura.css -o brochura/brochura.min.css
npx terser brochura/brochura.js -c -m -o brochura/brochura.min.js
```
Testar local: `npx serve .` na raiz → http://localhost:3000/brochura/
Deploy (só quando o Ryan disser): `gh auth switch --user boni-3 && git push && gh auth switch --user ade-studio3`

**Critérios de aceitação:**
- [ ] Desktop e telemóvel (<1024px, testar a ≥600px por causa do headless)
- [ ] Virar de página continua fluido; nenhum interativo novo inicia arrasto
      (padrão `stopPropagation` em capture — ver `ligaAcoes()`)
- [ ] Clique simples nas fotos mantém o lightbox de sempre; ficha só via hotspot
- [ ] `print.html` e `./build-brochura-pdf.sh --rgb` continuam a funcionar
      com o JSON novo (campos ignorados, zero regressão no PDF)
- [ ] `build-brochura-estatico.py` corre sem erro
- [ ] `prefers-reduced-motion`: tudo utilizável, sem tilt/pulso/flicker
- [ ] Teclado: hotspot → ficha → CTA → fechar, sem rato
- [ ] Sem GSAP (bloquear o vendor): conteúdo todo visível, features degradam
- [ ] Links diretos `#reclames` etc. continuam a saltar para a página certa
- [ ] Eventos GA4 novos aparecem no `dataLayer`
- [ ] JS/CSS minificados regenerados; sem dependências novas; sem CDNs
