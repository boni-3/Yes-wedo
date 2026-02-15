# PRD - Yes, We Do - Landing Page 2026

## 1. Visao Geral do Projeto

### Empresa
**Yes, We Do (Yes Wedo, Lda.)**
Agencia de Publicidade, Comunicacao e Design
Fundada: Janeiro 2024
Sede: Av. D. Joao I 81, 4435-208 Rio Tinto, Portugal
Website: https://yes-wedo.pt

### Objetivo
Criar uma landing page espetacular, moderna e dinamica que transmita a essencia da marca "Yes, We Do" — uma agencia criativa e proativa que diz "sim" aos desafios dos seus clientes. A pagina deve ser visualmente impressionante, com animacoes fluidas, design limpo e uma experiencia de utilizador que reflita tendencias de 2026.

### Estado Atual
Website em producao em yes-wedo.pt, alojado no GitHub Pages com dominio personalizado.

---

## 2. Publico-Alvo

- Empresas e marcas portuguesas que procuram servicos de publicidade, comunicacao e design
- PMEs e startups na regiao do Porto/Grande Porto
- Empresarios e diretores de marketing
- Faixa etaria: 25-55 anos
- Perfil: Decisores que valorizam criatividade, profissionalismo e resultados

---

## 3. Identidade da Marca

### Tom de Comunicacao
- Confiante, mas acessivel
- Profissional, mas criativo
- Proativo — "Sim, nos fazemos!"
- Portugues de Portugal (PT-PT)

