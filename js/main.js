$(function () {
    $('.hamburger').click(function () {
        $('.main-menu').toggleClass('active')
    });
    $('.main-menu li a').on("click", function (e) {
        e.preventDefault();
        let href = $(this).attr('href');

        $('body').fadeOut(2000, function () {
            window.location.href = href; //przekierowanie
        });
    })
});