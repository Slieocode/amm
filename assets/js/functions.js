$(document).ready(function(){

	/*Fixed Navbar Handler*/
	let diff = $(window).height()- $('.ul-nav').height();
	let headerHeight = $('header').height();
	
		// if(window.matchMedia('(max-width: 830px)').matches){
		// 	if($('.about-nav').length){
		// 		$('nav').css({
		// 			background:'#FFF'
		// 		})
		// 		$('.sub-ul-container a').css({color:'#FFF !important'})
		// 	}
		// }

		/* home page featured Image Change Handler on mobile */
		if(window.matchMedia('(max-width: 798px)').matches){
			$('.featured-img').attr('src', './assets/img/nick.jpg');
			$('.featured-img').css({
				borderRadius:'50%'
			})
		}

		/* Mobile Menu Handler */
		if(window.matchMedia('(max-width: 900px)').matches){
			$('.sub-link-holder').css({
				transform:'scale(1)'
			})
			$('.link-holder').css({
				transform:'scale(1)'
			})	
			let subdiv;
			$('.main-li > a').on({
				click: function(){
					subdiv = $(this).parent('.main-li').find(' > .link-holder');
					console.log(subdiv)
					if(subdiv.css('display') === "none"){
						$(this).parent('.main-li').siblings().find('.link-holder').fadeOut();
					   	$(this).parent('.main-li').find('.sub-li').fadeIn();

					   	$(subdiv).fadeIn();
					}else{
						subdiv.fadeOut();
					}

				},
			});

		   	$('.sub-li-a').on({
		   		click: function(){
		   			$(this).find('.sub-link-holder').fadeIn()
		   			$(this).siblings().find('.sub-link-holder').fadeOut();

		   		},
		   		mouseleave: function(){
						$(this).find('.sub-link-holder')
		   		}
		   	});
		}else{
			$('.main-li').on({
				mouseover: function(){
				   	$(this).find('.sub-li').fadeIn();

				   	$(this).find('.link-holder').fadeIn()

				},
			});

		   	$('.sub-li-a').on({
		   		mouseover: function(){
		   			$(this).find('.sub-link-holder').fadeIn()
		   		},
		   		mouseleave: function(){
						$(this).find('.sub-link-holder')
		   		}
		   	});			
		}


	$(window).on('scroll', function(){

		if($(window).scrollTop() > headerHeight){
			$('.go-up').css({
				opacity:1,
				zIndex:9999,
				transition:'1s'
			})
			$('.ul-nav').css({
				opacity:1,
				boxShadow:'0 15px 15px -15px rgba(0, 0, 0, 0.5)',
				background:'#FFF',
				color:'#000',
				position:'fixed',
				width:'100%',
			})
			$('.mark h2').css({
				color:'#000',
			})

			$('.ul-nav a').addClass('link-color-switch')
			/*if the background is not white*/
			if(!$('.about-nav').length){
				$('.icon--search').css({fill:'#000'})
			}
		}else if($(window).scrollTop() > diff){
			// $('.nav').css({
			// 	position:'',
			// 	opacity:0,
			// })
		}else if($(window).scrollTop() < diff){
			// if()
			$('.ul-nav').css({
				position:'static',
				opacity:1,
				display:'flex',
				boxShadow:'none',
				background: ($('.about-nav').length ? '#FFF':"none"),
			})
			$('.go-up').css({
				opacity:'0',
				zIndex:'-1'
			})
			$('.ul-nav a').removeClass('link-color-switch')
			/*if the background is not white*/
			if(!$('.about-nav').length){
				$('.icon--search').css({fill:'#FFF'})
			}

		}

	})

	/* video Popup Handler  */
// $(".play-3").yu2fvl({ vid: "YRG-gSHpdrM", ratio: 4/3 })

	/* Menu Button Trigger */
	const btn = document.getElementById("menu-toggle");
	const lines = btn.querySelectorAll(".line");
	const cls = { open: "open", close: "close" };
	let btnClass = cls.open;
	btn.addEventListener("click", () => {
		$('nav').fadeToggle();
		$('.navigation-menu').css({
			zIndex:999999
		});
	});
		$(window).on('resize', function(){
		if(window.matchMedia('(min-width: 950px)').matches){
			$('nav').fadeIn();	
		}
	})
	/* Header Typing Effect */
	if($('.typed-text').length){
		let homeText1 = $('.home-text').text();
		let homeText2 = $('.home-text-2').text();
		let typed = new Typed('.typed-text', {
	  		strings: [homeText1, homeText2],
	  		typeSpeed: 70
		});			
	}
	if($('.typed-text-about').length){
		/* About Header Typing Effect */	
		let title = $('.title-text').text();
		let typedAbout = new Typed('.typed-text-about', {
	  		strings: [title],
	  		typeSpeed: 70
		});	
	}

	/*Testimonial Effect Handler*/
	$('.content').on('click', function(){
		let currentInput = $(this).parent().parent().find('input[type="radio"]');
		currentInput.click()
		// fix cursor problem later.
		$(this).css('cursor','default')
	});
	/*Scroll Reveal Effect*/
	ScrollReveal().reveal('.component-me', {delay:200})
	ScrollReveal().reveal('.component-me.second', {delay:400})
	ScrollReveal().reveal('.item-set-1', {delay:400})
	ScrollReveal().reveal('.item-set-2', {delay:600})
	ScrollReveal().reveal('.media-1', {delay:600})
	ScrollReveal().reveal('.media-2', {delay:900})
	ScrollReveal().reveal('.our-mission', {delay:300})
	ScrollReveal().reveal('.blurp-about', {delay:300})

	/* Count up Effects*/
	if($('.countup').length){
		$(window).scroll(function() {
		   var hT = $('.countup').offset().top,
		       hH = $('.countup').outerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		  	 if (wS > (hT+hH-wH)){
				$('.countup').each(function() {
				  var $this = $(this),
				      countTo = $this.attr('data-count');
				  
				  $({ countNum: $this.text()}).animate({
				    countNum: countTo
				  },

				  {

				    duration: 1000,
				    easing:'linear',
				    step: function() {
				      $this.text(Math.floor(this.countNum));
				    },
				    complete: function() {
				      $this.text(this.countNum);
				      //alert('finished');
				    }
				  		});  
					}); 
			   }
			});
		}

	/*FAQ PAGE*/
	var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
 
  // default settings 
  var settings = {
    // animation speed
    speed: 400,
    
    // close all other accordion items if true
    oneOpen: false
  };
    
  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
	      // show/hide the clicked accordion item
	      $this.closest('.js-accordion-item').toggleClass('active');
	      $this.next().stop().slideToggle(settings.speed);
	    }
	  }
	})();
  	accordion.init({ speed: 300, oneOpen: true });

  /* book download button scroll down */
	if($('.books-text').length){
		$('.books-text button').on('click', function(){
		    $('html,body').animate({
		        scrollTop: $("#odometer").offset().top
		    }, 'slow');
		});
	}

	/* Removing Hover Effect */
	function hasTouch() {
	    return 'ontouchstart' in document.documentElement
	           || navigator.maxTouchPoints > 0
	           || navigator.msMaxTouchPoints > 0;
		}

	if (hasTouch()) { // remove all :hover stylesheets
	    try { // prevent exception on browsers not supporting DOM styleSheets properly
	        for (var si in document.styleSheets) {
	            var styleSheet = document.styleSheets[si];
	            if (!styleSheet.rules) continue;

	            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
	                if (!styleSheet.rules[ri].selectorText) continue;

	                if (styleSheet.rules[ri].selectorText.match(':hover')) {
	                    styleSheet.deleteRule(ri);
	                }
	            }
	        }
	    } catch (ex) {}
	}

	/* Go to the top when clicked */
	$('.go-up').on('click', function(){
	   var scroll_pos=(0);          
	   $('html, body').animate({scrollTop:(scroll_pos)}, '2000');
	})

	/* Youtube RealTime Subscriber Counter */
	if($('.download')){
	 // const 	channelId = 'UCFjdDTZcTHWsBKYw0z5H_6g',
		// 	apiKey = 'AIzaSyCge6fBP5k8AnNe7OCScgEUCf8Kvp1TCHk', 
		// 	api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

		// 	container = document.querySelector(".container"),
		// 	col = document.querySelector(".counter"),
		// 	odometer = document.getElementById("odometer");

		// 	let subCount = 0;

		// 	const urls = [api_response];

		// 	setInterval(() => {
		// 	  requestCall(api_response);
		// 	}, 2000);

			// odometer.innerHTML = 3.1+ 'K+'
	}else{
		$('.subs').css({display:'block'})
	}

		$('.sub-link').each((index, el)=>{
			 elm = $(el).text().split('-').join(' ')
			$(el).text(elm);
		});

	/* Services Button Popups */
		$('.services-btn, .popa').each((index, el) => {
			$(el).on('click', function(){
				let className = $(el).attr('class').match(/pop-\d/)[0];
				$('.'+className).css({
					transform:'scale(1) translateX(50%) ',
					transformOrigin:'center center',
					transition:'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'				
				});
			});
		})

		$('.close-popup').on('click', function(){
			$('.pop-up-serv').css({
				transform:'scale(0) translateX(50%) ',
				transformOrigin:'center center',
				transition:'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			})
		})

		/* Navbar trimmer */
		$('nav').on('mouseover', function(){
			 $('.sub-link').each((i,el)=>{
	     		if(el.innerText.includes("INT")){
		   			$(el).text(el.innerText.replace('INT', ''))     
			  	 }
			})
		})

		if($('.codrops-header h1').length){
			$('.codrops-header h1').each((i,el)=>{
			     if(el.innerText.includes("-int")){
				   $(el).text(el.innerText.replace('-int', ''))         
			   }
			})
		}

		if($('.category').length){
			$('.category').each((i,el)=>{
			     if(el.innerText.includes("INT")){
				   $(el).text(el.innerText.replace('INT', ''))         
			   }
			})
		}

});
