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
		choices: ['Tangy', 'Hot', 'Red Hot', 'Guy Fierri :O',':O :O',':O :O :O',':O :O :O :O',':O :O :O :O :O'],
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

	function activateDecel(knob){
		$(knob.class).mousedown('.knob', function(e){
			setAcceleratingTimeout(function(){ animateKnob(knob); }, 2000, knob.choices.length);
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
			// .addClass('hidden')
			.removeClass('leave')
			.addClass('enter');
		}, 200);

		setTimeout(() =>{
			$element
			// .removeClass('hidden')
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
		// .removeClass('leave');
		// .addClass('enter')
		// .removeClass('enter');
	}

	// activate(pizzaz);
	activateDecel(pizzaz);
	activateDecel(mojo);
	activateDecel(spice);

	$('.test-btn').on('click', test);
	// test();

	//Do the reverse
	function setDeceleratingTimeout(callback, factor, times)
	{
		console.log('times',times);
	    var internalCallback = function(tick, counter) {
	    	console.log('tick',tick);
	    	console.log('counter',counter);
	    	console.log('factor',factor);
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
		console.log('times',times);
	    var internalCallback = function(tick, counter) {
	    	console.log('tick',tick);
	    	console.log('counter',counter);
	    	console.log('factor',factor);
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

	// console.log() requires firebug    
	// setDeceleratingTimeout(function(){ console.log('hi'); }, 10, 10);
	// setDeceleratingTimeout(function(){ console.log('bye'); }, 1000, 10);
	
});