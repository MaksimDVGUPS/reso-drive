$(document).ready(function() {
    // Слайдер на главной странице
    $("#lightSlider").lightSlider({
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        pager: false,
        loop: true,
        prevHtml: `
            <img src="img/arrow_left.png" alt="Стрелка влево">
        `,
        nextHtml: `
            <img src="img/arrow_right.png" alt="Стрелка вправо">
        `,
        responsive : [
            {
                breakpoint:991.98,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    }); 
});

$('.menu__button').on('click', function () {
    $(this).next().toggleClass('active')
})