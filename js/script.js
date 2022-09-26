$(".start").hide();

$('.search').on('click', function () {
    $(".start").show(duration = 700);
    $('.exit').on('click', function () {
        $(".start").hide(duration = 700);
    });
});

let list = document.querySelector('.header-list')
let close = document.querySelector('.close')

$('.menu').on('click', function () {
    list.style.right = "0"
});

$('.close').on('click', function () {
    list.style.right = "-180px"
});

const swiper = new Swiper('.swiper', {

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2200,
    },
    speed: 1000,

});