//jshint esversion: 6

$(function(){

	let pizzaz = {
		class: '.knob-container-1',
		choices: ['Sump\'n', 'Semi-Worthy', 'Flashy', 'Bob Saget!'],
		int: null,
		count: 0
	};
	let mojo = {
		class: '.knob-container-2',
		choices: ['10%', '50%', '99%', 'Ya Baabayyyyy ;)'],
		int: null,
		count: 0
	};
	let spice = { 
		class: '.knob-container-3',
		choices: ['Tangy', 'Hot', 'Red Hot', 'Guy Fierri :O'],
		int: null,
		count: 0
	};

	let currentTimeout = null;

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
				
			knob.int = setInterval(() => {
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
						.removeClass('leave')
						.addClass('enter');
					}, 200);

					setTimeout(() =>{
						$element
						.removeClass('enter');
					}, 300);
				}
				
			}, 1000);

		}).mouseup(function(e){
			clearInterval(knob.int);
		}).mouseleave(function(e){
			clearInterval(knob.int);
		});
	}

	function activateAccel(knob){

		$(knob.class).mousedown('.knob', function(e){
			console.log(knob,'count: ',knob.count);
			setAcceleratingTimeout(function(){ animateKnob(knob); }, 2000, (knob.choices.length - knob.count));
		}).mouseup(function(e){
			clearTimeout(currentTimeout);
		}).mouseleave(function(e){
			clearTimeout(currentTimeout);
		});
	}

	//Actual animation and html change for knob
	function animateKnob(knob){
		let $element = 
		$(knob.class)
		.children('.setting')
		.children('span');


		$element.addClass('leave');

		setTimeout(() =>{
			$element
			.html(knob.choices[knob.count++]);
		}, 100);

		setTimeout(() =>{
			$element
			.removeClass('leave')
			.addClass('enter');
		}, 200);

		setTimeout(() =>{
			$element
			.removeClass('enter');
		}, 300);
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
	}
	activateAccel(pizzaz);
	activateAccel(mojo);
	activateAccel(spice);

	$('.test-btn').on('click', test);

	//Do the reverse
	function setDeceleratingTimeout(callback, factor, times)
	{
		console.log('times',times);
	    var internalCallback = function(tick, counter) {
	        return function() {
	            if (--tick >= 0) {
	                window.setTimeout(internalCallback, ++counter * factor);
	                callback();
	            }
	        };
	    }(times, 0);

	    window.setTimeout(internalCallback, factor);
	}

	function setAcceleratingTimeout(callback, factor, times)
	{
	    var internalCallback = function(tick, counter) {
	        return function() {
	            if (--tick >= 0) {
	            	//we can either use x/++counter, instead of just counter
	            	//or better, can also invert tick and counter
	                currentTimeout = window.setTimeout(internalCallback, (--counter/5) * factor);
	                callback();
	            }
	        };
	    }(times, times);

	   currentTimeout = window.setTimeout(internalCallback, factor);
	}
});