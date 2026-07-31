# Assets da Brochura — Inventário e Proveniência

> ⚠️ **Documento de controlo.** Regista o que é fotografia real de trabalhos da Yes, We Do e o que é imagem gerada por IA. Manter atualizado — é o que evita enganos na entrega.

Gerado com `./gen-brochura-img.sh` (Codex CLI · `image_gen`), processado com `./proc-brochura-img.sh`.

- **Web:** `/img/brochura/*.webp` (landscape 1536×1024 · capas 1600px altura · q82)
- **Print:** `/img/brochura/print/*.png` (2551px largura = A4 + 3mm bleed @ 300 dpi, upscale Real-ESRGAN ultrasharp-4x)

---

## 🤖 Gerado por IA — preenche lacunas do portfólio

Estas imagens **não são trabalhos executados pela Yes, We Do**. Foram criadas porque as categorias correspondentes têm quase nenhum material fotografado no repo.

| Ficheiro | Categoria | Marca fictícia | Notas |
|---|---|---|---|
| `viatura-frota-comercial` | Decoração de Viaturas | FLORA | Carrinha branca, fachada de azulejo, calçada portuguesa. A mais realista do lote. |
| `viatura-frota-multipla` | Decoração de Viaturas | NOVA | 3 carrinhas alinhadas — comunica "frota", bom argumento de venda B2B. |
| `viatura-citadino-lateral` | Decoração de Viaturas | ELVA | Meia-viatura, vinil recortado geométrico. Usa laranja + magenta da marca. |
| `montra-loja-moda` | Decoração de Montras | ATRIO | Montra de retalho, vinil recortado. Excelente qualidade. |
| `montra-clinica` | Decoração de Montras | CLINICA VIVA | Vinil jateado + letras. Encaixa no histórico de saúde (Lusíadas). |
| `montra-restaurante` | Decoração de Montras | MESA | Vinil dourado, luz de fim de tarde. A mais bonita do lote. |

**Marcas são todas fictícias e inventadas** — não há logótipos de empresas reais nestas imagens, para evitar problemas de marca registada.

### ⚠️ Como usar estas 6 imagens — decidir com o Miguel

Estas páginas mostram trabalhos que a Yes We Do **sabe fazer** mas de que não tem fotos. Três formas de resolver, por ordem de preferência:

1. **⭐ Recomendado — o cliente manda fotos reais.** Estas imagens entram na ronda 1 como *placeholder visual* para o Miguel ver o layout final. Ele vê a página montada e percebe exatamente que fotos precisa de tirar. Substituem-se e o problema desaparece.
2. **Manter, rotuladas como "Simulação".** Legenda discreta `Simulação` ou `Estudo de aplicação` no canto da imagem. É honesto e é prática normal no setor — as empresas de sinalética apresentam estudos antes de produzir. Zero risco.
3. **Manter sem rótulo.** ❌ Não recomendo. Um cliente que peça "quero igual àquela carrinha" vai descobrir que não existe. Numa empresa cujo produto se vê na rua, isso custa credibilidade.

**A decisão é do Ryan/Miguel.** O trabalho de layout é o mesmo nos três casos — só muda uma legenda.

---

## 🎨 Gerado por IA — elementos gráficos de marca

Sem qualquer problema de proveniência: são arte abstrata, não representam trabalhos.

| Ficheiro | Uso | Notas |
|---|---|---|
| `capa-arte-v1` | Capa — opção 1 | Tubos de néon com bokeh. Atmosférica, zona superior limpa para o logo. |
| `capa-arte-v2` | Capa — **opção recomendada** ⭐ | Letras 3D retroiluminadas numa fachada escura. **Mostra literalmente o produto que eles vendem** — letras recortadas com halo de luz. É a mais forte conceptualmente. |
| `capa-arte-v3` | Capa — opção 3 | Rastos de luz laranja/azul/magenta. Metade inferior escura e limpa para texto. A mais gráfica e "segura". |
| `textura-secao-azul` | Fundo de secção | Betão azul-escuro com brilho frio. Muito discreta — aguenta texto branco por cima. |
| `textura-secao-neon` | Fundo de secção | Rasto laranja na diagonal inferior. Centro escuro e limpo para texto. |

**Apresentar as 3 capas ao Miguel na ronda 1** e deixá-lo escolher. Custa nada e dá-lhe sensação de autoria.

---

## 📷 Fotografia real — trabalhos da Yes, We Do

53 projetos em `/img/portfolio/` (+ 1 vídeo). Estes são o coração da brochura.

| Categoria | Nº de trabalhos | Estado |
|---|---|---|
| Stands & Eventos | 21 | ✅ Material abundante — merece o spread mais forte |
| Lonas & Impressão | 10 | ✅ Bom |
| Reclames Luminosos | 7 | ✅ Bom |
| Sinaléticas | 7 | ✅ Bom |
| Letras Recortadas | 5 | ✅ Suficiente |
| Decoração de Viaturas | **1** | ⚠️ Lacuna — coberta por IA acima |
| Decoração de Montras | **2** | ⚠️ Lacuna — coberta por IA acima |

**Vídeo:** apenas `instalacao-lona-hospital.mp4`. Vale a pena pedir mais 2-3 ao Miguel — vídeo de instalação é dos conteúdos que melhor vende numa brochura digital.

**Melhores fotos para páginas hero** (seleção por qualidade fotográfica): `reclame-lusiadas`, `liu-jo-stand-porto`, `spmec-photobooth`, `steve-madden`, `abreu-expo-premio`, `homy-casa-jysk`, `renault-decoracao-viatura`.

---

## ❌ Ainda em falta (não gerável por IA)

- **Logótipos vetoriais dos clientes** para a página 13 (Lusíadas, Liu Jo, Steve Madden, Renault, JYSK/Homy Casa, SPMEC, Abreu, Cleva, Amani Spa). Tem de vir do cliente ou usar as versões públicas com autorização.
- **Ícones dos 12 serviços** — a desenhar em SVG à mão. IA não dá consistência num set. Linha 1.5px, cantos arredondados, estilo do site.
- **Mockups de apresentação** da brochura (a gerar depois de haver páginas reais para compor por cima).
- **OG image** `og-brochura.jpg` 1200×630 — deriva da capa escolhida + logo real sobreposto.

---

## Como gerar mais

```bash
./gen-brochura-img.sh <nome> "<prompt em pt sem acentos>"
./proc-brochura-img.sh <nome>     # ou sem argumento para processar tudo
```

Regras de prompt que funcionaram:
- Especificar **formato** ("horizontal 3:2" ou "VERTICAL retrato, proporcao A4")
- Pedir **contexto português** (azulejo, calçada, fachada de pedra) — a diferença de realismo é enorme
- **"SEM logotipos de marcas reais"** + nome fictício curto (4-5 letras) → texto sai limpo
- **"O texto tem de estar perfeitamente legivel e bem formado"** → evita letras deformadas
- Para fundos: **"muito escura e discreta para permitir texto branco por cima com contraste alto"**
