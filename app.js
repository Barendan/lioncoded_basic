$(document).ready(function() {
	const controller = new ScrollMagic.Controller,
		welcome = $("section.welcome"),
		about = $("section.whowhatwhy"),
		myWork_section = $("section.mywork");

	function init() {

		// bring in welcome page
		TweenMax.to(welcome, .6, {
			opacity: 1,
			ease: Cubic.easeOut,
			onStart: function() {
					welcomeEnter()
				},
			onComplete: function() {
					aboutEnter()
				}
		})
	}

	function welcomeEnter() { 
		const layer_1 = $("#layer1"),
			layer_2 = $("#layer2"),
			layer_3 = $("#layer3"),
			layer_4 = $("#layer4"),
			layer_5 = $("#layer5");

		let cloudTL = new TimelineMax({
			delay: 1,
			repeat: -1,
			repeatDelay: 1
		});
		
		cloudTL
			.to(layer_2, 20, {x: '+=50', ease: Power0.easeNone })
			.to(layer_2, 20, {x: '-=50', ease: Power0.easeNone });

	}

	function aboutEnter() {
		const background = $("")
			container_1 = $(".background .cover-image .container-1"),
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
		
		const aboutStart = new TimelineMax();
		aboutStart
			.fromTo(container_1, 10, {y: '100%'}, {y: '0%', ease: Sine.easeInOut}, 0)
			.fromTo(background_1, 10, {y: '-100%',opacity: 0}, {y: '0%',opacity: 0.5,ease: Sine.easeInOut}, 0)
			.fromTo(container_2, 10, {x: "-100%"}, {x: "0%",ease: Sine.easeInOut}, 0)
			.fromTo(background_2, 10, {x: "100%",opacity: 0}, {x: "0%",opacity: 1,ease: Sine.easeInOut}, 0)
			.to(welcome, 10, { opacity: 0 }, 0);

			
		let enterWho = new ScrollMagic.Scene({
			triggerElement: '.whowhatwhy',
			triggerHook: 1,
			duration: '100%'
		})
		.setTween(aboutStart)
		.addTo(controller);

		let aboutEnd = new TimelineMax();
	    aboutEnd
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
			.fromTo(background_6, 5, {x: "95%",opacity: .5}, {
				x: "0%",
				opacity: 1,
				ease: Sine.easeInOut,
				onComplete: function() {
					myWork()
				}
			}, 5)

		let pinWho = new ScrollMagic.Scene({
			triggerElement: '.whowhatwhy',
			triggerHook: 0,
			duration: '100%'
		})
		.setPin('.whowhatwhy')
		.setTween(aboutEnd)
		.addTo(controller);

	}

	function myWork() {
		const paraCodeTween = new TimelineMax();
		paraCodeTween
			// .from('.language-markup', 0.6, { autoAlpha: 0, ease:Power0.easeNone },0.6)
			.to(myWork_section, 0.3, {autoAlpha: 1})
			.to('.language-markup', 1, { y: '-30%', ease: Power0.easeNone },0);

		let paraCodeSlide = new ScrollMagic.Scene({
			triggerElement: '.mywork',
			triggerHook: 1,
			duration: '400%'
		})
		.setTween(paraCodeTween)
		.addTo(controller)	

		let typed = new Typed('.work-title', {
			strings:  ['', '$:/^700Projects/^300atrchive', '$:/Projects/archive'],
			// startDelay: 2000,
			typeSpeed: 50,
			backSpeed: 30,
			backDelay: 200,
			smartBackspace: true
		  });
		
	}
	

	init();

})