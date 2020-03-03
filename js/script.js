$('.menu__btn').on('click', function (e) {
    e.preventDefault()
    $('.menu__btn').toggleClass('menu__active')
    $('.main__menu').toggleClass('menu__active')
    $('.close__menu').toggleClass('menu__active')
    $('body').toggleClass('menu__active')
})
$('.close__menu').on('click', function (e) {
    e.preventDefault()
    $('.menu__btn').toggleClass('menu__active')
    $('.main__menu').toggleClass('menu__active')
    $('.close__menu').toggleClass('menu__active')
    $('body').toggleClass('menu__active')
})