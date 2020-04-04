$(document).ready(function () {

    new WOW().init();

    $(".mall-wrap").click(function () {
        $(".slide-nav").css({"right":"0"});
    });

    $(".nav-close").click(function () {
        $(".slide-nav").css({"right":"-450px"});
    });

    $(".mall-search").click(function () {
        $(".search-section").css({"right":"0"});
    });

    $(".cms-close-search").click(function () {
        $(".search-section").css({"right":"-100%"});
    });

    $(".mall-cart").click(function () {
        $(".mall-cart-content").toggleClass("display");
    });

});