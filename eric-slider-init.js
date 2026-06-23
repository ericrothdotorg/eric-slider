/**
 * Eric Slider & Animate — initialization.
 *
 * Loaded as a real enqueued file with 'eric-slider-js' as a dependency, so the
 * EricSlider library is guaranteed to be defined before this runs. That removes
 * the old inline setTimeout retry race (slider sometimes loading late / only on
 * refresh). Init logic and config live here; the library file stays untouched.
 */
(function() {
    // Animate.css Initialization
    function initAnimateCSS() {
        var animationClasses = [
            '.daneden-fadeIn',
            '.daneden-fadeInUp',
            '.daneden-fadeInDown',
            '.daneden-zoomIn',
            '.daneden-zoomOut',
            '.daneden-slideInLeft',
            '.daneden-slideInRight',
            '.daneden-slideInUp',
            '.daneden-slideInDown'
        ];

        // Use IntersectionObserver for better Performance
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var elem = entry.target;
                        animationClasses.forEach(function(className) {
                            if (elem.classList.contains(className.replace('.', ''))) {
                                var animation = className.replace('.daneden-', '');
                                elem.classList.add('animate__animated', 'animate__' + animation);
                            }
                        });
                        observer.unobserve(elem);
                    }
                });
            }, {
                rootMargin: '0px 0px -10% 0px'
            });

            animationClasses.forEach(function(className) {
                document.querySelectorAll(className).forEach(function(elem) {
                    observer.observe(elem);
                });
            });
        } else {
            // Fallback for older Browsers
            function isScrolledIntoView(elem) {
                var rect = elem.getBoundingClientRect();
                var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
            }
            function addAnimationClass(className) {
                document.querySelectorAll(className).forEach(function(elem) {
                    if (!elem.classList.contains('animate__animated') && isScrolledIntoView(elem)) {
                        var animation = className.replace('.daneden-', '');
                        elem.classList.add('animate__animated', 'animate__' + animation);
                    }
                });
            }
            function onScroll() {
                animationClasses.forEach(addAnimationClass);
            }
            function throttle(fn, limit) {
                let waiting = false;
                return function() {
                    if (!waiting) {
                        fn();
                        waiting = true;
                        setTimeout(() => waiting = false, limit);
                    }
                };
            }
            window.addEventListener('scroll', throttle(onScroll, 150));
            onScroll();
        }
    }

    // Eric Slider Initialization
    function initEricSlider() {
        // Single Item with Fade
        document.querySelectorAll('.slideshow-single-item').forEach(function(el) {
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

        // Single Item, No Dots (same as single-item, dots off)
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

        // Single Item Chromeless (no Controls, no Dots)
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

        // Multiple Items 3
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

        // Multiple Items 4
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

        // Multiple Items Vertical
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

        // Center Mode
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

        // My Quotes
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

    // Animate.css: Defer via requestIdleCallback as it is non-critical
    function scheduleAnimateCSS() {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(initAnimateCSS, { timeout: 500 });
        } else {
            setTimeout(initAnimateCSS, 200);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleAnimateCSS);
    } else {
        scheduleAnimateCSS();
    }
})();
