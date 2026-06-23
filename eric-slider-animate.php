<?php
// NOTE: When in mu-plugins, add: defined('ABSPATH') || exit;

// ======================================
// ERIC SLIDER & ANIMATE: BASICS
// ======================================

add_action('wp_enqueue_scripts', function () {

    // Animate.css
    wp_enqueue_style('animate-css', get_stylesheet_directory_uri() . '/my-assets/animate.min.css', [], '4.1.1');

    // Eric Slider
	wp_enqueue_style('eric-slider-css', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-v1.00.0.css', [], '1.00.0');
	wp_enqueue_script('eric-slider-js', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-v1.00.0.js', [], '1.00.0', true);
	wp_enqueue_script('eric-slider-init', get_stylesheet_directory_uri() . '/my-assets/eric-slider/eric-slider-init.js', ['eric-slider-js'], '1.00.0', true);

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

// ======================================
// ERIC SLIDER & ANIMATE: Styles
// ======================================

add_action('wp_footer', function () {
    ?>
    <style>
		/* ── Controls ── */
		.eric-slider-ctrl-prev,
		.eric-slider-ctrl-pause,
		.eric-slider-ctrl-next {color: var(--color-9);}
		.eric-slider-ctrl-prev:hover,
		.eric-slider-ctrl-prev:focus-visible,
		.eric-slider-ctrl-pause:hover,
		.eric-slider-ctrl-pause:focus-visible,
		.eric-slider-ctrl-next:hover,
		.eric-slider-ctrl-next:focus-visible {color: var(--color-9); outline: var(--a11y-focus-width, 1px) solid var(--a11y-focus-color, var(--color-1));}
		/* ── Dots ── */
		.eric-slider-dots li button {color: var(--color-9); opacity: 0.5;}
		.eric-slider-dots li button:hover,
		.eric-slider-dots li button:focus-visible {outline: var(--a11y-focus-width, 1px) solid var(--a11y-focus-color, var(--color-1));}
		.eric-slider-dots li.eric-slider-active button {color: var(--color-9); opacity: 1;}
		/* ── Single Item ── */
		.slideshow-single-item {transition: height 0.4s ease;}
		.slideshow-single-item img {border-radius: 25px;}
		.slideshow-single-item .listing-item img {border-radius: 25px 25px 0 0;}
		.slideshow-single-item .wp-block-columns {align-items: center;}
		/* ── Multiple Items — Gutters ── */
		.slideshow-multiple-items-3 .eric-slider-list,
		.slideshow-multiple-items-4 .eric-slider-list {margin: 0 -12.5px;}
		.slideshow-multiple-items-3 .eric-slider-slide,
		.slideshow-multiple-items-4 .eric-slider-slide {margin: 0 12.5px;}
		@media (max-width: 600px) {
			.slideshow-multiple-items-3 .eric-slider-list,
			.slideshow-multiple-items-4 .eric-slider-list {margin: 0 -7.5px;}
			.slideshow-multiple-items-3 .eric-slider-slide,
			.slideshow-multiple-items-4 .eric-slider-slide {margin: 0 7.5px;}
		}
		@media (min-width: 600px) and (max-width: 992px) {
			.slideshow-multiple-items-3 .eric-slider-list,
			.slideshow-multiple-items-4 .eric-slider-list {margin: 0 -10px;}
			.slideshow-multiple-items-3 .eric-slider-slide,
			.slideshow-multiple-items-4 .eric-slider-slide {margin: 0 10px;}
		}
		/* ── Multiple Items — Vertical ── */
		.slideshow-multiple-items-vertical .eric-slider-list {margin: -10px 0;}
		.slideshow-multiple-items-vertical .eric-slider-slide {margin: 10px 0;}
		/* ── Center Mode ── */
		.slideshow-multiple-items-center-mode img {padding: 0 0.75%;}
		/* ── Layers ── */
		.layer-container {position: relative; margin: 0 auto;}
		.layer-content-procurement-consulting .text-box h5 {margin-block-start: 0;}
		.layer-content-industries-served {color: var(--color-8); padding: 0 0.75%; font-size: clamp(1.125rem, 3vw, 1.5rem);}
		.layer-content-industries-served > div {height: 150px; display: flex; justify-content: center; align-items: center; padding: 0 25px;}
		.layer-content-industries-served p {margin: 0; text-align: center;}
		.layer-content-ninja-services {color: var(--color-8); padding: 0 0.75%; font-size: clamp(1rem, 5vw, 3rem);}
		.layer-content-ninja-services > div {height: 150px; display: flex; justify-content: center; align-items: center; padding: 0 25px;}
		.layer-content-ninja-services p {margin: 0; text-align: center;}
		.layer-content-ninja-services > div,
		.layer-content-industries-served > div {border-radius: 25px;}
    </style>
    <?php
}, 100);
