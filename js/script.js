//jshint esversion: 6

$(function(){

	let pizzaz = {
		class: '.knob-container-1',
		choices: ['2', '3', '4', '5'],
		int: null,
		count: 0
	};
	let mojo = {
		class: '.knob-container-2',
		choices: ['2', '3', '4', '5'],
		int: null,
		count: 0
	};
	let spice = { 
		class: '.knob-container-3',
		choices: ['2', '3', '4', '5'],
		int: null,
		count: 0
	};

	//For all knobs, class change
	$('.knob-container').mousedown('.knob', function(e){
		e.preventDefault();
		$(this).children('.knob').addClass('activated');
	}).mouseup(function(e){
		e.preventDefault();
		$(this).children('.knob').removeClass('activated');
	}).mouseleave(function(e){
		e.preventDefault();
		$(this).children('.knob').removeClass('activated');
	});

	function activate(knob){
		$(knob.class).mousedown('.knob', function(e){
			console.log('clickdown');
				
			knob.int = setInterval(() => {
				console.log('knob.int',knob.int);
				// count001++;
				if(knob.count < knob.choices.length){
					let $element = 
					$(this)
					.children('.setting')
					.children('span');


					$element.addClass('leave');

					setTimeout(() =>{
						$element
						.html(knob.choices[knob.count++]);
					}, 100);

					setTimeout(() =>{
						$element
						// .addClass('hidden')
						.removeClass('leave')
						.addClass('enter');
					}, 200);

					setTimeout(() =>{
						$element
						// .removeClass('hidden')
						.removeClass('enter');
					}, 300);


					
					// .delay(50)
					// .slideDown();
				}
				
			}, 1000);

		}).mouseup(function(e){
			clearInterval(knob.int);
		}).mouseleave(function(e){
			clearInterval(knob.int);
		});
	}

	function test(){
		let $element = $('.knob-container-1 .setting span');

		$element.addClass('leave');

		setTimeout(()=>{

		}, 100);
	}

	function sequence(){
		let $element = $('.knob-container-1 .setting span');
		$element.slideUp()
		.delay(300)
		.slideDown();
		// .removeClass('leave');
		// .addClass('enter')
		// .removeClass('enter');
	}

	activate(pizzaz);
	activate(mojo);
	activate(spice);

	$('.test-btn').on('click', test);
	// test();


	// $('.knob-container-1').mousedown('.knob', function(e){
		
	// 	int001 = setInterval(() => {
	// 		console.log('int001',int001);
	// 		// count001++;
	// 		if(count001 < pizzaz.length){
	// 			$(this).children('.setting').html(pizzaz[count001++]);
	// 		}
			
	// 	}, 1000);

	// }).mouseup(function(e){
	// 	clearInterval(int001);
	// }).mouseleave(function(e){
	// 	clearInterval(int001);
	// });

	// $('.knob-container-2').mousedown('.knob', function(e){

	// }).mouseup(function(e){

	// }).mouseleave(function(e){

	// });

	// $('.knob-container-3').mousedown('.knob', function(e){

	// }).mouseup(function(e){

	// }).mouseleave(function(e){

	// });
});