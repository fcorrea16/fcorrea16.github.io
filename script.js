window.addEventListener('load', function() {

	$(document).on("scroll", function(){
		var scrolled = $(window).scrollTop();
		// console.log("scrolled" + scrolled + "pixels")
	
		if (scrolled > 200) {
			$('.intro-text').css('opacity', 1);
			$('.textbreak').css("transform", "translateY(0px)");
		}

		if (scrolled < 100) {
			$('.intro-text').css('opacity', 0);
			$('.textbreak').css("transform", "translateY(30px)");
		}

		if (scrolled > 2000) {
			$('#about').css('opacity', 1);
			$('#about').css("transform", "translateX(0px)");
		}

		if (scrolled > 800) {
			$('#top-button').css('display', 'block');
		}

		if (scrolled < 500) {
			$('#top-button').css('display', 'none');
		}

	}); // closing scroll 

	$('.menu-work').on('click', function(){
		 $("html, body").animate({
 				scrollTop: $('#works').offset().top 
 				// scrollTop:1140
 			},"slow");
	});

	$('.menu-about').on('click', function(){
		 $("html, body").animate({
		 		scrollTop: $('#about-background').offset().top 
 				// scrollTop:2600
 			},"slow");
	});


	$('#top-button').on('click', function(){
		 $("html, body").animate({
 				scrollTop:0
 			},"slow");
	});


}); // closing on load