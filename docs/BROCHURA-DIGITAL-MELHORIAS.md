# Brochura Digital — Revisão e Plano de Melhorias

> **Revisão feita a 2026-07-30** sobre a versão funcional em `/brochura/`.
> Este documento é o plano de execução para a próxima sessão. Ordem de prioridade:
> P1 = antes de mostrar ao cliente · P2 = antes de produção · P3 = polimento pós-lançamento.
>
> Estado atual verificado: flipbook desktop ✅ · scroll mobile ✅ · deep links ✅ ·
> CTAs WhatsApp ✅ · vídeo ✅ · payload 4,4 MB / 44 imagens (com lazy) · vídeo 2,2 MB preload=none.

---

## P1 — ✅ CONCLUÍDO em 2026-07-30

> Resumo do que ficou feito, com o que interessa saber para manter:
> · **GSAP ligado** (`/js/vendor/gsap.min.js`, self-hosted). `animaPagina()` corre uma vez
>   por página (`data-animada`), disparada pelo evento `flip` no folheto e pelo
>   IntersectionObserver no scroll. Contadores animam 0→valor; conteúdo entra com
>   fade + translateY em cascata (stagger .045).
> · **Watchdog de 6s** remove a classe `.anima`. A classe esconde o conteúdo à espera do
>   GSAP; sem o watchdog, uma animação falhada deixava a página invisível para sempre.
> · **`prefers-reduced-motion`**: contadores saltam para o valor final, zero animação.
>   Verificado com `--force-prefers-reduced-motion` — é também a única forma de validar
>   o estado final em headless (o Chrome headless congela o relógio do GSAP, por isso
>   as capturas normais apanham sempre a animação a meio).
> · **Renault** trocado para a versão com wordmark (`renault-texto.svg`, Commons, domínio
>   público) — o losango sozinho desaparecia. Afeta print e digital.
> · **Remate "Yes, we do."** acrescentado à contra-capa nos dois formatos: fecha a
>   brochura com o device que aparece no fim de cada página de serviço e resolve o
>   vazio que sobrava.
> · **Toast** reutilizável para "Link copiado ✓" e erros.
> · **stopPropagation em mousedown/touchstart/pointerdown** (fase de captura) sobre
>   `.partilhar`, `.cta-servico` e `.ct__v` — o StPageFlip reage a mousedown, não a
>   click, e virava a página por baixo do botão.
> · **Dica de primeira visita** com animação de canto a virar, uma vez por dispositivo
>   (localStorage), + cursor `grab`/`grabbing`.
>
> ⚠️ **Por validar em navegador real:** a animação em si. O headless não a consegue
> mostrar terminada. Abrir `/brochura/` e confirmar contadores e entrada do conteúdo.

<details>
<summary>Lista original do P1 (histórico)</summary>

## P1 — Antes de mostrar ao cliente

### 1.1 · Promessa não cumprida: ZERO animações (a oferta vendida diz "Animações GSAP iguais às do site")
É o maior desvio face ao que o Miguel comprou. O site tem reveal-up, counters animados e
micro-interações; a brochura está 100% estática. **Não precisa de ser exagerado — precisa de existir.**

- [ ] Vendorizar nada: reutilizar `/js/vendor/gsap.min.js` + `ScrollTrigger.min.js` já no repo (regra zero-CDN mantida)
- [ ] **Counters animados** nos números (10+, 105+, 150+, 100%) — páginas 4 e 13. Mesma lógica `data-count` do site. É o efeito que mais se nota e o mais barato.
- [ ] **Reveal ao entrar na página**: no modo scroll, título + kicker + hero com fade/translateY stagger (IntersectionObserver que já existe pode disparar uma classe `.vista`); no modo flip, disparar no evento `flip` para o spread que ficou visível
- [ ] Respeitar `prefers-reduced-motion` (o CSS já tem a base — garantir que o JS não anima nesse caso)
- [ ] NÃO animar dentro do virar de página do StPageFlip (competem entre si)

### 1.2 · Páginas com vazio excessivo (visto nos screenshots da revisão)
O conteúdo está desenhado para A4 de impressão; no ecrã algumas páginas ficam ocas:

