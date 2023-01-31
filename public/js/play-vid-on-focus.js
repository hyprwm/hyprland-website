$(document).ready(function () {
  $(".animatedVideo").each(function () {
    $(this).get(0).pause();
  });
  $(window).on("scroll", function () {
    $(".animatedVideo").each(function () {
      var scroll = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var elementHeight = $(this).height();
      if (scroll > elementTop - $(window).height() + elementHeight) {
        $(this).get(0).play();
      }
      
    });
  });
});

