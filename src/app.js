'use strict';

const $ = require("jquery");

window.jQuery = $;

if ($) {
    require('bootstrap');
    require('owl.carousel');
    require("slideout");
    require('@fancyapps/fancybox');
    require("./js/main.js");
    require("./js/owlSetting.js");
    require("./js/jquery.maskedinput.min");
    require("./scss/required.scss");
}
