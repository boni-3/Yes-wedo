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
    menu: '<svg viewBox="0 0 24 24"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>'
  };

  /* Link de WhatsApp com a mensagem já escrita — o contacto chega
     identificado com o serviço que interessou. */
  function waLink(servico) {
    var t = servico
      ? 'Olá! Vi a vossa brochura e tenho interesse em ' + servico + '.'
      : 'Olá! Vi a vossa brochura e queria pedir um orçamento.';
    return 'https://wa.me/' + D.empresa.whatsapp + '?text=' + encodeURIComponent(t);
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
      '.cta-servico, .manif, .manif__ass, .destaque, .contactos > div, .qr'
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
  function apoio(l, marcar) {
    if (!l || !l.length) return '';
    var n = l.length >= 5 ? 5 : 3;
    return '<div class="apoio apoio--' + n + '">' + l.map(function (s) {
      return '<div class="apoio__w">' + img(s) +
             (marcar ? '<span class="simulacao">Simulação</span>' : '') + '</div>';
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
        : img(p.hero, 'serv__hero', p.titulo);

      return '<button class="partilhar" data-id="' + p.id + '" ' +
               'aria-label="Partilhar esta secção">' + ICO.part + '</button>' +
        '<div class="pg__in">' + media +
          '<div class="kicker kicker--o">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          '<p class="tagline">' + esc(p.tagline) + '</p>' +
          '<div class="serv__grid">' + paras(p.corpo) +
            '<ul class="specs">' + (p.specs || []).map(function (s) {
              return '<li>' + esc(s) + '</li>';
            }).join('') + '</ul></div>' +
          apoio(p.apoio, simular) +
          '<p class="cta-linha">' + esc(p.cta) + '</p>' +
          '<a class="cta-servico" href="' + waLink(p.titulo) + '" target="_blank" ' +
             'rel="noopener" data-servico="' + esc(p.titulo) + '">' +
             ICO.wa + 'Pedir orçamento</a>' +
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

  function montaFlip(retrato) {
    var el = document.getElementById('folheto');
    el.innerHTML = D.pages.map(function (p) { return render(p, D); }).join('');
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

    dica();
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
    lb.innerHTML =
      '<button class="lb__x" aria-label="Fechar">&times;</button>' +
      '<img src="' + src + '" alt="' + esc(legenda || '') + '">' +
      (legenda ? '<p class="lb__c">' + esc(legenda) + '</p>' : '');
    document.body.appendChild(lb);
    requestAnimationFrame(function () { lb.classList.add('vis'); });

    var antes = document.activeElement;
    lb.querySelector('.lb__x').focus();

    function fecha() {
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
      audio.volume = 0;
      audio.play().then(function () {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = .5;
      }).catch(function () { audio.volume = .5; });
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
      var foto = e.target.closest('.apoio__w img, .serv__hero, .quem__img');
      if (foto) {
        e.preventDefault(); e.stopPropagation();
        /* a versão web é 1200px — chega e sobra para ver em ecrã */
        lightbox(foto.currentSrc || foto.src, foto.alt);
        return;
      }
      var cta = e.target.closest('.cta-servico');
      if (cta) ev('cta_whatsapp', { servico: cta.dataset.servico });
      var ct = e.target.closest('[data-cta]');
      if (ct) ev('cta_' + ct.dataset.cta, {});
      var bar = e.target.closest('#barra a');
      if (bar) ev('cta_' + bar.dataset.ev, {});
    });

    /* o StPageFlip reage a mousedown/touchstart: travar aí, senão o clique
       no botão de partilha começa a virar a página */
    ['mousedown', 'touchstart', 'pointerdown'].forEach(function (t) {
      document.addEventListener(t, function (e) {
        if (e.target.closest('.partilhar, .cta-servico, .ct__v,' +
            ' .apoio__w img, .serv__hero, .quem__img, .lb')) e.stopPropagation();
      }, true);
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
    document.getElementById('folheto').innerHTML = '';
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
