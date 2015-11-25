// collapse navigation on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

// page scrolling functionality
$(function() {
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });
});

// change nav styles when scrolled past about section
$(function() {
  var targetOffset = $("#about").offset().top;
  var $w = $(window).scroll(function() {
    if ($w.scrollTop() >= targetOffset) { 
      $("#navigation").css({"background-color":"#ffffff"});
      $(".navbar-nav li a").removeClass("light_nav");          
      $(".navbar-nav li a").addClass("dark_nav");
      $("#name").css({"color":"#555555"});
    } else if ($w.scrollTop() < targetOffset) {
      $("#navigation").css({"background-color":"#cef1ce"});
      $(".navbar-nav li a").removeClass("dark_nav");
      $(".navbar-nav li a").addClass("light_nav");
      $("#name").css({"color":"#ffffff"});
    } 
  }); 
}); 

// rotate scroll icon when reach bottom of page
$(function() {
  var secondTarget = $("#contact").offset().top;
  var $scroll = $(window).scroll(function() {
    if($scroll.scrollTop() + $(window).height() == $(document).height()) {
      $("a#scroll.btn.page-scroll").addClass("scroll_up");
    } else if ($scroll.scrollTop() < secondTarget) {
      $("a#scroll.btn.page-scroll").removeClass("scroll_up");
    }
  });
});

/* show and hide summary text for work examples
$(function (){
  $(".work_img").click(function() {
    $(".summary_text").css({"display":"block"});
    $(".summary_text").css({"visibility":"visible"});
    $(".summary_text").animate({right: '200px'});
  });
});
*/