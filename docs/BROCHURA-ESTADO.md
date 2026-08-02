# Brochura Yes, We Do — Estado e Retoma

> **Última atualização: 2026-08-02.** V2 premium implementada, por publicar.
> Este é o documento por onde começar. Os outros ficheiros entram no detalhe.

---

## V2 Premium — implementada a 2026-08-02, **ainda não publicada**

Plano: `docs/PLANO-BROCHURA-V2-PREMIUM.md`. Tudo testado localmente, nada em produção.

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

**Dois bugs pré-existentes corrigidos de caminho:**
1. `StPageFlip.destroy()` faz `block.remove()` e levava o `#folheto` com ela.
   Atravessar os 1024px a redimensionar — ou **rodar um iPad** (≈820 → ≈1180) —
   deixava a brochura em branco para sempre. Resolvido com `garanteFolheto()`.
2. Capa e contracapa apareciam encostadas a um lado do folheto de duas
   páginas, com meia folha de vazio. Agora ficam centradas.

**Duas armadilhas para quem mexer nisto:**

1. A StPageFlip **reescreve o atributo `class` do `.pg`** e apaga classes
   postas em tempo de execução. Estado nunca pode viver no `.pg` — o modo
   noite vive no `.pg__in`, que é markup nosso.
2. **Nunca travar eventos no `document` em fase de captura.** A StPageFlip só
   escuta `mousedown` e `touchstart` (no contentor dela) e
   `mousemove/up`/`touchmove/end` (na window) — **não usa pointer events**.
   Travar em captura no document matava o evento antes de chegar ao botão e,
   no toque, o navegador deixava de sintetizar o clique: os hotspots não
   abriam nada no telemóvel e o palco 3D não rodava. A forma correta é
   `stopPropagation` **no próprio elemento** (`protegeInterativos()`), que
   deixa o botão receber o evento e só depois corta a subida.

Novos eventos GA4: `ficha_open`, `ficha_cta`, `luz_toggle`.

---

## Onde estamos

| | |
|---|---|
| **Contrato** | Opção 2 — Premium, **400 €** (tabela era 450) |
| **Aprovado** | 2026-07-30 |
| **Estado** | **Entregue e publicado**, à espera de aprovação |
| **Online** | https://yes-wedo.pt/brochura/ — com `noindex` |
| **Print** | `docs/entrega/brochura-cmyk.pdf` (regenerar com `./build-brochura-pdf.sh`) |

**Linha gráfica: clara**, decidida pelo Hugo. Capa `capa-clara-pedra`.
O Miguel estava de férias e responde por volta de **2026-08-06**.

---

## ⏳ Pendente — o que fazer quando houver resposta

### Depende do cliente
1. **Confirmar "+150 projetos"** — vai impresso e nunca foi verificado.
   Os outros números estão confirmados: 10+ anos, 105+ clientes, 100% dedicação.
   ⚠️ O site ainda diz "80+ clientes" — está desatualizado, atualizar de borla.
2. **Aprovar a capa** — se quiserem outra, é trocar um caminho no JSON
   (`pages[0].arte`). As 18 alternativas estão em `img/brochura/capas/`.
3. **Logótipos dos clientes pequenos** (HomyCasa, Cleva, Weego, Amani Spa…) —
   entram na grelha, saem da lista de texto. Não bloqueia.
4. **Vídeos de instalação** — só há 1. Mais 2-3 melhoravam muito o digital.

### Depende do Ryan
5. **ID do GA4** — o snippet está no `<head>` do `brochura/index.html`, comentado,
   com instruções. Os eventos já disparam. Sem isto, as "estatísticas" prometidas
   na proposta **não existem**.
6. **Tirar o `noindex` + repor `/brochura` no `sitemap.xml`** quando aprovarem.
   As duas coisas andam juntas — estar no sitemap com noindex é contraditório.
   O noindex está em `vercel.json`, três rotas.

### Opcional, já discutido
7. **Logótipo real na capa** — a capa usa o logo redesenhado por IA (~95% fiel).
   O Ryan viu e decidiu mantê-lo. **Não voltar a propor.**
8. **Gerir a impressão com a gráfica** — extra de 15% sobre o custo, ver orçamento.

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
├── print/                     300dpi ← gitignored, regenerável
├── raw/  capas/               originais ← gitignored (capas/README.md fica)
├── logos/                     9 logótipos + FONTES.md
└── ASSETS.md                  o que é foto real e o que é gerado por IA
```

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
| `docs/PLANO-BROCHURA-V2-PREMIUM.md` | **V2 premium aprovada (2026-08-02), pronta a implementar** — fichas 3D, luz, tilt, polish |
| `docs/ORCAMENTO-BROCHURA.md` | orçamento original e mensagem de WhatsApp |
| `docs/PLANO-BROCHURA-PREMIUM.md` | plano de negócio, cronograma, upsells |
| `docs/BROCHURA-SPEC-EXECUCAO.md` | conceito, design system, specs técnicas |
| `docs/BROCHURA-SPECS-IMPRESSAO.md` | tudo o que é gráfica, com cor medida |
| `docs/BROCHURA-DIGITAL-MELHORIAS.md` | revisão do digital, P1/P2/P3 (todos feitos) |
| `img/brochura/ASSETS.md` | proveniência das imagens — real vs gerado por IA |
| `img/brochura/logos/FONTES.md` | origem e licença dos 9 logótipos |
| `img/brochura/capas/README.md` | as 18 capas geradas |
| `brochura/audio/FONTE.md` | origem e licença do som |
