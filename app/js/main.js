    // Semicolon (;) to ensure closing of earlier scripting
    // Encapsulation
    // $ is assigned to jQuery
    ;(function($) {

         // DOM Ready
        $(function() {

            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
            $('.run-popup').on('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#popup-window').bPopup();

            });

        });

    })(jQuery);

$(document).ready(function() {
  $("[data-toggle]").click(function(e) {
    e.preventDefault();
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
     $('html, body').animate({
        scrollTop: 290
    }, 700);
  });
  $("[data-slide]").click(function(e) {
    e.preventDefault();
    var slide_el = $(this).data("slide");
    $(slide_el).toggleClass("slide-sidebar");
  });
});


// change the value with how many pixels scrolled down the button will appear
var amountScrolled = 200;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('a.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});