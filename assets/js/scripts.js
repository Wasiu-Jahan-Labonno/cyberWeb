(function ($) { 'use strict'; jQuery(document).on('ready', function () { $(window).on('load', function () { setTimeout(function () { $('.preloaders').fadeOut('fast') }, 100) }); $(".mobile_menu").simpleMobileMenu({ "menuStyle": "slide" }); $('.video-play').magnificPopup({ type: 'iframe' }); $('.magnific_popup').magnificPopup({ type: 'iframe' }); $('.counter_feature').on('inview', function (event, visible, visiblePartX, visiblePartY) { if (visible) { $(this).find('.counter-num').each(function () { var $this = $(this); $({ Counter: 0 }).animate({ Counter: $this.text() }, { duration: 2000, easing: 'swing', step: function () { $this.text(Math.ceil(this.Counter)) } }) }); $(this).unbind('inview') } }); $("#testimonial-slider").owlCarousel({ items: 2, itemsDesktop: [1000, 2], itemsDesktopSmall: [980, 2], itemsTablet: [768, 1], itemsMobile: [650, 1], pagination: !0, navigation: !0, navigationText: ["", ""], slideSpeed: 1000, autoPlay: !1 }); $('.partner').owlCarousel({ autoPlay: 3000, items: 5, itemsDesktop: [1199, 3], itemsDesktopSmall: [979, 3] }) }); new WOW().init() })(jQuery)