$(function() {
	console.log("JS Iniciado")
	nav = $('#nav');
	body = $('body');
	overlay = $('.overlay');

	/* Mobile Menu */

	body.click(function() {
		if(navdisplay == 'block') {
			fecharNav()
		}
	});

	$('#menu-mobile').click(function(event) {	
		navdisplay = nav.css("display")

		if(navdisplay == 'none') {
			abrirNav()
			event.stopPropagation();
		} else if(navdisplay == 'block') {
			fecharNav()
		}
	})

	function fecharNav() {
		nav.fadeOut()
		overlay.fadeOut()
		navdisplay = nav.css("display")
	}
	function abrirNav() {
		nav.fadeIn()
		overlay.fadeIn()
		navdisplay = nav.css("display")
	}
})