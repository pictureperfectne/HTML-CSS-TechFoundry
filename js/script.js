// javascript on HTML & CSS demonstration
//
$("document").ready(function(){
	
$('.Btn1').click(function(){$( "#main-content" ).html("").hide();	$( "#slider" ).show();	$( "#modules" ).show();	$( "#cta" ).hide(); });
$('.Btn2').click(function(){ $( "#cta" ).hide(); getResume();	});
$('.Btn3').click(function(){$("#main-content").html("").hide(); $("#cta").show();});	
 // 
 function getResume()
{
	$("#main-content").show();
		$.ajax({	// inserts resume into the page
		url: "resume.html",
		cache: false
		}).done(function(file) {
		$("#main-content").html(file);
		});
 }
	
});

$(function(){
$( "#cta" ).hide();
$( "#main-content" ).hide(); 
 
 $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#gotoTop').fadeIn();
		} else {
			$('#gotoTop').fadeOut();
		}
	});	
	
});

 $(function(){ 
 // Select all anchor links with hashes
$('a[href*="#"]')
  // Remove links that don't link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') // gets url path
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
 
 });
