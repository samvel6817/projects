'use strict';

const $ = require("jquery");

window.jQuery = $;

if ($) {
    require('bootstrap');
    require('slick-carousel');

    /*require("./js/preloader.js");*/

    require("./js/jquery.maskedinput.js");
    require("./js/jquery.nicescroll.min.js");

    require("./js/main.js");
    require("./scss/required.scss");
}