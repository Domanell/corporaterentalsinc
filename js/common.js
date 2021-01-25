$(document).ready(function() {

	//menu
	$( ".navigation__button" ).click(function() {
		$( ".navigation" ).toggleClass( "active");
		$( this ).find("i").toggleClass( "fa-times");
		});
		$( ".navigation__overlay" ).click(function() {
			$( ".navigation" ).removeClass( "active");
		});
		$( ".navigation li a" ).click(function() {
			$( ".navigation" ).removeClass( "active");
			$( ".navigation__button" ).find("i").removeClass( "fa-times");
		});
});

