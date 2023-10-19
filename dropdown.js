$(document).ready(function() {
    $('.dropdown').on('mouseenter click', function() {
        $(this).find('.dropdown-menu').stop(true, true).slideDown(500);
    });

    $('.dropdown').on('mouseleave', function() {
        $(this).find('.dropdown-menu').stop(true, true).slideUp(500);
    });
});


