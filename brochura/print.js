/* ==========================================================================
   Brochura Yes, We Do — renderizador da versão de IMPRESSÃO
   Lê data/brochura-content.json e constrói as 16 páginas A4.
   Depois entrega o DOM ao Paged.js para paginar com bleed e marcas de corte.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- utilitários ---------- */

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  /* Troca a imagem de ecrã pela versão de impressão a 300 dpi.
     /img/portfolio/x.webp  →  /img/brochura/print/x.jpg
     Os SVG ficam como estão: são vetoriais, imprimem sempre bem. */
  function pr(src) {
    if (!src) return '';
    if (/\.svg$/i.test(src)) return src;
    var base = src.split('/').pop().replace(/\.[^.]+$/, '');
    return '/img/brochura/print/' + base + '.jpg';
  }

  function folio(p, label) {
    return '<div class="folio"><span>' + esc(label || 'Yes, We Do') +
           '</span><span class="folio__n">' + p.n + '</span></div>';
  }

  function paras(arr, cls) {
    return '<div class="' + (cls || 'body') + '">' +
           (arr || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
           '</div>';
  }

  function bleed(src, plain) {
    if (!src) return '';
    return '<div class="sheet__bleed' + (plain ? ' sheet__bleed--plain' : '') + '">' +
           '<img src="' + pr(src) + '" alt="">' +
           '</div>';
  }

  function nums(lista, cls) {
    return '<div class="nums ' + (cls || '') + '">' + lista.map(function (n) {
      return '<div class="num"><div class="num__v">' + esc(n.valor) + '</div>' +
             '<div class="num__l">' + esc(n.label) + '</div></div>';
    }).join('') + '</div>';
  }

  /* Grelha de imagens de apoio. `marcar` põe o selo "Simulação"
     nas imagens que não são trabalho executado (páginas 11 e 12). */
  function apoio(lista, marcar) {
    if (!lista || !lista.length) return '';
    var n = lista.length >= 5 ? 5 : 3;
    return '<div class="apoio apoio--' + n + '">' + lista.map(function (src) {
      var selo = marcar ? '<span class="simulacao">Simulação</span>' : '';
      return '<div class="apoio__wrap"><img src="' + pr(src) + '" alt="">' + selo + '</div>';
    }).join('') + '</div>';
  }

  /* ---------- templates, um por tipo de página ---------- */

  var T = {

    capa: function (p, d) {
      /* Na linha clara a arte de capa já traz o logótipo fabricado.
         Repetir "Yes, We Do" em texto seria redundante e colidia com ele. */
      /* Todo o texto num único bloco encostado ao rodapé — com
         space-between o bloco caía a meio da página e pisava o logótipo. */
      return '<section class="sheet capa">' +
        bleed(p.arte, true) +
        '<div class="sheet__in">' +
          '<div class="capa__bloco">' +
            '<div class="capa__kicker">' + esc(p.kicker) + '</div>' +
            '<div class="capa__rule"></div>' +
            '<p class="capa__tagline">' + esc(p.tagline) + '</p>' +
            '<div class="capa__rodape">' + esc(p.rodape) + '</div>' +
          '</div>' +
        '</div></section>';
    },

    manifesto: function (p) {
      var n = (p.corpo || []).length;
      return '<section class="sheet manifesto">' +
        bleed(p.fundo) +
        '<div class="sheet__in">' +
          (p.corpo || []).map(function (l, i) {
            /* classe explícita na última linha — :last-of-type não serve
               porque a assinatura também é um <p> irmão */
            return '<p class="manifesto__linha' +
                   (i === n - 1 ? ' manifesto__linha--fim' : '') + '">' +
                   esc(l) + '</p>';
          }).join('') +
          '<p class="manifesto__ass">' + esc(p.assinatura) + '</p>' +
        '</div></section>';
    },

    'quem-somos': function (p) {
      return '<section class="sheet">' +
        '<div class="sheet__in">' +
          '<img class="quem__img" src="' + pr(p.imagem) + '" alt="' + esc(p.imagemAlt) + '">' +
          '<div class="kicker">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          paras(p.corpo) +
          folio(p, 'Quem somos') +
        '</div></section>';
    },

    numeros: function (p, d) {
      return '<section class="sheet">' +
        '<div class="sheet__in">' +
          '<div class="kicker kicker--orange">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          nums(d.empresa.numeros) +
          paras(p.corpo) +
          '<p class="destaque">' + esc(p.destaque) + '</p>' +
          folio(p, 'Em números') +
        '</div></section>';
    },

    'mapa-servicos': function (p) {
      return '<section class="sheet">' +
        '<div class="sheet__in">' +
          '<div class="kicker kicker--orange">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          '<div class="body"><p>' + esc(p.intro) + '</p></div>' +
          '<div class="grid-serv">' + p.servicos.map(function (s, i) {
            return '<div class="serv-card">' +
              '<div class="serv-card__n">' + String(i + 1).padStart(2, '0') + '</div>' +
              '<div class="serv-card__t">' + esc(s.nome) + '</div>' +
              '<div class="serv-card__d">' + esc(s.desc) + '</div></div>';
          }).join('') + '</div>' +
          folio(p, 'Serviços') +
        '</div></section>';
    },

    servico: function (p) {
      var wide = p.template === 'servico-duplo';
      var simular = !!p._atencao;   // páginas 11 e 12: apoio é simulação
      return '<section class="sheet servico' + (wide ? ' servico--wide' : '') + '">' +
        '<div class="sheet__in">' +
          '<img class="servico__hero" src="' + pr(p.hero) + '" alt="' + esc(p.titulo) + '">' +
          '<div class="kicker kicker--orange">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          '<p class="tagline">' + esc(p.tagline) + '</p>' +
          '<div class="servico__grid">' +
            paras(p.corpo) +
            '<ul class="specs">' + (p.specs || []).map(function (s) {
              return '<li>' + esc(s) + '</li>';
            }).join('') + '</ul>' +
          '</div>' +
          apoio(p.apoio, simular) +
          '<p class="cta-linha">' + esc(p.cta) + '</p>' +
          folio(p, p.titulo) +
        '</div></section>';
    },

    'clientes-hibrido': function (p, d) {
      /* Página clara: os logótipos ficam na cor original. Evita filtros CSS
         (que o Chrome rasteriza e sairiam desfocados no PDF) e resolve os
         logos com fundo próprio, como o JYSK e o Abreu. */
      return '<section class="sheet">' +
        '<div class="sheet__in">' +
          '<div class="kicker kicker--orange">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          '<div class="body"><p>' + esc(p.intro) + '</p></div>' +
          nums(d.empresa.numeros, 'nums--linha') +
          '<div class="logos-grid">' + p.logos.map(function (l) {
            return '<img src="' + l.ficheiro + '" alt="' + esc(l.nome) + '">';
          }).join('') + '</div>' +
          '<div class="nomes">' +
            p.nomes.map(function (n) { return '<span>' + esc(n) + '</span>'; }).join('') +
            '<span class="mais">' + esc(p.remate) + '</span>' +
          '</div>' +
          folio(p, 'Clientes') +
        '</div></section>';
    },

    processo: function (p) {
      return '<section class="sheet">' +
        '<div class="sheet__in">' +
          '<div class="kicker kicker--orange">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          '<div class="body"><p>' + esc(p.intro) + '</p></div>' +
          '<div class="passos">' + p.passos.map(function (s) {
            return '<div class="passo"><div class="passo__n">' + esc(s.n) + '</div>' +
              '<div><div class="passo__t">' + esc(s.nome) + '</div>' +
              '<div class="passo__d">' + esc(s.desc) + '</div></div></div>';
          }).join('') + '</div>' +
          folio(p, 'Como trabalhamos') +
        '</div></section>';
    },

    'porque-nos': function (p) {
      return '<section class="sheet">' +
        '<div class="sheet__in">' +
          '<div class="kicker kicker--orange">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          '<div class="razoes">' + p.razoes.map(function (r) {
            return '<div class="razao"><div class="razao__bullet"></div>' +
              '<div><div class="razao__t">' + esc(r.titulo) + '</div>' +
              '<div class="razao__d">' + esc(r.desc) + '</div></div></div>';
          }).join('') + '</div>' +
          '<p class="remate">' + esc(p.remate) + '</p>' +
          folio(p, 'Porquê nós') +
        '</div></section>';
    },

    'contra-capa': function (p) {
      return '<section class="sheet">' +
        '<div class="sheet__in">' +
          '<div class="kicker kicker--orange">' + esc(p.kicker) + '</div>' +
          '<h2 class="h1">' + esc(p.titulo) + '</h2>' +
          '<div class="body"><p>' + esc(p.intro) + '</p></div>' +
          '<div class="contactos">' + p.ctas.map(function (c) {
            return '<div class="contacto"><div class="contacto__l">' + esc(c.label) + '</div>' +
                   '<div class="contacto__v">' + esc(c.valor) + '</div></div>';
          }).join('') + '</div>' +
          '<div class="qr-bloco">' +
            '<img src="/img/brochura/qr-brochura.png" alt="QR code para a brochura online">' +
            '<p>' + esc(p.qr.legenda) + '</p>' +
          '</div>' +
          (p.remate ? '<p class="remate-fim">' + esc(p.remate) + '</p>' : '') +
          '<div class="contra__rodape">' + esc(p.rodape) + '</div>' +
        '</div></section>';
    }
  };

  /* ---------- montagem ---------- */

  function render(d) {
    return d.pages.map(function (p) {
      var fn = T[p.template] || (p.template.indexOf('servico') === 0 ? T.servico : null);
      if (!fn) {
        console.warn('[brochura] template desconhecido:', p.template, '— página', p.n);
        return '<section class="sheet"><div class="sheet__in">' +
               '<h2 class="h1">Template em falta: ' + esc(p.template) + '</h2></div></section>';
      }
      return fn(p, d);
    }).join('');
  }

  fetch('/data/brochura-content.json')
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (d) {
      document.getElementById('content').innerHTML = render(d);
      document.title = d.meta.titulo;
      console.log('[brochura] ' + d.pages.length + ' páginas renderizadas — a paginar…');
      return window.PagedPolyfill.preview();
    })
    .then(function (flow) {
      if (flow) {
        console.log('[brochura] paginado: ' + flow.total + ' páginas');
        document.body.setAttribute('data-paginas', flow.total);
      }
      document.body.setAttribute('data-pronto', 'sim');   // sinal para o Chrome headless
    })
    .catch(function (e) {
      console.error('[brochura] falhou:', e);
      document.body.setAttribute('data-erro', e.message);
    });
})();
