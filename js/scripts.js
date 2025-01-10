var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function getTriangleParams() {
    $(".thumb").each(function() {
        tr = $(this).find(".triangle");
        heigth = $(this).height()/2;
        if($(this).index() == 0) {
            tr.css({
                "border-width": heigth+"px 0 "+heigth+"px 95px"
            });
        } else {
            tr.css({
                "border-width": heigth+"px 95px "+heigth+"px 0"
            });
        }
    });
}

$(window).resize(function() {
    getTriangleParams();
});

$(document).scroll(function() {

});

$(document).ready(function() {
    getTriangleParams();
    // counter = 0;
    // $(".thumbnails .thumb").each(function() {
    //     counter++;
    //     even = counter => !(counter % 2);
    //     if(even(counter) == false) {
    //         $(this).addClass("even");
    //     }
    // });

    if( $(".slider").length > 0 ) {
        $(".slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true
        });
    }

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
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