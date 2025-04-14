/*
Author       : theme_ocean
Template Name: Cybal - Cyber Security HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			setTimeout(function(){
				$('.preloaders').fadeToggle();
			}, 1500);
		}); 
		/*END PRELOADER JS*/		
		
		/*START MENU JS*/		
			$(".mobile_menu").simpleMobileMenu({			
				"menuStyle": "slide"
			});
		/*END MENU JS*/				

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });		
		$('.magnific_popup').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/	

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */

		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		   items:2,
			itemsDesktop:[1000,2],
			itemsDesktopSmall:[980,2],
			itemsTablet:[768,1],
			itemsMobile:[650,1],
			pagination:true,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/	

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/			

	}); 	
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);

/*START MARQUEE JS*/
	let lastTime = (new Date()).getTime(),
		currentTime = 0,
		counter = 0;

		const myScroller1 = new SuperMarquee(
		  document.getElementById( "supermarquee1" ),
		  {
			"content" : "*Access Control Lists* &nbsp &nbsp  *Search Functionalty* &nbsp &nbsp  *legal Disclaimers*  &nbsp &nbsp  *Network Seqmenttation* &nbsp &nbsp  *Feedback & Reporting* &nbsp &nbsp"
		  }
		);

	function loop() {
		window.requestAnimationFrame( loop );
		currentTime = ( new Date() ).getTime();
		delta = ( currentTime - lastTime ) / 9000;
		myScroller4.setPerspective( "{ \"rotateY\" : " + 30 * Math.sin( delta ) + "}" );
	}

	loop();
/*END MARQUEE JS*/


  

