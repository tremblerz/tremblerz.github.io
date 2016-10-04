$(document).ready(function() {
    "use-strict";
    $(".loading").delay(1e3).addClass("loaded");
    $("html, body").niceScroll({
        scrollspeed: 40,
        mousescrollstep: 30,
        zindex: 9999,
        cursorwidth: 10,
        cursorborder: false,
        cursorborderradius: 0,
        cursorcolor: "#111"
    });
    $("#mouse").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#about-me").offset().top
        }, 1e3)
    });
    $(window).scroll(function() {
        $("#top-nav, #menu").addClass("transition");
        if ($(this).scrollTop() >= 600) {
            $("#top-nav, #menu").addClass("shown")
        } else {
            $("#top-nav, #menu").removeClass("shown")
        }
    });
    $("#menu").click(function() {
        $(this).toggleClass("active-menu");
        $("#side-menu").toggleClass("active-side-menu").children("a").removeClass("selected-item")
    });
    $("#side-menu a").on("click", function() {
        $(this).addClass("selected-item").siblings().removeClass("selected-item")
    });
    $('a[href^="#"]').on("click", function(event) {
        var target = $($(this).attr("href"));
        if (target.length) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 1e3)
        }
    });
    var scrollTimer = null;
    $(window).scroll(function() {
        var viewportHeight = $(this).height(),
            scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
            progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
            distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $("#scroll").height() / 2;
        $("#scroll").css("top", distance).text(" (" + Math.round(progress * 100) + "%)").fadeIn(100);
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer)
        }
        scrollTimer = setTimeout(function() {
            $("#scroll").fadeOut()
        }, 800)
    });
    $(".acc-title").click(function() {
        $(".acc-title").not(this).removeClass("active");
        $(this).toggleClass("active");
        $(this).siblings(".acc-content").slideToggle(350);
        $(".acc-title").not(this).siblings(".acc-content").slideUp(300)
    });
    var backToTop = $(".back-to-top");
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 400) {
            backToTop.addClass("show-button")
        } else {
            backToTop.removeClass("show-button")
        }
    });
    backToTop.click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1200)
    });
    $("input, select, textarea").jqBootstrapValidation();
    $(".contact .form-control").focusout(function() {
        var textValue = $(this).val();
        if (textValue === "") {
            $(this).removeClass("has-value")
        } else {
            $(this).addClass("has-value")
        }
    });
    $("#facts").appear(function() {
        $("#number_1").animateNumber({
            number: 10000
        }, 1800);
        $("#number_2").animateNumber({
            number: 30
        }, 1800);
        $("#number_3").animateNumber({
            number: 100
        }, 1800);
        $("#number_4").animateNumber({
            number: 200
        }, 1800)
    }, {
        accX: 0,
        accY: -150
    });
    $("#skills").appear(function() {
        $(".chart").easyPieChart({
            barColor: "#eaeaea",
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: "round",
            size: 150,
            animate: 1200
        });
        $("#chart_num_1").animateNumber({
            number: 81
        }, 1200);
        $("#chart_num_2").animateNumber({
            number: 78
        }, 1200);
        $("#chart_num_3").animateNumber({
            number: 93
        }, 1200);
        $("#chart_num_4").animateNumber({
            number: 85
        }, 1200)
    }, {
        accX: 0,
        accY: -150
    });
    $("#Container").mixItUp();
    $(".open-popup-link").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        removalDelay: 100,
        closeBtnInside: !0,
        preloader: !1,
        mainClass: "mfp-fade"
    });
    $(".test-owl").owlCarousel({
        loop: true,
        responsiveClass: true,
        margin: 10,
        nav: false,
        dots: false,
        dotsEach: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $(".partners-owl-carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        margin: 10,
        nav: false,
        dots: false,
        dotsEach: false,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1e3: {
                items: 5
            }
        }
    })
});
google.maps.event.addDomListener(window, "load", init);

function init() {
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(30.609788, 32.268555),
        scrollwheel: false,
        styles: [{
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{
                saturation: 36
            }, {
                color: "#000000"
            }, {
                lightness: 40
            }]
        }, {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "on"
            }, {
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }, {
                weight: 1.2
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 21
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 29
            }, {
                weight: .2
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 18
            }]
        }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 19
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }]
    };
    var mapElement = document.getElementById("map");
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(30.609788, 32.268555),
        map: map,
        title: "Marqa Studio"
    });
    var infowindow = new google.maps.InfoWindow({
        content: "Marqa Studio"
    });
    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, marker)
    })
}