- [ ] **Pág. 16 (contra-capa):** buraco enorme entre o email e o QR. Subir o bloco QR (tirar `margin-top:auto`), aumentar contactos (`.ct__v` → ~30px) e dar mais respiro entre eles
- [ ] **Pág. 13 (clientes):** vazio grande entre a lista de nomes e o folio. Logos maiores (`height` 43px → ~56px, gap maior) e lista de nomes com mais presença
- [ ] **Pág. 2 (manifesto):** a assinatura cola-se ao meio e sobra um terço vazio em baixo — reequilibrar o `justify-content:center` com padding-top maior ou tipografia do manifesto maior (31px → ~36px)
- [ ] **Regra geral:** no digital não há custo de papel — o conteúdo pode encher mais a página do que no print

### 1.3 · Logótipo da Renault quase invisível na pág. 13
O SVG da Renault (losango 2021, linha fina) desaparece ao tamanho atual sobre papel.
- [ ] Trocar para uma versão com mais peso visual (ex. losango preenchido `Renault_2021_Text.svg` do Commons tem wordmark) OU aumentar só esse logo com um modificador
- [ ] Rever contraste de todos os 9 a tamanho final; HeyDoc (verde claro) também está fraco

### 1.4 · Feedback invisível ao copiar link de partilha (desktop)
`navigator.share` não existe em desktop Chrome/Firefox → cai no clipboard mas só muda um aria-label. O utilizador não vê NADA acontecer.
- [ ] Toast pequeno "Link copiado ✓" (2s, canto inferior), reutilizável também para erros
- [ ] Verificar que o clique no botão partilhar não dispara o virar de página (stopPropagation — o StPageFlip escuta mousedown no spread)

### 1.5 · Hint de "isto vira" no primeiro uso (desktop)
Nada indica que as páginas viram com arrasto — parece um PDF. Primeira impressão manda.
- [ ] Na primeira visita (localStorage), animar o canto inferior direito da capa com um "peel" subtil de 1-2s, ou seta pulsante discreta junto ao canto
- [ ] Cursor `grab` sobre a zona das páginas


</details>

---

## P2 — ✅ CONCLUÍDO em 2026-07-30 (exceto o que depende do cliente)

> · **Fallback sem JS**: bloco `<noscript>` com as 16 secções em HTML real
>   (1529 palavras), contactos e link para o PDF. Gerado por
>   `./build-brochura-estatico.py` a partir do JSON — **correr antes de cada deploy**.
>   Resolve 2.1 e 2.2 ao mesmo tempo: acessibilidade e conteúdo indexável.
> · **Timeout do splash (8s)**: se o JSON não vier, mostra PDF + WhatsApp + telefone
>   em vez de um logótipo a pulsar para sempre.
> · **PDF descarregável**: `brochura/Brochura-Yes-We-Do.pdf` (6 MB, texto em curvas).
> · **Imagens leves**: `./prep-web-images.sh` gera `img/brochura/web/` a 1200px q78.
>   **4,3 MB → 2,3 MB (47% menos).** O `brochura.js` mapeia com a função `web()` e tem
>   `onerror` que volta ao original — nunca fica sem imagem.
>   ⚠️ Cópias e não recompressão: `cleva.webp` e `lusiadas-porto-contentor.webp` são
>   partilhadas com o site e o portfólio; mexer nelas mudava o site.
> · **`fetchpriority="high"`** na arte de capa (preload atualizado para a versão web).
> · **Modo apresentar completo**: ouve `fullscreenchange` (sair com Esc já limpa o
>   estado — antes ficava colado), controlos e cursor desaparecem após 3s de inatividade.
> · **Índice no desktop**: botão ☰ nos controlos, mesmo painel do telemóvel, com a
>   secção atual destacada nos dois modos.
> · **`.gitignore`**: `img/brochura/raw|print/`, `capas/*.png`, `docs/entrega/*.pdf`
>   — ~400 MB de artefactos fora do repo. Os scripts que os geram ficam versionados.
>   **`img/brochura/web/` NÃO está ignorada — é precisa em produção.**
> · **GA4**: snippet pronto e comentado no `<head>`, com instruções. Os eventos já
>   disparam. Falta só o ID da propriedade.
>
> **Pendente e fora do meu alcance:**
> · ID da propriedade GA4 (2.4) — criar em analytics.google.com e descomentar 6 linhas
> · Medir LCP real com Lighthouse (2.3) — precisa de estar publicado
> · Decisão de publicação (2.7) — preview de Vercel vs produção com noindex
> · Logótipo real na capa antes de ser público (ver P3 §3.4)

<details>
<summary>Lista original do P2 (histórico)</summary>

