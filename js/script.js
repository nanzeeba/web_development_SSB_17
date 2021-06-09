$(document).ready(function(){

	// alert
	$('#btn').click(function(){
		alert("Hello, welcome to my website");
	});
	// hide
	$('#hide').click(function(){
		$('.messege').hide("slow");
	});
	// show
	$('#show').click(function(){
		$('.messege').show("fast");
	});
	// toggle
	$('#toggle').click(function(){
		$('.messege').toggle();
	});
	// fadeout
	$('#fadeout').click(function(){
		$('.messege').fadeOut(1000);
	});
	// fadein
	$('#fadein').click(function(){
		$('.messege').fadeIn(1000);
	});
	// fadetoggle
	$('#fadetoggle').click(function(){
		$('.messege').fadeToggle();
	});
	// slideup
	$( "#slideup" ).click(function() {
	  $( "#box" ).slideUp( "slow", function() {
	    // Animation complete.
	  });
	});
	// slide down
	$( "#slidedown" ).click(function() {
	  $( "#box" ).slideDown( "slow", function() {
	    // Animation complete.
	  });
	});
	// slide toggle
	$( "#slidetoggle" ).click(function() {
  		$( "#box" ).slideToggle( "slow" );
	});

	// animate run
		$( "#go" ).click(function() {
		  $( "#block" ).animate({
		    width: "70%",
		    opacity: 0.8,
		    marginLeft: "0.6in",
		    fontSize: "3em",
		    borderWidth: "10px"
		  }, 1500 );
		});

		// animate left right
		$( "#right" ).click(function() {
		  $( "#black2" ).animate({ "left": "+=50px" }, "slow" );
		});
		 
		$( "#left" ).click(function(){
		  $( "#black2" ).animate({ "left": "-=50px" }, "slow" );
		});
});
