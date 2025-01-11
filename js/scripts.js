var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function getRespParams() {
    if($(document).scrollTop() > $(".header_site").height()) {
        $("#header").addClass("scroll");
    } else {
        $("#header").removeClass("scroll");
    }
}

function getTriangleParams() {
    $(".thumbs_col:nth-child(1) .thumb:nth-child(even)").each(function() {
        tr = $(this).find(".triangle");
        heigth = $(this).height()/2;
        tr.css({
            "border-width": heigth+"px 0 "+heigth+"px 95px"
        });
    });
    $(".thumbs_col:nth-child(2) .thumb:nth-child(odd)").each(function() {
        tr = $(this).find(".triangle");
        heigth = $(this).height()/2;
        tr.css({
            "border-width": heigth+"px 95px "+heigth+"px 0"
        });
    });
}

function  getNavItemParams() {
    var sections = $('.scrollSect')
  , nav = $('.resp_nav')
  , nav_height = $('.resp_nav a').outerHeight();
  var cur_pos = $(window).scrollTop();  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }    
  });
}

$(window).resize(function() {
    getTriangleParams();
    getNavItemParams();
    getRespParams();
});

$(document).scroll(function() {
    getNavItemParams();
    getRespParams();
});

$(document).ready(function() {
    getTriangleParams();
    getNavItemParams();
    getRespParams();

    if( $(".slider").length > 0 ) {

        $('.slider').on('init', function(event){
            $('.slider_wrapp').addClass("ready");
        });

        $(".slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                  breakpoint: 510,
                  settings: {
                    variableWidth: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }                  
                }
              ]
        });
    }

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#respNav").is(":hidden") ) {
          $("#respNav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#respNav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#respNav").is(":visible") &&
            bodyWidth <= 767) {
                $("#respNav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ----------------

    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

    function my_prettify (n) {
        var num = Math.log2(n);
        var resPrice = prettify(n);
        $("#rangeVal").val(resPrice + " ₽");
        return n+" m";
    }

    $("#range").ionRangeSlider({
        min: 1,
        max: 120,
        from: 0,
        prettify: my_prettify
    });

    $(".calculator__item").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".calculator__items");
        parent.find(".calculator__item").removeClass("active");
        $(this).addClass("active");
    });

    // ----------------

    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var hrefAttr = $(this).attr("href");
      parent = $(this).closest("ul");
      parent.find("a").removeClass("active");
      $(this).addClass("active");
      if( hrefAttr.length > 0 && hrefAttr != "#" ) {
          $('html, body').stop().animate({
              'scrollTop': $(hrefAttr).offset().top-10
          }, 500);
      }
    });

    // ----------------

    var mapZoom;
    var lat;
    var long;
    ymaps.ready(function () {     
        mapZoom = $("#map").attr("data-zoom");
        lat = $("#map").attr("data-lat");
        long = $("#map").attr("data-long");   
        var myMap = new ymaps.Map('map', {
            center: [long, lat],
            zoom: mapZoom
        }, {
            searchControlProvider: 'yandex#search'
        });
        myPlacemark1 = new ymaps.Placemark([long, lat], {
            hintContent: ''
        }, {
        });
        myMap.geoObjects.add(myPlacemark1);        
    });
});