$(document).ready(function() {
    // Минимальная высота основной части
    windowHeight = $(window).height()
    const mainHeight = windowHeight - $('.navbar').height() - $('.menu').height() - $('.footer').height()
    $('main').css('min-height', mainHeight)

    // Открытие меню
    $('.agent__item').click(function() {
        $(this).toggleClass("active")
    })
})