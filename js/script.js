//jshint esversion: 6

$(function(){
	let int001;
	let count001 = 0;
	let int002;
	let int003;

	let pizzaz = ['Zilch', '2', '3', '4', '5'];
	let mojo = ['Nada', '2', '3', '4', '5'];
	let spice = ['Mild', '2', '3', '4', '5'];

	$('.knob-container').mousedown('.knob', function(e){
		e.preventDefault();
		$(this).children('.knob').addClass('activated');
		
		
		// int001 = setInterval(() => {
		// 	console.log('int001',int001);
		// 	count++;
		// 	console.log('count',count);
		// }, 1000);
		// console.log('int001',int001);
	}).mouseup(function(e){
		e.preventDefault();
		$(this).children('.knob').removeClass('activated');
		// clearInterval(int001);
	}).mouseleave(function(e){
		e.preventDefault();
		$(this).children('.knob').removeClass('activated');
		// clearInterval(int001);
	});


	$('.knob-container-1').mousedown('.knob', function(e){
		
		int001 = setInterval(() => {
			console.log('int001',int001);
			// count001++;
			if(count001 < pizzaz.length){
				$(this).children('.setting').html(pizzaz[count001++]);
			}
			
		}, 1000);

	}).mouseup(function(e){
		clearInterval(int001);
	}).mouseleave(function(e){
		clearInterval(int001);
	});

	$('.knob-container-2').mousedown('.knob', function(e){

	}).mouseup(function(e){

	}).mouseleave(function(e){

	});

	$('.knob-container-3').mousedown('.knob', function(e){

	}).mouseup(function(e){

	}).mouseleave(function(e){

	});
});