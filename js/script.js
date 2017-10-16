//jshint esversion: 6

$(function(){
	let int001;

	$('.knob-container').mousedown('.knob', function(e){
		e.preventDefault();
		$(this).children('.knob').addClass('activated');
		let count = 0;
		
		int001 = setInterval(() => {
			// console.log(this);
			console.log('int001',int001);
			count++;
			console.log('count',count);
		}, 1000);
		// console.log('int001',int001);
	}).mouseup(function(e){
		e.preventDefault();
		$(this).children('.knob').removeClass('activated');
		clearInterval(int001);
	}).mouseleave(function(e){
		e.preventDefault();
		$(this).children('.knob').removeClass('activated');
		clearInterval(int001);
	});
});