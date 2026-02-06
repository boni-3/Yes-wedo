# PRD - Yes, We Do - Landing Page 2026

## 1. Visão Geral do Projeto

### Empresa
**Yes, We Do (Yes Wedo, Lda.)**
Agência de Publicidade, Comunicação e Design
Fundada: Janeiro 2024
Sede: Av. D. João I 81, 4435-208 Rio Tinto, Portugal
Website atual: https://yes-wedo.pt

### Objetivo
Criar uma landing page espetacular, moderna e dinâmica que transmita a essência da marca "Yes, We Do" — uma agência criativa e proativa que diz "sim" aos desafios dos seus clientes. A página deve ser visualmente impressionante, com animações fluidas, design limpo e uma experiência de utilizador que reflita tendências de 2026.

---

## 2. Público-Alvo

- Empresas e marcas portuguesas que procuram serviços de publicidade, comunicação e design
- PMEs e startups na região do Porto/Grande Porto
- Empresários e diretores de marketing
- Faixa etária: 25-55 anos
- Perfil: Decisores que valorizam criatividade, profissionalismo e resultados

---

## 3. Identidade da Marca

### Tom de Comunicação
- Confiante, mas acessível
- Profissional, mas criativo
- Proativo — "Sim, nós fazemos!"
- Português de Portugal (PT-PT)

