$(document).ready(function() {
	//alert("1"); //Test to make sure its working


	//MENU SLIDER
	$('.menuBox').click( function () { 
		$('.slidedown').slideToggle('fast');
	});
	$('.slidedown').mouseleave(function() {
		 $(this).slideToggle('fast');
	});


	//BOX CAPTIONS
	$('.box').mouseenter( function () { 
		$(this + '.caption').fadeToggle( "fast" );
	});
	$('.box').mouseleave(function() {
		 $('.box + .caption').fadeToggle( "fast" );
	});


	// $('.box').css('background-image', 'url(' + url goes here + ')');



});