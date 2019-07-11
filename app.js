$(document).ready(function() {
	
	let controller = new ScrollMagic.Controller;


	function whoWhatWhy() {
	    let container_1 = $(".background .cover-image .container-1"),
		    background_1 = $(".background .cover-image .container-1 .background-1"),
		    container_2 = $(".background .cover-image .container-2"),
		    background_2 = $(".background .cover-image .container-2 .background-2"),
		    container_3 = $(".background .cover-image .container-3"),
		    background_3 = $(".background .cover-image .container-3 .background-3"),
		    container_4 = $(".background .cover-image .container-4"),
		    background_4 = $(".background .cover-image .container-4 .background-4"),
		    container_5 = $(".background .cover-image .container-5"),
		    background_5 = $(".background .cover-image .container-5 .background-5"),
		    container_6 = $(".background .cover-image .container-6"),
		    background_6 = $(".background .cover-image .container-6 .background-6");
	    
		let whoTween = new TimelineMax();
		let pinTween = new TimelineMax();

		whoTween
			.fromTo(container_1, 10, {y: '100%'}, {y: '0%', ease: Sine.easeInOut}, 0)
			.fromTo(background_1, 10, {y: '-100%',opacity: 0}, {y: '0%',opacity: 0.5,ease: Sine.easeInOut}, 0)
			.fromTo(container_2, 10, {x: "-100%"}, {x: "0%",ease: Sine.easeInOut}, 0)
	    	.fromTo(background_2, 10, {x: "100%",opacity: 0}, {x: "0%",opacity: 1,ease: Sine.easeInOut}, 0);

	    pinTween
	    	.to(container_3, 1, {opacity: 1,ease: Sine.easeInOut}, 1)
	    	.fromTo(container_3, 4, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 1)
	    	.fromTo(background_3, 4, {y: "-95%",opacity: .5}, {y: "0%",opacity: .5,ease: Sine.easeInOut}, 1)
	    	.to(container_4, 1, {opacity: 1,ease: Sine.easeInOut}, 1)
	    	.fromTo(container_4, 4, {x: "-100%"}, {x: "0%",ease: Sine.easeInOut}, 1)
	    	.fromTo(background_4, 4, {x: "95%",opacity: .5}, {x: "0%",opacity: 1,ease: Sine.easeInOut}, 1)

			.to(container_5, 1, {opacity: 1,ease: Sine.easeInOut}, 5)
	    	.fromTo(container_5, 5, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 5)
	    	.fromTo(background_5, 5, {y: "-95%",opacity: .5}, {y: "0%",opacity: 1,ease: Sine.easeInOut}, 5)
	    	.to(container_6, 1, {opacity: 1,ease: Sine.easeInOut}, 5)
	    	.fromTo(container_6, 5, {x: "-100%"}, {x: "0%",ease: Sine.easeInOut}, 5)
	    	.fromTo(background_6, 5, {x: "95%",opacity: .5}, {x: "0%",opacity: 1,ease: Sine.easeInOut}, 5);


		let enterWho = new ScrollMagic.Scene({
			triggerElement: '.whowhatwhy',
			triggerHook: 1,
			duration: '100%'
		})
		// .setClassToggle(this, 'fade-in')
		.setTween(whoTween)
		.addTo(controller);

		let pinWho = new ScrollMagic.Scene({
			triggerElement: '.whowhatwhy',
			triggerHook: 0,
			duration: '100%'
		})
		.addIndicators({
			name: 'Pinhead',
			colorTrigger: 'black',
			colorStart: 'green',
			colorEnd: 'red'
		})
		.setPin('.whowhatwhy')
		.setTween(pinTween)
		.addTo(controller);

	}

	function myWork() {
		let paraCodeTween = new TimelineMax();
		paraCodeTween
			// .from('.language-markup', 0.6, { autoAlpha: 0, ease:Power0.easeNone },0.6)
			.to('.language-markup', 1, { y: '-10%', ease: Power0.easeNone },0);

		let paraCodeSlide = new ScrollMagic.Scene({
			triggerElement: '.mywork',
			triggerHook: 1,
			duration: '400%'
		})
		.setTween(paraCodeTween)
		.addTo(controller)		
	}



	function init() {
		whoWhatWhy();
		myWork();
	}

	init()

})