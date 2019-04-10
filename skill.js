$(document).ready(function () {
	$(window).scroll(function () {
		// let hT = $('.skillsGridConainer').offset().top;
		// let hH = $('skillsGridConainer').outerHeight();
		// let wH = $(window).height();
		// let wS = $(this).scrollTop();
		// if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
			$('.skillbar').each(function () { 
				$(this).find('.skillbar-bar').animate({
					height: $(this).attr('howMuch')
				}, 5000);
			});

		// }

	});

})
		//scrollDown Gif
		//add fadeout effect
		//add animated gif
		//add function for running again if user return to top ;

