
// SMOOTH SCROLL
$(function () {
    $(".smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 70
        }, 1250);
    });
}); 



// START NAVBAR
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 60) {
        $('nav').addClass('bg-black');
        }
        if ($(window).scrollTop() < 60) {
            $('nav').removeClass('bg-black');
        }
    });
});

// CLOSE NAVBAR ON MOBILE
$('.navbar-collapse ul li a:not(.dropdown-toggler)').click(function() {
    $('.navbar-toggler:visible').click();
});

   
var form = $("#registration-form");
// var loader = $("#loader");

form.submit(function(event){
    event.preventDefault();
    loader.css("display", "inline-block");
    $.ajax({
            type: "POST",
            url: "/onepage/php/mail.php",
            dataType: "json",
            data: $(form).serialize(),
            success: function () {
                // loader.hide();
                $( "#success").slideDown( "slow" );
                setTimeout(function() {
                $( "#success").slideUp( "slow" );
                }, 3000);
                form.reset();
            },
            error: function() {
                // loader.hide();
                $( "#error").slideDown( "slow" );
                setTimeout(function() {
                $( "#error").slideUp( "slow" );
                }, 4000);
            }
        });
});