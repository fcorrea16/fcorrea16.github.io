window.addEventListener('load', function() {

	$(document).on("scroll", function(e){
		var scrolled = $(window).scrollTop();
		// console.log("scrolled" + scrolled + "pixels")
	
		if (scrolled > 390) {
			$('.intro-text').css('opacity', 1)
			$('.textbreak').css("transform", "translateY(0px)");
		}

		if (scrolled < 100) {
			$('.intro-text').css('opacity', 0)
			$('.textbreak').css("transform", "translateY(30px)");
		}

		if (scrolled > 2000) {
			$('#about').css('opacity', 1)
			$('#about').css("transform", "translateX(0px)");
		}

		if (scrolled > 800) {
			$('#top-button').css('display', 'block')
		}

		if (scrolled < 500) {
			$('#top-button').css('display', 'none')
		}

	}) // closing scroll 

	$('.menu-work').on('click', function(event){
		 $("html, body").animate({
 				scrollTop:1140
 			},"slow");
	})

	$('.menu-about').on('click', function(event){
		 $("html, body").animate({
 				scrollTop:2600
 			},"slow");
	})


	$('#top-button').on('click', function(event){
		 $("html, body").animate({
 				scrollTop:0
 			},"slow");
	})

	$('.button-works').on('mouseover', function(event){
		$(event.target).css('transform', 'scale(1.2)')
	})

}) // closing on load