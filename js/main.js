;(function () {
    'use strict';

    /* iPad and iPod detection */
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    /* Parallax */
    var parallax = function () {
        $(window).stellar();
    };

    /* Burger Menu */
    var burgerMenu = function () {
        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
            event.preventDefault();
            if ($('#navbar').is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    };

    /* Page Nav */
    var clickMenu = function () {
        $('#navbar a:not([class="external"])').click(function (event) {
            var section = $(this).data('nav-section'),
                navbar = $('#navbar'),
                link = $(this).data('link');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top - 55
                }, 500);
            }

            if (navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

            if (!link) {
                event.preventDefault();
                return false;
            }
        });
    };

    /* Reflect scrolling in navigation */
    var navActive = function (section) {
        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });
    };

    var navigationSection = function () {
        var $section = $('section[data-section]');
        $section.waypoint(function (direction) {
            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });

        $section.waypoint(function (direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function () {
                return -$(this.element).height() + 155;
            }
        });
    };

    /* Window Scroll */
    var windowScroll = function () {
        var lastScrollTop = 0;

        $(window).scroll(function (event) {
            var header = $('#fh5co-header'),
                scrlTop = $(this).scrollTop();

            if (scrlTop > 500 && scrlTop <= 2000) {
                header.addClass('navbar-fixed-top fh5co-animated slideInDown');
            } else if (scrlTop <= 500) {
                if (header.hasClass('navbar-fixed-top')) {
                    header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
                    setTimeout(function () {
                        header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
                    }, 100);
                }
            }

        });
    };

    /* Home */
    var homeAnimate = function () {
        if ($('#fh5co-home').length > 0) {
            $('#fh5co-home').waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(function () {
                        $('#fh5co-home .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 200);
                    $(this.element).addClass('animated');
                }
            }, {offset: '80%'});
        }
    };

    /* Cursos */
    var cursosAnimate = function () {
        if ($('#fh5co-cursos').length > 0) {
            $('#fh5co-cursos .to-animate').each(function (k) {
                var el = $(this);

                setTimeout(function () {
                    el.addClass('bounceIn animated');
                }, k * 200, 'easeInOutExpo');
            });
        }
    };

    /* Cambridge */
    var cambridgeAnimate = function () {
        var cambridge = $('#fh5co-cambridge');
        if (cambridge.length > 0) {
            cambridge.waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(function () {
                        cambridge.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 200);

                    setTimeout(function () {
                        cambridge.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInLeft animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 700);

                    setTimeout(function () {
                        cambridge.find('.to-animate-3').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 1000);
                    $(this.element).addClass('animated');
                }
            }, {offset: '80%'});
        }
    };

    /* Contactanos */
    var gettingStartedAnimate = function () {
        var started = $('.getting-started-1');
        if (started.length > 0) {
            started.waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(function () {
                        started.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 200);

                    setTimeout(function () {
                        started.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 200);
                    $(this.element).addClass('animated');
                }
            }, {offset: '80%'});
        }
    };

    /* Contactanos 2 */
    var gettingStarted2Animate = function () {
        var started = $('.getting-started-2');
        if (started.length > 0) {
            started.waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(function () {
                        started.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 200);

                    setTimeout(function () {
                        started.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 200);
                    $(this.element).addClass('animated');
                }
            }, {offset: '80%'});
        }
    };

    /* Metodología */
    var metodologiaAnimate = function () {
        var metodologia = $('#fh5co-metodologia');
        if (metodologia.length > 0) {
            metodologia.waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    var sec = metodologia.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);
                    setTimeout(function () {
                        metodologia.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 200);

                    setTimeout(function () {
                        metodologia.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('bounceIn animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, sec);
                    $(this.element).addClass('animated');
                }
            }, {offset: '80%'});
        }
    };

    /* About Us */
    var aboutAnimate = function () {
        if ($('#about-us').length > 0) {
            $('#about-us .to-animate').each(function (k) {
                var el = $(this);

                setTimeout(function () {
                    el.addClass('fadeInUp animated');
                }, k * 200, 'easeInOutExpo');
            });
        }
    };
    var aboutWayPoint = function () {
        if ($('#about-us').length > 0) {
            $('#about-us').waypoint(function (direction) {
                if (direction === 'down' && !$(this).hasClass('animated')) {
                    setTimeout(aboutAnimate, 200);
                    $(this.element).addClass('animated');
                }
            }, {offset: '95%'});
        }
    };

    /* Certificados */
    var trustedAnimate = function () {
        var trusted = $('#fh5co-trusted');
        if (trusted.length > 0) {
            trusted.waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    var sec = trusted.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);
                    setTimeout(function () {
                        trusted.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeIn animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 200);

                    setTimeout(function () {
                        trusted.find('.to-animate-2').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('bounceIn animated');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, sec);
                    $(this.element).addClass('animated');
                }
            }, {offset: '80%'});
        }
    };

    /* Footer */
    var footerAnimate = function () {
        var footer = $('#fh5co-footer');
        if (footer.length > 0) {
            footer.waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(function () {
                        footer.find('.to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);
                    $(this.element).addClass('animated');
                }
            }, {offset: '80%'});
        }
    };

    $(function () {
        parallax();
        burgerMenu();
        clickMenu();
        windowScroll();
        navigationSection();

        homeAnimate();
        cursosAnimate();
        cambridgeAnimate();
        gettingStartedAnimate();
        gettingStarted2Animate();
        metodologiaAnimate();
        aboutWayPoint();
        trustedAnimate();
        footerAnimate();
    });
}());