## P2 — Antes de produção

### 2.1 · Sem fallback sem JS — viola o critério de qualidade definido no plano
Se o JS falhar, fica o splash eternamente. O plano (§8 do PLANO-BROCHURA-PREMIUM) exige "funciona sem JS".
- [ ] `<noscript>` com mensagem + link direto para `docs/entrega/brochura-rgb.pdf` (ou versão hospedada do PDF) + contactos essenciais em HTML puro
- [ ] Timeout no splash: se em 8s nada carregou, mostrar erro com contactos (hoje o catch já trata fetch falhado, mas não JS partido a meio)

### 2.2 · SEO: conteúdo 100% renderizado por JS
O Google executa JS, mas o conteúdo textual de 16 páginas merece HTML real (o resto do site cumpre isso).
- [ ] Opção barata: gerar no build um bloco `<noscript>`/HTML estático com o texto das 16 páginas a partir do JSON (script de 20 linhas, corre antes do deploy)
- [ ] Garantir `og:image` acessível e testar partilha real no WhatsApp (o card é a primeira impressão do link)

### 2.3 · Performance do primeiro paint
4,4 MB totais com lazy está aceitável, mas o flipbook desktop monta as 16 páginas no DOM de uma vez.
- [ ] `fetchpriority="high"` na arte da capa; `loading="eager"` apenas capa + spread 1
- [ ] Comprimir os 3 maiores (lusiadas-porto-contentor 354KB, viatura-frota-comercial 272KB, socios 233KB) para ~150KB — `cwebp -q 78` chega
- [ ] Medir LCP real com Lighthouse (alvo < 2,0s em 4G conforme o plano); registar o número no doc de entrega

### 2.4 · GA4 — as "estatísticas" prometidas ainda não existem
Os eventos já disparam para `dataLayer`, mas não há GA4 instalado — a promessa da Opção 2 ("estatísticas de visualizações e páginas mais consultadas") está por cumprir.
- [ ] Criar propriedade GA4 e adicionar o snippet gtag ao `<head>` da brochura (e idealmente ao site todo — upsell de 80€ já aprovado no plano)
- [ ] Testar os eventos: brochura_open (com ref), page_view_brochura, cta_whatsapp por serviço, video_play, share_section, presentation_mode
- [ ] Guardar print do DebugView como prova para a entrega

### 2.5 · Modo Apresentar incompleto
- [ ] Em fullscreen: esconder a barra de contactos ✅ (já feito) mas TAMBÉM auto-esconder os controlos após 3s sem mexer o rato (reaparecem com movimento)
- [ ] Sair de fullscreen com Esc deve remover a classe `apresentar` (hoje só o botão remove — ouvir `fullscreenchange`)
- [ ] Cursor auto-esconde em fullscreen (`cursor:none` após inatividade)

### 2.6 · Índice também no desktop
No telemóvel há índice; no desktop não há forma de saltar para uma secção sem conhecer o hash.
- [ ] Botão de índice nos controlos (☰) que abre o mesmo painel — ou strip de miniaturas colapsável em baixo
- [ ] No painel, destacar a secção atual

### 2.7 · Publicação (decisão pendente do Ryan)
- [ ] `.gitignore`: acrescentar `img/brochura/print/`, `img/brochura/raw/`, `img/brochura/capas/*.png`, `docs/entrega/*.pdf` (411 MB de artefactos regeneráveis — os scripts ficam no repo)
- [ ] Estratégia: preview de Vercel em rama própria OU produção com `X-Robots-Tag: noindex` (padrão já usado no /copinow) até aprovação do Miguel
- [ ] Antes de produção SEM noindex: substituir o logótipo IA da capa pelo real (ver 3.4) e confirmar o "150+ projetos"
- [ ] Link "Brochura" no footer do site (menu decidir com o Miguel)
- [ ] `llms.txt`: acrescentar a rota


</details>

---

## P3 — ✅ CONCLUÍDO em 2026-07-30

