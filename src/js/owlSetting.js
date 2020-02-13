jQuery(".owl-header").owlCarousel({
    loop: true,
    center: true,
    responsiveClass: true,
    nav: false,
    dotsEach: true,
    dots: true,
    navContainerClass: 'owl-nav',
    dotsClass: 'owl-dots',
    slideSpeed: 1000,
    autoplay:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 1
        },
        790: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});
jQuery(".owl-banner").owlCarousel({
    loop: true,
    center: true,
    responsiveClass: true,
    nav: false,
    dotsEach: true,
    dots: true,
    navContainerClass: 'owl-nav',
    dotsClass: 'owl-dots',
    slideSpeed: 1000,
    autoplay:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 1
        },
        790: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});

jQuery(".owl-object").owlCarousel({
    loop: true,
    center: true,
    responsiveClass: true,
    nav: true,
    dotsEach: true,
    dots: false,
    margin: 30,
    navContainerClass: 'owl-nav',
    dotsClass: 'owl-dots',
    slideSpeed: 1000,
    autoplay:true,
    navClass: ["prev-reviews","next-reviews"],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 1
        },
        790: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
jQuery(".owl-company").owlCarousel({
    loop: true,
    center: true,
    responsiveClass: true,
    nav: true,
    dotsEach: false,
    dots: true,
    navContainerClass: 'owl-nav',
    dotsClass: 'owl-dots',
    slideSpeed: 1000,
    autoplay:true,
    navClass: ["prev","next"],
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 3
        },
        900: {
            items: 2
        },
        1200: {
            items: 5
        }
    }
});
jQuery(".owl-reviews").owlCarousel({
    loop: true,
    center: true,
    responsiveClass: true,
    nav: true,
    dotsEach: false,
    dots: true,
    margin: 140,
    navContainerClass: 'owl-nav',
    navClass: ["prev-reviews","next-reviews"],
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 1
        },
        790: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
