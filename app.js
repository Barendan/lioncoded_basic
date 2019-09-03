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
		doWhat_background = $("section.doWhat .background"),
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

		br_cont1 = $(".bottom_right .cont1"),
		br_cont1_title = $(".bottom_right .cont1 h1"),
		br_cont1_text = $(".bottom_right .cont1 p"),

		br_cont2 = $(".bottom_right .cont2"),
		br_cont2_title = $(".bottom_right .cont2 h1"),
		br_cont2_text = $(".bottom_right .cont2 p"),

		br_cont3 = $(".bottom_right .cont3"),
		br_cont3_title = $(".bottom_right .cont3 h1"),
		br_cont3_text = $(".bottom_right .cont3 p"),

		myWork_section = $("section.mywork")
		;



	function init() {
		console.log("hello buddy")
		console.log(window.innerWidth);
		window.innerWidth < 768 ? mobileAnimation() : desktopAnimation();
	}


	function desktopAnimation() {
		// Pre-rendering
		TweenMax.to(doWhat_background, .1, { opacity: 0, ease: Power0.easeIn }, 0)
		
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
				.fromTo(scene_2, 15, {opacity: 0}, {opacity: 1},0)
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
				.to(doWhat_background, 1, { opacity: 1, ease: Power0.easeIn }, 0)
				// .fromTo(doWhat_background, 5, { scale: 0.5 }, { scale: 1 }, 0)
				
				// ENTER
				.fromTo(container_1, 10, {y: '100%'}, {y: '0%', ease: Sine.easeIn}, 5)
				.fromTo(background_1, 10, {y: '-100%',opacity: 0}, {y: '0%',opacity: 0.5,ease: Sine.easeIn}, 5)
				.fromTo(container_2, 10, {x: "-103%"}, {x: "0%", ease: Sine.easeInOut}, 5)
				.fromTo(background_2, 10, {x: "103%",opacity: 0}, {
					x: "0%",
					opacity: 1,
					ease: Sine.easeInOut
				}, 5)
				
				.fromTo(br_cont1, 3, {opacity: 0 }, {opacity: 1, ease: Power3.easeInOut}, 12)
				.fromTo(br_cont1, 5, {y: '-100%' }, {y: '0%', ease: Sine.easeInOut}, 10)
			;
				



			const aboutEnd = new TimelineMax();
			aboutEnd
				// EXIT SLIDESHOW #1
				.to(container_2, 4, {opacity: 0, ease: Power2.easeInOut}, 2)
				.to(container_2, 5, {x: "100%", ease: Power2.easeInOut}, 2)

				.to(br_cont1, 4, {opacity: 0, ease: Power2.easeInOut}, 2)
				.to(br_cont1_title, 5, {y: "200%", ease: Power2.easeInOut}, 2)
				.to(br_cont1_text, 5, {y: "100%", ease: Power2.easeInOut}, 2)
			
				// ENTER SLIDESHOW #2
				.to(container_3, 5, {opacity: 1,ease: Sine.easeInOut}, 2)
				.fromTo(container_3, 5, {y: "100%"}, {y: "0%",ease: Sine.easeInOut}, 2)
				.fromTo(background_3, 5, {y: "-95%",opacity: .5}, {y: "0%",opacity: .5,ease: Sine.easeInOut}, 2)

				.to(container_4, 4, {opacity: 1, ease: Power2.easeInOut}, 3)
				.fromTo(container_4, 4, {x: "-50%"}, {x: "0%", ease: Power2.easeInOut}, 3)
				// .fromTo(background_4, 5, {x: "95%",opacity: .5}, {x: "0%",opacity: 1}, 2)

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
				.fromTo(background_5, 5, {y: "-95%",opacity: .0}, {y: "0%",opacity: 0.5,ease: Sine.easeInOut}, 9)
				
				.to(container_6, 4, {opacity: 1,ease: Power2.easeInOut}, 10)
				.fromTo(container_6, 4, {x: "-50%"}, {x: "0%",ease: Power2.easeInOut}, 10)
				.fromTo(background_6, 4, {x: "95%",opacity: .5}, {
					x: "0%",
					opacity: 1,
					ease: Power2.easeInOut,
					onComplete: function() {
						// $('.bottom_right').removeClass('overflow_allow');
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

			.to(doWhat_background, 0.3, {y: '-100%', ease: Power2.easeIn}, 0)
			.fromTo(br_cont3_title, 0.2, {y: '0%'}, {y: '-150%', ease: Power2.easeIn}, 0)
			.fromTo(br_cont3_text, 0.2, {y: '0%'}, {y: '-150%', ease: Power2.easeIn}, 0)

			// ENTER MYWORK SECTION
			.to(myWork_section, 0.2, {autoAlpha: 1, ease: Power2.easeIn,
				onStart: function() { typed() }
			},0)
			.to('.language-markup', 1, { y: '-30%', ease: Power0.easeNone}, 0);
		
			// .from('.language-markup', 0.6, { autoAlpha: 0, ease:Power0.easeNone },0.6)
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


	// window.mobilecheck = function() {
	// 	var check = false;
	// 	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	// 	return check;
	//   };


	init()
})