<?php
// NOTE: When in mu-plugins, add: defined('ABSPATH') || exit;

// ======================================
// ERIC SLIDER & ANIMATE: SETUP
// ======================================

add_action('wp_enqueue_scripts', function () {

    // animate.min.css and animate.js load on every page. Sliders can appear
    // anywhere via patterns, and that can't be detected this early, so we
    // just always load animate rather than trying to guess which pages need it.
	
    $needs_animate = true;

    // Escape hatch, kept for flexibility: this filter can force animate on
    // from elsewhere. With the flag already true it has no effect right now,
    // but it stays so the behaviour can be changed in one place later.
	
    $needs_animate = apply_filters( 'er_needs_animate_css', $needs_animate );

    if ( $needs_animate ) {
        wp_enqueue_style('animate-css', get_stylesheet_directory_uri() . '/my-assets/animate.min.css', [], '4.1.1');
        wp_enqueue_script('animate-js', get_stylesheet_directory_uri() . '/my-assets/animate.js', [], filemtime(get_stylesheet_directory() . '/my-assets/animate.js'), true);
    }

    // The eric-slider files load on every page. That's fine: the Eric Slider
    // CSS is small (~5KB) and the Eric Slider JS quietly does nothing when
    // there's no slider on the page.
	
    wp_enqueue_style('eric-slider-css', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-v1.00.0.css', [], '1.00.0');
    wp_enqueue_script('eric-slider-js', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-v1.00.0.js', [], '1.00.0', true);
    wp_enqueue_script('eric-slider-init', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-init-v1.00.0.js', ['eric-slider-js'], '1.00.0', true);
}, 20);

// Tell LiteSpeed Cache to leave slider images alone. The slider needs to
// manage its own images, so we don't want the cache plugin touching them.

add_filter('litespeed_optimize_html_excluded_selectors', function($excludes) {
    $excludes[] = '.eric-slider img';
    return $excludes;
});

// ======================================
// ERIC SLIDER: HIDE SLIDERS UNTIL READY
// ======================================

// This goes in the <head> so it applies before anything shows on screen.
// Sliders start hidden and only become visible once the slider JS has set
// them up. This stops the ugly flash of unstyled slides on page load.

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
