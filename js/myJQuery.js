$(document).ready(function() {


	//MENU SLIDER
	$('.menuBox').click( function () { 
		$('.slidedown').slideToggle('fast');
	});
	$('.slidedown').mouseleave(function() {
		 $(this).slideToggle('fast');
	});


	//BOX CAPTIONS
	$('.box').hover( 
		function () { 
			$(this).find('.caption').slideDown(250);
		},
		function () {
			$(this).find('.caption').slideUp(250);
		}
	
	);

	$(document).ready(function(){
		$('#slider1') .cycle({
			fx: 'fade', // here change effect to blindX, blindY, blindZ etc 
			speed: 'slow', 
			timeout: 2000 
		});
	});


});