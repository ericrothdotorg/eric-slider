/**
 * Eric Slider & Animate — initialization.
 *
 * Loaded as a real enqueued file with 'eric-slider-js' as a dependency, so the
 * EricSlider library is guaranteed to be defined before this runs. That removes
 * the old inline setTimeout retry race (slider sometimes loading late / only on
 * refresh). Init logic and config live here; the library file stays untouched.
 */
 
(function() {

    // Eric Slider Initialization
    function initEricSlider() {
        
        // Single Item (slide, with controls, with dots)
        document.querySelectorAll('.slideshow-single-item').forEach(function(el) {
                new EricSlider(el, {
                label: 'Images Slideshow',
                controls: true,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                adaptiveHeight: true,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });
        
        // Single Item with Fade (fade, no controls, with dots)
        document.querySelectorAll('.slideshow-single-item-fade').forEach(function(el) {
            new EricSlider(el, {
                label: 'Images Slideshow',
                controls: false,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: true,
                adaptiveHeight: true,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });

        // Single Item, No Dots (fade, no controls, no dots)
        document.querySelectorAll('.slideshow-single-item-no-dots').forEach(function(el) {
            new EricSlider(el, {
                label: 'Images Slideshow',
                controls: false,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: true,
                adaptiveHeight: true,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });

        // Single Item Chromeless (slide, no controls, no dots)
        document.querySelectorAll('.slideshow-single-item-chromeless').forEach(function(el) {
            new EricSlider(el, {
                label: 'Images Slideshow',
                controls: false,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                adaptiveHeight: true,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });

        // Multiple Items (slide, with controls, with dots)
        document.querySelectorAll('.slideshow-multiple-items').forEach(function(el) {
            new EricSlider(el, {
                label: 'Posts Slideshow',
                controls: true,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                adaptiveHeight: false,
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 768, settings: { slidesToShow: 1 } }
                ]
            });
        });

        // Multiple Items 3 (slide, with controls, with dots)
        document.querySelectorAll('.slideshow-multiple-items-3').forEach(function(el) {
            new EricSlider(el, {
                label: 'Posts Slideshow',
                controls: true,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                adaptiveHeight: false,
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 992, settings: { slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 1 } }
                ]
            });
        });

        // Multiple Items 4 (slide, with controls, with dots)
        document.querySelectorAll('.slideshow-multiple-items-4').forEach(function(el) {
            new EricSlider(el, {
                label: 'Posts Slideshow',
                controls: true,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                adaptiveHeight: false,
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 992, settings: { slidesToShow: 3 } },
                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                    { breakpoint: 350, settings: { slidesToShow: 1 } }
                ]
            });
        });

        // Multiple Items Vertical (slide, no controls, no dots)
        document.querySelectorAll('.slideshow-multiple-items-vertical').forEach(function(el) {
            new EricSlider(el, {
                label: 'Posts Slideshow',
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                adaptiveHeight: false,
                dots: false,
                infinite: true,
                vertical: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        });

        // Center Mode (slide, with controls, with dots)
        document.querySelectorAll('.slideshow-multiple-items-center-mode').forEach(function(el) {
            new EricSlider(el, {
                label: 'Services Slideshow',
                controls: true,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false,
                adaptiveHeight: false,
                dots: true,
                infinite: true,
                centerMode: true,
                centerPadding: '175px',
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 992, settings: { centerPadding: '75px' } },
                    { breakpoint: 768, settings: { centerPadding: '0px' } }
                ]
            });
        });

        // My Quotes (fade, no controls, with dots)
        document.querySelectorAll('.slideshow-quotes').forEach(function(el) {
            new EricSlider(el, {
                label: 'Quotes Slideshow',
                controls: false,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: true,
                adaptiveHeight: true,
                dots: true,
                infinite: true,
                pauseOnHover: true,
                pauseOnFocus: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });

    }

    // Eric Slider: Initialize immediately on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEricSlider);
    } else {
        initEricSlider();
    }

})();
