(function($) {
	"use strict";

/* ----------------------------
    Preloader
    ------------------------------ */

$(window).on('load', function(){        
	$('#preloader').delay(300).fadeOut('slow',function(){
	$(this).remove();
	});
});

/* ----------------------------
    Top Scroll
    ------------------------------ */

var offset = 220;
var duration = 500;
jQuery(window).on('scroll', function() {
	if (jQuery(this).scrollTop() > offset) {
		jQuery('.scroll-top').fadeIn(duration);
	} 
	else {
		jQuery('.scroll-top').fadeOut(duration);
	}
});
jQuery('.scroll-top').on('click', function() {
	event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
})

/* ----------------------------
	@module       Copyright
	@description  Evaluates the copyright year
    ------------------------------ */
	
var currentYear = (new Date).getFullYear();
	$(document).ready(function () {
		$(".current-year").text((new Date).getFullYear());
});

/* ----------------------------
    Smooth scroll js
    ------------------------------ */

$('a.smooth-menu').on("click", function (e) {
	e.preventDefault();
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top - 0
	}, 1000);
});

/* ----------------------------
    Counter up
    ------------------------------ */

$('.counter').counterUp({
	delay: 10,
	time: 1500
});

/* ----------------------------
    venobox
    ------------------------------ */

$('.venobox').venobox();

/* ----------------------------
    Portfolio
    ------------------------------ */

var filterList = {
	init: function () {
	// MixItUp plugin
	// http://mixitup.io
	$('#portfoliolist').mixItUp({
  		selectors: {
    	target: '.portfolio',
    	filter: '.filter'
    		},
				load: {
				filter: '.Cabin'  
			}
		});
	}
};

// Run the show!
filterList.init();

/* ----------------------------
    Skill progress
    ------------------------------ */

var smProgress = $('.skill-progress');
if (smProgress.length > 0) {
	smProgress.waypoint(function () {
		jQuery('.skill-bar').each(function () {
			jQuery(this).find('.progress-content').animate({
				width: jQuery(this).attr('data-percentage')
			}, 2000);
			jQuery(this).find('.progress-mark').animate({
				left: jQuery(this).attr('data-percentage')
			}, {
				duration: 2000,
				step: function (abb, ab) {
					var data = Math.round(abb);
					jQuery(this).find('.percent').html(data + '%')
				}
			})
		})
	}, {
		offset: '90%'
	})
}

/* ----------------------------
    Testimonials
    ------------------------------ */

$('.testimonial-carousel').owlCarousel({
	loop: true,
	margin: 10,
	dots:false,
	items: 1,
	nav: true,
	autoplay:true
})

/* ----------------------------
    Testimonials 2
    ------------------------------ */

$('.testimonial-carousel-2').owlCarousel({
	loop: true,
	margin: 30,
	dots:false,
	items: 3,
	nav: false,
	autoplay:true,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1
	  },
	  768: {
		items: 2
	  },
	  992: {
		items: 3
	  }
	}
})

/* ----------------------------
    Testimonials 3
    ------------------------------ */

$('.testimonial-carousel-3').owlCarousel({
	loop: true,
	margin: 30,
	dots:false,
	items: 3,
	nav: false,
	autoplay:true,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1
	  },
	  768: {
		items: 2
	  },
	  992: {
		items: 3
	  }
	}
})

/* ----------------------------
    Testimonials 4
    ------------------------------ */

$('.testimonial-carousel-4').owlCarousel({
	loop: true,
	margin: 30,
	dots:false,
	items: 1,
	nav: false,
	autoplay:true
})

})(jQuery);