<?php
/**
 * Plugin Name: Yes WeDo Neon Simulator
 * Version:     2.5.0
 * Description: Simulador LED Neon com checkout via WhatsApp/Email e integração WooCommerce.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* =====================================================
   SHORTCODE — injeta iframe fullscreen
   ===================================================== */
function micron_neon_shortcode() {
  $index = plugin_dir_path( __FILE__ ) . 'index.html';
  $ver   = file_exists( $index ) ? filemtime( $index ) : time();

  $iframe_url = add_query_arg( [
    'v'        => $ver,
    'ajax_url' => admin_url( 'admin-ajax.php' ),
    'nonce'    => wp_create_nonce( 'micron_neon_nonce' ),
  ], plugin_dir_url( __FILE__ ) . 'index.html' );

  ob_start(); ?>
  <div id="micron-neon-mount" data-url="<?php echo esc_attr( $iframe_url ); ?>"></div>

  <script>
  (function () {
    function mount() {
      if ( document.getElementById('micron-neon-overlay') ) return;
      var mount = document.getElementById('micron-neon-mount');
      if ( ! mount ) return;

      var overlay = document.createElement('div');
      overlay.id  = 'micron-neon-overlay';

      var iframe  = document.createElement('iframe');
      iframe.src  = mount.dataset.url;
      iframe.title = 'Simulador LED Neon';

      overlay.appendChild( iframe );
      document.body.appendChild( overlay );
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow             = 'hidden';
    }

    document.readyState === 'loading'
      ? document.addEventListener( 'DOMContentLoaded', mount )
      : mount();
  }());
  </script>

  <style>
    #micron-neon-overlay { position:fixed; inset:0; z-index:999999; background:#000; }
    #micron-neon-overlay iframe { width:100%; height:100%; border:0; display:block; }
  </style>
  <?php
  return ob_get_clean();
}
add_shortcode( 'micron_neon', 'micron_neon_shortcode' );


/* =====================================================
   AJAX — adicionar ao carrinho WooCommerce
   ===================================================== */
add_action( 'wp_ajax_micron_add_neon_to_cart',        'micron_add_neon_to_cart' );
add_action( 'wp_ajax_nopriv_micron_add_neon_to_cart', 'micron_add_neon_to_cart' );

function micron_add_neon_to_cart() {

  if ( ! wp_verify_nonce( $_POST['nonce'] ?? '', 'micron_neon_nonce' ) ) {
    wp_send_json_error( [ 'message' => 'Invalid nonce' ] );
  }

  if ( ! function_exists( 'WC' ) ) {
    wp_send_json_error( [ 'message' => 'WooCommerce not available' ] );
  }

  wc_load_cart();
  WC()->session->set_customer_session_cookie( true );

  $data = json_decode( wp_unslash( $_POST['payload'] ?? '' ), true );
  if ( ! $data || ! is_array( $data ) ) {
    wp_send_json_error( [ 'message' => 'Invalid payload' ] );
  }

  $text1   = sanitize_text_field( $data['neon_text_line1'] ?? '' );
  $text2   = sanitize_text_field( $data['neon_text_line2'] ?? '' );
  $size    = sanitize_text_field( $data['neon_size']       ?? '' );
  $font    = sanitize_text_field( $data['neon_font']       ?? '' );
  $color   = sanitize_text_field( $data['neon_color']      ?? '' );
  $shape   = sanitize_text_field( $data['neon_shape']      ?? 'rect' );
  $install = sanitize_text_field( $data['neon_install']    ?? 'wall' );
  $price   = floatval( $data['neon_price']                 ?? 0 );

  $shape_map = [
    'rect'    => 'Corte reto',
    'contour' => 'Corte contorno',
  ];
  $install_map = [
    'wall'      => 'Fixação na parede',
    'suspended' => 'Suspenso',           // corrigido: era 'suspend'
  ];

  $cart_item_data = [
    'micron_neon'      => true,
    'neon_text_line1'  => $text1,
    'neon_text_line2'  => $text2,
    'neon_size'        => $size,
    'neon_font'        => $font,
    'neon_color'       => $color,
    'neon_shape'       => $shape_map[ $shape ]   ?? $shape,
    'neon_install'     => $install_map[ $install ] ?? $install,
    'neon_price'       => $price,
    'unique_key'       => md5( microtime( true ) . wp_rand() ),
  ];

  $product_id = 1495; // ID do produto WooCommerce

  WC()->cart->add_to_cart( $product_id, 1, 0, [], $cart_item_data );

  wp_send_json_success( [ 'cart_url' => wc_get_cart_url() ] );
}


/* =====================================================
   PREÇO DINÂMICO NO CARRINHO
   ===================================================== */
add_action( 'woocommerce_before_calculate_totals', function ( $cart ) {
  if ( is_admin() && ! defined( 'DOING_AJAX' ) ) return;
  foreach ( $cart->get_cart() as $item ) {
    if ( ! empty( $item['micron_neon'] ) && isset( $item['neon_price'] ) && $item['neon_price'] !== '' ) {
      $item['data']->set_price( (float) $item['neon_price'] );
    }
  }
}, 20 );


/* =====================================================
   MOSTRAR DETALHES NO CARRINHO
   ===================================================== */
add_filter( 'woocommerce_get_item_data', function ( $data, $item ) {
  if ( empty( $item['micron_neon'] ) ) return $data;

  $fields = [
    'Texto Linha 1' => $item['neon_text_line1'] ?? '',
    'Texto Linha 2' => $item['neon_text_line2'] ?? '',
    'Tamanho'       => $item['neon_size']        ?? '',
    'Fonte'         => ! empty( $item['neon_font'] ) ? ucfirst( str_replace( 'fonte', 'Fonte ', $item['neon_font'] ) ) : '',
    'Cor'           => $item['neon_color']       ?? '',
    'Forma'         => $item['neon_shape']       ?? '',
    'Instalação'    => $item['neon_install']     ?? '',
  ];

  foreach ( $fields as $key => $value ) {
    if ( $value !== '' ) {
      $data[] = [ 'key' => $key, 'value' => wp_kses_post( $value ) ];
    }
  }

  return $data;
}, 10, 2 );


/* =====================================================
   GUARDAR DETALHES NA ENCOMENDA
   ===================================================== */
add_action( 'woocommerce_checkout_create_order_line_item', function ( $item, $cart_item_key, $values ) {
  if ( empty( $values['micron_neon'] ) ) return;
  foreach ( $values as $k => $v ) {
    if ( strpos( $k, 'neon_' ) === 0 && $v !== '' ) {
      $label = ucwords( str_replace( '_', ' ', $k ) );
      $item->add_meta_data( $label, $v, true );
    }
  }
}, 10, 3 );
