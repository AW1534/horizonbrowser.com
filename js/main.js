
var navHeight = $('nav').outerHeight();

$('nav a').click(function( e ){
    e.preventDefault();
    var myHref = $(this).attr('href');
    var newPos = $(myHref).offset().top;
    $('html, body').stop().animate({scrollTop: newPos-navHeight}, 1300);
});