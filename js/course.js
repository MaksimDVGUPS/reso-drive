$(document).ready(function() {
    // Видео в модальном окне
    $("a.popupbox-video").fancybox({
        type:'swf',
        allowfullscreen: 'true'
    });

    // Открыть окно для сбора лидов
    $('.course__button').click(function() {
        $('.modal-window').addClass('active')
    })

    // Закрыть окно для сбора лидов
    $('.modal-window__close').click(function() {
        $('.modal-window').removeClass('active')
    })
});