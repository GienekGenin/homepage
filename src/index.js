import $ from 'jquery';
import './scss/style.scss';

$(document).ready(function () {
    $('.container').hide();
    $("body").css({
        "padding-top": "200px",
        "background": "url(../src/img/mountain.jpg) no-repeat center center",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        "background-size": "cover",
        "min-height": "100vh",
        "width": "100%"
    });
    $('.container').fadeIn(5000);
});