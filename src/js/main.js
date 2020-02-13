import Slideout from "slideout";
jQuery(document).ready( function() {
    jQuery(".header-nav-ul").niceScroll();
    if (jQuery(window).width() > 991) {
        jQuery(function() {
            jQuery("body").niceScroll({
                zindex: "1000",
                cursorwidth: "9px",
                autohidemode: false
            });
        });
    }

    function deleteBlock(elem) {
        let block = elem.parents(".basket");
        block.remove();

    };
    function check() {
        let arrInput = jQuery(".js-step:visible").find("input:visible");
        let error = false;
        if(arrInput.length > 0 ) {
            arrInput.each(function () {
                if (jQuery(this).attr("required") && jQuery(this).val().length < 1 ) {
                    error = true;
                    console.log(jQuery(this));
                    jQuery(this).addClass("error-form")
                } else {
                    jQuery(this).removeClass("error-form")
                }
            });
        }

        if (error) {
            return false;
        } else {
            return true;
        }
    };
    function basketPosition () {
        let basket = jQuery(".main-basket");
        if(basket.length > 0) {
            let basketPosition = basket.offset().top;
            jQuery(function () {
                jQuery(window).scroll(function () {

                    if (jQuery(this).scrollTop() >= (basketPosition - jQuery(window).height())) {
                        basket.css({
                            "position": "absolute",
                            "right": "3%"
                        });
                        jQuery(".header-number").addClass("d-none");
                        jQuery('nav').append(basket);
                    } else {
                        basket.css({
                            "position": "relative",
                            "right": "auto"
                        });
                        jQuery(".header-number").removeClass("d-none");
                        jQuery('.js-baskeet-block').append(basket);
                    }
                });

            });
        } else {

        }
    };
    function widthNav () {
        let navHeight = jQuery("nav").height();
        jQuery("header").css ({
            "margin-top" : navHeight + 30
        })
    };
    window.preloaderShow = function (e) {
        if (!!e == "body") {
            jQuery(e).css ({
                "position" : "fixed"
            });
        }
        let preloaderBlock = jQuery(e);

        let preloader = jQuery(".preloader");
        preloader.clone().appendTo(e);
        preloaderBlock.addClass('preloader-active');

    };

    window.preloaderHide =  function(e) {
        setTimeout(function() {
            let preloaderBlock = jQuery(e);
            preloaderBlock.removeClass('preloader-active');
            if (!!e == "body") {
                preloaderBlock.find(".preloader").remove()
                jQuery(e).css ({
                    "position" : "relative"
                });
            }

        }, 500);
    };
    window.preloaderShow("body");

    jQuery('.header-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

     const slideInit = jQuery('.detail-drink-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        cssEase: 'linear',
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: "<div  class='slick-prev slick-arrow'><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
            "\t viewBox=\"0 0 492.004 492.004\" style=\"enable-background:new 0 0 492.004 492.004;\" xml:space=\"preserve\">\n" +
            "\t<g>\n" +
            "\t\t<path d=\"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n" +
            "\t\t\tc-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n" +
            "\t\t\tc0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n" +
            "\t\t\tc5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z\"/>\n" +
            "\t</g>\n" +
            "</svg></div>",
        nextArrow: "<div  class='slick-next slick-arrow'><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
            "\t viewBox=\"0 0 492.004 492.004\" style=\"enable-background:new 0 0 492.004 492.004;\" xml:space=\"preserve\">\n" +
            "\t<g>\n" +
            "\t\t<path d=\"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n" +
            "\t\t\tc-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n" +
            "\t\t\tc0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n" +
            "\t\t\tc5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z\"/>\n" +
            "\t</g>\n" +
            "</svg></div>",
    });

    var ajaxTimer;
    jQuery(document).on('click', '.main-select', function(){
        jQuery(".js-content").html("");
        preloaderShow(".js-content");
        let elem = jQuery(this);
        if (elem.find(".main-select-pizza").val() == "Все") {
            jQuery('.main-select-pizza:checked').prop('checked',false);
            elem.find(".main-select-pizza").prop('checked',true);
        } else {
            jQuery('.main-select-pizza[value="Все"]').prop('checked',false);
        }
        let form = elem.closest('form');
        let data = form.serializeArray();
        clearTimeout(ajaxTimer);
        ajaxTimer = setTimeout(function() {
            jQuery.ajax({
                url: "/local/ajax/pizza.php",
                type: "POST",
                data: data,
            }).done(function(data){
                try {
                    jQuery(".js-content").html(data);
                    preloaderHide(".js-content");
                } catch (e) {
                    console.warn(e)
                }
            });
        }, 1000);

    });
    jQuery(document).on("click",".main-price-basket", function () {
        let self = jQuery(this);
        console.log("13");
        let elem = self.parent().find(".main-price-count");
        let count = parseInt(jQuery("#js-basket-count").html());
        if(elem.hasClass("d-none")) {
            elem.removeClass("d-none");
            self.addClass("d-none");
            let mainCount = 0;
            mainCount++;
            count++;
            jQuery(".js-basket-count").html(mainCount);
            jQuery("#js-basket-count").html(count);
            self.parent().find(".js-count-number").val(mainCount);
        }
        let data = self.closest('form').serializeArray();
        clearTimeout(ajaxTimer);
        ajaxTimer = setTimeout(function() {
            jQuery.ajax({
                type: "POST",
                url: "/local/ajax/basket.php",
                data: data
            }).done(function (data) {
                try {
                    let obj = jQuery.parseJSON(data);
                    if (jQuery(window).width() > '576'){
                        jQuery(".main-basket-count").html(obj.all_quantity);
                    } else {
                        jQuery(".main-basket-count").html(obj.all_quantity + " товаров  на сумму " + obj.elems.format_price);
                    }
                    if (!data.id_new && jQuery("#basket_list").length > 0) {

                        let id =  jQuery(('.js-baket-info[value="' + obj.id_new + '"]:eq(0)'));

                        let slider = id.closest(".detail-drink-slider");

                        let elem = id.closest(".detail-drink");

                        let slide  = elem.parents('.slick-slide');

                        let title = elem.find('.detail-drink-text').find("a").text();
                        let text = elem.find('p').text();
                        let price = elem.find('.basket-price').html();
                        let img_path = elem.find("img").attr('src');
                        jQuery('.detail-drink-slider').slick('slickRemove', slider);
                        if (jQuery("[data-id='" + obj.id_new + "']").length > 0) {
                            if (jQuery(".detail-title").text() == "Корзина пуста") {
                                jQuery(".detail-title").text("Корзина");
                            }
                            let elemBasket = jQuery("[data-id='" + obj.id_new + "']").closest(".basket-block_flex").find(".js-count-number");
                            let elemCount = parseInt(elemBasket.val()) + obj.quantity_new;
                            elemBasket.val(elemCount);

                        } else {
                            let html = '<div class="row basket">'+
                                             '<div class="col-12">' +
                                                 '<form class="basket-block_flex">' +
                                                     '<img src="' + img_path + '">' +
                                                         '<div class="basket-block-text">' +
                                                            '<div class="basket-block-title" data-id="' + obj.id_new + '">' + title + '</div>' +
                                                            '<div class="basket-block-descr main-block-title">' + text +'</div>' +
                                                        '</div>'+
                                                        '<div class="main-price-count basket-prise-count">' +
                                                            '<button type="button" class="main-count js-count-minus"><i></i></button>'+
                                                            '<span class="main-count-numbers">' +
                                                                '<input class="js-baket-info" type="hidden" name="id" value="'+ obj.id_new +'">' +
                                                                '<input readonly class="js-count-number" type="number" value="'+ obj.quantity_new +'" name="quantity">' +
                                                            '</span>' +
                                                            '<button type="button"  class="main-count js-count-plus"><i></i><i></i></button>' +
                                                        '</div>' +
                                                        '<div class="basket-block-price">'+ price +'</div>' +
                                                        '<div class="basket-delete"> <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                                                                        '<path d="M17.2327 2.97436H13.0715V2.2959C13.0715 1.08291 12.0847 0.0960693 10.8717 0.0960693H6.91612C5.70312 0.0960693 4.71628 1.08291 4.71628 2.2959V2.97436H0.555099C0.246711 2.97436 0 3.22107 0 3.52946C0 3.83785 0.246711 4.08456 0.555099 4.08456H1.55839V17.1273C1.55839 18.7638 2.89062 20.0961 4.52714 20.0961H13.2607C14.8972 20.0961 16.2294 18.7638 16.2294 17.1273V4.08456H17.2327C17.5411 4.08456 17.7878 3.83785 17.7878 3.52946C17.7878 3.22107 17.5411 2.97436 17.2327 2.97436ZM5.82648 2.2959C5.82648 1.69558 6.31579 1.20627 6.91612 1.20627H10.8717C11.472 1.20627 11.9613 1.69558 11.9613 2.2959V2.97436H5.82648V2.2959ZM15.1192 17.1273C15.1192 18.1512 14.2845 18.9859 13.2607 18.9859H4.52714C3.50329 18.9859 2.66859 18.1512 2.66859 17.1273V4.08456H15.1234V17.1273H15.1192Z" fill="#C4C4C4"/>\n' +
                                                                                        '<path d="M8.89494 16.9957C9.20333 16.9957 9.45004 16.749 9.45004 16.4406V6.62978C9.45004 6.32139 9.20333 6.07468 8.89494 6.07468C8.58655 6.07468 8.33984 6.32139 8.33984 6.62978V16.4365C8.33984 16.7449 8.58655 16.9957 8.89494 16.9957Z" fill="#C4C4C4"/>\n' +
                                                                                        '<path d="M5.27092 16.3831C5.57931 16.3831 5.82602 16.1364 5.82602 15.828V7.23836C5.82602 6.92997 5.57931 6.68326 5.27092 6.68326C4.96253 6.68326 4.71582 6.92997 4.71582 7.23836V15.828C4.71582 16.1364 4.96664 16.3831 5.27092 16.3831Z" fill="#C4C4C4"/>\n' +
                                                                                        '<path d="M12.5165 16.3831C12.8249 16.3831 13.0716 16.1364 13.0716 15.828V7.23836C13.0716 6.92997 12.8249 6.68326 12.5165 6.68326C12.2081 6.68326 11.9614 6.92997 11.9614 7.23836V15.828C11.9614 16.1364 12.2081 16.3831 12.5165 16.3831Z" fill="#C4C4C4"/>\n' +
                                                                                        '</svg>' +
                                                        '</div>' +
                                                '</form>'+
                                            '</div>' +
                                        '</div>';
                            let html_pay = '<div class="row justify-content-center justify-content-md-end" style="margin-bottom: 60px">' +
                                                '<div class="col-lg-3 col-md-4 col-sm-6 justify-content-end d-flex flex-column">' +
                                                    '<div class="basket-summ"><span>Сумма заказа:</span><span class="summ">49 ₽</span></div>' +
                                                    '<button class="js-next-step basket-order-btn" type="button">Оформление заказа</button>' +
                                                '</div>' +
                                            '</div>';
                            jQuery("#basket_list").append(html);
                        }
                        if (!!obj.elems.format_price) {
                            jQuery(".summ").html(obj.elems.format_price);
                        }
                    }
                } catch (e) {
                    console.warn(e)
                }
            }, 1000);
        });

    });
    jQuery(document).on("click",".js-count-plus", function () {
        let elem = jQuery(this).siblings(".main-count-numbers");
        let minus = jQuery(this).siblings(".js-count-minus");
        let mainCount = parseInt(elem.find(".js-count-number").val());
        let count = parseInt(jQuery("#js-basket-count").html());
        mainCount++;
        count++;
        if(mainCount > 0) {
            minus.prop( "disabled", false );
        }
        elem.find(".js-count-number").val(mainCount);

        let id = elem.find(".js-baket-info").val();

        if (jQuery('*[data-id="'+id+'"]')) {
            jQuery('*[data-id="'+id+'"]').closest("form").find('.js-count-number').val(mainCount);
        }

        jQuery("#js-basket-count").html(count);

        let data = jQuery(this).closest('form').serializeArray();
        clearTimeout(ajaxTimer);
        ajaxTimer = setTimeout(function() {
            jQuery.ajax({
                type: "POST",
                url: "/local/ajax/basket.php",
                data: data
            }).done(function(data){
                try {
                    let obj = jQuery.parseJSON(data);

                    if (jQuery(window).width() > '576'){
                        jQuery(".main-basket-count").html(obj.all_quantity);
                    } else {
                        jQuery(".main-basket-count").html(obj.all_quantity + " товаров  на сумму" + obj.elems.format_price);
                    }
                    if (jQuery(".summ").length > 0) {
                        jQuery(".summ").html(obj.elems.format_price);
                    }
                } catch (e) {
                    console.warn(e)
                }


            });
        }, 1000);


    });
    jQuery(document).on("click", ".js-count-minus", function () {
        let elem = jQuery(this).siblings(".main-count-numbers");
        let mainCount = parseInt(elem.find(".js-count-number").val());
        let count = parseInt(jQuery("#js-basket-count").html());
        let minus = jQuery(this);


        if (mainCount == 1) {
            let id = elem.find(".js-baket-info").val();
            if(!jQuery(this).parent().hasClass("basket-prise-count")) {
                jQuery(this).addClass("disable");
                elem.parent().addClass("d-none");
                elem.parents(".main-price-block-basket").find(".main-price-basket").removeClass("d-none");

            } else {
                minus.prop("disabled", true);
                jQuery('*[data-id="'+id+'"]').closest(".basket").find('.basket-delete').trigger("click");
            }
            count--;
            mainCount--;

            if (jQuery('*[data-id="'+id+'"]').length > 1) {
                jQuery('*[data-id="'+id+'"]').closest("form").find('.js-count-number').val(mainCount);
            }

            jQuery("#js-basket-count").html(count);
            elem.find(".js-count-number").val(mainCount);
            let data = jQuery(this).closest('form').serializeArray();
            clearTimeout(ajaxTimer);
            ajaxTimer = setTimeout(function() {
                jQuery.ajax({
                    type: "POST",
                    url: "/local/ajax/basket.php",
                    data: data
                }).done(function(data){
                    let obj = jQuery.parseJSON(data);
                    if (jQuery(window).width() > '576'){
                        jQuery(".main-basket-count").html(obj.all_quantity);
                    } else {
                        jQuery(".main-basket-count").html(obj.all_quantity + " товаров  на сумму" + obj.elems.format_price);
                    }
                    /*if (obj.elems.summ == 0) {
                        deleteBlock(elem);
                        jQuery(".detail-title:contains('Корзина')").text('Корзина пуста');
                        jQuery("#slider").addClass("d-none");
                        jQuery("#basket_list").html('<div class="row"> <div class="col-lg-3 col-md-4 col-sm-10"> <a href="/" class="basket-order-btn"> Вернуться к каталогу</a> </div> </div>');
                    }
                    if (!!obj.elems.summ) {
                        jQuery(".summ").html(obj.elems.summ + ' &#x20bd;');
                    }*/
                });
            }, 1000);
            if (jQuery(window).width() <= '766'){
                jQuery(".main-basket-count").html("Ваша корзина пуста!");
            } else {
                jQuery(".main-basket-count").html(count);
            }
        } else {
            jQuery(this).removeAttr("disabled");
            mainCount--;
            count--;
            jQuery(this).removeClass("disable");
            elem.find(".js-count-number").val(mainCount);
            jQuery("#js-basket-count").html(count);
            let id = elem.find(".js-baket-info").val();


            if (jQuery('*[data-id="'+id+'"]').length > 0) {
                jQuery('*[data-id="'+id+'"]').closest("form").find('.js-count-number').val(mainCount);
            }

            let data = jQuery(this).closest('form').serializeArray();

            clearTimeout(ajaxTimer);
            ajaxTimer = setTimeout(function() {
                jQuery.ajax({
                    type: "POST",
                    url: "/local/ajax/basket.php",
                    data: data
                }).done(function(data){
                    let obj = jQuery.parseJSON(data);
                    if (jQuery(window).width() > '576'){
                        jQuery(".main-basket-count").html(obj.all_quantity);
                    } else {
                        jQuery(".main-basket-count").html(obj.all_quantity + " товаров  на сумму" + obj.elems.format_price);
                    }
                    if (jQuery(".summ").length > 0) {
                        jQuery(".summ").html(obj.elems.format_price);
                    }
                });
            }, 1000);
        }



    });
    jQuery(document).on("click", ".main-block-pizza-size-label", function () {
        let elem = jQuery(this);
        let IdElem = elem.attr("href");
        jQuery(this).parents(".main-block-info").find(".tab-pane-basket.active").removeClass("active");
        jQuery("."+IdElem).addClass("active");

    });
    jQuery(window).resize(function () {
        widthNav();
    });
    widthNav();
    basketPosition();
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
    jQuery(document).on("click", ".basket-delete", function () {
        let elem = jQuery(this);
        let id = elem.siblings(".basket-block-text").find(".basket-block-title").data("id");
        let count = jQuery(this).siblings('.basket-prise-count').find('.js-count-number').val();
        jQuery.ajax({
            method: 'POST',
            url: "/local/ajax/basket.php",
            data: {id: id, action: 'remove', quantity: count}
        }).done(function(data){
            try {
                let obj = jQuery.parseJSON(data);
                if (obj.status == "ok") {
                    deleteBlock(elem);
                    if (!!obj.elems.format_price) {
                        jQuery(".summ").html(obj.elems.format_price);
                    }
                } else {
                }

                if (jQuery(".basket").length == 0) {
                    jQuery(".detail-title:contains('Корзина')").text('Корзина пуста');
                    jQuery("#slider").addClass("d-none");
                    jQuery("#basket_list").html('<div class="row"> <div class="col-lg-3 col-md-4 col-sm-10"> <a href="/" class="basket-order-btn"> Вернуться к каталогу</a> </div> </div>');

                }


            } catch (e) {
                console.warn(e);
            }
        });
    });
    jQuery(document).on("click", ".order-delivery-select", function () {
        jQuery(".order-delivery-select.active:visible").removeClass("active");
        jQuery(".order-pane.active").removeClass("active");
        let elem = jQuery(this);
        jQuery(this).addClass("active");
        let id = elem.data("id");
        jQuery(id).addClass("active");
    });
    jQuery(function(){
        jQuery(".number_musk").mask("+7(999) 999-9999");
    });
    var dataFormMain = {};
    jQuery(document).on('click',".js-next-step", function () {
        jQuery('html, body').animate({scrollTop: 0},500);

        let elem = jQuery(this).closest(".js-step");


        if(check()) {
            if (elem.hasClass("orderform")) {
                let dataForm = jQuery(this).closest('form').serializeArray();
                dataFormMain = dataForm.concat(dataFormMain);
                console.log(dataFormMain);
            }
            if (jQuery(this).attr("id") == "orderFormBtn") {
                preloaderShow(".js-step.active");
                jQuery.ajax({
                    url: "/local/ajax/form.php",
                    method: "POST",
                    data: dataFormMain
                }).done(function (data) {
                    try {
                        dataFormMain = {};
                        let obj = jQuery.parseJSON(data);

                        if (obj.status == "ok") {
                            jQuery(".main-basket-count").text("0");
                            preloaderHide(".js-step.active");
                            let online = jQuery("#pay_online");
                            if (online.prop('checked')) {

                                if (!!obj.url) {
                                    document.location.href = obj.url;
                                }
                                let finishBtn = jQuery(".finishBtn");
                                finishBtn.attr("href", "/basket/order.php?order="+ obj.order);
                                finishBtn.text("Оплатить онлайн");
                            }

                            if (elem.hasClass("active")) {
                                elem.next(".js-step").fadeIn("slow").addClass("active");
                                elem.removeClass("active");

                            } else {
                                elem.addClass("active");
                                preloaderHide(".js-step.active");
                            }
                        } else {

                            let StepActive = jQuery(".js-step.active");
                            preloaderHide(".js-step.active");
                            StepActive.find(".js-prev-step").trigger("click");
                            let self = StepActive.find(".w-100");


                            jQuery('<div class="error-text">Заполните все поля!</div>').appendTo(self);
                            for(let i = 0; i < obj.errors.length; i++) {
                                let name = obj.errors[i];
                                jQuery("input[name=" + name + "]").addClass("error-form");
                            };


                        }
                    } catch (e) {
                        console.warn(e)
                    }
                })
            } else {

                if(jQuery(".order-pane:visible")) {
                    jQuery(".error-text").remove();
                }
                if (elem.hasClass("active")) {
                    elem.next(".js-step").fadeIn("slow").addClass("active");
                    elem.removeClass("active");
                    if(elem.next(".js-step").hasClass("preloader-active")) {
                        elem.next(".js-step").removeClass("preloader-active")
                    }
                } else {
                    elem.addClass("active")
                }
            }
        } else {
            let self = jQuery(".js-step.active").find(".w-100");
            jQuery('<div class="error-text">Заполните все поля!</div>').appendTo(self);
        }


    });
    jQuery(document).on('click',".js-prev-step", function () {

        let elem = jQuery(this).parents(".js-step");

        if (elem.hasClass("active")) {
            elem.removeClass("active");
            elem.prev(".js-step").fadeIn(1000).addClass("active");
            if( elem.prev(".js-step").find(".order-delivery-select").hasClass("active") ) {
                let item = elem.prev(".js-step").find(".order-delivery-select.active").data("id");
                jQuery(item).addClass("active");
            }
        } else {
            elem.addClass("active");
        }
        jQuery(".order-delivery-select.active").siblings("input").prop('checked', true);
    });
    if (jQuery("#map").length > 0) {
        ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [54.172256, 45.176339],
                zoom: 17
            });
            var myPlacemark = new ymaps.Placemark(
                // Координаты метки
                [54.172256, 45.176339]
            );
            myMap.geoObjects.add(myPlacemark);
        };
    }
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > 100) {
            if (!jQuery('.arrow-up').hasClass('arrow-up-active')) {
                jQuery('.arrow-up').addClass('arrow-up-active');
            }
        } else {
            jQuery('.arrow-up').removeClass('arrow-up-active');
        }
    });
    jQuery(document).on('click', '.arrow-up', function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    preloaderHide("body");
});
