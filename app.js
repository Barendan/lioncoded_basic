$(window).on("load", function() {

	const controller = new ScrollMagic.Controller,
		welcome = $("section.welcome"),
		welcome_title = $(".welcome h1"),
		scene_container = $(".scene-container"),
		scene_1 = $("#layer1"), // Landscape
		scene_2 = $("#layer2"), // Clouds1
		scene_3 = $("#layer3"), // Clouds2
		scene_4 = $("#layer4"), // Letters
		scene_5 = $("#layer5"), // Lion
		scene_6 = $("#layer6"), // Rocks
		
		doWhat = $("section.doWhat"),
		doWhat_backdrop = $("section.doWhat .backdrop"),
		

		container_1 = $(".container-1"),
		background_1 = $(".container-1 .background-1"),
		top_right = $(".top_right"),
		tr_cont = $(".tr_cont"),
		tr_cont_title = $(".tr_cont h1"),
		tr_cont_text = $(".tr_cont p"),
		// background_2 = $(".top_right"),
		br_cont1 = $(".br-text1"),
		br_cont1_title = $(".br-text1 h1"),
		br_cont1_text = $(".br-text1 p"),


		container_3 = $(".container-3"),
		background_3 = $(".container-3 .background-3"),
		br_cont2 = $(".br-text2"),
		br_cont2_title = $(".br-text2 h1"),
		br_cont2_text = $(".br-text2 p"),
		

		container_5 = $(".container-5"),
		background_5 = $(".container-5 .background-5"),
		br_cont3 = $(".br-text3"),
		br_cont3_title = $(".br-text3 h1"),
		br_cont3_text = $(".br-text3 p"),
		

		container_4 = $(".container-4"),
		// background_4 = $(".container-4 .background-4"),
		container_6 = $(".container-6"),
		background_6 = $(".container-6 .background-6"),


		myWork_section = $("section.mywork")
		;


	function init() {
		$('.preload-container').fadeOut();
		console.log(window.innerWidth);
		window.innerWidth < 768 ? mobileAnimation() : desktopAnimation();
	}


	function desktopAnimation() {
		// Pre-rendering
		TweenMax.to(scene_4, .1, {y: "-200%"})
		TweenMax.to(scene_5, .1, {x: "-10%"})
		TweenMax.to(scene_5, .1, {scaleY: "0.5"})
		TweenMax.to(scene_6, .1, {y: "50%"})


		// Start animation
		TweenMax.to(welcome, 1.5, {
			opacity: 1,
			delay: .5,
			ease: Cubic.easeInOut,
			onStart: function() { sceneLoad() },
			onComplete: function() { doStart() }
		}, 0)
		
		// Intro Scene
		function sceneLoad() {
			const scenePieces = new TimelineMax({
				onComplete: function() { cloudMove() }
			})
			scenePieces
				.to(scene_4, 0.5, {y: "0%", ease: Power0.easeIn},0.3)
				.to(scene_5, 0.7, {scaleY:"1", ease: SteppedEase.config(20)},0.5)
				.to(scene_5, 0.7, {x: "0%", ease: SteppedEase.config(20)},0.5)
				.to(scene_6, 0.5, {y: "0%", ease: Power0.easeOut},0.3)

			function cloudMove() {
				const cloudTL = new TimelineMax({
					delay: 0,
					repeat: -1,
					repeatDelay: 0,
					yoyo: true
				});
				cloudTL
					.fromTo(scene_2, 10, {opacity: 0.4}, {opacity: 0.7},0)
					.to(scene_2, 20, {x: '+=50', ease: Power0.easeNone },0)
					.to(scene_2, 20, {x: '-=50', ease: Power0.easeNone },20);
			}
		}

		// Exit Intro ; Start About
		function doStart() {
			const aboutStart = new TimelineMax();
			aboutStart
				.to(scene_2, 5, {y: "-50%", ease: Power0.easeIn}, 1)
				.to(scene_3, 5, {y: "-20%", ease: Power0.easeIn}, 1)
				.to(scene_4, 5, {scaleY: "0.5", ease: Power0.easeIn}, 3)
				.to(scene_5, 5, {x: "-10%", scaleY: "0.7"}, 3)
				.to(scene_container, 5, {y: "-50%", scale: 0.5, ease: Circ.easeIn}, 3)

				.to(welcome, 10, { opacity: 0, ease: Power2.easeOut }, 0)

				
				// ENTER SLIDESHOW #1
				.to(doWhat, 10, { opacity: 1, ease: Power0.easeIn }, 0)

				.fromTo(container_1, 10, {y: '100%'}, {y: '0%', ease: Sine.easeIn}, 5)
				.fromTo(background_1, 10, {y: '-100%',opacity: 0}, {y: '0%',opacity: 0.7,ease: Sine.easeIn}, 5)

				// .fromTo(tr_cont_title, 10, {maxHeight: "0"}, {maxHeight: "123px", ease: Sine.easeInOut}, 5)
				
				// .fromTo(tr_cont_text, 10, {maxHeight: "0"}, {maxHeight: "123px", ease: Sine.easeInOut}, 5)
				

				.fromTo(tr_cont_title, 10, {maxHeight: "0",opacity: 0}, {
					maxHeight: "100%",
					opacity: 1,
					ease: Sine.easeInOut
				}, 10)

				.fromTo(tr_cont_text, 10, {maxHeight: "0",opacity: 0}, {
					maxHeight: "100%",
					opacity: 1,
					ease: Sine.easeInOut
				}, 10)

				.fromTo(br_cont1, 3, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 12)
				.fromTo(br_cont1, 5, {y: '-100%' }, {y: '0%', ease: Sine.easeInOut}, 10)
			;
				

			const aboutEnd = new TimelineMax();
			aboutEnd
				// EXIT SLIDESHOW #1
				.to(container_1, 5, {opacity: 0, ease: Power2.easeInOut}, 2)

				.to(top_right, 4, {opacity: 0, ease: Power2.easeInOut}, 2)
				.to(top_right, 5, {x: "100%", ease: Power2.easeInOut}, 2)

				.to(br_cont1, 4, {opacity: 0, ease: Power2.easeInOut}, 2)
				.to(br_cont1_title, 5, {y: "200%", ease: Power2.easeInOut}, 2)
				.to(br_cont1_text, 5, {y: "100%", ease: Power2.easeInOut}, 2)
			

				// ENTER SLIDESHOW #2
				.to(container_3, 5, {opacity: 1,ease: Sine.easeInOut}, 2)
				.fromTo(container_3, 5, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 2)
				.fromTo(background_3, 5, {y: "-95%",opacity: .5}, {y: "0%",opacity: 1,ease: Sine.easeInOut}, 2)

				.to(container_4, 4, {opacity: 1, ease: Power2.easeInOut}, 3)
				.fromTo(container_4, 4, {x: "-50%"}, {x: "0%", ease: Power2.easeInOut}, 3)

				.to(br_cont2, 3, {opacity: 1, ease: Power2.easeInOut}, 4)
				.fromTo(br_cont2_title, 4, {y: "-150%"}, {y: "0%"}, 3)
				.fromTo(br_cont2_text, 4, {y: "-300%"}, {y: "0%"}, 3)
				

				// EXIT SLIDESHOW #2
				.to(container_4, 4, {opacity: 0, ease: Power2.easeInOut}, 9)
				.to(container_4, 5, {x: "100%", ease: Power2.easeInOut}, 9)

				.to(br_cont2, 4, {opacity: 0, ease: Power2.easeInOut}, 9)
				.to(br_cont2_title, 5, {y: "300%", ease: Power2.easeInOut}, 9)
				.to(br_cont2_text, 5, {y: "200%", ease: Power2.easeInOut}, 9)


				// ENTER SLIDESHOW #3
				.to(container_5, 5, {opacity: 1,ease: Sine.easeInOut}, 9)
				.fromTo(container_5, 5, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 9)
				.fromTo(background_5, 5, {y: "-95%",opacity: 0.5}, {y: "0%",opacity: 1.0,ease: Sine.easeInOut}, 9)
				
				.to(container_6, 4, {opacity: 1,ease: Power2.easeInOut}, 10)
				.fromTo(container_6, 4, {x: "-50%"}, {x: "0%",ease: Power2.easeInOut}, 10)
				.fromTo(background_6, 4, {x: "95%",opacity: .5}, {
					x: "0%",
					opacity: 1,
					ease: Power2.easeInOut,
					onComplete: function() {
						myWork()
					}
				}, 10)

				.to(br_cont3, 3, {opacity: 1, ease: Power2.easeInOut}, 11)
				.fromTo(br_cont3_title, 4, {y: "-200%"}, {y: "0%"}, 10)
				.fromTo(br_cont3_text, 4, {y: "-100%"}, {y: "0%"}, 10)
				.to(doWhat, 2, {opacity: 0.8}, 14)
			;

	
			let enterWho = new ScrollMagic.Scene({
				triggerElement: '.doWhat',
				triggerHook: 1,
				duration: '100%'
			})
			.setTween(aboutStart)
			.addTo(controller);
			
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
				// EXIT SLIDESHOW #3
				.to(doWhat, 0.3, {autoAlpha: 0, ease: Power3.easeOut, 
					onStart: function() {
						$('.bottom_right').addClass('overflow_allow');
					},
					onReverseComplete: function() {
						$('.bottom_right').removeClass('overflow_allow');
					}
				}, 0)
				.to(doWhat_backdrop, 0.5, {y: '-100%', ease: Power2.easeIn}, 0)
				.fromTo(br_cont3_title, 0.5, {y: '0%'}, {y: '-150%', ease: Power2.easeIn}, 0)
				.fromTo(br_cont3_text, 0.1, {y: '0%'}, {y: '-150%', ease: Power2.easeIn}, 0)
	
				// ENTER MYWORK SECTION
				.to(myWork_section, 0.2, {autoAlpha: 1, ease: Power2.easeIn,
					onStart: function() { typed() }
				},0)
				.to('.language-markup', 1, { y: '-30%', ease: Power0.easeNone}, 0);
			;
	
			const contactIntro = new TimelineMax();
			contactIntro
				.to('.contact_section', 5, {opacity: 1, ease: Power2.easeIn}, 0)
				.to('.mywork', 5, {opacity: 0.3, ease: Power3.easeOut}, 0)
				.to('.contact_section', 1, {
					onStart: function() {
						$('.mywork').addClass('no_overflow');
					},
					onReverseComplete: function() {
						$('.mywork').removeClass('no_overflow');
					} 
				}, 3)
			;
			
	
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
	
	
			let paraCodeSlide = new ScrollMagic.Scene({
				triggerElement: '.mywork',
				triggerHook: 1,
				duration: '400%'
			})
			.setTween(paraCodeTween)
			.addTo(controller)
	
			let placehold2 = new ScrollMagic.Scene({
				triggerElement: '.contact_section',
				triggerHook: 1,
				duration: '100%'
			})
			.setTween(contactIntro)
			.addTo(controller)
			// .addIndicators({
			// 	name: 'fade-in scene',
			// 	colorTrigger: 'red',
			// 	colorStart: '#75C695',
			// 	colorEnd: '#75C695'
			// })
		}
	
	}

	function mobileAnimation() {
		// Pre-rendering
		TweenMax.to(doWhat_backdrop, .1, { opacity: 0, ease: Power0.easeIn }, 0)
		
		// Start animation
		TweenMax.to(welcome, 1.5, {
			opacity: 1,
			delay: .5,
			ease: Cubic.easeInOut,
			onStart: function() { sceneStart() },
			onComplete: function() { aboutStart() }
		}, 0)
		
		// Intro Scene
		function sceneStart() {
			let cloudTL = new TimelineMax({
				delay: 1,
				repeat: -1,
				repeatDelay: 1
			});
			cloudTL
				.fromTo(scene_2, 10, {opacity: 0}, {opacity: 1},0)
				.to(scene_2, 20, {x: '+=50', ease: Power0.easeNone },0)
				.to(scene_2, 20, {x: '-=50', ease: Power0.easeNone },0);
		}

		// Exit Intro ; Start About
		function aboutStart() {
			const aboutStart = new TimelineMax();
			aboutStart
				.to(scene_2, 10, {y: "-300%", ease: Power0.easeIn}, 0)
				.to(welcome_title, 5, {y: "-300%", ease: Power0.easeIn}, 0)
				.to(scene_container, 5, {y: "-50%", scale:0.2, ease: Circ.easeIn}, 5)
				.to(scene_container, 5, { scale: 0.5, ease: Power1.easeIn }, 5)
				.to(welcome, 10, { opacity: 0, ease: Power2.easeOut }, 0)

				.to(doWhat, 10, { opacity: 1, ease: Power0.easeIn }, 0)
				.to(doWhat_backdrop, 1, { opacity: 1, ease: Power0.easeIn }, 0)
				
				// ENTER SLIDESHOW #1
				.fromTo(container_1, 10, {y: '100%'}, {y: '0%', ease: Sine.easeIn}, 5)
				.fromTo(background_1, 10, {y: '-100%',opacity: 0}, {y: '0%',opacity: 0.7,ease: Sine.easeIn}, 5)

				.fromTo(top_right, 10, {x: "-103%"}, {x: "0%", ease: Sine.easeInOut}, 5)
				// .fromTo(background_2, 10, {x: "103%",opacity: 0}, {
				// 	x: "0%",
				// 	opacity: 1,
				// 	ease: Sine.easeInOut
				// }, 5)

				.fromTo(br_cont1, 3, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 12)
				.fromTo(br_cont1, 5, {y: '-100%' }, {y: '0%', ease: Sine.easeInOut}, 10)
			;
				



			const aboutEnd = new TimelineMax();
			aboutEnd
				// EXIT SLIDESHOW #1
				.to(container_1, 5, {opacity: 0, ease: Power2.easeInOut}, 2)

				.to(top_right, 4, {opacity: 0, ease: Power2.easeInOut}, 2)
				.to(top_right, 5, {x: "100%", ease: Power2.easeInOut}, 2)

				.to(br_cont1, 4, {opacity: 0, ease: Power2.easeInOut}, 2)
				.to(br_cont1_title, 5, {y: "200%", ease: Power2.easeInOut}, 2)
				.to(br_cont1_text, 5, {y: "100%", ease: Power2.easeInOut}, 2)
			
				// ENTER SLIDESHOW #2
				.to(container_3, 5, {opacity: 1,ease: Sine.easeInOut}, 2)
				.fromTo(container_3, 5, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 2)
				.fromTo(background_3, 5, {y: "-95%",opacity: .5}, {y: "0%",opacity: 1,ease: Sine.easeInOut}, 2)

				.to(container_4, 4, {opacity: 1, ease: Power2.easeInOut}, 3)
				.fromTo(container_4, 4, {x: "-50%"}, {x: "0%", ease: Power2.easeInOut}, 3)

				.to(br_cont2, 3, {opacity: 1, ease: Power2.easeInOut}, 4)
				.fromTo(br_cont2_title, 4, {y: "-150%"}, {y: "0%"}, 3)
				.fromTo(br_cont2_text, 4, {y: "-300%"}, {y: "0%"}, 3)
				


				// EXIT SLIDESHOW #2
				.to(container_4, 4, {opacity: 0, ease: Power2.easeInOut}, 9)
				.to(container_4, 5, {x: "100%", ease: Power2.easeInOut}, 9)

				.to(br_cont2, 4, {opacity: 0, ease: Power2.easeInOut}, 9)
				.to(br_cont2_title, 5, {y: "300%", ease: Power2.easeInOut}, 9)
				.to(br_cont2_text, 5, {y: "200%", ease: Power2.easeInOut}, 9)

				// ENTER SLIDESHOW #3
				.to(container_5, 5, {opacity: 1,ease: Sine.easeInOut}, 9)
				.fromTo(container_5, 5, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 9)
				.fromTo(background_5, 5, {y: "-95%",opacity: .0}, {y: "0%",opacity: 1,ease: Sine.easeInOut}, 9)
				
				.to(container_6, 4, {opacity: 1,ease: Power2.easeInOut}, 10)
				.fromTo(container_6, 4, {x: "-50%"}, {x: "0%",ease: Power2.easeInOut}, 10)
				.fromTo(background_6, 4, {x: "95%",opacity: .5}, {
					x: "0%",
					opacity: 1,
					ease: Power2.easeInOut,
					onComplete: function() {
						myWork()
					}
				}, 10)

				.to(br_cont3, 3, {opacity: 1, ease: Power2.easeInOut}, 11)
				.fromTo(br_cont3_title, 4, {y: "-200%"}, {y: "0%"}, 10)
				.fromTo(br_cont3_text, 4, {y: "-100%"}, {y: "0%"}, 10)
				.to(doWhat, 2, {opacity: 0.8}, 14)
			;

	
			let enterWho = new ScrollMagic.Scene({
				triggerElement: '.doWhat',
				triggerHook: 1,
				duration: '100%'
			})
			.setTween(aboutStart)
			.addTo(controller);
			
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
				// EXIT SLIDESHOW #3
				.to(doWhat, 0.3, {autoAlpha: 0, ease: Power3.easeOut, 
					onStart: function() {
						$('.bottom_right').addClass('overflow_allow');
					},
					onReverseComplete: function() {
						$('.bottom_right').removeClass('overflow_allow');
					}
				}, 0)
				.to(doWhat_backdrop, 0.3, {y: '-100%', ease: Power2.easeIn}, 0)
				.fromTo(br_cont3_title, 0.2, {y: '0%'}, {y: '-150%', ease: Power2.easeIn}, 0)
				.fromTo(br_cont3_text, 0.2, {y: '0%'}, {y: '-150%', ease: Power2.easeIn}, 0)
	
				// ENTER MYWORK SECTION
				.to(myWork_section, 0.2, {autoAlpha: 1, ease: Power2.easeIn,
					onStart: function() { typed() }
				},0)
				.to('.language-markup', 1, { y: '-30%', ease: Power0.easeNone}, 0);
			;
	
			const contactIntro = new TimelineMax();
			contactIntro
				.to('.contact_section', 5, {opacity: 1, ease: Power2.easeIn}, 0)
				.to('.mywork', 5, {opacity: 0.3, ease: Power3.easeOut}, 0)
				.to('.contact_section', 1, {
					onStart: function() {
						$('.mywork').addClass('no_overflow');
					},
					onReverseComplete: function() {
						$('.mywork').removeClass('no_overflow');
					} 
				}, 3)
			;
			
	
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
	
	
			let paraCodeSlide = new ScrollMagic.Scene({
				triggerElement: '.mywork',
				triggerHook: 1,
				duration: '400%'
			})
			.setTween(paraCodeTween)
			.addTo(controller)
	
			let placehold2 = new ScrollMagic.Scene({
				triggerElement: '.contact_section',
				triggerHook: 1,
				duration: '100%'
			})
			.setTween(contactIntro)
			.addTo(controller)
			// .addIndicators({
			// 	name: 'fade-in scene',
			// 	colorTrigger: 'red',
			// 	colorStart: '#75C695',
			// 	colorEnd: '#75C695'
			// })
		}
	}





	init()
})