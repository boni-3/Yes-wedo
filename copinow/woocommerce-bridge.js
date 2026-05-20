/**
 * woocommerce-bridge.js
 * Integração com WooCommerce via AJAX.
 * Só actua quando o simulador está dentro de um iframe WordPress
 * e recebe ajax_url + nonce via query string.
 * O botão "Comprar agora" abre o modal de checkout (script.js);
 * este bridge é chamado apenas quando o utilizador confirma no modal.
 */
(function () {
  'use strict';

  const qs       = new URLSearchParams(window.location.search);
  const ajaxUrl  = qs.get('ajax_url');
  const nonce    = qs.get('nonce') || '';

  // Só ativa o bridge se estiver dentro de um contexto WordPress
  if (!ajaxUrl) return;

  function readFont() {
    const selected = document.querySelector('.font-block.selected');
    if (selected?.dataset?.font) return selected.dataset.font;
    const el = document.getElementById('neon-text');
    if (el?.style?.fontFamily) return el.style.fontFamily.replace(/['"]/g, '').trim();
    return window.selectedFont || '';
  }

  function readPrice() {
    const txt = document.getElementById('price')?.innerText || '';
    return parseFloat(txt.replace(',', '.').replace(/[^\d.]/g, '')) || 0;
  }

  /**
   * Envia os dados para o WooCommerce e redireciona para o carrinho.
   * Chamado externamente pelo modal de checkout quando o utilizador
   * opta por finalizar a compra via site (fluxo WooCommerce normal).
   */
  window.micronSubmitToCart = async function () {
    const textarea = document.querySelector('textarea');
    const raw      = textarea?.value || '';
    const lines    = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

    const payload = {
      micron_neon:      true,
      neon_text_line1:  lines[0] || '',
      neon_text_line2:  lines[1] || '',
      neon_size:        document.querySelector('.size-block.selected')?.dataset.size   || '',
      neon_font:        readFont(),
      neon_color:       document.querySelector('.color-circle.selected')?.dataset.color || '',
      neon_power:       document.querySelector('.extra-option.selected[data-extra="power"]')?.dataset.value || 'no',
      neon_shape:       document.querySelector('.extras-shape .extra-option.selected')?.dataset.shape   || 'rect',
      neon_install:     document.querySelector('.extras-install .extra-option.selected')?.dataset.install || 'wall',
      neon_price:       readPrice()
    };

    try {
      const body = new URLSearchParams();
      body.set('action',  'micron_add_neon_to_cart');
      body.set('nonce',   nonce);
      body.set('payload', JSON.stringify(payload));

      const res  = await fetch(ajaxUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body:    body.toString(),
        credentials: 'same-origin'
      });

      let data = null;
      try { data = await res.json(); } catch {}
      window.location.href = data?.data?.cart_url || '/carrinho/';
    } catch {
      window.location.href = '/carrinho/';
    }
  };

}());
