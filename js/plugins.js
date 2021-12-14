$(document).ready(function() {
    "use-strict";
    $(".loading").delay(1e3).addClass("loaded");
    $("#mouse").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#about-me").offset().top
        }, 1e3);
    });
    $(window).scroll(function() {
        $("#top-nav, #menu").addClass("transition");
        if ($(this).scrollTop() >= 600) {
            $("#top-nav, #menu").addClass("shown");
        } else {
            $("#top-nav, #menu").removeClass("shown");
        }
    });
    $("#menu").click(function() {
        $(this).toggleClass("active-menu");
        $("#side-menu").toggleClass("active-side-menu").children("a").removeClass("selected-item");
    });
    $("#side-menu a").on("click", function() {
        $(this).addClass("selected-item").siblings().removeClass("selected-item");
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

