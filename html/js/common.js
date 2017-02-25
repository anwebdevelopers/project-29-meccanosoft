$(function() {

    'use strict';
    var w = $(window).width();

    //-------------------------------
    //Меню
    //-------------------------------

    $('.header__nav-button').click(function() {
        if ($(this).hasClass('active') == false) {
            $(this).addClass('active');
            $('.header__nav').fadeIn(500);
        } else {
            $(this).removeClass('active');
            $('.header__nav').fadeOut(500);
        }
        return false
    });
    
    //Выключение при клике по ссылке и плавный скролл
    $('.header__nav a').click(function() {
        var w = $(window).width();
        if (w < 992 && $(".header__nav").is(':visible')) {
            $('.header__nav-button').removeClass('active');
            $('.header__nav').fadeOut(500);
        } 
    });


    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 992 && $(".header__nav").is(':hidden')) {
            $('.header__nav').removeAttr('style');
        }
    });

    //------------------------------------------------------------
    //stick menu
    //------------------------------------------------------------
    (function() {
        var start_pos = $('.header__nav').offset().top;
        $(window).scroll(function() {
            var w = $(window).width();
            
            if (w > 992) {
                if ($(window).scrollTop() >= start_pos) {
                    if ($('.header__nav').hasClass('.stick') == false) $('.header__nav').addClass('stick');
                } else $('.header__nav').removeClass('stick');
            } else $('.header__nav').removeClass('stick');

        });
    }());
    $(window).resize(function() {
        $('.header__nav').removeClass('stick');
    });


    //------------------------------------------------
    // Плавный скролл.mPageScroll2id()
    //------------------------------------------------

    $("a[href^='#']").mPageScroll2id();


    //---------------------------------
    //Адаптивный слайдер
    //---------------------------------
    $(".reviews__slider1").flipster({
        style: 'flat',
        spacing: -0.40,
        buttons: true,
        scrollwheel: false
        //loop: true
    });

    $(".reviews__slider2").flipster({
        style: 'flat',
        spacing: 0,
        buttons: true,
        scrollwheel: false
        //loop: true
    });


    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------

    $(".prices__item-row:nth-child(1)").equalHeights();
    $(".prices__item-row:nth-child(2)").equalHeights();
    $(".prices__item-row:nth-child(3)").equalHeights();
    $(".prices__item-row:nth-child(4)").equalHeights();
    $(".prices__item-row:nth-child(5)").equalHeights();
    $(".prices__item-row:nth-child(6)").equalHeights();
    $(".prices__item-box").equalHeights();
    $(".boxversion__functions-title").equalHeights();
    $(".boxversion__functions-text").equalHeights();

    //------------------------------------
    //popup
    //------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    /*  -------------
    //Валидация полей формы на странице заказа
    ------------- */

    $(".popup__form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            mesage: {
                required: true
            },
        },
        messages: {
            name: {
                required: 'Поле "Имя" обязательно для заполнения.',
                minlength: 'Имя не может быть меньше двух символов.'
            },
            email: {
                required: 'Поле "E-mail" обязательно для заполнения.',
                email: 'Введите корректный адрес электронной почты.'
            },
            message: {
                required: 'Поле "Сообщение" обязательно для заполнения.'
            },
        }
    });

    //--------------------------------------------------------------------
    //Итемы вакансий
    //--------------------------------------------------------------------
    $('.vacancy__content').hide();
    $('.vacancy__item').click(function() {
        $(this).addClass('active').find('.vacancy__content').slideDown(600);
    });
    $('.vacancy__content-button').click(function() {
        $(this).parent('.vacancy__content').parent('.vacancy__item').removeClass('active');
        $(this).parent('.vacancy__content').slideUp(600);
        return false
    });
    

    //--------------------------------------------------------------------
    //Яндекс карта
    //--------------------------------------------------------------------

    ymaps.ready(function() {
        var a = new ymaps.Map("map",{
            center: [55.67292006906172,37.625181000000005],
            zoom: 14,
            controls: ["zoomControl"],
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
        },{
            searchControlProvider: "yandex#search"
        })
          , b = new ymaps.Placemark(a.getCenter(),{
            hintContent: "",
            balloonContent: ""
        },{
            iconLayout: "default#image",
            iconImageHref: "img/icon-map.png",
            iconImageSize: [103, 155],
            iconImageOffset: [-51, -135]
        });
        $(window).resize(function() {
            var b = $(window).width();
            b < 768 ? a.behaviors.disable("drag") : a.behaviors.enable("drag")
        }),
        a.geoObjects.add(b)
    });

    $(document).ready(function() {
        $("#preloader__img").fadeOut(600),
        $("#preloader").fadeOut(800)
    });

});
