// carousel
jQuery(function($){
    $('.carousel').owlCarousel({
        items: 2,
        itemsDesktop: [1023,3],
        itemsTablet: [959,2],
        itemsMobile : [767,1],
        singleItem : false,
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: true,
        pagination: false,
        responsive: true,
        paginationNumbers: false,
        navigationText: false,
        stopOnHover: true
    });
});
// end carousel

//placeholder ie
$(document).ready(function() {
    /* Placeholder for IE */
    if($.browser.msie) { // Условие для вызова только в IE
        $("form").find("input[type='text']").each(function() {
            var tp = $(this).attr("placeholder");
            $(this).attr('value',tp).css('color','#A9A9A9');
        }).focusin(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == val) {
                $(this).attr('value','').css('color','#747b80');
            }
        }).focusout(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == "") {
                $(this).attr('value', val).css('color','#A9A9A9');
            }
        });
        /* Protected send form */
        $("form").submit(function() {
            $(this).find("input[type='text']").each(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == val) {
                    $(this).attr('value','');
                }
            })
        });
    }
});
//end placeholder ie

// animation
jQuery(function($){

    setInterval(function(){
        if(jQuery('.big-ship').hasClass('show')) {
            jQuery('.big-ship').removeClass('show')
        }
        else{
            jQuery('.big-ship').addClass('show')
        }
    },20000);

    setInterval(function(){
        if(jQuery('.small-ship').hasClass('move')) {
            jQuery('.small-ship').removeClass('move')
        }
        else{
            jQuery('.small-ship').addClass('move')
        }
    },20000);

    setInterval(function(){
        if(jQuery('.crane-mechanism').hasClass('move')) {
            jQuery('.crane-mechanism').removeClass('move')
        }
        else{
            jQuery('.crane-mechanism').addClass('move')
        }
    },20000);

    setTimeout(function(){
        if(jQuery('.plane').hasClass('fly')) {
            jQuery('.plane').removeClass('fly')
        }
        else{
            jQuery('.plane').addClass('fly')
        }
    },3900);

    setTimeout(function(){
        if(jQuery('.car').hasClass('move')) {
            jQuery('.car').removeClass('move')
        }
        else{
            jQuery('.car').addClass('move')
        }
    },4000);

    setTimeout(function(){
        if(jQuery('.plane-shadow').hasClass('move')) {
            jQuery('.plane-shadow').removeClass('move')
        }
        else{
            jQuery('.plane-shadow').addClass('move')
        }
    },6900);

});
// end animation