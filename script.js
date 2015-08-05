window.addEventListener('load', function() {

	console.log('connected to javascript');

	$(document).on("scroll", function(e){
		var scrolled = $(window).scrollTop();
		console.log("scrolled" + scrolled + "pixels")
	
		if (scrolled > 390) {
			$('.intro-text').css('opacity', 1)
			$('.textbreak').css("transform", "translateY(0px)");
		}

		if (scrolled < 100) {
			$('.intro-text').css('opacity', 0)
			$('.textbreak').css("transform", "translateY(30px)");
		}


	})

	$('.menu-work').on('click', function(event){
		 $("html, body").animate({
 				scrollTop:1140
 			},"slow");
	})



})