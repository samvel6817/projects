import Slideout from "slideout";

jQuery(document).ready(function () {
   var iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
   var event = "click";
   if(iOS != null) {
      event = "touchstart";
   }
   var width = jQuery(window).width();

   if((jQuery(window).width() > '380')) {
      width = width*0.6
   } else {

   }



   var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': width,
      'tolerance': 70,
      'side': 'right',
      'touch': false
   });

   // Toggle button
   jQuery('.header-nav-btn').on(event, function() {
      let elem = jQuery(this);

      if (jQuery(window).width() <= '768' && jQuery(window).width() > '380') {
         slideout.toggle();

      } else if ((jQuery(window).width() < '380')) {
         console.log(0)
         if (elem.hasClass("js-burger-open")) {
            slideout.open();
         } else {
            slideout.close();
         }
      }
   });
   jQuery(".slideout-menu").css({
      "width": width + "px"
   });


   function hideShow(e, elemParents) {
      let elem = jQuery(e).closest(elemParents);

      if(elem.hasClass("active")) {
         elem.removeClass('active')
      } else  {
         elem.addClass('active')
      }
   }

   jQuery(document).on(event, ".js-adress", function () {
      let elem = jQuery(this);
      hideShow(elem, ".header-adress-text")
   });
   jQuery(document).on(event, ".header-nav-btn", function () {
      let elem = jQuery(this);
      if ((jQuery(window).width() > '768')) {
         hideShow(elem, ".header-nav")
      }
   });

   jQuery(document).on(event, ".js-work", function () {
      let elem = jQuery(this);
      hideShow(elem, ".main-work")
   });
   jQuery(document).on(event, ".js-catalog-title", function () {
      let elem = jQuery(this);
      if ((jQuery(window).width() <= '767')) {
         hideShow(elem, ".main-catalog-block")
      }

   });

   jQuery(document).on(event, ".main-catalog-link", function () {
      jQuery("#modal_popup").html("");
      let elem = jQuery(this);
      let url = elem.data('href');
      jQuery.ajax({
         type: "GET",
         url: url
      }).done(function (data) {
         try {
            let btn_close = '<button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg></button>';
            data
            jQuery("#modal_popup").html(data + btn_close);

         } catch (e) {
            console.warn(e)
         }
      });
   });


   jQuery('[data-fancybox="gallery"]').fancybox({
      // Options will go here
   });

   function sendFrom (e) {
      let form = jQuery(e).closest("form");
      let data = form.serialize();
      let url = form.attr('action');
      let type = form.attr('method');
      let check = form.find('input[type="checkbox"]');
      let btn = form.find("button");
      jQuery.ajax({
         url: url,
         type: type,
         data: data,
         success: function(result) {
            form.html(result);
         }
      });
      return false;

   };


   jQuery(document).on('submit', '.form-ajax', function(){
      let form = jQuery(this);
      let data = form.serialize();
      let url = form.attr('action');
      let type = form.attr('method');

      jQuery.ajax({
         url: url,
         type: type,
         data: data,
         success: function(result) {
            form.html(result);
         }
      });

      return false;
   });

   jQuery(document).on('click', '.i_agree', function(){
      let check = jQuery(this);
      let form = check.closest("form");
      let btn = form.find("button");
      if (check.prop("checked") == true) {
         btn.prop("disabled", false)
      } else {
         btn.prop("disabled", true)
      }

   });
   let phone = jQuery('input[name="TELEPHONE"]');
   console.log(phone);

   jQuery('input[name="TELEPHONE"]').mask("8(999) 999-9999");




   ymaps.ready(init);

   function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
         // Координаты центра карты.
         // Порядок по умолчанию: «широта, долгота».
         // Чтобы не определять координаты центра карты вручную,
         // воспользуйтесь инструментом Определение координат.
         center: [54.196319, 45.140917],
         // Уровень масштабирования. Допустимые значения:
         // от 0 (весь мир) до 19.
         zoom: 12
      });
      myMap.behaviors.disable('scrollZoom');
      var points = [
          { id : 1, x : 54.209386, y :45.118703 },
          { id : 2, x : 54.188360, y :45.172593 },
          { id : 3, x : 54.193259, y :45.178629 }
      ];
      points.forEach(function (point) {
         var placemark = new ymaps.Placemark([point.x, point.y], {
            iconContent: point.name, id: point.id
         }, {preset: 'twirl#greenStretchyIcon'});
         myMap.geoObjects.add(placemark);
         if (jQuery(window).width() > '567') {
            placemark.events.add('click' , function(e){
               let x = e.get('domEvent').get('pageX');
               let y = e.get('domEvent').get('pageY');
               openMapModal(placemark.properties.get('id'), x, y);
            });
         }

      });
      myMap.events.add('click', function () {
         let elem = jQuery(".map-modal")
         if (elem.is(':visible')) {
            elem.fadeOut(200)
         }
      });

   };

   function openMapModal(id, x, y) {
      let elem = jQuery("#modal_"+id);
      if (elem.is(':visible')) {
         elem.fadeOut(200)
      } else {
         elem.fadeIn(200).css({
            "top": y - 20,
            "left": x + 20
         });
      }
   }


   jQuery(document).on(event, ".btn-volume-calculate", function () {
      let elem = jQuery(this);
      let input = elem.closest("#volume").find(".calculate-block").find("input");
      let s = 1;
      console.log(input)
      jQuery.each(input, function (ind,elem) {
         if (jQuery(elem).hasClass("volume-mm")) {
            s = s*(jQuery(elem).val()/1000);
         } else {
            s = s*jQuery(elem).val();
         }

         console.log(elem)
      })
      jQuery(".calculate").val(s)
      console.log(s)
   })
});
