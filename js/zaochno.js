$(document).ready(function() {
    // Открыть dropdown
    $('button.course-buttons__item').click(function() {
        $('.course-buttons__dropdown').toggleClass('active')
    })
});