### Paleta de Cores
- **Preto** (#0A0A0A) — Cor principal, sofisticação
- **Branco** (#FFFFFF) — Limpeza, clareza
- **Amarelo/Dourado** (#F5C518) — Energia, destaque, CTA
- **Cinza escuro** (#1A1A1A) — Backgrounds
- **Cinza claro** (#F5F5F5) — Secções alternadas

### Tipografia
- **Títulos**: Font moderna geométrica (Inter/Space Grotesk)
- **Corpo**: Clean sans-serif (Inter)
- **Destaque**: Peso bold para mensagens-chave

---

## 4. Estrutura da Página

### 4.1 Hero Section (Secção Principal) — IMPACTO MÁXIMO
**Conceito**: Entrada cinematográfica com vídeo/animação de fundo mostrando imagens dos serviços (design, impressão, marketing digital, eventos) que se movem dinamicamente. O texto "Yes, We Do" aparece com uma animação espetacular de revelação — letra por letra com efeito de morphing/glitch que depois se estabiliza.

**Elementos**:
- Background com partículas/formas geométricas animadas em 3D
- Texto "Yes, We Do" com animação de entrada impactante (split text animation)
- Subtitle: "Criatividade sem limites. Resultados que falam."
- CTA: "Vamos conversar" (botão com hover magnético)
- Scroll indicator animado
- Efeito parallax no scroll

### 4.2 Barra de Marquee (Ticker)
- Faixa contínua com palavras-chave dos serviços em movimento horizontal
- "DESIGN • PUBLICIDADE • BRANDING • MARKETING DIGITAL • IMPRESSÃO • EVENTOS • COMUNICAÇÃO"

### 4.3 Sobre Nós
**Conceito**: Secção clean com texto à esquerda e imagem/gráfico animado à direita.

**Conteúdo**:
- "Somos a Yes, We Do"
- "+10 anos de experiência combinada"
- "Fundada por profissionais apaixonados por comunicação"
- "De Rio Tinto para o mundo — dizemos sim aos desafios"
- Contador animado de: Anos de experiência, Projetos realizados, Clientes satisfeitos

### 4.4 Serviços
**Conceito**: Cards interativos com hover effects e micro-animações. Cada card revela mais informação ao interagir.

**Serviços**:
1. **Design Gráfico** — Identidade visual, logótipos, packaging, materiais gráficos
2. **Publicidade** — Campanhas publicitárias, estratégia de comunicação
3. **Marketing Digital** — Gestão de redes sociais, SEO, SEM, content marketing
4. **Web Design & Desenvolvimento** — Websites, landing pages, e-commerce
5. **Branding** — Criação e revitalização de marcas
6. **Impressão & Produção** — Materiais impressos, merchandising, sinalética
7. **Eventos** — Organização e comunicação de eventos
8. **Consultoria** — Estratégia de comunicação e marketing

### 4.5 Portfolio / Trabalhos
**Conceito**: Galeria com layout masonry/grid dinâmico, com hover effects que mostram detalhes do projeto. Imagens com efeito de revelação no scroll.

- Placeholders para projetos reais (a adicionar pelo cliente)
- Filtros por categoria
- Animação de entrada staggered

### 4.6 Processo de Trabalho
**Conceito**: Timeline horizontal ou vertical com steps animados.

1. **Ouvir** — Compreendemos as suas necessidades
2. **Pensar** — Desenvolvemos a estratégia
3. **Criar** — Damos vida às ideias
4. **Entregar** — Resultados que superam expectativas

### 4.7 Testemunhos
- Carousel/slider com citações de clientes
- Design minimalista com aspas grandes
- Animação de fade entre testemunhos

### 4.8 CTA Section
- Grande mensagem: "Tem um projeto em mente?"
- Subtítulo: "Diga-nos o que precisa. A nossa resposta será sempre: Yes, We Do."
- Botão: "Iniciar Projeto" / "Contactar-nos"

### 4.9 Contacto
- Morada: Av. D. João I 81, 4435-208 Rio Tinto
- Mapa interativo
- Formulário de contacto simples (Nome, Email, Telefone, Mensagem)
- Links para redes sociais

### 4.10 Footer
- Logo
- Links rápidos
- Informação legal (NIF, registo)
- "© 2026 Yes, We Do. Todos os direitos reservados."

---

## 5. Requisitos Técnicos

### Stack Tecnológico
- **Framework**: HTML5 + CSS3 + JavaScript vanilla (performance máxima)
- **Animações**: GSAP (GreenSock) para animações profissionais
- **3D/Partículas**: Three.js ou Canvas API para o hero
- **Scroll animations**: GSAP ScrollTrigger
- **Build**: Sem dependências pesadas — foco em performance
- **Hosting-ready**: Static site, fácil de deployar

### Performance
- Lighthouse score > 90 em todas as métricas
- First Contentful Paint < 1.5s
- Lazy loading para imagens
- Animações otimizadas com GPU (transform, opacity)
- Prefers-reduced-motion respeitado

### Responsividade
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px, 1920px
- Navegação hamburger no mobile
- Touch-friendly em todos os dispositivos

### SEO
- Meta tags otimizadas em PT-PT
- Open Graph tags
- Schema.org structured data
- Semantic HTML5
- Sitemap.xml

### Acessibilidade
- WCAG 2.1 AA compliance
- Alt text em imagens
- Contraste de cores adequado
- Navegação por teclado
- Focus states visíveis

---

## 6. Animações Detalhadas

### Hero Entry (Sequência)
1. Ecrã preto (0s)
2. Partículas/formas geométricas começam a aparecer e movimentar-se (0.5s)
3. Imagens dos serviços fazem flash rápido em background com overlay (1s)
4. "Yes," aparece da esquerda com efeito de slide + fade (1.5s)
5. "We Do" aparece da direita com o mesmo efeito (2s)
6. Burst de partículas douradas ao completar (2.5s)
7. Subtitle fades in (3s)
8. CTA e scroll indicator aparecem (3.5s)

### Scroll Animations
- Elementos entram com stagger ao entrar no viewport
- Parallax sutil nos backgrounds
- Números dos contadores animam ao ficar visíveis
- Cards dos serviços aparecem com scale + fade
- Imagens do portfolio revelam-se com clip-path

### Micro-interações
- Cursor personalizado (dot + circle)
- Hover magnético nos botões
- Text scramble on hover nos links
- Smooth scroll entre secções

---

## 7. Conteúdo (PT-PT)

### Taglines
- Principal: "Yes, We Do."
- Secundária: "Criatividade sem limites. Resultados que falam."
- CTA: "Vamos transformar a sua ideia em realidade."

### Idioma
- Todo o conteúdo em Português de Portugal (PT-PT)
- Vocabulário: "utilizador" (não "usuário"), "telemóvel" (não "celular"), etc.

---

## 8. Entregáveis

1. Landing page completa e funcional
2. Código fonte organizado e comentado
3. Assets otimizados
4. README com instruções de setup e deploy

---

## 9. Métricas de Sucesso

- Tempo de permanência na página > 2 minutos
- Taxa de bounce < 40%
- Conversões via formulário de contacto
- Performance Lighthouse > 90

---

## 10. Timeline

- Fase 1: PRD e estrutura do projeto ✅
- Fase 2: Desenvolvimento do hero e animações
- Fase 3: Secções de conteúdo
- Fase 4: Responsividade e otimização
- Fase 5: Testes e entrega
