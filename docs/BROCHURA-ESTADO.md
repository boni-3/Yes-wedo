# Brochura Yes, We Do — Estado e Retoma

> **Última atualização: 2026-08-02.** V2 premium **implementada, testada e
> publicada** (`a07d040` + `126be3b`). Está online em https://yes-wedo.pt/brochura/
> com `noindex`, à espera da resposta do Miguel (~06/08) e do Hugo.
> Este é o documento por onde começar. Os outros ficheiros entram no detalhe.

**Se estás a retomar isto depois de eles responderem, salta para
[Quando o Miguel e o Hugo responderem](#quando-o-miguel-e-o-hugo-responderem).**

---

## V2 Premium — publicada a 2026-08-02

Plano e desvios: `docs/PLANO-BROCHURA-V2-PREMIUM.md` · 3D: `docs/PLANO-BROCHURA-3D.md`

⚠️ **A brochura que o Miguel vai avaliar já não é a que lhe foi entregue.** Foi
decisão do Ryan publicar a V2 antes da aprovação. Se ele reagir mal a alguma
peça nova, tirar é rápido — mas convém não ser apanhado de surpresa na conversa.

| O quê | Onde |
|---|---|
| **Fichas de projeto 3D** — 20 fotografias ganham um ponto laranja pulsante; abre a foto inclinada em 3D com cliente, o que a Yes, We Do fez ali, tags e CTA de WhatsApp com o nome do projeto | `fichas` no JSON, `fichaModal()` |
| **"Ver de noite"** na página dos reclames — a página escurece e as 4 fotografias são **trocadas por versões noturnas** com os reclames acesos | `noite` no JSON, `alternaLuz()` |
| **Inclinação 3D** no lightbox e nas fichas, com rato ou giroscópio | `liga3d()` |
| **Corpo de objeto** — lombada com folhas empilhadas que cresce ao avançar, grão de papel, entrada do folheto | `--folhas-esq/dir`, `entrada()` |
| **Peças de amostra em 3D** — botão "Ver a peça em 3D" nas Letras Recortadas e nos Stands. Geometria real em CSS (zero bibliotecas), órbita nos dois eixos, e o material/cor escolhido vai no WhatsApp | `peca3d` no JSON, `peca3dModal()` |

**As fichas estão por validar com o Miguel** — o detalhe técnico (materiais,
serviços por projeto) foi inferido do copy das páginas. Estão marcadas com
`_confirmar` no JSON. Viaturas e Montras só têm ficha no *hero*: as imagens de
apoio são geradas por IA e uma ficha sobre trabalho que não existe seria mentir.

**⚠️ As 4 imagens noturnas são geradas por IA** a partir das fotografias reais.
O reclame existe e acende mesmo — a IA só simula a hora do dia — mas a
fotografia nunca foi tirada, por isso levam selo `Simulação noturna`.
**Decisão pendente do Miguel**, detalhe em `img/brochura/ASSETS.md`. O ideal
é fotografar os reclames ao fim do dia e dispensar a IA.

Novos eventos GA4: `ficha_open`, `ficha_cta`, `luz_toggle`, `peca3d_open`,
`peca3d_opcao`, `peca3d_cta`. **Nenhum é registado** — falta o ID (ver pendentes).

### Bugs corrigidos pelo caminho

Três **já estavam publicados** e ninguém sabia:

1. `StPageFlip.destroy()` faz `block.remove()` e levava o `#folheto` com ela.
   Atravessar os 1024px a redimensionar — ou **rodar um iPad** (≈820 → ≈1180) —
   deixava a brochura em branco para sempre. Resolvido com `garanteFolheto()`.
2. **Os controlos só funcionavam ao segundo toque no iPhone.** Duas causas
   somadas: o `:hover` (num ecrã tátil o 1.º toque revela o estado, o 2.º é
   que carrega) e o `checkTarget` da StPageFlip.
3. **No iOS o `volume` de um `<audio>` é só de leitura.** O "aquecimento" do
   som fazia `volume = 0` e tocava a folha em alto e bom som no primeiro
   toque do utilizador. Passou a usar `muted`.

E dois introduzidos e corrigidos nesta ronda: a capa e a contracapa apareciam
encostadas a um lado do folheto de duas páginas; e um seletor órfão deixou a
imagem noturna sem estilo de dia, criando um espaço em branco por baixo das
fotos (`126be3b`).

### ⚠️ Quatro armadilhas — ler antes de mexer

1. A StPageFlip **reescreve o atributo `class` do `.pg`** e apaga classes
   postas em tempo de execução. Estado nunca pode viver no `.pg` — o modo
   noite vive no `.pg__in`, que é markup nosso.
2. **Nunca travar eventos no `document` em fase de captura.** A StPageFlip só
   escuta `mousedown` e `touchstart` (no contentor dela) e
   `mousemove/up`/`touchmove/end` (na window) — **não usa pointer events**.
   Travar em captura no document matava o evento antes de chegar ao botão e,
   no toque, o navegador deixava de sintetizar o clique. A forma correta é
   `stopPropagation` **no próprio elemento** (`protegeInterativos()`).
3. **O que está dentro de um botão não pode ser alvo do toque.** A StPageFlip
   só poupa `<a>` e `<button>` se o alvo for literalmente esses elementos
   (`checkTarget`). Tocando num ícone, o alvo era o `<svg>` e a página virava.
   Resolvido com `pointer-events:none` nos **descendentes** (não basta nos
   filhos diretos: dentro de SVG a propriedade não herda de forma fiável).
4. **Todo o `:hover` vive dentro de `@media (hover:hover) and (pointer:fine)`.**
   Qualquer regra de hover nova tem de ir para lá, ou volta o duplo toque.
   E atenção ao mexer nesse bloco por script: já lá ficou um seletor órfão
   sem corpo, que o CSS colou à regra seguinte. **Chavetas equilibradas não
   provam que o CSS está bem** — um seletor a mais não desequilibra nada e
   nenhum validador simples o apanha. Verificar sempre o resultado no browser,
   e no estado normal da página, não só na funcionalidade que se mexeu.

---

## Onde estamos

| | |
|---|---|
| **Contrato** | Opção 2 — Premium, **400 €** (tabela era 450) |
| **Aprovado** | 2026-07-30 |
| **Estado** | **V2 publicada** (`126be3b`), à espera de aprovação |
| **Online** | https://yes-wedo.pt/brochura/ — com `noindex` |
| **Deploy** | `git push` → Vercel. ⚠️ **Não fazer polling ao site** para confirmar: ativa o Security Checkpoint e devolve 403 no site inteiro. Uma verificação espaçada, ou perguntar ao Ryan. |
| **Print** | `docs/entrega/brochura-cmyk.pdf` (regenerar com `./build-brochura-pdf.sh`) |

**Linha gráfica: clara**, decidida pelo Hugo. Capa `capa-clara-pedra`.
O Miguel estava de férias e responde por volta de **2026-08-06**.

---

## Quando o Miguel e o Hugo responderem

Por ordem de urgência. Os dois primeiros **bloqueiam a impressão**.

### 🔴 Bloqueiam a gráfica — resolver antes de mandar imprimir

**1. Confirmar "+150 projetos".** Vai impresso e nunca foi verificado. Os
outros números estão confirmados (10+ anos, 105+ clientes, 100% dedicação).
Está em `empresa.numeros` no JSON, marcado com `_confirmar`.
⚠️ O site ainda diz "80+ clientes" — está desatualizado, atualizar de borla.

**2. Validar as fichas de projeto** (novo na V2). As 20 fichas descrevem o que
a Yes, We Do fez em cada trabalho, e o detalhe técnico **foi inferido do copy
das páginas, não confirmado**. Estão marcadas com `_confirmar` no JSON, por
página. Se algum estiver errado, é um trabalho real descrito de forma errada a
um potencial cliente — daí bloquear.
*Não aparecem no impresso, mas a informação é a mesma e convém acertar uma vez.*

### 🟠 Decisões de conteúdo

**3. As 4 fotografias noturnas geradas por IA.** Levam selo `Simulação
noturna`. O reclame existe e acende mesmo — a IA só simula a hora — mas a
fotografia nunca foi tirada, e são edifícios de clientes identificáveis.
Três saídas, por ordem de preferência, em `img/brochura/ASSETS.md`:
   - ⭐ **Fotografar os reclames ao fim do dia.** Uma ida a Paços de Ferreira
     resolve o hero, que é o mais importante. A IA sai, o selo desaparece.
   - Manter com selo (estado atual). Honesto, e o efeito não perde nada.
   - Manter sem selo. ❌ Não recomendado. Tirar o selo é uma linha de CSS
     (`.selo-noite`), mas é decisão do cliente, não nossa.

**4. As 6 imagens de IA das páginas 11 e 12** (Viaturas e Montras) — pendente
desde julho, mesma decisão. Marcas fictícias, já rotuladas `Simulação`.
Por isso é que essas páginas **não têm ficha nas imagens de apoio**: uma ficha
de projeto sobre trabalho que não existe seria enganar quem lê.

**5. Aprovar a capa** — se quiserem outra, é trocar um caminho no JSON
(`pages[0].arte`). As 18 alternativas estão em `img/brochura/capas/`.
A linha clara foi escolha do **Hugo**.

### 🟢 Melhoram muito, não bloqueiam

**6. Fotos de oficina e um antes/depois.** É a maior lacuna da brochura e não
depende de nós — é o Miguel com um telemóvel, meia hora. A empresa diz em três
páginas que o que a distingue é *"fazemos tudo em casa: projeto, fabrico e
instalação"* e **nunca o mostra**. Não há uma única foto de produção nos 53
projetos do portfólio. Um antes/depois de fachada é o argumento mais forte que
existe neste setor.

**7. Logótipos dos clientes pequenos** (HomyCasa, Cleva, Weego, Amani Spa…) —
entram na grelha da p13, saem da lista de texto.

**8. Vídeos de instalação** — só há 1 em 53 projetos. Mais 2-3 davam muito ao digital.

### Depende do Ryan, não do cliente

**9. ID do GA4.** O snippet está comentado no `<head>` do `brochura/index.html`
com instruções. **Dez tipos de eventos disparam para o vazio** — que fichas
abrem, que espessuras escolhem, que projetos interessam. É a informação
comercial mais útil que a brochura gera, e as "estatísticas" prometidas na
proposta não existem sem isto.

**10. Tirar o `noindex` + repor `/brochura` no `sitemap.xml`** quando aprovarem.
As duas coisas andam juntas — estar no sitemap com noindex é contraditório.
O noindex está em `vercel.json`, três rotas.

**11. Ligar o simulador de néon à brochura.** Já existe em `/simulador/` e está
ligado a partir do hero do site, mas **a brochura não lhe faz uma única
referência**. Um botão na página dos Reclames — *"Experimente o seu texto em
néon"* — são dez minutos e manda o leitor para uma ferramenta interativa que já
é vossa e já está paga. Ficou por fazer nesta ronda.

### Já decidido — não voltar a propor

- **Logótipo real na capa.** Usa o logo redesenhado por IA (~95% fiel). O Ryan
  viu e decidiu mantê-lo.
- **Todas as 16 páginas claras.** Propus 3 escuras de acento; o Hugo preferiu
  todas claras. A classe `.sheet--dark` fica pronta caso mudem de ideias.
- **Sem 5.ª cor Pantone.** Medido com o perfil CoatedFOGRA39 real.
- **Gerir a impressão com a gráfica** — extra de 15% sobre o custo, ver orçamento.

---

## Mapa de ficheiros

```
data/brochura-content.json     ← FONTE ÚNICA. Copy das 16 páginas.
                                  Alimenta print E digital. Editar só aqui.
brochura/
├── index.html                 digital (+ bloco <noscript> gerado)
├── brochura.css / .js         + versões .min. (é o que o HTML carrega)
├── print.html / print.css / print.js
├── audio/folha.mp3            som CC0 · proveniência em audio/FONTE.md
├── vendor/                    StPageFlip + Paged.js, self-hosted
└── Brochura-Yes-We-Do.pdf     versão para descarregar

img/brochura/
├── web/                       imagens do digital (1200px) ← VERSIONADA
│                              inclui as 4 *-noite.webp (geradas por IA)
├── 3d/                        texturas das peças 3D ← VERSIONADA
│                              logo-3d.png · logo-h.png · logo-h-branco.png
├── print/                     300dpi ← gitignored, regenerável
├── raw/  capas/               originais ← gitignored (capas/README.md fica)
├── noite-raw/  3d-raw/        originais das gerações por IA ← gitignored
├── logos/                     9 logótipos + FONTES.md
└── ASSETS.md                  o que é foto real e o que é gerado por IA
```

**Onde vive cada coisa da V2** (tudo em `brochura/brochura.js`, sem ficheiros novos):

| Peça | Funções | Campo no JSON |
|---|---|---|
| Fichas de projeto | `hotspot()`, `fichaModal()`, `liga3d()` | `fichas` |
| Ver de noite | `camadaNoite()`, `alternaLuz()` | `noite` |
| Peças 3D | `caixa3()`, `decalque3()`, `extrusao3()`, `orbita3()`, `PECAS`, `peca3dModal()` | `peca3d` |
| Lombada | `--folhas-esq/dir` em `atualiza()` | — |

As texturas do logótipo em 3D foram preparadas com margem
(`-border 9%`) — sem isso a peça sai cortada ao rodar. Se forem
regeneradas, repetir esse passo.

### Scripts

| Script | Faz |
|---|---|
| `./prep-web-images.sh` | imagens leves do digital → `img/brochura/web/` |
| `./build-brochura-estatico.py` | injeta o `<noscript>` com as 16 secções |
| `./prep-print-images.sh` | imagens 300dpi → `img/brochura/print/` |
| `./build-brochura-pdf.sh` | PDF RGB + CMYK (`--rgb` para iterar depressa) |
| `./gen-brochura-img.sh` | gera imagem por IA (Codex `image_gen`) |
| `./gen-capa-com-logo.sh` | idem, dando o logótipo como referência |
| `./compor-capa.sh` | fundo + logótipo real sobreposto |
| `./proc-brochura-img.sh` | processa uma imagem para web + print |

---

## Fluxo de deploy

```bash
./prep-web-images.sh                 # se mudaram imagens
./build-brochura-estatico.py         # SEMPRE — o <noscript> vem do JSON
npx clean-css-cli brochura/brochura.css -o brochura/brochura.min.css
npx terser brochura/brochura.js -c -m -o brochura/brochura.min.js
gh auth switch --user boni-3 && git push && gh auth switch --user ade-studio3
```

Se mexeram no JSON e vão gerar PDF, correr também `./prep-print-images.sh` **antes**.

---

## ⚠️ Armadilhas que já morderam

**Imagens em falta falham em silêncio.** `prep-print-images.sh` lê o JSON. Trocar uma
imagem lá e gerar o PDF sem correr o script outra vez → a página sai **vazia, sem erro**.
Aconteceu duas vezes.

**Chrome headless não sai** depois do `--print-to-pdf`. O `build-brochura-pdf.sh` já
trata: lança em background, espera o ficheiro estabilizar, mata o processo. E **não
correr o build com `| tail`** — buferiza e parece pendurado.

**Fontes Type 3.** O Chrome exporta variable fonts como Type 3, que muitos preflights
de gráfica rejeitam. O build converte o texto em curvas (`gs -dNoOutputFonts`); o PDF
final tem zero fontes. `--com-texto` mantém o texto, só para ecrã.

**Largura mínima do Chrome headless são 500px.** `--window-size=430` é ignorado: a
captura sai a 430 mas o viewport é 500, o que faz *parecer* que há overflow horizontal
quando não há. Testar mobile a ≥600px.

**O headless congela o relógio do GSAP.** As capturas apanham sempre a animação a meio.
Para ver o estado final usar `--force-prefers-reduced-motion`.

**No telemóvel manda o fator de escala, não o `font-size`.** A página é desenhada a
480×679 e escalada para o ecrã. Se o texto parecer pequeno, o problema é a base ser
larga demais, não a fonte.

**Não fazer polling a yes-wedo.pt.** Verificar deploys em ciclo ativa o *Security
Checkpoint* da Vercel (403 no site inteiro, só contra o nosso IP). Uma verificação
espaçada, ou perguntar ao Ryan.

---

## Decisões tomadas, para não se voltarem a discutir

- **Capa fica com o logótipo gerado por IA.** Decisão informada do Ryan.
- **Todas as 16 páginas claras.** Eu propus 3 escuras de acento; ele preferiu todas
  claras. Existe a classe `.sheet--dark` pronta se mudarem de ideias.
- **Sem swipe horizontal alternativo no telemóvel** — o folheto em retrato já resolve.
- **Não é preciso 5.ª cor Pantone.** Medido com o perfil CoatedFOGRA39 real: o laranja
  `#F04320` → C0 M83 Y90 K0, desvio impercetível. Poupa 80-150 € ao cliente.
- **Não gerar logótipos de marcas reais com IA.** Produz aproximações erradas de marcas
  registadas. Os 9 que temos vêm de fontes oficiais.
- **Som ligado por omissão**, mas só toca ao virar uma página.

---

## Especificações de impressão a propor à gráfica

Resumo — o detalhe e o email pronto a enviar estão em `docs/BROCHURA-SPECS-IMPRESSAO.md`.

A4, 16 páginas, 4/4 cores, couché mate 170 g, capa 300 g com laminação soft-touch,
agrafo a cavalo, PDF/X-4, perfil Coated FOGRA39, 250 unidades.

⭐ **Verniz UV localizado sobre os reclames luminosos nas fotografias** — numa empresa
que vende luz, o brilho sobre o mate faz os reclames acenderem quando o papel apanha
luz. Acrescenta 60-120 € e ninguém no setor o faz no Porto.

O custo de impressão é do cliente, não está nos 400 €.

---

## Documentação relacionada

| Ficheiro | Conteúdo |
|---|---|
| `docs/PLANO-BROCHURA-V2-PREMIUM.md` | **V2 — plano e desvios de execução**, com o que foi tentado e descartado |
| `docs/PLANO-BROCHURA-3D.md` | **peças 3D** — porque o turntable de IA não serve e o CSS 3D serve |
| `docs/ORCAMENTO-BROCHURA.md` | orçamento original e mensagem de WhatsApp |
| `docs/PLANO-BROCHURA-PREMIUM.md` | plano de negócio, cronograma, upsells |
| `docs/BROCHURA-SPEC-EXECUCAO.md` | conceito, design system, specs técnicas |
| `docs/BROCHURA-SPECS-IMPRESSAO.md` | tudo o que é gráfica, com cor medida |
| `docs/BROCHURA-DIGITAL-MELHORIAS.md` | revisão do digital, P1/P2/P3 (todos feitos) |
| `img/brochura/ASSETS.md` | proveniência das imagens — real vs gerado por IA |
| `img/brochura/logos/FONTES.md` | origem e licença dos 9 logótipos |
| `img/brochura/capas/README.md` | as 18 capas geradas |
| `brochura/audio/FONTE.md` | origem e licença do som |
