# Peças em 3D na brochura — teste, plano e integração

> **Estado: INTEGRADO na brochura a 2026-08-02, por publicar.**
> Duas peças: **Letras Recortadas** (p7) e **Stands & Eventos** (p10), cada uma
> com um botão `Ver a peça em 3D` ao lado do "Pedir orçamento".
> O motor vive dentro do `brochura/brochura.js` (`caixa3`, `decalque3`,
> `extrusao3`, `orbita3`, `PECAS`, `peca3dModal`). Assets em `img/brochura/3d/`.
>
> **Por verificar** (o browser de teste avariou a meio): a troca de opção a
> atualizar o link de WhatsApp ao vivo, e o aspeto do painel no telemóvel.
> A lógica está lida e correta, mas não foi vista a funcionar.
>
> Protótipos originais, fora do git e já redundantes: `_proto3d/`.

---

## O que se testou, e o que falhou

### ❌ Turntable com imagens geradas por IA — descartado

A ideia era gerar N vistas da mesma peça a rodar e percorrê-las com o rato.
Para maximizar a coerência, gerou-se tudo **numa só imagem**, em grelha 4×2
(`img/brochura/3d-raw/stand-turntable-8b.png`), em vez de 8 chamadas soltas.

**Resultado: a consistência de estilo é excelente, a de geometria não existe.**
Mesmo fundo, mesma luz, mesma escala — mas não é o mesmo objeto. Ao pôr os 8
fotogramas em sequência vê-se a prateleira branca a saltar de sítio, o painel
laranja a mudar de massa, e o fotograma 3 (que devia estar a 135°, quase de
costas) a mostrar o balcão de frente. Animado, isto treme e deforma-se: lê-se
como avaria, não como premium.

**Porquê:** o modelo não tem um objeto 3D na cabeça. Desenha oito vistas
plausíveis, não oito projeções da mesma geometria. Nenhum prompt resolve isto.

Aprendizagem lateral, se alguém voltar a tentar: uma peça **simétrica e lisa**
nunca serve de turntable — um quiosque quadrado sem gráficos é idêntico a 0°,
90°, 180° e 270°. A primeira tentativa (`stand-turntable-8.png`) parecia
partida e estava, tecnicamente, certa.

### ✅ Geometria real em CSS 3D — é o caminho

`_proto3d/css3d.html`. O quiosque é construído com caixas: cada uma são 6
faces posicionadas no espaço, com `transform-style: preserve-3d`. Roda com o
ponteiro, com perspetiva verdadeira e sombreado por face.

| | Turntable de IA | CSS 3D |
|---|---|---|
| Consistência | ✗ deforma | ✓ perfeita, é a mesma geometria |
| Suavidade | 8–24 saltos | ✓ contínua, qualquer ângulo |
| Peso | ~600 KB–1 MB por peça | **~5 KB de código, 0 imagens** |
| Trocar material | outra sequência inteira | ✓ instantâneo, é só cor |
| Dependências | nenhuma | nenhuma (o GSAP já lá está) |
| Nitidez | fixa | ✓ vetorial, qualquer ecrã |

O protótipo já troca entre **Acrílico, Inox, Alumínio e Azul** ao vivo. É esse
o argumento: mostra o que a fotografia não mostra — espessura, canto,
acabamento, afastamento da parede.

---

## O que fica bem em CSS 3D, e o que não fica

A regra é simples: **geometria de caixas e chapas, sim; formas orgânicas, não.**

| Categoria | Viável | Peça a modelar |
|---|---|---|
| Letras Recortadas | ⭐⭐⭐ | letra extrudida a partir de contorno SVG, com espaçadores |
| Reclames Luminosos | ⭐⭐⭐ | caixa de luz com face translúcida — e **acende** |
| Sinaléticas | ⭐⭐⭐ | chapa com afastadores |
| Stands & Eventos | ⭐⭐ | quiosque de caixas (protótipo feito) |
| Lonas | ⭐ | plano com tensão — pouco a ganhar |
| Decoração de Montras | ⭐ | vidro + vinil, precisa de transparência |
| Decoração de Viaturas | ✗ | forma orgânica, precisa de modelo a sério |

As três primeiras são as que mais valem: é exatamente aí que o comprador tem
uma dúvida física que a foto não responde.

---

## Onde vive

**Não na ficha de projeto.** A ficha é sobre um trabalho concreto de um
cliente concreto, e modelar a letra da *Lusíadas* em 3D é reproduzir a marca
registada de um hospital — o projeto já tem regra contra isso.

