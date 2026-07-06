<?php
/**
 * Eric Slider & Animate
 *
 * * Eric Slider – Custom styles, loads self-hosted CSS and JS (init in eric-slider-init.js)
 * Animate – Dan Eden: Animate (in viewport) – loads self-hosted CSS (Original: https://animate.style/)
 * Login Hostinger and go to my-assets (eric-slider) in Dashboard → File Manager
 *
 */
// NOTE: When in mu-plugins, add: defined('ABSPATH') || exit;

// ======================================
// ERIC SLIDER & ANIMATE: BASICS
// ======================================

add_action('wp_enqueue_scripts', function () {

    // --- Animate.css: load only when the page actually uses it ---
    // Every template delivers slider/animation markup through wp:post-content
    // (verified: no slider markup lives in any template part), so scanning the
    // current singular post's content catches every case. Markers:
    //   slideshow- → any Eric Slider variant
    //   daneden-   → a scroll-triggered animate.css element
    $needs_animate = false;

    if ( is_singular() ) {
        $post = get_post();
        if ( $post && ! empty( $post->post_content )
          && ( strpos( $post->post_content, 'slideshow-' ) !== false
            || strpos( $post->post_content, 'daneden-'   ) !== false
            || strpos( $post->post_content, 'wp-block-pullquote' ) !== false ) ) {
            $needs_animate = true;
        }
    }

    // Escape hatch: any template part/snippet rendering a slider outside
    // post content can force this on with:
    //   add_filter('er_needs_animate_css', '__return_true');
    $needs_animate = apply_filters( 'er_needs_animate_css', $needs_animate );

    if ( $needs_animate ) {
        wp_enqueue_style('animate-css', get_stylesheet_directory_uri() . '/my-assets/animate.min.css', [], '4.1.1');
        wp_enqueue_script('animate-js', get_stylesheet_directory_uri() . '/my-assets/animate.js', [], filemtime(get_stylesheet_directory() . '/my-assets/animate.js'), true);
    }

    // Eric Slider — stays global. The JS self-exits when no .slideshow-*
    // exists, and the slider CSS is only ~5KB. Only the 72KB animate lib
    // was worth gating.
	wp_enqueue_style('eric-slider-css', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-v1.00.0.css', [], '1.00.0');
	wp_enqueue_script('eric-slider-js', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-v1.00.0.js', [], '1.00.0', true);
	wp_enqueue_script('eric-slider-init', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-init-v1.00.0.js', ['eric-slider-js'], '1.00.0', true);

}, 20);

// Ignore Slider Images in LiteSpeed Cache – Let Eric Slider handle them
add_filter('litespeed_optimize_html_excluded_selectors', function($excludes) {
    $excludes[] = '.eric-slider img';
    return $excludes;
});

// ======================================
// ERIC SLIDER: Criticals in Head
// ======================================

add_action('wp_head', function () {
    ?>
    <style>
        .slideshow-single-item,
        .slideshow-single-item-no-dots,
        .slideshow-multiple-items,
        .slideshow-multiple-items-3,
        .slideshow-multiple-items-4,
        .slideshow-multiple-items-vertical,
        .slideshow-multiple-items-center-mode,
        .slideshow-quotes {visibility: hidden;}
        .eric-slider-initialized {visibility: visible;}
    </style>
    <?php
}, 6);
