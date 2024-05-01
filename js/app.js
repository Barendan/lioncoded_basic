$(window).on("load", function() {

	$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('opened');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('opened');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('opened');
			event.stopPropagation();
		});
	});

	const controller = new ScrollMagic.Controller,
		welcome = $("section.welcome"),
		// welcome_shadow =$(".welcome-shadow")
		welcome_title = $(".welcome h1"),
		welcome_subtitle = $(".welcome h2"),
		scene_container = $(".scene-container"),
		scene_1 = $("#layer1"), // Landscape
		scene_2 = $("#layer2"), // Clouds1
		scene_3 = $("#layer3"), // Clouds2
		scene_4 = $("#layer4"), // Letters
		scene_5 = $("#layer5"), // Lion
		// scene_6 = $("#layer6"), // Rocks
		// scene_7 = $("#layer7"), // Clouds3
		
		doWhat = $("section.doWhat"),
		// doWhat_backdrop = $("section.doWhat .backdrop"),
		container_1 = $(".container-1"),
		// background_1 = $(".container-1 .background-1"),
		// top_right = $(".top_right"),
		// tr_cont = $(".tr_cont"),
		// tr_cont_title = $(".tr_cont h1"),
		// tr_cont_text = $(".tr_cont p"),
		br_cont1 = $(".br-text1"),
		br_cont1_title = $(".br-text1 h1"),
		br_cont1_text = $(".br-text1 p"),

		container_3 = $(".container-3"),
		// background_3 = $(".container-3 .background-3"),
		br_cont2 = $(".br-text2"),
		br_cont2_title = $(".br-text2 h1"),
		br_cont2_text = $(".br-text2 p"),
		
		container_5 = $(".container-5"),
		// background_5 = $(".container-5 .background-5"),
		br_cont3 = $(".br-text3"),
		br_cont3_title = $(".br-text3 h1"),
		br_cont3_text = $(".br-text3 p"),
		
		myWork_section = $("section.mywork")
		;


	function mobileAnimation() {
		// Pre-rendering
		TweenMax.to(welcome_title, .1, {y: "-200%"})
		TweenMax.to(welcome_subtitle, .1, {y: "-200%"})
		TweenMax.to(scene_1, .1, {autoAlpha: 0.2})
		TweenMax.to(scene_4, .1, {y: "-200%"})
		TweenMax.to(scene_5, .1, {x: "20%"})
		TweenMax.to(scene_5, .1, {scaleY: "0.5"})
		TweenMax.to(doWhat, .1, {scale: 0.50})
		TweenMax.to(container_1, .1, {autoAlpha: 0})

		// Start animation
		TweenMax.to(welcome, 1.5, {
			opacity: 1,
			delay: .5,
			ease: Cubic.easeInOut,
			onStart: function() { sceneLoad() },
			onComplete: function() { doStart() }
		}, 0)
		

		// Enter Scene
		function sceneLoad() {
			const sceneTL = new TimelineMax({
				onComplete: function() { cloudMove() }
			})

			sceneTL
				.to(welcome_title, 0.5, {y: "0%", ease: Power0.easeIn},0.3)
				.to(welcome_subtitle, 0.5, {y: "0%", ease: Power0.easeIn},0.3)
				.to(scene_1, 0.5, {autoAlpha: 1}, 0.7)
				.to(scene_4, 0.5, {y: "0%", ease: Power0.easeIn},0.3)
				.to(scene_5, 0.5, {scaleY:"1", ease: SteppedEase.config(20)},0.3)
				.to(scene_5, 0.5, {x: "0%", ease: SteppedEase.config(20)},0.3)
				// .to(scene_6, 0.5, {y: "0%", ease: Power0.easeOut},0.3)

			function cloudMove() {
				const cloudTL = new TimelineMax({
					delay: 0,
					repeat: -1,
					repeatDelay: 0,
					yoyo: true
				});

				cloudTL
					.fromTo(scene_2, 10, {opacity: 0.6}, {opacity: 0.85},0)
					.fromTo(scene_3, 10, {opacity: 0.6}, {opacity: 0.85},0)
					// .fromTo(scene_7, 10, {opacity: 0.7}, {opacity: 0.95},0)
					.to(scene_2, 20, {x: '+=50', ease: Power0.easeNone },0)
					.to(scene_3, 20, {x: '+=50', ease: Power0.easeNone },0)
					// .to(scene_7, 20, {backgroundPosition: '-=20', ease: Power0.easeNone },0)
					.to(scene_2, 20, {x: '-=50', ease: Power0.easeNone },20)
					.to(scene_3, 20, {x: '-=50', ease: Power0.easeNone },20)
					// .to(scene_7, 20, {backgroundPosition: '+=20', ease: Power0.easeNone },20);
			}
		}


		// Exit Scene ; Enter DoWhat
		function doStart() {
			const doStartTL = new TimelineMax();

			doStartTL
				// Exit Scene
				.to(welcome, 8, { opacity: 0, ease: Power1.easeOut }, 1)
				.to(scene_2, 5, {y: "-50%", ease: Power0.easeIn}, 3)
				.to(scene_3, 5, {y: "-20%", ease: Power0.easeIn}, 3)
				.to(scene_4, 5, {scaleY: "0.5", ease: Power0.easeIn}, 1)
				.to(welcome_title, 3, {scaleY: "0.5", ease: Power0.easeIn}, 2)
				.to(scene_5, 7, {scaleY: "0.7"}, 3)
				.to(scene_5, 7, {x: "-30%",}, 2)
				.to('.arrow', 3, {top: "25%"}, 6)
				.to(scene_container, 4, {scale: 0.5, ease: Circ.easeIn}, 3)
				.to(scene_container, 2, {y: "-25%", ease: Circ.easeIn}, 7)


				// Enter DoWhat: Part1
				.to(doWhat, 5, { opacity: 1, ease: Power1.easeIn }, 2)
				.to(doWhat, 4.7, { scale: 1, ease: Circ.easeIn }, 2)

				.to(container_1, 3.5, {autoAlpha: 1, ease: Power1.easeIn}, 5)
				.fromTo(container_1, 2, {y: "140%"}, {y: "0%", ease: Power1.easeIn}, 6)
				
				.fromTo(br_cont1, 2, {y: "120%"}, {y: "0%"}, 7)
				.fromTo(br_cont1, 3, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 7)
				.fromTo(br_cont1_text, 3, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 7)
				.fromTo(br_cont1_text, 1, {y: "120%"}, {y: "0%"}, 7.3)
			;

				
			const doEndTL = new TimelineMax();
			
			doEndTL
				// Exit DoWhat: Part1
				.to(container_1, 1.5, {opacity: 0, ease: Power2.easeInOut}, 2)
				.to(container_1, 1, {y: '-100%', ease: Power2.easeIn}, 2)

				.to(br_cont1, 2, {opacity: 0, ease: Power2.easeInOut}, 2)
				.to(br_cont1, 2, {y: '-100%', ease: Power2.easeInOut}, 2.2)
				.to(br_cont1_title, 1, {y: "-300%", ease: Power2.easeIn}, 2.2)
				.to(br_cont1_text, 1.2, {y: "-200%", ease: Power2.easeIn}, 2.2)
				

				// Enter DoWhat: Part2
				.to(container_3, 2, {opacity: 1, ease: Sine.easeInOut}, 3)
				.fromTo(container_3, 2, {y: "140%"}, {y: "0%", ease: Sine.easeInOut}, 3)
				
				.fromTo(br_cont2, 3, {y: "120%"}, {y: "0%"}, 3)
				.fromTo(br_cont2, 3, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 3)
				.fromTo(br_cont2_title, 0.5, {y: "120%"}, {y: "0%"}, 4)
				.fromTo(br_cont2_text, 3, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 4)
				.fromTo(br_cont2_text, 1, {y: "120%"}, {y: "0%"}, 4)


				// Exit DoWhat: Part2
				.to(container_3, 1, {opacity: 0, ease: Power2.easeInOut}, 8)
				.to(container_3, 1, {y: '-100%', ease: Power2.easeIn}, 8)
			
				.to(br_cont2, 2, {y: '-100%', opacity: 0, ease: Power2.easeInOut}, 8.2)
				.to(br_cont2_title, 2, {opacity: 0, ease: Power2.easeInOut}, 8.2)
				.to(br_cont2_title, 1, {y: "-300%", ease: Power2.easeIn}, 8.2)
				.to(br_cont2_text, 2, {y: "-200%", ease: Power2.easeIn}, 8.2)
				.to(br_cont2_text, 1, {opacity: 0, ease: Power2.easeIn}, 8.2)


				// Enter DoWhat: Part3
				.to(container_5, 2, {opacity: 1, ease: Power2.easeInOut}, 9)
				.fromTo(container_5, 2, {y: "100%"}, {y: "0%",ease: Power2.easeInOut}, 9)

				.fromTo(br_cont3, 2, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 9.5)
				.fromTo(br_cont3, 2, {y: "120%"}, {y: "0%"}, 9.5)

				.fromTo(br_cont3_title, 0.5,  {y: "120%"}, {y: "0%"}, 10)
				.fromTo(br_cont3_text, 3, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 9)
				.fromTo(br_cont3_text, 1, {y: "120%"}, {y: "0%"}, 10)


				// Exit DoWhat: Part3
				.to(container_5, 1, {y: '0%', onComplete: function() { myWork() }, ease: Power2.easeIn}, 13)


			let enterWho = new ScrollMagic.Scene({
				triggerElement: '.doWhat',
				triggerHook: 1,
				duration: '100%'
			})
			.setTween(doStartTL)
			.addTo(controller);
			
			let pinWho = new ScrollMagic.Scene({
				triggerElement: '.doWhat',
				triggerHook: 0,
				duration: '100%'
			})
			.setPin('.doWhat')
			.setTween(doEndTL)
			.addTo(controller);
		}


		// Exit DoWhat ; Enter MyWork
		function myWork() {
			const paraCodeTween = new TimelineMax();

			paraCodeTween				
				.to(doWhat, 0.5, {autoAlpha: 0, ease: Power3.easeOut, 
					onStart: function() {
						$('.bottom_right').addClass('overflow_allow');
					},
					onReverseComplete: function() {
						$('.bottom_right').removeClass('overflow_allow');
					}
				}, 0)

				// ENTER MYWORK SECTION
				.to(myWork_section, 0.2, {
					autoAlpha: 1, 
					ease: Power2.easeIn,
					onStart: function() { typed() },
					onComplete: function() { projectPop() }
				}, 0)
				.to('.language-markup', 1, { y: '-40%'}, 0);
			;

			function projectPop() {
				const staggerEntry = new TimelineMax();
				staggerEntry
					.to(".project-box", {
					  duration: 0.7,
					  opacity: 1.0,
					  delay: 2,
					  stagger: 1
					}, 0)
					.to(".project-text", {
					  duration: 0.7,
					  opacity: 1.0,
					  delay: 2,
					  stagger: 1
					}, 1)
				;
			}
	
			function typed() {
				let typed_text;

				window.innerWidth < 992 ? 
					typed_text = new Typed('.work-title', {
						strings:  [
							'$:Accessing projects.^200.^200.',
							'$:Accessing projects',
							'$:Accessing projects.^100.^100.',
							'$:Projects accessed'
						],
						typeSpeed: 50,
						backSpeed: 0,
						backDelay: 50,
						smartBackspace: true
					})
				: typed_text = new Typed('.work-title', {
					strings:  [
						'$:Accessing projects archive.^200.^200.',
						'$:Accessing projects archive',
						'$:Accessing projects archive.^100.^100.',
						'$:Projects archive accessed'
					],
					typeSpeed: 50,
					backSpeed: 0,
					backDelay: 100,
					smartBackspace: true
				})
			}
			

			
			const contactIntro = new TimelineMax();

			window.innerWidth < 992 ? 
				contactIntro
					.to('.project-row:last-child', 2, {opacity: 0, ease: Power3.easeOut}, 3)
					.to('.mywork', 5, {opacity: 0.3, ease: Power3.easeOut}, 3)

					.to('.contact_section', 3, {opacity: 1, ease: Power2.easeIn}, 2)
					// .to('.info_container h2', 2, {width: "100%", ease: Power2.easeIn}, 2)
					.fromTo('.info_container h2', 2, {width: "0%"}, {width: "100%", ease: Power2.easeIn}, 2)
					.fromTo('.form_container h2', 2,{x: "-100%"}, {x: "0%", ease: Power2.easeIn}, 3.5)
					.to('.contact_container p', 1.5, {opacity: 1.0, ease: Power2.easeIn}, 2.5)
					.to('.contact_container h3', 1, {opacity: 1.0, ease: Power2.easeIn, stagger: 0.7}, 3)
					.to('.contact_container li', 1, {opacity: 1.0, ease: Power2.easeIn, stagger: 0.7}, 3.1)
					.to('.form_container', 3, {boxShadow: "1px 2px 8px 6px black", ease: Power2.easeIn}, 3.5)
					.to($('.form_container form').children(), 0.5, {opacity: 1.0, ease: Power2.easeIn, stagger: 0.2}, 5.5)

					.to('.contact_section', 1, {
						onStart: function() {
							$('.mywork').addClass('no_overflow');
						},
						onReverseComplete: function() {
							$('.mywork').removeClass('no_overflow');
						}
					}, 2)
			: contactIntro
					.to('.project-row:last-child', 2, {opacity: 0.1, ease: Power3.easeOut}, 3)
					.to('.mywork', 10, {opacity: 0.3, ease: Power3.easeOut}, 0)

					.to('.contact_section', 6, {opacity: 1, ease: Power2.easeIn}, 2)
					.to('.info_container h2', 2, {width: "100%", ease: Power2.easeIn}, 2)
					.to('.form_container h2', 1, {width: "100%", ease: Power2.easeIn}, 5)
					.to('.contact_container p', 2, {opacity: 1.0, ease: Power2.easeIn}, 3)
					.to('.contact_container h3', 1, {opacity: 1.0, ease: Power2.easeIn, stagger: 0.7}, 5)
					.to('.contact_container li', 1, {opacity: 1.0, ease: Power2.easeIn, stagger: 0.7}, 5.3)
					.to('.form_container', 2, {boxShadow: "1px 2px 8px 6px black", ease: Power2.easeIn}, 6)
					.to($('.form_container form').children(), 0.5, {opacity: 1.0, ease: Power2.easeIn, stagger: 0.2}, 6)

					.to('.contact_section', 1, {
						onStart: function() {
							$('.mywork').addClass('no_overflow');
						},
						onReverseComplete: function() {
							$('.mywork').removeClass('no_overflow');
						}
					}, 2)
		;

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
				duration: '120%'
			})
			.setTween(contactIntro)
			.addTo(controller)
		}

	}



	function init() {
		$('.preload-container').fadeOut();
		console.log(window.innerWidth);
		// window.innerWidth < 992 ? mobileAnimation() : desktopAnimation();
		mobileAnimation()
	}

	init()
})

// Intercepting Contact Form Submission to prevent redirect
$(".contact_form").on('submit',function(event) {
    event.preventDefault()
    let dataString = $(this).serialize()
    $.ajax({
        type: "POST",
        url: "send_mail.php",
        data: dataString,
        success: function(data){
            $('.contact_form')[0].reset()
        }
    }).done(function(data){
        setTimeout(function () {
            alert("Your message has been sent.\nThank you.")
        }, 500);
    });
});