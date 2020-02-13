import Slideout from "slideout";
jQuery(document).ready( function() {
   
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70,
        'side': "right",
        "touch": false,
        "easing": 'ease-in-out',


    });
    jQuery(document).on('click','.toggle-button', function() {
        slideout.toggle();
    });
   
});