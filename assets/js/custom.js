$(document).ready(function () {

	$('body').find('a[href="#"]').click(function(e){return false;});

	$("nav").navigation();

	$("nav").on("open.navigation", function() {
		$("#nav-icon1").addClass('open');
		$(".nav.navbar-nav, .left-footer-nav").removeClass('show-down');
		$(".nav.navbar-nav, .left-footer-nav").addClass('show-up');
		TweenMax.staggerTo('.nav.show-up li a', 0.5, {ease:SteppedEase.easeInOut, y:0, opacity:1},0.2)
		TweenMax.staggerTo('.left-footer-nav.show-up .terms-cookies', 0.4, {delay:1.2, ease:SteppedEase.easeIn, y:0, opacity:1},0.1)
		TweenMax.staggerTo('.left-footer-nav.show-up ul li', 0.4, {delay:1.3, ease:SteppedEase.easeIn, y:0, scale:1, opacity:1},0.1)
		TweenMax.staggerTo('.left-footer-nav.show-up .nav-copyright', 0.4, {delay:1.7, ease:SteppedEase.easeIn, y:0, opacity:1},0.1)

	}).on("close.navigation", function() {
		$("#nav-icon1").removeClass('open');
		$(".nav.navbar-nav, .left-footer-nav").removeClass('show-up');
		$(".nav.navbar-nav, .left-footer-nav").addClass('show-down');
		TweenMax.staggerTo('.nav.show-down li a', 0.1, {y:30, opacity:0},0.1)
		TweenMax.staggerTo('.left-footer-nav.show-down .terms-cookies', 0.1, {y:-10, opacity:0},0.1)
		TweenMax.staggerTo('.left-footer-nav.show-down ul li', 0.1, {y:-100, scale:0.5, opacity:0},0.1)
		TweenMax.staggerTo('.left-footer-nav.show-down .nav-copyright', 0.1, {y:10, opacity:0},0.1)
	});


	$('#toolsTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		tabidentify: 'tools'
	});



});


function setRandomInterval(){
    var counter;
    var total;
    counter = Math.floor((Math.random()*(20-15+1)+ 15) );
    total = counter + "000";
    return total;
}


// Popup
$('[data-toggle="popover"]').popover();

$('body').on('click', function(e) {
	$('.btn-plus-feature').each(function() {
		//the 'is' for buttons that trigger popups
		//the 'has' for icons within a button that triggers a popup
		if (!$(this).is(e.target) && $(this).has(e.target).length ===
			0 && $('.popover').has(e.target).length === 0) {
			$(this).popover('hide');
		}
	});
});


setTimeout(function(){

	_slaask.init('a2185cf7997e55eb9484fc90fe78066a');

}, 120000);



// Install Cookies
setTimeout(function(){

document.addEventListener('DOMContentLoaded', function(event) {
	cookieChoices.showCookieConsentBar('Cookies help us deliver our services. By using our services, you agree to our use of cookies.',
  'Got it', 'learn more', '/cookies');
});

}, 120000);



$(window).on('scroll', function() {
    var scrolled = $(this).scrollTop();

    $('.section').filter(function() {
      return scrolled >= $(this).offset().top-140;
    }).addClass('in-view').trigger('classChange');
});



// $(".nav_handle_push_right").click(function(){
// 	TweenMax.staggerFromTo('.nav.show-up li', 1, {opacity:0, x:400, ease:Bounce.easeIn,	force3D:true},{opacity:1, ease:Bounce.easeIn, force3D:true, x:0},0.1);
// })

$('.section').on('classChange', function(e){

	TweenMax.staggerFromTo('#features_performance.in-view .row .m-b-xl svg', 0.2, {opacity:0}, {opacity: 1}, 0.1);
	TweenMax.staggerFromTo('#features_security_body.in-view .left .m-b-xl', 1, {opacity:0}, {opacity: 1}, 0.2);
	TweenMax.staggerFromTo('#features_security_body.in-view .right #modern-tech', 2, {opacity: 0},{opacity:1}, 0.2);
	TweenMax.staggerFromTo('#features_security_body.in-view .right #modern-tech svg', 2, {opacity: 1, delay:1},{opacity:0, delay:4}, 0.2);
	TweenMax.staggerFromTo('#features_security_body.in-view .right #modern-tech .modern', 1, {opacity: 0}, {opacity: 1, delay:3}, 0.2);
	TweenMax.staggerTo('#features_automation.in-view .col-md-4', 1, {opacity:1}, 0.2);
	TweenMax.staggerTo('#features_tools.in-view .resp-tab-content .text-right',1, {opacity:1}, 0,2);
	TweenMax.staggerFromTo('#free-account.in-view .lang', 1, {opacity:0}, {opacity: 1}, 0.2);
	TweenMax.staggerFromTo('.in-view #different_languages li', 2, {
		scale:0.2,
		ease:Elastic.easeIn,
		force3D:true,
		 y:100},
		{scale:1, opacity:1, ease:Elastic.easeOut, force3D:true, y:0},
		 0.2);

	$(this).off(e);
})

var b = $('body'),
		aes = b.find('.animate-earth-small'),
		ael = b.find('.animate-earth-large');

var sliderScene = b.find('svg.drawsvg').drawsvg({
	duration: 1800,
	stagger: 100,
	callback: function(){
		$("svg.drawsvg").css('opacity', '0');
		$(b).find('.hided').each(function(){
			$(this).removeClass('hided');
			$(this).addClass('showed');
		});
		TweenMax.to(".demo-buttons p", 0.75, {y: "0px", delay: 1.4, opacity: 1})
		TweenMax.to(".demo-buttons a", 0.75, {y: "0px", delay: 1.5, opacity: 1})
		TweenMax.to(aes, 2.2, {opacity: 1});
		TweenMax.to(ael, 2.5, {opacity: 1});
		TweenMax.to(aes, 90, {ease: Power0.easeNone, rotation: "+=360", transformOrigin: 'center center', repeat:-1, force3D: true })
		TweenMax.to(ael, 95, {ease: Power0.easeNone, rotation: "-=360", transformOrigin: 'center center', repeat:-1, force3D: true })
	}
});

sliderScene.drawsvg('animate')

TweenMax.staggerFrom(".lang .first_batch", 0.4,{
	scale: 2.2,
	opacity:0,
	delay: 2.2,
	ease:Power2.easeInOut,
	force3D:true},
	.5)

TweenMax.staggerFrom(".lang .second_batch", 0.4,{
	scale: 2.5,
	opacity:0,
	delay: 2.3,
	ease:Power2.easeInOut,
	force3D:true},
	.3)

TweenMax.staggerFrom(".lang .third_batch", 0.5,{
	scale: 2,
	opacity:0,
	delay: 2.4,
	ease:Power2.easeInOut,
	force3D:true},
	.5)



TweenMax.staggerTo('.nav.show-down li a', 0.1, {opacity:0, y:30},0.1)
TweenMax.staggerTo('.left-footer-nav.show-down ul li', 0.1, {y:-100, scale:0.5, opacity:0},0.1)
TweenMax.staggerTo('.left-footer-nav.show-down .terms-cookies', 0.1, {y:-10, opacity:0},0.1)
TweenMax.staggerTo('.left-footer-nav.show-down .nav-copyright', 0.1, {y:10, opacity:0},0.1)