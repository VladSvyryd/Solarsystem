$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.button').css({
		'transform' : 'translate(0px, '+wScroll/2+'%)'

	});


	$('.blackhole').css({
		'transform' : 'translate(0px,-'+wScroll/10+'%)'

	});

		$('.cometplacer').css({
		'transform' : 'translate('+wScroll/4+'%, '+wScroll/4+'%)'

	});


});
