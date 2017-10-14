//jshint esversion: 6

$(function(){
	let int001;

	$('.knob').mousedown(function(){
		$(this).addClass('activated');
		
		int001 = setInterval(() => {
			console.log(this);
		}, 100);
	}).mouseleave(function(){
		$(this).removeClass('activated');
		clearInterval(int001);
	});
});