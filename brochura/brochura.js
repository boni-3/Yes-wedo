/* ==========================================================================
   Brochura Yes, We Do — versão DIGITAL
   Lê data/brochura-content.json (a mesma fonte do print) e monta:
     · ≥1024px → folheto com virar de página (StPageFlip)
     · <1024px → scroll vertical com snap
   ========================================================================== */
(function () {
  'use strict';

  /* Dimensão base da página. No telemóvel usamos uma base MAIS ESTREITA:
     escalar a página de 700px para um ecrã de 430 dava fator 0,58 e o texto
     de 14,5px aparecia a 8,4px. Com base 480 o fator sobe para ~0,85 e o
     texto lê-se. O conteúdo é o mesmo, o layout é que se reorganiza. */
  var PW = 700, PH = 990;
  var PW_RETRATO = 480, PH_RETRATO = 679;   // mesmo rácio A4
  var LIMITE_FLIP = 1024;            // abaixo disto, scroll
  var D = null, flip = null, modo = null;
  var hashInicial = location.hash.slice(1);   // lido ANTES de qualquer replaceState

  /* ---------- utilitários ---------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* Evento para o GA4. Não rebenta se o gtag ainda não existir —
     o site pode ganhar analytics mais tarde sem mexer aqui. */
  function ev(nome, dados) {
    try {
      if (typeof window.gtag === 'function') window.gtag('event', nome, dados || {});
      (window.dataLayer = window.dataLayer || []).push(
        Object.assign({ event: nome }, dados || {}));
    } catch (e) { /* analytics nunca pode partir a página */ }
  }

  var ICO = {
    wa: '<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/></svg>',
    tel: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>',
    orc: '<svg viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7V9zm0 4h7v2H7v-2zM7 5h10v2H7V5z"/></svg>',
    part: '<svg viewBox="0 0 24 24"><path d="M18 16a3 3 0 0 0-2 .8L9 12.7v-.7l6.9-4.1A3 3 0 1 0 15 5v.4L8.1 9.5a3 3 0 1 0 0 5l7 4.1c0 .1-.1.3-.1.4a3 3 0 1 0 3-3z"/></svg>',
    ant: '<svg viewBox="0 0 24 24"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z"/></svg>',
    seg: '<svg viewBox="0 0 24 24"><path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z"/></svg>',
    som: '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>',
    mudo: '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm18.5-1.1-1.4-1.4L17 9.6 13.9 6.5l-1.4 1.4 3.1 3.1-3.1 3.1 1.4 1.4 3.1-3.1 3.1 3.1 1.4-1.4-3.1-3.1 3.1-3.1z"/></svg>',
    full: '<svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>',
    mais: '<svg viewBox="0 0 24 24"><path d="M11 5h2v14h-2z"/><path d="M5 11h14v2H5z"/></svg>',
    lamp: '<svg viewBox="0 0 24 24"><path d="M9 21h6v-1H9v1zm3-19A7 7 0 0 0 8 15c.7.8 1.2 1.5 1.4 2.5h5.2c.2-1 .7-1.7 1.4-2.5A7 7 0 0 0 12 2zm0 2a5 5 0 0 1 3 9c-.5.6-.9 1.2-1.2 1.9h-3.6c-.3-.7-.7-1.3-1.2-1.9A5 5 0 0 1 12 4z"/></svg>',
    cubo: '<svg viewBox="0 0 24 24"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.3 6.5 3.6L12 11.5 5.5 7.9 12 4.3zM5 9.6l6 3.3v6.9l-6-3.3V9.6zm8 10.2v-6.9l6-3.3v6.9l-6 3.3z"/></svg>'
  };

  /* Link de WhatsApp com a mensagem já escrita — o contacto chega
     identificado com o serviço (ou o projeto) que interessou. */
  function waMsg(texto) {
    return 'https://wa.me/' + D.empresa.whatsapp + '?text=' + encodeURIComponent(texto);
  }
  function waLink(servico) {
    return waMsg(servico
      ? 'Olá! Vi a vossa brochura e tenho interesse em ' + servico + '.'
      : 'Olá! Vi a vossa brochura e queria pedir um orçamento.');
  }

  /* ==========================================================================
     ANIMAÇÃO
     A oferta vendida inclui "animações iguais às do site", por isso usamos o
     mesmo GSAP que já está no repo (self-hosted, sem CDN). Discreto de
     propósito: no folheto o virar de página já é a animação principal e duas
     coisas a mexer ao mesmo tempo competem entre si.
     ========================================================================== */

  var SEM_MOVIMENTO = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var temGsap = function () { return typeof window.gsap !== 'undefined'; };

  /* Anima uma página quando ela fica visível. Idempotente: só corre uma vez
     por página (marca com data-animada). */
  function animaPagina(pg) {
    if (!pg || pg.dataset.animada) return;
    pg.dataset.animada = '1';

    var contadores = pg.querySelectorAll('.num__n');

    if (SEM_MOVIMENTO || !temGsap()) {
      contadores.forEach(function (c) { c.textContent = c.dataset.alvo; });
      pg.classList.add('vista');
      return;
    }

    var tl = window.gsap.timeline();

    // entrada do conteúdo: sobe e revela, em cascata
    var alvos = pg.querySelectorAll(
      '.kicker, .h1, .tagline, .corpo p, .serv__hero, .serv__video, .quem__img,' +
      '.grid-serv .sc, .passo, .razao, .logos img, .apoio__w, .cta-linha,' +
      '.cta-servico, .manif, .manif__ass, .destaque, .contactos > div, .qr,' +
      '.hotspot, .luz-btn'
    );
    if (alvos.length) {
      tl.fromTo(alvos,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: .55, ease: 'power2.out', stagger: .045 }, 0);
    }

    // contadores: 0 → valor, com o mesmo ritmo do site
    contadores.forEach(function (c, i) {
      var o = { v: 0 };
      tl.to(o, {
        v: parseInt(c.dataset.alvo, 10),
        duration: 1.1,
        ease: 'power2.out',
        onUpdate: function () { c.textContent = Math.round(o.v); }
      }, .15 + i * .08);
    });

    pg.classList.add('vista');
  }

  /* ==========================================================================
     INCLINAÇÃO 3D
     Partilhada pelo lightbox e pelas fichas de projeto. É o que dá a sensação
     de a fotografia ter descolado da folha: ela responde ao rato (desktop) ou
     ao inclinar do telemóvel (giroscópio).
     `baseY` é a inclinação de repouso — a ficha fica ligeiramente virada, o
     lightbox fica a direito, e o tilt oscila à volta desse valor.
     Devolve uma função para desligar (obrigatório chamar ao fechar).
     ========================================================================== */

  /* O giroscópio no iOS 13+ exige autorização explícita e SÓ pode ser pedida
     de dentro de um gesto do utilizador. Pedimos uma vez por sessão, no toque
     que abre a fotografia. Se for recusada, segue sem tilt e em silêncio —
     nunca é um erro visível. */
  var giroEstado = 0;   // 0 = por pedir, 1 = concedido, -1 = recusado/indisponível
  function pedeGiro() {
    if (giroEstado !== 0) return;
    var DOE = window.DeviceOrientationEvent;
    if (!DOE) { giroEstado = -1; return; }
    if (typeof DOE.requestPermission !== 'function') { giroEstado = 1; return; }
    giroEstado = -1;   // pessimista até haver resposta
    try {
      DOE.requestPermission().then(function (r) {
        giroEstado = (r === 'granted') ? 1 : -1;
      }).catch(function () {});
    } catch (e) {}
  }

  function liga3d(el, zona, opts) {
    opts = opts || {};
    var max = opts.max || 6, baseY = opts.baseY || 0;
    if (SEM_MOVIMENTO || !temGsap() || !el || !zona) return function () {};

    var qx = window.gsap.quickTo(el, 'rotationX', { duration: .5, ease: 'power2.out' });
    var qy = window.gsap.quickTo(el, 'rotationY', { duration: .5, ease: 'power2.out' });

    function mover(e) {
      var r = zona.getBoundingClientRect();
      if (!r.width || !r.height) return;
      var dx = (e.clientX - r.left) / r.width - .5;    // -0.5 … 0.5
      var dy = (e.clientY - r.top) / r.height - .5;
      qy(baseY + dx * max * 2);
      qx(-dy * max * 2);
    }
    function repousa() { qy(baseY); qx(0); }

    /* beta = inclinação frente/trás, gamma = esquerda/direita. Tomamos 45°
       como posição neutra de quem segura o telemóvel a ler. */
    function orienta(e) {
      if (e.gamma == null) return;
      var gx = Math.max(-1, Math.min(1, e.gamma / 30));
      var gy = Math.max(-1, Math.min(1, ((e.beta == null ? 45 : e.beta) - 45) / 30));
      qy(baseY + gx * max);
      qx(-gy * max);
    }

    zona.addEventListener('pointermove', mover);
    zona.addEventListener('pointerleave', repousa);
    if (giroEstado === 1) window.addEventListener('deviceorientation', orienta);

    return function () {
      zona.removeEventListener('pointermove', mover);
      zona.removeEventListener('pointerleave', repousa);
      window.removeEventListener('deviceorientation', orienta);
    };
  }

  /* ==========================================================================
     MOTOR 3D
     Geometria a sério, não fotografias: cada caixa são 6 faces posicionadas
     no espaço com preserve-3d. Zero bibliotecas.
     Ensaiou-se antes o caminho das imagens (8 vistas geradas por IA, a fazer
     de turntable) e não serve: mantém o estilo mas não a geometria — as
     peças deformavam-se entre fotogramas. Ver docs/PLANO-BROCHURA-3D.md.

     ⚠️ Isto vive SEMPRE no overlay, nunca dentro de uma .pg: a StPageFlip já
     aplica os seus próprios transforms e os dois contextos 3D brigam.
     ========================================================================== */

  /* Brilho fixo por orientação da face. É uma simplificação da luz, mas com
     a peça a rodar lê-se como volume — que é o que interessa. */
  var BR3 = { frente: 1, tras: .68, esq: .84, dir: .90, topo: 1.18, base: .45 };

  /* Uma face roda PRIMEIRO e só depois é empurrada ao longo do seu próprio
     eixo Z. Trocar a ordem faz as caixas não fecharem. */
  function face3(w, h, tr, cor, br) {
    var d = document.createElement('div');
    d.className = 'f3';
    d.style.cssText = 'left:' + (-w / 2) + 'px;top:' + (-h / 2) + 'px;width:' + w +
      'px;height:' + h + 'px;transform:' + tr + ';background:' + cor +
      ';filter:brightness(' + br + ')';
    return d;
  }

  function caixa3(o) {
    var l = o.l, a = o.a, p = o.p, cor = o.cor;
    var c = document.createElement('div');
    c.className = 'cx3';
    c.style.cssText = 'transform:translate3d(' + (o.x || 0) + 'px,' + (o.y || 0) +
      'px,' + (o.z || 0) + 'px)';
    [ face3(l, a, 'translateZ(' + (p / 2) + 'px)', cor, BR3.frente),
      face3(l, a, 'rotateY(180deg) translateZ(' + (p / 2) + 'px)', cor, BR3.tras),
      face3(p, a, 'rotateY(90deg) translateZ(' + (l / 2) + 'px)', cor, BR3.dir),
      face3(p, a, 'rotateY(-90deg) translateZ(' + (l / 2) + 'px)', cor, BR3.esq),
      face3(l, p, 'rotateX(90deg) translateZ(' + (a / 2) + 'px)', o.corTopo || cor, BR3.topo),
      face3(l, p, 'rotateX(-90deg) translateZ(' + (a / 2) + 'px)', cor, BR3.base)
    ].forEach(function (f) { c.appendChild(f); });
    return c;
  }

  /* Marca aplicada a uma face. Fica 2,5px à frente: a 0,6px o navegador não
     decidia de forma fiável o que vinha primeiro e o decalque desaparecia
     atrás da face nuns sítios e não noutros. Coplanares não são de fiar. */
  function decalque3(o) {
    var d = document.createElement('div');
    d.className = 'dec3';
    d.style.cssText = 'left:' + (-o.l / 2) + 'px;top:' + (-o.a / 2) + 'px;width:' + o.l +
      'px;height:' + o.a + 'px;transform:translate3d(' + (o.x || 0) + 'px,' +
      (o.y || 0) + 'px,' + (o.z || 0) + 'px)' + (o.rot || '') + ' translateZ(2.5px);' +
      'background-image:url(' + o.src + ');filter:brightness(' + (o.br || 1) + ')';
    return d;
  }

  /* Extrusão de uma silhueta PNG: N cópias empilhadas, as de trás
     escurecidas — é a aresta de acrílico cortado. O logótipo é ilustrado à
     mão e não existe em SVG, por isso esta é a única via fiel à forma. */
  function extrusao3(o) {
    var n = o.camadas || 30, passo = o.prof / n;
    var c = document.createElement('div');
    c.className = 'cx3';
    for (var i = n; i >= 0; i--) {
      var im = document.createElement('img');
      im.src = o.src; im.alt = ''; im.draggable = false;
      var frente = (i === n);
      im.style.cssText = 'position:absolute;left:' + (-o.l / 2) + 'px;top:' + (-o.a / 2) +
        'px;width:' + o.l + 'px;height:auto;transform:translateZ(' +
        (-o.prof / 2 + i * passo) + 'px);filter:brightness(' +
        (frente ? 1 : (.34 + .22 * (i / n))) + ')' + (frente ? '' : ' saturate(.9)');
      c.appendChild(im);
    }
    return c;
  }

  /* Órbita nos dois eixos. O horizontal roda livremente; o vertical é
     LIMITADO — sem limite a peça capota e perde-se a noção de chão.
     Devolve uma função para desligar (o intervalo tem de morrer ao fechar). */
  function orbita3(palco, obj, op) {
    op = op || {};
    var ry = op.ry === undefined ? 26 : op.ry, rx = op.rx === undefined ? -14 : op.rx;
    var arr = false, x0 = 0, y0 = 0, ry0 = 0, rx0 = 0, auto = null;

    function poe(nry, nrx) {
      ry = nry; rx = Math.max(-62, Math.min(30, nrx));
      obj.style.transform = 'translate(-50%,-50%) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
    }
    poe(ry, rx);
    function para() { if (auto) { clearInterval(auto); auto = null; } }

    function baixo(e) {
      arr = true; x0 = e.clientX; y0 = e.clientY; ry0 = ry; rx0 = rx;
      try { palco.setPointerCapture(e.pointerId); } catch (err) {}
      palco.classList.add('a-rodar'); para();
    }
    function move(e) { if (arr) poe(ry0 + (e.clientX - x0) * .55, rx0 - (e.clientY - y0) * .45); }
    function cima() { arr = false; palco.classList.remove('a-rodar'); }
    /* a peça é conteúdo: tem de ser explorável sem rato */
    function tecla(e) {
      var k = { ArrowLeft: [-6, 0], ArrowRight: [6, 0], ArrowUp: [0, 6], ArrowDown: [0, -6] }[e.key];
      if (!k) return;
      e.preventDefault(); e.stopPropagation(); para(); poe(ry + k[0], rx + k[1]);
    }
    palco.addEventListener('pointerdown', baixo);
    palco.addEventListener('pointermove', move);
    palco.addEventListener('pointerup', cima);
    palco.addEventListener('pointercancel', cima);
    palco.addEventListener('keydown', tecla);
    if (!SEM_MOVIMENTO) {
      auto = setInterval(function () { if (!arr) poe(ry + .32, rx); }, 32);
      palco.addEventListener('pointerenter', para);
    }
    return function () { para(); };
  }

  /* Aponta para a versão leve em img/brochura/web/ (1200px, ~47% menor).
     Espelha a função pr() do print.js. Se o ficheiro não existir, o onerror
     no <img> volta ao original — nunca fica sem imagem. */
  function web(src) {
    if (!src || /\.svg$/i.test(src)) return src;
    return '/img/brochura/web/' + src.split('/').pop();
  }
  function img(src, cls, alt, extra) {
    var zoom = /apoio|serv__hero|quem__img/.test(cls || '') ||
               (extra === undefined && !cls);
    return '<img' + (cls ? ' class="' + cls + '"' : '') +
           (zoom ? ' role="button" tabindex="0" title="Clique para ampliar"' : '') +
           ' src="' + web(src) + '" alt="' + esc(alt || '') + '"' +
           ' onerror="this.onerror=null;this.src=\'' + src + '\'"' +
           (extra || ' loading="lazy"') + '>';
  }

  /* ---------- blocos reutilizáveis ---------- */

  function folio(p, rot) {
    return '<div class="folio"><span>' + esc(rot || 'Yes, We Do') +
           '</span><b>' + p.n + '</b></div>';
  }
  function paras(a) {
    return '<div class="corpo">' + (a || []).map(function (t) {
      return '<p>' + esc(t) + '</p>';
    }).join('') + '</div>';
  }
  function bg(src, plain) {
    if (!src) return '';
    return '<div class="pg__bg' + (plain ? ' pg__bg--plain' : '') + '">' +
           img(src, '', '', ' fetchpriority="high"') + '</div>';
  }
  /* Separa "105+" em número e sufixo para o contador poder animar só o número.
     Se o valor não começar por dígitos, fica estático. */
  function nums(lista, cls) {
    return '<div class="nums ' + (cls || '') + '">' + lista.map(function (n) {
      var m = String(n.valor).match(/^(\d+)(.*)$/);
      var v = m
        ? '<span class="num__n" data-alvo="' + m[1] + '">0</span>' +
          '<span class="num__s">' + esc(m[2]) + '</span>'
        : esc(n.valor);
      return '<div class="num"><div class="num__v">' + v + '</div>' +
             '<div class="num__l">' + esc(n.label) + '</div></div>';
    }).join('') + '</div>';
  }
  /* ---------- fichas de projeto e luz ---------- */

  function fichaDe(p, src) { return (p.fichas && p.fichas[src]) || null; }
  function noiteDe(p, src) { return (p.noite && p.noite[src]) || null; }

  /* O convite. Um ponto pulsante no canto da fotografia, só onde há mesmo
     ficha para mostrar — se aparecesse em todas deixava de querer dizer nada. */
  function hotspot(pid, src) {
    /* sem `title`: no telemóvel o balão fica preso no canto do ecrã e o
       aria-label já diz o mesmo a quem precisa */
    return '<button class="hotspot" data-pg="' + esc(pid) + '" data-src="' + esc(src) + '"' +
           ' aria-label="Ver detalhes deste projeto">' +
           '<span class="hotspot__anel"></span>' + ICO.mais + '</button>';
  }

  /* Modo noite: em vez de pintar luz por cima da foto de dia — que dava um
     nevoeiro esbranquiçado, não um reclame aceso — trocamos mesmo a
     fotografia pela versão noturna. O `data-src` só vira `src` no primeiro
     toque no interruptor: quem nunca acender a luz não descarrega nada.
     As versões noturnas são geradas por IA e levam selo de simulação. */
  function camadaNoite(src) {
    if (!src) return '';
    return '<img class="img-noite" data-src="' + src + '" alt="" aria-hidden="true">' +
           '<span class="selo-noite">Simulação noturna</span>';
  }

  /* Envolve uma imagem no que ela precisar. Se não precisar de nada devolve-a
     tal como estava: as páginas sem fichas nem luzes ficam com o DOM
     exatamente igual ao que já estava publicado. */
  function figura(p, src, htmlImg) {
    var f = fichaDe(p, src), noite = noiteDe(p, src);
    if (!f && !noite) return htmlImg;
    return '<div class="fig">' + htmlImg + camadaNoite(noite) +
           (f ? hotspot(p.id, src) : '') + '</div>';
  }

  /* Convite para a peça de amostra. Fica junto ao CTA de orçamento, porque é
     do mesmo lado da conversa: "veja o que está a comprar" → "peça-o". */
  function botao3d(p) {
    if (!p.peca3d) return '';
    return '<button class="btn3d" data-pg="' + esc(p.id) + '">' + ICO.cubo +
           '<span>Ver a peça em 3D</span></button>';
  }

  function botaoLuz(p) {
    if (!p.noite) return '';
    return '<button class="luz-btn" data-pg="' + esc(p.id) + '" aria-pressed="false"' +
           ' aria-label="Ver esta página de noite, com os reclames acesos">' +
           ICO.lamp + '<span class="luz-btn__t">Ver de noite</span></button>';
  }

  function apoio(p, marcar) {
    var l = p.apoio;
    if (!l || !l.length) return '';
    var n = l.length >= 5 ? 5 : 3;
    return '<div class="apoio apoio--' + n + '">' + l.map(function (s) {
      var f = fichaDe(p, s);
      /* .apoio__w já é position:relative — não é preciso outro invólucro */
      return '<div class="apoio__w">' + img(s) + camadaNoite(noiteDe(p, s)) +
             (marcar ? '<span class="simulacao">Simulação</span>' : '') +
             (f ? hotspot(p.id, s) : '') + '</div>';
    }).join('') + '</div>';
  }

  /* ---------- templates ---------- */

  var T = {
    capa: function (p) {
      return bg(p.arte, true) +
        '<div class="pg__in">' +
          '<div style="margin-top:auto">' +
            '<div class="capa__kicker">' + esc(p.kicker) + '</div>' +
            '<div class="capa__rule"></div>' +
            '<p class="capa__tag">' + esc(p.tagline) + '</p>' +
            '<div class="capa__rod">' + esc(p.rodape) + '</div>' +
          '</div>' +
        '</div>';
    },

    manifesto: function (p) {
      var n = (p.corpo || []).length;
      return '<div class="pg__in">' +
        (p.corpo || []).map(function (l, i) {
          return '<p class="manif' + (i === n - 1 ? ' manif--fim' : '') + '">' + esc(l) + '</p>';
        }).join('') +
        '<p class="manif__ass">' + esc(p.assinatura) + '</p>' +
      '</div>';
    },

    'quem-somos': function (p) {
      return '<div class="pg__in">' +
        img(p.imagem, 'quem__img', p.imagemAlt) +
        '<div class="kicker">' + esc(p.kicker) + '</div>' +
        '<h2 class="h1">' + esc(p.titulo) + '</h2>' + paras(p.corpo) +
        folio(p, 'Quem somos') + '</div>';
    },

    numeros: function (p, d) {
      return '<div class="pg__in">' +
        '<div class="kicker kicker--o">' + esc(p.kicker) + '</div>' +
        '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
        nums(d.empresa.numeros) + paras(p.corpo) +
        '<p class="destaque">' + esc(p.destaque) + '</p>' +
        folio(p, 'Em números') + '</div>';
    },

    'mapa-servicos': function (p) {
      return '<div class="pg__in">' +
        '<div class="kicker kicker--o">' + esc(p.kicker) + '</div>' +
        '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
        '<div class="corpo"><p>' + esc(p.intro) + '</p></div>' +
        '<div class="grid-serv">' + p.servicos.map(function (s, i) {
          return '<div class="sc"><div class="sc__n">' + String(i + 1).padStart(2, '0') + '</div>' +
            '<div class="sc__t">' + esc(s.nome) + '</div>' +
            '<div class="sc__d">' + esc(s.desc) + '</div></div>';
        }).join('') + '</div>' + folio(p, 'Serviços') + '</div>';
    },

    servico: function (p) {
      var simular = !!p._atencao;
      var media = p.video
        ? '<figure class="serv__video"><video src="' + p.video + '" poster="' +
            web(p.videoPoster) + '" muted loop playsinline preload="none"></video>' +
            (p.videoLegenda ? '<figcaption>' + esc(p.videoLegenda) + '</figcaption>' : '') +
          '</figure>'
        : figura(p, p.hero, img(p.hero, 'serv__hero', p.titulo));

      return '<button class="partilhar" data-id="' + p.id + '" ' +
               'aria-label="Partilhar esta secção">' + ICO.part + '</button>' +
        botaoLuz(p) +
        '<div class="pg__in">' + media +
          '<div class="kicker kicker--o">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          '<p class="tagline">' + esc(p.tagline) + '</p>' +
          '<div class="serv__grid">' + paras(p.corpo) +
            '<ul class="specs">' + (p.specs || []).map(function (s) {
              return '<li>' + esc(s) + '</li>';
            }).join('') + '</ul></div>' +
          apoio(p, simular) +
          '<p class="cta-linha">' + esc(p.cta) + '</p>' +
          '<div class="acoes-serv">' +
            '<a class="cta-servico" href="' + waLink(p.titulo) + '" target="_blank" ' +
               'rel="noopener" data-servico="' + esc(p.titulo) + '">' +
               ICO.wa + 'Pedir orçamento</a>' + botao3d(p) +
          '</div>' +
          folio(p, p.titulo) + '</div>';
    },

    'clientes-hibrido': function (p, d) {
      return '<div class="pg__in">' +
        '<div class="kicker kicker--o">' + esc(p.kicker) + '</div>' +
        '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
        '<div class="corpo"><p>' + esc(p.intro) + '</p></div>' +
        nums(d.empresa.numeros, 'nums--linha') +
        '<div class="logos">' + p.logos.map(function (l) {
          return '<img src="' + l.ficheiro + '" alt="' + esc(l.nome) + '" loading="lazy">';
        }).join('') + '</div>' +
        '<div class="nomes">' + p.nomes.map(function (n) {
          return '<span>' + esc(n) + '</span>';
        }).join('') + '<span class="mais">' + esc(p.remate) + '</span></div>' +
        folio(p, 'Clientes') + '</div>';
    },

    processo: function (p) {
      return '<div class="pg__in">' +
        '<div class="kicker kicker--o">' + esc(p.kicker) + '</div>' +
        '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
        '<div class="corpo"><p>' + esc(p.intro) + '</p></div>' +
        '<div style="margin-top:20px">' + p.passos.map(function (s) {
          return '<div class="passo"><div class="passo__n">' + esc(s.n) + '</div>' +
            '<div><div class="passo__t">' + esc(s.nome) + '</div>' +
            '<div class="passo__d">' + esc(s.desc) + '</div></div></div>';
        }).join('') + '</div>' + folio(p, 'Como trabalhamos') + '</div>';
    },

    'porque-nos': function (p) {
      return '<div class="pg__in">' +
        '<div class="kicker kicker--o">' + esc(p.kicker) + '</div>' +
        '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
        '<div class="razoes">' + p.razoes.map(function (r) {
          return '<div class="razao"><div class="razao__b"></div><div>' +
            '<div class="razao__t">' + esc(r.titulo) + '</div>' +
            '<div class="razao__d">' + esc(r.desc) + '</div></div></div>';
        }).join('') + '</div>' +
        '<p class="remate">' + esc(p.remate) + '</p>' +
        folio(p, 'Porquê nós') + '</div>';
    },

    'contra-capa': function (p, d) {
      var href = { whatsapp: waLink(null), tel: 'tel:' + d.empresa.telefones[1].replace(/\s/g, ''),
                   email: 'mailto:' + d.empresa.email };
      return '<div class="pg__in">' +
        '<div class="kicker kicker--o">' + esc(p.kicker) + '</div>' +
        '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
        '<div class="corpo"><p>' + esc(p.intro) + '</p></div>' +
        '<div class="contactos">' + p.ctas.map(function (c) {
          return '<div><div class="ct__l">' + esc(c.label) + '</div>' +
            '<a class="ct__v" href="' + (href[c.tipo] || '#') + '"' +
              (c.tipo === 'whatsapp' ? ' target="_blank" rel="noopener"' : '') +
              ' data-cta="' + c.tipo + '">' + esc(c.valor) + '</a></div>';
        }).join('') + '</div>' +
        '<div class="qr"><img src="/img/brochura/qr-brochura.png" alt="QR code da brochura">' +
          '<p>' + esc(p.qr.legenda) + '</p></div>' +
        (p.remate ? '<p class="remate-fim">' + esc(p.remate) + '</p>' : '') +
        '<div class="contra__rod">' + esc(p.rodape) + '</div></div>';
    }
  };

  function render(p, d) {
    var fn = T[p.template] || (p.template.indexOf('servico') === 0 ? T.servico : null);
    var html = fn ? fn(p, d) : '<div class="pg__in"><h2 class="h1">' + esc(p.template) + '</h2></div>';
    var nome = p.titulo || p.kicker || p.id;
    return '<div class="pg pg--' + p.template + ' pg--' + p.id + '" id="p-' + p.id +
             '" data-id="' + p.id + '" data-n="' + p.n + '"' +
             ' role="region" aria-label="Página ' + p.n + ' — ' + esc(nome) + '"' +
             ' tabindex="-1">' + html + '</div>';
  }

  /* ==========================================================================
     MODOS
     ========================================================================== */

  /* A StPageFlip.destroy() faz `block.remove()` — leva o #folheto com ela.
     Sem isto, atravessar os 1024px a redimensionar (ou rodar um tablet, que
     passa de ~820 para ~1180) deixava a brochura em branco para sempre:
     o arranca() seguinte fazia getElementById('folheto').innerHTML num null.
     Aqui recriamo-lo no mesmo sítio quando faltar. */
  function garanteFolheto() {
    var el = document.getElementById('folheto');
    if (el) return el;
    el = document.createElement('main');
    el.id = 'folheto';
    el.setAttribute('aria-label', 'Brochura Yes, We Do');
    var rolo = document.getElementById('rolo');
    rolo.parentNode.insertBefore(el, rolo);
    return el;
  }

  /* Impede que tocar num controlo comece a virar a página.
     A StPageFlip escuta `mousedown` e `touchstart` no contentor dela (e
     mousemove/up e touchmove/end na window) — NÃO usa pointer events.
     Travamos no PRÓPRIO elemento, não no document em captura: em captura o
     evento morria antes de chegar ao botão e, no toque, o navegador deixava
     de sintetizar o clique — os hotspots não abriam nada no telemóvel. Aqui
     o botão recebe o evento primeiro e só depois a propagação pára. */
  /* Só as IMAGENS. Os botões e links já são respeitados pela própria
     StPageFlip (checkTarget ignora <a> e <button>), desde que o alvo seja
     mesmo o botão — o que o `pointer-events:none` nos filhos garante.
     As imagens não são nem uma coisa nem outra, e sem isto tocar numa
     fotografia para a ampliar virava a página. */
  var INTERATIVOS = '.apoio__w img, .serv__hero, .quem__img';
  function protegeInterativos(raiz) {
    raiz.querySelectorAll(INTERATIVOS).forEach(function (el) {
      ['mousedown', 'touchstart'].forEach(function (t) {
        el.addEventListener(t, function (e) { e.stopPropagation(); });
      });
    });
  }

  function montaFlip(retrato) {
    var el = garanteFolheto();
    el.innerHTML = D.pages.map(function (p) { return render(p, D); }).join('');
    protegeInterativos(el);
    document.body.classList.add('modo-flip');
    document.body.classList.toggle('modo-retrato', !!retrato);
    document.body.classList.remove('modo-scroll');

    var bw = retrato ? PW_RETRATO : PW;
    var bh = retrato ? PH_RETRATO : PH;
    el.style.setProperty('--pw', bw + 'px');
    el.style.setProperty('--ph', bh + 'px');

    var larg, alt, altMax;
    if (retrato) {
      /* uma página só: aproveita o ecrã todo menos o espaço dos controlos */
      altMax = window.innerHeight - 104;
      larg = Math.min(window.innerWidth - 16, Math.round(altMax * bw / bh));
      alt = Math.round(larg * bh / bw);
    } else {
      var disp = Math.min(window.innerWidth - 60, 1500);
      larg = Math.min(PW, Math.floor(disp / 2));
      alt = Math.round(larg * PH / PW);
      altMax = window.innerHeight - 170;
      if (alt > altMax) { alt = altMax; larg = Math.round(alt * PW / PH); }
    }

    el.style.setProperty('--esc', (larg / bw).toFixed(4));
    el.style.setProperty('--pgw', larg + 'px');   // largura de UMA página, para centrar a capa

    flip = new St.PageFlip(el, {
      width: larg, height: alt,
      size: 'fixed',
      showCover: true,
      maxShadowOpacity: 0.4,
      mobileScrollSupport: false,   // o arrasto vira a página, não faz scroll
      flippingTime: retrato ? 600 : 750,
      usePortrait: !!retrato,
      swipeDistance: 20
    });
    flip.loadFromHTML(document.querySelectorAll('#folheto .pg'));

    var conta = document.getElementById('conta');
    var bAnt = document.getElementById('ant'), bSeg = document.getElementById('seg');
    function atualiza() {
      var i = flip.getCurrentPageIndex(), t = flip.getPageCount();
      conta.textContent = (i + 1) + ' / ' + t;
      /* Espessura das pilhas de folhas nas laterais: a da esquerda engorda à
         medida que se avança, a da direita emagrece. É o que dá corpo de
         objeto ao folheto em vez de duas folhas soltas. */
      var fr = t > 1 ? i / (t - 1) : 0;
      el.style.setProperty('--folhas-esq', fr.toFixed(3));
      el.style.setProperty('--folhas-dir', (1 - fr).toFixed(3));
      /* A capa e a contracapa aparecem sozinhas num contentor de duas páginas:
         ficavam encostadas a um dos lados, com meia folha de vazio ao lado e a
         pilha de folhas desse lado a flutuar no ar. Aqui centramos a folha
         solitária e escondemos a pilha do lado que não tem página. */
      if (!retrato) {
        el.classList.toggle('folheto--capa', i === 0);
        el.classList.toggle('folheto--fim', i === t - 1);
      }
      var atual = D.pages[i];
      conta.setAttribute('aria-label',
        'Página ' + (i + 1) + ' de ' + t + (atual ? ' — ' + (atual.titulo || atual.id) : ''));
      bAnt.disabled = i <= 0;
      bSeg.disabled = i >= t - 1;
      var pg = D.pages[i];
      if (pg) {
        if (location.hash.slice(1) !== pg.id) history.replaceState(null, '', '#' + pg.id);
        ev('page_view_brochura', { page_id: pg.id, page_n: pg.n });
        marcaIndice(pg.id);
      }
      /* anima o spread visível — a página da esquerda e a da direita */
      (modo === 'retrato' ? [i] : [i, i + 1]).forEach(function (n) {
        var p = D.pages[n];
        if (p) animaPagina(document.getElementById('p-' + p.id));
      });
      paraVideos();
    }
    flip.on('flip', function () { atualiza(); tocaFolha(); });
    flip.on('init', function () { saltaInicial(); });
    atualiza();

    bAnt.onclick = function () { flip.flipPrev(); };
    bSeg.onclick = function () { flip.flipNext(); };
    document.getElementById('full').onclick = apresentar;
    var bs = document.getElementById('som');
    bs.innerHTML = comSom ? ICO.som : ICO.mudo;
    bs.setAttribute('aria-label', comSom ? 'Desligar som' : 'Ligar som ao virar a página');
    bs.setAttribute('aria-pressed', comSom ? 'true' : 'false');
    bs.onclick = alternaSom;
    montaIndice();
    document.getElementById('ind').onclick = function () {
      document.getElementById('indice').classList.add('aberto');
    };

    document.onkeydown = function (e) {
      if (e.key === 'ArrowLeft') flip.flipPrev();
      if (e.key === 'ArrowRight') flip.flipNext();
      if (e.key === 'Escape' && document.fullscreenElement) document.exitFullscreen();
    };

    /* rede de segurança: se o evento 'init' não disparar (versões antigas
       da lib), tenta na mesma no frame seguinte */
    requestAnimationFrame(function () { setTimeout(saltaInicial, 60); });

    entrada(el);
    dica();
  }

  /* O folheto assenta na página em vez de aparecer de repente. Uma vez por
     sessão: no resize o folheto é remontado e repetir isto seria ruído.
     Bloqueamos o rato durante a animação — a StPageFlip lê a posição do
     contentor para saber onde começa o arrasto, e a meio de um transform
     essa leitura estaria errada. */
  var entradaFeita = false;
  function entrada(el) {
    if (entradaFeita) return;
    entradaFeita = true;
    if (SEM_MOVIMENTO || !temGsap()) return;
    el.style.pointerEvents = 'none';
    window.gsap.fromTo(el,
      { opacity: 0, scale: .93, y: 26 },
      { opacity: 1, scale: 1, y: 0, duration: .9, ease: 'power3.out', delay: .1,
        clearProps: 'transform,opacity',
        onComplete: function () { el.style.pointerEvents = ''; } });
  }

  /* Na primeira visita nada indica que as páginas viram — parecia um PDF.
     Uma dica discreta no canto, uma única vez por dispositivo. */
  function dica() {
    /* chave v2: quem já tinha dispensado a versão antiga volta a ver esta,
       porque o texto e o gesto mudaram com o folheto no telemóvel */
    try { if (localStorage.getItem('brochura-dica-v2')) return; } catch (e) {}
    var d = document.createElement('div');
    d.id = 'dica';
    d.innerHTML = '<span>' + (modo === 'retrato'
      ? 'Deslize para virar a página'
      : 'Arraste o canto para virar a página') + '</span>';
    document.body.appendChild(d);
    setTimeout(function () { d.classList.add('vis'); }, 700);

    var fechado = false;
    function fecha() {
      if (fechado) return;
      fechado = true;
      d.classList.remove('vis');
      setTimeout(function () { if (d.parentNode) d.remove(); }, 500);
      try { localStorage.setItem('brochura-dica-v2', '1'); } catch (e) {}
      ['pointerdown', 'keydown'].forEach(function (t) {
        document.removeEventListener(t, fecha);
      });
    }
    /* fecha ao primeiro gesto, mas só passados 1,2s — senão o toque que
       dispensa o splash fechava-a antes de se ver */
    setTimeout(function () {
      ['pointerdown', 'keydown'].forEach(function (t) {
        document.addEventListener(t, fecha);
      });
    }, 1200);
    setTimeout(fecha, 8000);
  }

  var jaSaltou = false;
  function saltaInicial() {
    if (jaSaltou) return;
    var id = hashInicial;
    if (!id) { jaSaltou = true; return; }
    var i = D.pages.findIndex(function (p) { return p.id === id; });
    if (i < 0) {
      jaSaltou = true;
      setTimeout(function () { toast('Secção não encontrada — abrimos no início'); }, 700);
      return;
    }
    if (flip && typeof flip.turnToPage === 'function') {
      flip.turnToPage(i);
      jaSaltou = true;
    }
  }

  function montaScroll() {
    var el = document.getElementById('rolo');
    el.innerHTML = D.pages.map(function (p) { return render(p, D); }).join('');
    /* a classe TEM de vir primeiro: sem ela o #rolo está display:none,
       clientWidth dá 0 e a escala saía a zero (página em branco) */
    document.body.classList.add('modo-scroll');
    document.body.classList.remove('modo-flip');
    el.style.setProperty('--z', (window.innerWidth / PW).toFixed(5));

    var barra = document.getElementById('progresso');
    el.addEventListener('scroll', function () {
      var max = el.scrollHeight - el.clientHeight;
      barra.style.width = (max > 0 ? (el.scrollTop / max) * 100 : 0) + '%';
    }, { passive: true });

    /* regista a página vista e pausa vídeos fora do ecrã */
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) animaPagina(en.target);
        if (en.isIntersecting && en.intersectionRatio > 0.6) {
          var id = en.target.dataset.id;
          if (location.hash.slice(1) !== id) history.replaceState(null, '', '#' + id);
          ev('page_view_brochura', { page_id: id, page_n: en.target.dataset.n });
          marcaIndice(id);
          var v = en.target.querySelector('video');
          if (v) { v.play().catch(function () {}); ev('video_play', { page_id: id }); }
        } else {
          var vv = en.target.querySelector('video');
          if (vv) vv.pause();
        }
      });
    }, { root: el, threshold: [0, 0.25, 0.6] });
    el.querySelectorAll('.pg').forEach(function (p) { io.observe(p); });

    montaIndice();
    if (hashInicial) {
      requestAnimationFrame(function () { irPara(hashInicial); jaSaltou = true; });
    }
  }

  function montaIndice() {
    var ind = document.getElementById('indice');
    ind.innerHTML = '<button id="indice-fechar" aria-label="Fechar">&times;</button>' +
      '<h3>Índice</h3>' + D.pages.map(function (p) {
        var t = p.titulo || p.kicker || p.id;
        return '<a href="#' + p.id + '" data-id="' + p.id + '">' +
               esc(t) + '<span>' + p.n + '</span></a>';
      }).join('');
    document.getElementById('indice-btn').onclick = function () { ind.classList.add('aberto'); };
    document.getElementById('indice-fechar').onclick = function () { ind.classList.remove('aberto'); };
    ind.querySelectorAll('a').forEach(function (a) {
      a.onclick = function (e) {
        e.preventDefault();
        ind.classList.remove('aberto');
        irPara(a.dataset.id);
      };
    });
  }

  /* marca no índice a secção em que estamos */
  function marcaIndice(id) {
    document.querySelectorAll('#indice a').forEach(function (a) {
      a.classList.toggle('atual', a.dataset.id === id);
    });
  }

  /* Salta para uma secção. É isto que faz os links diretos funcionarem
     nos dois modos: yes-wedo.pt/brochura#reclames */
  function irPara(id) {
    if (!id) return;
    var i = D.pages.findIndex(function (p) { return p.id === id; });
    if (i < 0) {
      /* antes caía em silêncio na capa e parecia que o link estava partido */
      toast('Secção não encontrada — abrimos no início');
      return;
    }
    if (flip) flip.flip(i);
  }

  function paraVideos() {
    document.querySelectorAll('#folheto video').forEach(function (v) { v.pause(); });
    var i = flip ? flip.getCurrentPageIndex() : -1;
    (modo === 'retrato' ? [i] : [i, i + 1]).forEach(function (n) {
      var pg = D.pages[n];
      if (!pg) return;
      var v = document.querySelector('#p-' + pg.id + ' video');
      if (v) { v.play().catch(function () {}); ev('video_play', { page_id: pg.id }); }
    });
  }

  function apresentar() {
    var alvo = document.documentElement;
    if (!document.fullscreenElement) {
      if (alvo.requestFullscreen) alvo.requestFullscreen().catch(function () {});
      ev('presentation_mode', {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  /* O estado tem de seguir o ecrã, não o botão: sair com Esc também conta.
     Antes o Esc deixava a classe 'apresentar' colada e a barra escondida. */
  var ocioso;
  function mudouEcra() {
    var em = !!document.fullscreenElement;
    document.body.classList.toggle('apresentar', em);
    clearTimeout(ocioso);
    document.body.classList.remove('ocioso');
    if (em) armaOcioso();
  }
  function armaOcioso() {
    clearTimeout(ocioso);
    document.body.classList.remove('ocioso');
    ocioso = setTimeout(function () {
      if (document.fullscreenElement) document.body.classList.add('ocioso');
    }, 3000);
  }
  document.addEventListener('fullscreenchange', mudouEcra);
  document.addEventListener('mousemove', function () {
    if (document.fullscreenElement) armaOcioso();
  });

  /* Aviso breve. Em desktop o navigator.share não existe: sem isto, carregar
     em "partilhar" copiava o link e não acontecia nada visível. */
  var toastT;
  function toast(msg) {
    var t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('vis');
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.classList.remove('vis'); }, 2200);
  }

  /* Ampliar fotografias. No folheto isto é importante: as imagens de apoio
     ficam pequenas e são o argumento de venda. Abre por cima de tudo, sem
     interferir com o virar de página. */
  function lightbox(src, legenda) {
    var lb = document.createElement('div');
    lb.className = 'lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', legenda || 'Fotografia ampliada');
    /* o palco tem a perspetiva; a imagem é que inclina */
    lb.innerHTML =
      '<button class="lb__x" aria-label="Fechar">&times;</button>' +
      '<div class="lb__pal"><img src="' + src + '" alt="' + esc(legenda || '') + '"></div>' +
      (legenda ? '<p class="lb__c">' + esc(legenda) + '</p>' : '');
    document.body.appendChild(lb);
    requestAnimationFrame(function () { lb.classList.add('vis'); });

    var antes = document.activeElement;
    lb.querySelector('.lb__x').focus();

    /* Com GSAP a entrada é 3D e o tilt segue o rato/giroscópio. A classe
       lb--3d desliga a transição CSS da imagem — senão as duas suavizações
       sobrepunham-se e o movimento saía pastoso. */
    var desliga3d = function () {};
    var im = lb.querySelector('img');
    if (temGsap() && !SEM_MOVIMENTO) {
      lb.classList.add('lb--3d');
      window.gsap.fromTo(im,
        { scale: .9, rotationY: -10, opacity: 0 },
        { scale: 1, rotationY: 0, opacity: 1, duration: .5, ease: 'power3.out' });
      desliga3d = liga3d(im, lb, { max: 5 });
    }

    function fecha() {
      desliga3d();
      lb.classList.remove('vis');
      setTimeout(function () { lb.remove(); }, 260);
      document.removeEventListener('keydown', tecla);
      if (antes && antes.focus) antes.focus();
    }
    function tecla(e) {
      if (e.key === 'Escape') { e.stopPropagation(); fecha(); }
      if (e.key === 'Tab') { e.preventDefault(); }   // foco preso no diálogo
    }
    lb.addEventListener('click', fecha);
    document.addEventListener('keydown', tecla);
    ev('foto_zoom', { src: src.split('/').pop() });
  }

  /* ==========================================================================
     FICHA DE PROJETO
     O passo a seguir ao lightbox: a fotografia descola da folha em 3D e ao
     lado abre a ficha do trabalho — quem é o cliente e o que a Yes, We Do
     fez ali. É o que transforma "uma foto bonita" em prova de capacidade.
     ========================================================================== */
  function fichaModal(src, f, pageId) {
    var fc = document.createElement('div');
    fc.className = 'fc';
    fc.setAttribute('role', 'dialog');
    fc.setAttribute('aria-modal', 'true');
    fc.setAttribute('aria-label', 'Projeto — ' + (f.cliente || ''));

    var msg = 'Olá! Vi o projeto "' + (f.cliente || '') +
              '" na vossa brochura e queria algo assim.';

    fc.innerHTML =
      '<button class="fc__x" aria-label="Fechar">&times;</button>' +
      '<div class="fc__in">' +
        '<div class="fc__pal">' +
          '<img class="fc__img" src="' + web(src) + '" alt="' + esc(f.cliente || '') + '"' +
            ' onerror="this.onerror=null;this.src=\'' + src + '\'">' +
        '</div>' +
        '<div class="fc__card">' +
          '<div class="fc__kicker">Projeto</div>' +
          '<h3 class="fc__cli">' + esc(f.cliente || '') + '</h3>' +
          (f.local ? '<div class="fc__loc">' + esc(f.local) + '</div>' : '') +
          '<ul class="fc__serv">' + (f.servicos || []).map(function (s) {
            return '<li>' + esc(s) + '</li>';
          }).join('') + '</ul>' +
          (f.descricao ? '<p class="fc__desc">' + esc(f.descricao) + '</p>' : '') +
          ((f.tags || []).length
            ? '<div class="fc__tags">' + f.tags.map(function (t) {
                return '<span>' + esc(t) + '</span>';
              }).join('') + '</div>'
            : '') +
          '<a class="fc__cta" href="' + waMsg(msg) + '" target="_blank" rel="noopener"' +
            ' data-cliente="' + esc(f.cliente || '') + '">' + ICO.wa + 'Quero algo assim</a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(fc);
    requestAnimationFrame(function () { fc.classList.add('vis'); });

    var antes = document.activeElement;
    fc.querySelector('.fc__x').focus();

    var im = fc.querySelector('.fc__img');
    var desliga3d = function () {};
    /* Repouso ligeiramente virado: é essa inclinação parada que faz a
       fotografia parecer levantada da página, mesmo sem ninguém mexer.
       Em ecrã estreito fica a direito — a -6° encostava aos cantos, porque
       aí a fotografia ocupa a largura toda. */
    var baseY = window.innerWidth < 900 ? 0 : -6;
    if (temGsap() && !SEM_MOVIMENTO) {
      fc.classList.add('fc--3d');
      var tl = window.gsap.timeline();
      tl.fromTo(im,
        { scale: .62, rotationY: baseY - 14, y: 18, opacity: 0 },
        { scale: 1, rotationY: baseY, y: 0, opacity: 1, duration: .75, ease: 'power3.out' }, 0);
      tl.fromTo(fc.querySelector('.fc__card'),
        { x: 34, opacity: 0 }, { x: 0, opacity: 1, duration: .5, ease: 'power2.out' }, .15);
      tl.fromTo(fc.querySelectorAll('.fc__card > *'),
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: .4, ease: 'power2.out', stagger: .05 }, .22);
      desliga3d = liga3d(im, fc, { max: 7, baseY: baseY });
    }

    function fecha() {
      desliga3d();
      fc.classList.remove('vis');
      setTimeout(function () { fc.remove(); }, 300);
      document.removeEventListener('keydown', tecla);
      if (antes && antes.focus) antes.focus();
    }
    /* Fecha no fundo e no X. Dentro da ficha não fecha: há texto para ler e
       um link para carregar. */
    fc.addEventListener('click', function (e) {
      if (e.target.closest('.fc__card')) return;
      if (e.target.closest('.fc__x') || !e.target.closest('.fc__in')) fecha();
    });
    /* Foco preso, mas a circular: o CTA tem de ser alcançável por teclado. */
    function tecla(e) {
      if (e.key === 'Escape') { e.stopPropagation(); fecha(); return; }
      if (e.key !== 'Tab') return;
      var alvos = fc.querySelectorAll('button, a[href]');
      if (!alvos.length) { e.preventDefault(); return; }
      var pri = alvos[0], ult = alvos[alvos.length - 1];
      if (e.shiftKey && document.activeElement === pri) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && document.activeElement === ult) { e.preventDefault(); pri.focus(); }
    }
    document.addEventListener('keydown', tecla);

    ev('ficha_open', { page_id: pageId, cliente: f.cliente || '' });
  }

  /* ==========================================================================
     PEÇAS DE AMOSTRA EM 3D
     Geometria é código, não conteúdo — o JSON traz só o copy. São peças da
     Yes, We Do, NÃO trabalhos de clientes: modelar a letra de um cliente
     seria reproduzir a marca registada dele.
     ========================================================================== */
  var B3 = '/img/brochura/3d/';

  var PECAS = {
    letras: {
      rotulo: 'Espessura do acrílico',
      /* as espessuras que a própria página anuncia: 3 a 30 mm */
      opcoes: [
        { nome: '3 mm',  prof: 10, camadas: 16 },
        { nome: '10 mm', prof: 30, camadas: 30 },
        { nome: '20 mm', prof: 56, camadas: 44 },
        { nome: '30 mm', prof: 82, camadas: 58 }
      ],
      inicial: 1,
      spec: function (o) { return 'letras recortadas em acrílico de ' + o.nome; },
      constroi: function (alvo, o) {
        /* a parede fica atrás, afastada pelos espaçadores — é isso que
           distingue esta aplicação e o que a fotografia nunca mostra */
        alvo.appendChild(caixa3({ l: 470, a: 400, p: 12, y: 0, z: -(o.prof / 2) - 46,
                                  cor: '#E7E2D9' }));
        [[-150, -128], [150, -128], [-150, 128], [150, 128]].forEach(function (pt) {
          alvo.appendChild(caixa3({ l: 9, a: 9, p: 40, x: pt[0], y: pt[1],
                                    z: -(o.prof / 2) - 20, cor: '#8E959C' }));
        });
        alvo.appendChild(extrusao3({ src: B3 + 'logo-3d.png', l: 355, a: 378,
                                     prof: o.prof, camadas: o.camadas }));
      }
    },
    stand: {
      rotulo: 'Esquema de cor',
      opcoes: [
        { nome: 'Laranja', corpo: '#F04320', cob: '#F04320', friso: '#529BCA' },
        { nome: 'Azul',    corpo: '#529BCA', cob: '#F04320', friso: '#F04320' },
        { nome: 'Escuro',  corpo: '#22303F', cob: '#F04320', friso: '#529BCA' },
        { nome: 'Neutro',  corpo: '#E7E2D9', cob: '#F04320', friso: '#529BCA' }
      ],
      inicial: 0,
      spec: function (o) { return 'um stand no esquema ' + o.nome.toLowerCase(); },
      constroi: function (alvo, C) {
        var branco = B3 + 'logo-h-branco.png';
        alvo.appendChild(caixa3({ l: 210, a: 110, p: 150, y: 95,   cor: C.corpo }));
        alvo.appendChild(caixa3({ l: 232, a: 10,  p: 168, y: 35,   cor: '#C8A87A' }));
        [[-100, -70], [100, -70], [-100, 70], [100, 70]].forEach(function (pt) {
          alvo.appendChild(caixa3({ l: 10, a: 150, p: 10, x: pt[0], y: -45, z: pt[1],
                                    cor: '#3A4048' }));
        });
        alvo.appendChild(caixa3({ l: 240, a: 46,  p: 180, y: -143, cor: C.cob }));
        alvo.appendChild(caixa3({ l: 240, a: 6,   p: 180, y: -117, cor: C.friso }));
        alvo.appendChild(caixa3({ l: 190, a: 120, p: 6,   y: -55, z: -72, cor: '#F5F2EC' }));
        /* vinil branco: o logótipo a cores desaparecia sobre o painel laranja,
           porque o "we" também é laranja. É o que se faz na realidade. */
        alvo.appendChild(decalque3({ src: branco, l: 150, a: 53, y: -143, z: 90 }));
        alvo.appendChild(decalque3({ src: branco, l: 150, a: 53, y: -143, z: -90,
                                     rot: ' rotateY(180deg)', br: .7 }));
        alvo.appendChild(decalque3({ src: branco, l: 155, a: 58, y: 95, z: 75 }));
        alvo.appendChild(decalque3({ src: B3 + 'logo-3d.png', l: 86, a: 92, y: -55,
                                     z: -68.6, rot: ' rotateY(180deg)', br: .95 }));
        alvo.appendChild(decalque3({ src: branco, l: 118, a: 42, x: 120, y: -143,
                                     rot: ' rotateY(90deg)', br: .9 }));
        alvo.appendChild(decalque3({ src: branco, l: 118, a: 42, x: -120, y: -143,
                                     rot: ' rotateY(-90deg)', br: .85 }));
      }
    }
  };

  function peca3dModal(p) {
    var cfg = p.peca3d, def = PECAS[cfg.tipo];
    if (!def) return;
    var i = def.inicial;

    var m = document.createElement('div');
    m.className = 'p3';
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.setAttribute('aria-label', cfg.titulo || 'Peça em três dimensões');
    m.innerHTML =
      '<button class="p3__x" aria-label="Fechar">&times;</button>' +
      '<div class="p3__in">' +
        '<div class="p3__palco" tabindex="0" role="img" aria-label="' +
          esc(cfg.titulo || '') + '. Use as setas do teclado para rodar.">' +
          '<div class="p3__chao"></div>' +
          '<div class="p3__zoom"><div class="p3__obj"></div></div>' +
        '</div>' +
        '<div class="p3__card">' +
          '<div class="fc__kicker">' + esc(cfg.kicker || 'Amostra') + '</div>' +
          '<h3 class="fc__cli">' + esc(cfg.titulo || '') + '</h3>' +
          (cfg.intro ? '<p class="fc__desc">' + esc(cfg.intro) + '</p>' : '') +
          '<div class="p3__rot">' + esc(def.rotulo) + '</div>' +
          '<div class="p3__ops"></div>' +
          '<a class="fc__cta" target="_blank" rel="noopener">' + ICO.wa +
            esc(cfg.cta || 'Pedir orçamento') + '</a>' +
          (cfg.nota ? '<p class="p3__nota">' + esc(cfg.nota) + '</p>' : '') +
          '<p class="p3__dica">Arraste para rodar e inclinar · ou use as setas</p>' +
        '</div>' +
      '</div>';
    document.body.appendChild(m);
    requestAnimationFrame(function () { m.classList.add('vis'); });

    var palco = m.querySelector('.p3__palco');
    var zoom = m.querySelector('.p3__zoom');
    var obj = m.querySelector('.p3__obj');
    var cta = m.querySelector('.fc__cta');
    var ops = m.querySelector('.p3__ops');

    /* a geometria está em px fixos; encolhe-se para caber no palco */
    function ajusta() {
      var r = palco.getBoundingClientRect();
      var e = Math.min(1, Math.min(r.width / 560, r.height / 500));
      zoom.style.setProperty('--e3', e.toFixed(3));
    }

    function desenha() {
      obj.innerHTML = '';
      def.constroi(obj, def.opcoes[i]);
      cta.href = waMsg('Olá! Vi a amostra em 3D na vossa brochura e queria ' +
                       def.spec(def.opcoes[i]) + '.');
      [].forEach.call(ops.children, function (b, n) {
        b.classList.toggle('on', n === i);
        b.setAttribute('aria-pressed', n === i ? 'true' : 'false');
      });
      ajusta();
    }

    def.opcoes.forEach(function (o, n) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = o.nome;
      b.onclick = function () {
        i = n; desenha();
        ev('peca3d_opcao', { tipo: cfg.tipo, opcao: o.nome });
      };
      ops.appendChild(b);
    });
    desenha();

    var paraOrbita = orbita3(palco, obj, { ry: 26, rx: -14 });
    window.addEventListener('resize', ajusta);

    var antes = document.activeElement;
    m.querySelector('.p3__x').focus();

    function fecha() {
      paraOrbita();                       // sem isto o intervalo ficava vivo
      window.removeEventListener('resize', ajusta);
      m.classList.remove('vis');
      setTimeout(function () { m.remove(); }, 300);
      document.removeEventListener('keydown', tecla);
      if (antes && antes.focus) antes.focus();
    }
    m.addEventListener('click', function (e) {
      if (e.target.closest('.p3__card') || e.target.closest('.p3__palco')) {
        if (e.target.closest('.p3__x')) fecha();
        return;
      }
      fecha();
    });
    function tecla(e) {
      if (e.key === 'Escape') { e.stopPropagation(); fecha(); return; }
      if (e.key !== 'Tab') return;
      var alvos = m.querySelectorAll('button, a[href], .p3__palco');
      if (!alvos.length) return;
      var pri = alvos[0], ult = alvos[alvos.length - 1];
      if (e.shiftKey && document.activeElement === pri) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && document.activeElement === ult) { e.preventDefault(); pri.focus(); }
    }
    document.addEventListener('keydown', tecla);
    ev('peca3d_open', { page_id: p.id, tipo: cfg.tipo });
  }

  /* Acende/apaga a página. O véu escuro e o brilho estão no CSS; aqui só
     alternamos a classe e damos ao acender o tremeluzir de um LED a arrancar. */
  function alternaLuz(btn) {
    var pg = btn.closest('.pg');
    /* O estado vive no .pg__in, não no .pg. A StPageFlip reescreve o atributo
       `class` do item dela na primeira interação e levava o `pg--noite` à
       frente: a luz acendia e apagava-se sozinha ao fim de um instante.
       O .pg__in é markup nosso e a biblioteca não lhe toca. */
    var alvo = pg && pg.querySelector('.pg__in');
    if (!alvo) return;
    var noite = !alvo.classList.contains('noite');
    alvo.classList.toggle('noite', noite);
    btn.setAttribute('aria-pressed', noite ? 'true' : 'false');
    var t = btn.querySelector('.luz-btn__t');
    if (t) t.textContent = noite ? 'Ver de dia' : 'Ver de noite';
    btn.setAttribute('aria-label', noite
      ? 'Voltar a ver esta página de dia'
      : 'Ver esta página de noite, com os reclames acesos');

    /* Primeira vez que se acende: só agora é que as fotografias noturnas
       são pedidas ao servidor. Quem nunca carregar no interruptor não paga
       o download. */
    if (noite) {
      pg.querySelectorAll('.img-noite[data-src]').forEach(function (im) {
        im.src = im.dataset.src;
        im.removeAttribute('data-src');
      });
    }
    ev('luz_toggle', { ligado: noite, page_id: pg.dataset.id });
  }

  /* Som de folha a virar. DESLIGADO por omissão — ninguém gosta de abrir um
     link e ouvir barulho. Fica um botão nos controlos e a escolha guarda-se.
     Nunca no telemóvel: aí não há virar de página. */
  /* Ligado por omissão. Só suna no modo folheto (no telemóvel nunca) e só
     quando alguém vira uma página — ou seja, já está a interagir. Se o
     utilizador o desligar, a escolha dele manda nas visitas seguintes. */
  var audio = null, comSom = true;
  try {
    var guardado = localStorage.getItem('brochura-som');
    if (guardado !== null) comSom = guardado === '1';
  } catch (e) {}

  /* Os navegadores bloqueiam áudio até haver um gesto do utilizador. Sem isto,
     o primeiro virar de página falhava em silêncio. Aqui "aquecemos" o áudio no
     primeiro toque/clique: toca em mudo e pausa logo, o que basta para libertar
     as reproduções seguintes. */
  var aquecido = false;
  function aquece() {
    if (aquecido) return;
    aquecido = true;
    try {
      audio = new Audio('/brochura/audio/folha.mp3');
      /* `muted`, não `volume`: no iOS o volume de um elemento de áudio é só
         de leitura e pôr `volume = 0` não faz absolutamente nada — o
         aquecimento tocava a folha em alto e bom som no primeiro toque do
         utilizador, que soava a página virada sem nada ter virado. */
      audio.muted = true;
      audio.play().then(function () {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = false;
        audio.volume = .5;          // respeitado fora do iOS; lá é ignorado
      }).catch(function () { audio.muted = false; audio.volume = .5; });
    } catch (e) {}
  }
  ['pointerdown', 'keydown'].forEach(function (t) {
    document.addEventListener(t, aquece, { once: true, capture: true });
  });

  function tocaFolha() {
    if (!comSom) return;
    try {
      if (!audio) { audio = new Audio('/brochura/audio/folha.mp3'); audio.volume = .5; }
      audio.currentTime = 0;
      audio.play().catch(function () {});   // políticas de autoplay: falha em silêncio
    } catch (e) {}
  }

  function alternaSom() {
    comSom = !comSom;
    try { localStorage.setItem('brochura-som', comSom ? '1' : '0'); } catch (e) {}
    var b = document.getElementById('som');
    b.innerHTML = comSom ? ICO.som : ICO.mudo;
    b.setAttribute('aria-label', comSom ? 'Desligar som' : 'Ligar som ao virar a página');
    b.setAttribute('aria-pressed', comSom ? 'true' : 'false');
    if (comSom) { tocaFolha(); toast('Som ligado'); } else { toast('Som desligado'); }
    ev('som_toggle', { ligado: comSom });
  }

  /* ---------- ações globais ---------- */

  function ligaAcoes() {
    document.addEventListener('click', function (e) {
      var part = e.target.closest('.partilhar');
      if (part) {
        e.preventDefault();
        e.stopPropagation();          // senão o StPageFlip vira a página por baixo
        var url = location.origin + location.pathname + '#' + part.dataset.id;
        ev('share_section', { page_id: part.dataset.id });
        if (navigator.share) {
          navigator.share({ title: D.meta.titulo, url: url }).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(url)
            .then(function () { toast('Link desta secção copiado ✓'); })
            .catch(function () { toast('Não foi possível copiar'); });
        } else {
          toast(url);
        }
        return;
      }
      /* Tem de vir ANTES da foto: o hotspot está por cima da imagem e é ele
         que abre a ficha; o clique na foto continua a abrir só o lightbox. */
      var hs = e.target.closest('.hotspot');
      if (hs) {
        e.preventDefault(); e.stopPropagation();
        var pag = D.pages.find(function (x) { return x.id === hs.dataset.pg; });
        var fi = pag && fichaDe(pag, hs.dataset.src);
        if (fi) {
          pedeGiro();                 // dentro do gesto — exigência do iOS
          fichaModal(hs.dataset.src, fi, hs.dataset.pg);
        }
        return;
      }
      var luzb = e.target.closest('.luz-btn');
      if (luzb) { e.preventDefault(); e.stopPropagation(); alternaLuz(luzb); return; }

      var b3 = e.target.closest('.btn3d');
      if (b3) {
        e.preventDefault(); e.stopPropagation();
        var pg3 = D.pages.find(function (x) { return x.id === b3.dataset.pg; });
        if (pg3 && pg3.peca3d) peca3dModal(pg3);
        return;
      }
      var c3 = e.target.closest('.p3 .fc__cta');
      if (c3) ev('peca3d_cta', {});

      var foto = e.target.closest('.apoio__w img, .serv__hero, .quem__img');
      if (foto) {
        e.preventDefault(); e.stopPropagation();
        pedeGiro();
        /* a versão web é 1200px — chega e sobra para ver em ecrã */
        lightbox(foto.currentSrc || foto.src, foto.alt);
        return;
      }
      var fcta = e.target.closest('.fc__cta');
      if (fcta) ev('ficha_cta', { cliente: fcta.dataset.cliente });
      var cta = e.target.closest('.cta-servico');
      if (cta) ev('cta_whatsapp', { servico: cta.dataset.servico });
      var ct = e.target.closest('[data-cta]');
      if (ct) ev('cta_' + ct.dataset.cta, {});
      var bar = e.target.closest('#barra a');
      if (bar) ev('cta_' + bar.dataset.ev, {});
    });


    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var f = document.activeElement;
      if (f && f.matches && f.matches('.apoio__w img, .serv__hero, .quem__img')) {
        e.preventDefault();
        lightbox(f.currentSrc || f.src, f.alt);
      }
    });

    window.addEventListener('hashchange', function () { irPara(location.hash.slice(1)); });
  }

  function barra() {
    document.getElementById('barra').innerHTML =
      '<a class="wa" href="' + waLink(null) + '" target="_blank" rel="noopener" ' +
        'data-ev="whatsapp" aria-label="WhatsApp">' + ICO.wa + '</a>' +
      '<a href="tel:' + D.empresa.telefones[0].replace(/\s/g, '') + '" ' +
        'data-ev="call" aria-label="Telefonar">' + ICO.tel + '</a>' +
      '<a class="orc" href="' + waLink(null) + '" target="_blank" rel="noopener" ' +
        'data-ev="orcamento" aria-label="Pedir orçamento">' + ICO.orc + '</a>';
  }

  /* ---------- arranque ---------- */

  /* O folheto é agora universal. No telemóvel mostra UMA página de cada vez
     (retrato); no desktop mostra o spread de duas. O scroll vertical deixou
     de ser usado — a metáfora do folheto vale nos dois. */
  function escolheModo() {
    return window.innerWidth >= LIMITE_FLIP ? 'flip' : 'retrato';
  }

  function arranca() {
    var novo = escolheModo();
    if (novo === modo) return;
    modo = novo;
    jaSaltou = false;
    if (flip) { try { flip.destroy(); } catch (e) {} flip = null; }
    garanteFolheto().innerHTML = '';
    document.getElementById('rolo').innerHTML = '';
    montaFlip(modo === 'retrato');
  }

  document.getElementById('ant').innerHTML = ICO.ant;
  document.getElementById('seg').innerHTML = ICO.seg;
  document.getElementById('full').innerHTML = ICO.full;
  document.getElementById('ind').innerHTML = ICO.menu;
  document.getElementById('indice-btn').innerHTML = ICO.menu;

  /* Se o JSON não vier (rede, 404, JS partido a meio), o splash ficava eterno.
     Ao fim de 8s mostramos alternativa útil em vez de um logótipo a pulsar. */
  var falhou = setTimeout(function () {
    var sp = document.getElementById('splash');
    if (sp && !sp.classList.contains('sai')) {
      sp.innerHTML =
        '<div style="text-align:center;font-family:Inter,sans-serif;color:#33414F;padding:2rem">' +
        '<img src="/img/logo-stacked-tagline.png" alt="Yes, We Do" style="width:130px;margin-bottom:1.5rem">' +
        '<p style="margin-bottom:1.2rem">Não foi possível carregar a brochura interativa.</p>' +
        '<p><a href="/brochura/Brochura-Yes-We-Do.pdf" style="color:#F04320;font-weight:600">' +
        'Descarregar em PDF</a></p>' +
        '<p style="margin-top:1rem"><a href="https://wa.me/351912320366" style="color:#F04320">WhatsApp</a>' +
        ' &middot; <a href="tel:+351912320366" style="color:#F04320">912 320 366</a></p></div>';
    }
  }, 8000);

  fetch('/data/brochura-content.json')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      clearTimeout(falhou);
      D = d;
      document.title = d.meta.titulo;
      if (temGsap() && !SEM_MOVIMENTO) {
        document.body.classList.add('anima');
        /* Rede de segurança: a classe .anima esconde o conteúdo à espera do
           GSAP. Se por alguma razão uma animação não correr, o conteúdo ficava
           invisível para sempre. Ao fim de 6s tiramos o véu — nessa altura as
           animações iniciais já acabaram e as seguintes usam fromTo, que define
           os seus próprios estilos. Conteúdo invisível nunca é aceitável. */
        setTimeout(function () { document.body.classList.remove('anima'); }, 6000);
      }
      barra();
      ligaAcoes();
      arranca();
      ev('brochura_open', { ref: new URLSearchParams(location.search).get('ref') || 'direto' });
      setTimeout(function () { document.getElementById('splash').classList.add('sai'); }, 350);
    })
    .catch(function (e) {
      console.error('[brochura]', e);
      clearTimeout(falhou);
      document.getElementById('splash').innerHTML =
        '<p style="font-family:sans-serif;color:#0F1B2D">Não foi possível carregar a brochura.</p>';
    });

  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t); t = setTimeout(arranca, 250);
  });
})();
