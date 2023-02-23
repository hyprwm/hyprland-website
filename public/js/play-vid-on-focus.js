$(document).ready(function () {
    $(".animatedVideo").each(function () {
        $(this).get(0).pause();
    });
    $(window).on("scroll", function () {
        $(".animatedVideo").each(function () {
            let scroll = $(window).scrollTop();
            let elementTop = $(this).offset().top;
            let elementHeight = $(this).height();
            if (scroll > elementTop - $(window).height() + elementHeight) {
                $(this).get(0).play();
            }
        });
    });
});  