**Numa peça de amostra da Yes We Do**, aberta a partir da página do serviço,
com um botão próprio (`Ver a peça em 3D`). Assim é um mostruário de material
e acabamento, não uma afirmação sobre um trabalho. É mais honesto e é mais
útil: responde à dúvida antes de o cliente perguntar.

### Carga comercial

O material escolhido vai no WhatsApp: *"queria letras recortadas em inox de
5 mm"*. A brochura passa de catálogo a formulário disfarçado, e chega um lead
já qualificado. É o mesmo padrão do CTA da ficha, que já funciona.

---

## Ordem proposta

1. **Letras Recortadas** — o caso mais forte e o mais fácil. Letra extrudida
   com escolha de material e espessura (3 / 10 / 20 / 30 mm, os valores que já
   estão nos specs da página 7).
2. **Reclame luminoso** — caixa de luz que se pode apagar e acender. Encaixa
   no botão "Ver de noite" que já existe.
3. **Stand** — o protótipo já está feito; falta afinar proporções.
4. **Sinalética** — chapa com afastadores, reaproveita quase tudo do #1.

Cada um reutiliza o mesmo construtor de caixas. O primeiro custa o grosso do
trabalho; os seguintes são geometria e cor.

---

## Segunda ronda (2026-08-02) — órbita nos dois eixos, marca aplicada, logótipo

Motor extraído para `_proto3d/motor3d.js` (~130 linhas, zero dependências) com
quatro primitivas: `caixa`, `decalque`, `extrusao` e `orbita`.

**Órbita nos dois eixos.** Arrastar na horizontal roda 360° livremente; na
vertical inclina, mas **limitado a −62°/+30°**. Sem limite o objeto capota e
perde-se a noção de chão — fica desorientador, não impressionante. Setas do
teclado fazem o mesmo, porque a peça é conteúdo e tem de ser explorável sem rato.

**Marca aplicada (`decalque`).** O logótipo colado nas faces do stand. Duas
aprendizagens:
- **Vinil branco sobre superfícies de cor.** O logótipo a cores sobre o painel
  laranja desaparecia — o "we" é laranja. Criaram-se variantes monocor
  (`logo-h-branco.png`), que é aliás o que se faz na realidade.
- **Coplanares em CSS 3D não são de fiar.** A 0,6 px de distância da face, o
  decalque desaparecia atrás dela numas caixas e não noutras, sem padrão. A
  2,5 px é estável. Não confiar na ordem do DOM para desempatar profundidade.

**Logótipo em 3D (`extrusao`).** N cópias do PNG com transparência empilhadas
em Z, as de trás escurecidas — dá a aresta de acrílico cortado. Não há SVG do
logótipo e ele é ilustrado à mão (não se reconstrói com fontes), por isso esta
é a única via que mantém a forma fiel. 31 camadas para 30 px de profundidade
não mostram bandas. O protótipo troca **3 / 10 / 20 / 30 mm** — as espessuras
que a página 7 da brochura já anuncia — e mostra a parede com espaçadores,
que é o que distingue esta aplicação.

Ficheiros preparados: `_proto3d/logo-3d.png` (com margem, senão corta ao rodar),
`logo-h.png`, e as variantes `-branco`.

## Notas técnicas para quem implementar

- **Fora do folheto.** O `preserve-3d` tem de viver no overlay (como a ficha),
  nunca dentro do `.pg` — a StPageFlip já aplica os seus próprios transforms e
  os dois contextos 3D entram em conflito.
- **Estado nunca no `.pg`.** A StPageFlip reescreve o `class` do item dela.
  Ver a armadilha documentada em `docs/BROCHURA-ESTADO.md`.
- **`prefers-reduced-motion`:** sem auto-rotação; a peça fica num ângulo de
  três quartos e continua a poder rodar-se à mão.
- **Toque:** `touch-action: none` no palco, senão o arrasto faz scroll.
- **Sem GSAP:** a rotação é um `transform` direto, não precisa dele. Degrada
  para uma vista fixa se algo falhar.
- O construtor `caixa(l,a,p,x,y,z,cor,corTopo)` do protótipo é a base. Cada
  face roda **primeiro** e só depois é empurrada ao longo do seu próprio Z —
  foi aí que a primeira tentativa falhou e as caixas não fechavam.

## Limpeza pendente

`_proto3d/` e `img/brochura/3d-raw/` são material de teste, fora do git.
Apagar quando a decisão estiver tomada, ou promover o que servir.