> · **Lightbox** nas fotografias (apoio, hero e retrato dos sócios). No folheto as
>   imagens de apoio ficam pequenas e são o argumento de venda — agora ampliam.
>   Fecha com clique ou Esc, foco preso no diálogo, devolve o foco ao sair.
> · **Aviso de secção inexistente**: `#servico-que-nao-existe` dava em silêncio na capa
>   e parecia link partido. Agora avisa com o toast.
> · **Acessibilidade**: cada página é `role="region"` com nome ("Página 6 — Reclames
>   Luminosos"), fotos ampliam por teclado (Enter/Espaço) com `role="button"`, e o
>   contador anuncia nome além do número.
>   · **Som de folha a virar**: gravação real de papel couché, **CC0 domínio público**
>   (Freesound, "Turning pages in a book" de Mateusz_Chenc). Extraída uma única
>   passagem de uma gravação de 6,4 s com cinco, depois limpa e normalizada.
>   Proveniência e comandos em `brochura/audio/FONTE.md`.
>   **Desligado por omissão** — ninguém quer abrir um link e ouvir barulho. Botão nos
>   controlos, escolha guardada em localStorage, nunca no telemóvel.
>   As versões sintetizadas com ffmpeg foram descartadas: soavam a impacto, não a
>   fricção de papel. O Mixkit foi descartado por não se conseguir verificar a licença.
> · **Texto da capa maior** a pedido do Ryan: tagline 16→25pt no print e 22→35px no
>   digital, kicker e rodapé proporcionais. Lê-se agora sem esforço.
>
> **§3.4 (logótipo real na capa) — RECUSADO pelo Ryan.** A capa fica com o logótipo
> gerado por IA (~95% fiel). Foi decisão informada: eu levantei o ponto, ele viu a
> capa e quer mantê-la. **Não voltar a propor.**
>
> **§3.2 (swipe horizontal no telemóvel) — NÃO FEITO, por opção.** O scroll vertical
> com snap é o padrão certo e um folheto A4 num ecrã de 6" é ilegível. Um toggle
> acrescentava complexidade para ganho marginal. Fica registado como não-feito
> deliberado, não esquecido.

<details>
<summary>Lista original do P3 (histórico)</summary>

## P3 — Polimento pós-lançamento

### 3.1 · Som de virar página (opcional, desligado por omissão)
Um "flip" subtil valoriza a metáfora. Botão de som nos controlos, `muted` por omissão, nunca no telemóvel.

### 3.2 · Swipe horizontal no telemóvel como alternativa
Hoje é scroll vertical (correto como padrão). Avaliar um toggle "ver como folheto" no telemóvel em landscape — o StPageFlip suporta `usePortrait:true` com uma página.

### 3.3 · Zoom nas fotografias
Tocar numa foto de apoio → lightbox simples (reutilizar padrão do portfolio do site). No flipbook, cuidado com conflito de gestos.

### 3.4 · Logótipo real na capa (30 min, obrigatório antes de produção pública)
A capa usa o logo redesenhado por IA (~95% fiel). Compor o `logo-stacked.png` real (3509px) por cima da cena da pedra, mantendo sombra/luz — técnica já validada no `compor-capa.sh`. Trocar também no `capa-clara-pedra` de print e regenerar os dois PDF.

### 3.5 · Página de erro 404 do hash
`#servico-inexistente` cai silenciosamente na capa — aceitável, mas um toast "Secção não encontrada" custa 3 linhas com o toast do 1.4.

### 3.6 · A11y fina
- [ ] `role="region"` + `aria-label` por página no modo scroll
- [ ] Anunciar mudança de página ao leitor de ecrã no flipbook (`aria-live` no #conta já existe — verificar que dispara)
- [ ] Testar navegação por teclado completa no índice e nos CTAs

---

## Notas técnicas para quem executa

- **Fonte única:** todo o conteúdo vem de `data/brochura-content.json`. Copy → JSON, nunca no JS/HTML.
- **Minificar sempre:** `npx clean-css-cli brochura/brochura.css -o brochura/brochura.min.css` e `npx terser brochura/brochura.js -c -m -o brochura/brochura.min.js`. O HTML só referencia os `.min.`.
- **Testar mobile a ≥600px** no Chrome headless — largura mínima real é 500px, capturas a 430 dão falsos overflows (já perdemos tempo com isto).
- **`--z` é a variável de escala** do modo scroll, calculada em JS (`window.innerWidth / 700`). Caixa e conteúdo derivam ambos dela — não introduzir outra fonte de dimensão.
- **Deep links:** `hashInicial` é lido no arranque antes do primeiro `replaceState`. Não mexer nessa ordem.
- **Bugs conhecidos resolvidos** e armadilhas: ver memória `orcamento-brochura.md` (secção "Quatro bugs resolvidos").

</details>
