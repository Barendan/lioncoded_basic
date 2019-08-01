$(document).ready(function() {
	const controller = new ScrollMagic.Controller,
		welcome = $("section.welcome"),
		scene_container = $(".scene-container"),
		scene_1 = $("#layer1"),
		scene_2 = $("#layer2"),
		scene_3 = $("#layer3"),
		scene_4 = $("#layer4"),
		scene_5 = $("#layer5"),
		welcome_title = $(".welcome h1"),
		
		doWhat = $("section.doWhat"),
		background = $("section.doWhat .background"),
		container_1 = $(".background .cover-image .container-1"),
		background_1 = $(".background .cover-image .container-1 .background-1"),
		container_2 = $(".background .cover-image .container-2"),
		background_2 = $(".background .cover-image .container-2 .wrap_background"),
		container_3 = $(".background .cover-image .container-3"),
		background_3 = $(".background .cover-image .container-3 .background-3"),
		container_4 = $(".background .cover-image .container-4"),
		background_4 = $(".background .cover-image .container-4 .background-4"),
		container_5 = $(".background .cover-image .container-5"),
		background_5 = $(".background .cover-image .container-5 .background-5"),
		container_6 = $(".background .cover-image .container-6"),
		background_6 = $(".background .cover-image .container-6 .background-6"),

		text_1 = $(".background .cover-text .cont1"),
		text_2 = $(".background .cover-text .cont2"),
		text_3 = $(".background .cover-text .cont3"),
		text_4 = $(".background .cover-text .cont4"),


		myWork_section = $("section.mywork")
		;


	function init() {
		TweenMax.to(welcome, 1.5, {
			opacity: 1,
			delay: .5,
			ease: Cubic.easeInOut,
			onStart: function() {
					// welcomeEnter()
				},
			onComplete: function() {
					welcomeExit()
				}
		})
	}

	function welcomeEnter() { 
		let cloudTL = new TimelineMax({
			delay: 1,
			repeat: -1,
			repeatDelay: 1
		});
		
		cloudTL
			.fromTo(scene_2, 15, {opacity: 0}, {opacity: 1},0)
			.to(scene_2, 20, {x: '+=50', ease: Power0.easeNone },0)
			.to(scene_2, 20, {x: '-=50', ease: Power0.easeNone },0);
	}

	function welcomeExit() {
		const aboutStart = new TimelineMax();
		aboutStart
			.to(welcome, 10, { opacity: 0, ease: Power0.easeInOut }, 0)
			.to(doWhat, 10, { opacity: 1, ease: Power0.easeInOut }, 0)
			
			.to(scene_2, 10, {y: "-300%", ease: Power0.easeIn}, 0)
			.to(welcome_title, 5, {y: "-300%", ease: Power0.easeIn}, 0)
			.to(scene_container, 10, {y: "-50%", ease: Circ.easeIn}, 5)

			
			.fromTo(container_1, 10, {y: '100%'}, {y: '0%', ease: Sine.easeIn}, 3)
			.fromTo(background_1, 10, {y: '-100%',opacity: 0}, {y: '0%',opacity: 0.5,ease: Sine.easeIn}, 3)
			.fromTo(background_1, 10, {y: '-100%',opacity: 0}, {y: '0%',opacity: 0.5,ease: Sine.easeIn}, 3)
			.fromTo(container_2, 10, {x: "-100%"}, {x: "0%",ease: Sine.easeInOut}, 3)
			.fromTo(background_2, 10, {x: "100%",opacity: 0}, {
				x: "0%",
				opacity: 1,
				ease: Sine.easeInOut,
				onComplete: function() {
					aboutStart.to(text_1, 1, {opacity: 1, ease: Sine.easeIn}, 0)
				}
			}, 3)
			
			
		let enterWho = new ScrollMagic.Scene({
			triggerElement: '.doWhat',
			triggerHook: 1,
			duration: '100%'
		})
		.setTween(aboutStart)
		.addTo(controller);

		let aboutEnd = new TimelineMax();
	    aboutEnd
	    	.to(container_3, 1, {opacity: 1,ease: Sine.easeInOut}, 1)
	    	.fromTo(container_3, 4, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 1)
	    	.fromTo(background_3, 4, {y: "-95%",opacity: .5}, {y: "0%",opacity: .5,ease: Sine.easeInOut, onComplete:function(){
				aboutEnd.to(text_1, 1, {opacity: 0, ease: Power1.easeIn},0)
				aboutEnd.to(text_2, 1, {opacity: 1, ease: Power1.easeIn},0)
			}}, 1)
	    	.to(container_4, 1, {opacity: 1,ease: Sine.easeInOut}, 1)
	    	.fromTo(container_4, 4, {x: "-100%"}, {x: "0%",ease: Sine.easeInOut}, 1)
	    	.fromTo(background_4, 4, {x: "95%",opacity: .5}, {x: "0%",opacity: 1,ease: Sine.easeInOut}, 1)

			.to(container_5, 1, {opacity: 1,ease: Sine.easeInOut}, 5)
	    	.fromTo(container_5, 5, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 5)
	    	.fromTo(background_5, 5, {y: "-95%",opacity: .0}, {y: "0%",opacity: 0.5,ease: Sine.easeInOut, onComplete:function(){
				aboutEnd.to(text_2, 1, {opacity: 0, ease: Power1.easeIn},0)
				aboutEnd.to(text_3, 1, {opacity: 1, ease: Power1.easeIn},0)
			}}, 5)
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
			triggerElement: '.doWhat',
			triggerHook: 0,
			duration: '100%'
		})
		.setPin('.doWhat')
		.setTween(aboutEnd)
		.addTo(controller);

	}

	function myWork() {
		const paraCodeTween = new TimelineMax();
		paraCodeTween
			// .from('.language-markup', 0.6, { autoAlpha: 0, ease:Power0.easeNone },0.6)
			.to(myWork_section, 0.2, {autoAlpha: 1, ease: Power2.easeIn, onStart: function() { typed() }})
			.to(doWhat, 0.3, {autoAlpha: 0, ease: Circ.easeOut}, 0)
			.to('.language-markup', 1, { y: '-30%', ease: Power0.easeNone}, 0);

		let paraCodeSlide = new ScrollMagic.Scene({
			triggerElement: '.mywork',
			triggerHook: 1,
			duration: '400%'
		})
		.setTween(paraCodeTween)
		.addTo(controller)	

		function typed() {
			let typed_text = new Typed('.work-title', {
				strings:  ['', '$:/^700Projects/^300atrchive', '$:/Projects/archive'],
				// startDelay: 2000,
				typeSpeed: 50,
				backSpeed: 30,
				backDelay: 200,
				smartBackspace: true
			})
		}



		const contactIntro = new TimelineMax();
		contactIntro
			.to('.contact_section', 5, {opacity: 1, ease: Power2.easeIn}, 0)
			.to('.mywork', 5, {opacity: 0.3, ease: Power3.easeOut}, 0)
			.to('.finish', 2, {opacity: 0, y: '0%'}, 0);
	
		let placehold2 = new ScrollMagic.Scene({
			triggerElement: '.contact_section',
			triggerHook: 1,
			duration: '100%'
		})
		// .addIndicators({
		// 	name: 'fade-in scene',
		// 	colorTrigger: 'red',
		// 	colorStart: '#75C695',
		// 	colorEnd: '#75C695'
		// })
		.setTween(contactIntro)
		.addTo(controller)
	}






	
	init();

})