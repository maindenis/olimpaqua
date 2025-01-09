var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {
    // counter = 0;
    // $(".thumbnails .thumb").each(function() {
    //     counter++;
    //     even = counter => !(counter % 2);
    //     if(even(counter) == false) {
    //         $(this).addClass("even");
    //     }
    // });

    // if( $(".slider").length > 0 ) {
    //     $(".slider").not(".slick-initialized").slick({
    //         dots: true,
    //         arrows: true,
    //         // autoplay: true,
    //         autoplaySpeed: 4000,
    //         speed: 2000,
    //         variableWidth: true,
    //         slidesToShow: 5,
    //         slidesToScroll: 1,
    //         centerMode: true,
    //         appendDots: $(".slider_dots"),
    //         appendArrows: $(".slider_arrows"),
    //         // fade: true,
    //         responsive: [
    //             {
    //               breakpoint: 1125,
    //               settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //               }
    //             },
    //             // {
    //             //   breakpoint: 540,
    //             //   settings: {
    //             //     slidesToShow: 1,
    //             //     slidesToScroll: 1
    //             //   }
    //             // }
    //           ]
    //     });
    // }

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

});