### Paleta de Cores (Implementada)
- **Laranja** (#F04320) — Cor principal, CTAs, acentos
- **Azul** (#529BCA) — Cor secundaria
- **Magenta** (#BA046A) — Cor terciaria
- **Escuro** (#111827) — Backgrounds
- **Azul escuro** (#0F1B2D) — Hero gradient, nav background
- **Branco** (#FFFFFF) — Textos e limpeza
- Cada cor tem variantes `-light` e `-dark` definidas como CSS custom properties

### Tipografia (Implementada)
- **Titulos**: Space Grotesk — geometrica, moderna (self-hosted woff2)
- **Corpo**: Inter — clean sans-serif (self-hosted woff2)
- Peso bold para mensagens-chave

---

## 4. Estrutura das Paginas

### 4.1 index.html — Pagina Principal

#### Hero Section — IMPACTO MAXIMO ✅
- Video de fundo (3.5MB, 720p, otimizado) com poster para LCP instantaneo
- Headline: "A sua marca merece ser vista"
- Tagline: "Marketing & publicidade que transforma ideias em impacto visual. De Rio Tinto para todo o pais."
- CTAs: "Iniciar projeto" e "Ver servicos"
- Scroll indicator animado
- Animacao de entrada sequencial com GSAP timeline

#### Barra de Marquee (Ticker) ✅
- Faixa continua com palavras-chave dos servicos em movimento horizontal
- Loop infinito com CSS keyframes (conteudo duplicado no HTML)

#### Servicos (12 cards) ✅
- Cards interativos com hover effects e micro-animacoes
- Grid responsivo com stagger animation no scroll

**Servicos implementados:**
1. **Flyers & Brochuras** — Design e impressao de materiais promocionais
2. **Lonas & Stands** — Banners e estruturas para eventos
3. **Sinaleticas** — Sinalizacao interior e exterior
4. **Merchandising** — Produtos promocionais personalizados
5. **Reclames Luminosos** — Letreiros iluminados LED e neon
6. **Impressao Grandes Formatos** — Vinil, outdoors, paineis
7. **Decoracao de Montras** — Vitrinas e fachadas de lojas
8. **Decoracao de Viaturas** — Personalizacao de veiculos com vinil
9. **Paginas Web** — Design e desenvolvimento de websites
10. **Eventos** — Organizacao e producao de eventos
11. **Decoracao de Espacos** — Interiores comerciais
12. **Neons** — Letreiros e decoracoes neon personalizados

#### Portfolio ✅
- Galeria horizontal com scroll GSAP no desktop, scroll nativo com snap no mobile
- 7 projetos apresentados com link para pagina completa
- Link "Ver todos os trabalhos" para portfolio.html

#### Sobre Nos ✅
- Texto sobre a empresa com foto de equipa
- Contadores animados: 10+ anos, 150+ projetos, 80+ clientes, 100% dedicacao

#### Processo ✅
- Timeline de 4 passos com animacao stagger:
  1. Reuniao — Compreendemos as necessidades
  2. Planeamento — Desenvolvemos a estrategia
  3. Execucao — Damos vida as ideias
  4. Entrega — Resultados que superam expectativas

#### Testemunhos ✅
- Slider auto-rotativo (5s) com navegacao por dots
- Medicao dinamica de altura para evitar layout shift

#### CTA Section ✅
- Mensagem de chamada a acao com animacao de entrada

#### Contacto ✅
- Formulario funcional (Nome, Email, Telefone, Mensagem)
- Submissao via Formspree com estados de sucesso/erro
- Nota de consentimento RGPD com link para Politica de Privacidade

#### Footer ✅
- Logo, links rapidos, informacao legal completa (NIF, registo, capital social)
- Links para redes sociais e paginas legais
- Link para Livro de Reclamacoes Eletronico

#### WhatsApp Button ✅
- Botao flutuante com popup mostrando os dois contactos dos socios (Hugo e Miguel)
- Mensagem pre-definida em portugues

#### Cookie Banner ✅
- Banner de consentimento com aceitar/rejeitar
- Conforme Lei 41/2004 e RGPD

### 4.2 portfolio.html — Galeria de Portfolio ✅

- Hero compacto
- Filtros por categoria (gerados dinamicamente a partir do JSON)
- Grid responsivo: 3 colunas (desktop), 2 (tablet), 1 (mobile)
- Lightbox com navegacao por setas, teclado e swipe
- Dados carregados de `data/portfolio-data.json`

### 4.3 Paginas Legais ✅

- **politica-privacidade.html** — Conforme RGPD Art. 13
- **politica-cookies.html** — Conforme Lei 41/2004, Lei 46/2012
- **termos-condicoes.html** — Conforme DL 7/2004, Lei 144/2015

---

## 5. Requisitos Tecnicos

### Stack Tecnologico ✅
- **HTML5 + CSS3 + JavaScript vanilla** — performance maxima, sem frameworks
- **GSAP 3.12.5** — animacoes profissionais (ScrollTrigger, ScrollToPlugin)
- **Formspree** — processamento de formulario de contacto
- **Fontes self-hosted** — Space Grotesk + Inter (woff2)
- **GitHub Pages** — alojamento estatico com HTTPS e dominio personalizado

### Performance ✅
- Critical CSS inline para first paint instantaneo
- Stylesheet principal carregado de forma assincrona
- Todas as fontes e scripts self-hosted (zero requests externos bloqueantes)
- Imagens em WebP otimizadas (60-240KB cada)
- Video hero comprimido com poster JPG para LCP
- Scripts com `defer`
- `font-display: swap`
- Lazy loading em imagens do portfolio
- Width/height explicitos em todas as imagens (CLS prevention)

### Responsividade ✅
- Mobile-first approach
- Breakpoints: 480px, 640px, 768px, 1024px, 1200px
- Navegacao hamburger no mobile
- Touch-friendly em todos os dispositivos
- Safe area insets para dispositivos com notch
- Detecao de `pointer: coarse` para esconder cursor custom

### SEO ✅
- Meta tags otimizadas em PT-PT
- Open Graph + Twitter Cards
- Schema.org JSON-LD (LocalBusiness + FAQPage)
- Semantic HTML5
- Sitemap.xml (2 paginas)
- robots.txt (permite bots principais)
- llms.txt (orientacao para crawlers de IA)
- URL canonico

### Acessibilidade ✅
- Skip-to-content link
- `:focus-visible` em todos os elementos interativos
- `aria-hidden` em SVGs decorativos
- `aria-live` em slider de testemunhos
- `aria-label` em botoes sem texto
- Alt text em todas as imagens
- Labels associados a todos os campos de formulario
- Touch targets minimos de 44px
- Contraste WCAG AA
- `prefers-reduced-motion: reduce` respeitado

---

## 6. Animacoes Implementadas

### Hero Entry (Sequencia) ✅
1. Video background com poster visivel instantaneamente
2. Headline fade-in com translate
3. Tagline fade-in com atraso
4. CTAs fade-in
5. Scroll indicator fade-in

### Scroll Animations ✅
- `.reveal-up` e `.reveal-text` animam ao entrar no viewport (ScrollTrigger)
- Service cards com stagger (0.1s entre cada)
- Process steps com stagger (0.15s entre cada)
- Contadores animam de 0 ao valor final (2.5s)
- CTA section com entrada stagger

### Micro-interacoes ✅
- Cursor personalizado com lerp (dot + outline seguem o rato com lag)
- Hover magnetico nos botoes (`.magnetic`)
- Text scramble on hover nos links de navegacao
- Smooth scroll entre seccoes (GSAP ScrollToPlugin)
- Hero parallax no scroll (80px de deslocamento)

---

## 7. Conteudo (PT-PT)

### Taglines (Implementados)
- Principal: "A sua marca merece ser vista"
- Secundaria: "Marketing & publicidade que transforma ideias em impacto visual. De Rio Tinto para todo o pais."
- CTA: "Iniciar projeto"

### Idioma
- Todo o conteudo em Portugues de Portugal (PT-PT)
- Vocabulario: "utilizador" (nao "usuario"), "telemovel" (nao "celular"), etc.

---

## 8. Entregaveis

1. ✅ Landing page completa e funcional (index.html)
2. ✅ Pagina de portfolio com filtros e lightbox (portfolio.html)
3. ✅ Paginas legais (privacidade, cookies, termos)
4. ✅ Formulario de contacto funcional (Formspree)
5. ✅ Botao flutuante de WhatsApp
6. ✅ Cookie banner conforme legislacao
7. ✅ Codigo fonte organizado
8. ✅ Assets otimizados (WebP, video comprimido)
9. ✅ Documentacao completa (CLAUDE.md, DEVELOPER.md, DOCUMENTACAO-CLIENTE.md, compliance-report.md)
10. ✅ Script de automacao para portfolio (add-portfolio.sh)

---

## 9. Metricas de Sucesso

- Tempo de permanencia na pagina > 2 minutos
- Taxa de bounce < 40%
- Conversoes via formulario de contacto
- Conversoes via WhatsApp
- Performance Lighthouse > 90

---

## 10. Timeline

- Fase 1: PRD e estrutura do projeto ✅
- Fase 2: Desenvolvimento do hero e animacoes ✅
- Fase 3: Seccoes de conteudo ✅
- Fase 4: Responsividade e otimizacao ✅
- Fase 5: Pagina de portfolio ✅
- Fase 6: Conformidade legal (RGPD, cookies, termos) ✅
- Fase 7: WhatsApp + otimizacoes finais ✅
- Fase 8: Testes e entrega ✅

---

## 11. Pendente (Responsabilidade do Cliente)

| # | Acao | Prioridade |
|---|---|---|
| 1 | Criar conta Google Analytics e fornecer Measurement ID (G-XXXXXXXXXX) | Alta |
| 2 | Criar Meta Pixel e fornecer Pixel ID | Alta |
| 3 | Registar empresa em www.livroreclamacoes.pt com NIF PT517927977 | Alta |
| 4 | Criar/verificar Google Business Profile em business.google.com | Alta |
| 5 | Submeter site no Google Search Console | Media |
| 6 | Expandir portfolio com mais projetos (fotos dos trabalhos realizados) | Media |
| 7 | Adicionar testemunhos reais com foto e nome do cliente | Media |
