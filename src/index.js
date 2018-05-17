import $ from 'jquery';
import './scss/style.scss';

$(document).ready(function () {
    $("#edu").click(function() {
        $('html, body').animate({
            scrollTop: $(".timeline").offset().top
        }, 2000);
    });
});