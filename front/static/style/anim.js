/**
 * Created by Thib on 18/11/2016.
 */


$('header nav ul li ').on('mouseenter', function () {
    $brother = $(this).siblings();
    $(this).find('a').addClass('hovered');
    $brother.find('a').addClass('not-hovered');
});

$('header nav ul li ').on('mouseleave', function () {
    $brother = $(this).siblings();
    $(this).find('a').removeClass('hovered');
    $brother.find('a').removeClass('not-hovered');
});