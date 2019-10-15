$(document).ready(function() {
    console.log('test');
    $('nav').addClass('scrolled');
    $('button.dropbtn').css('color', 'white');
    $('div.nav-bar-logo').addClass('hidden');
    // console.log($('html').scrollTop());

    // console.log(window.scrollY);
    // if (window.scrollY < 100) {
    //     console.log('scroll');
    // }

    window.addEventListener("scroll", function () {
    // $(window).scroll( function() {
        console.log(this.scrollY);

        console.log('hey');
        // if ( $('html').scrollTop() < 100 ) {
        if (this.document.body.scrollTop < 100) {
            console.log("hi");
            $('nav').addClass('scrolled');
            // $('div.navbar').find('a').addClass('scrolled');
            $('div.nav-bar-logo').find('img').addClass('hidden');
        } else {
            console.log('bye');
            $('nav').removeClass('scrolled');
            // $('div.navbar').find('a').removeClass('scrolled');
            $('div.nav-bar-logo').find('img').removeClass('hidden');
        }
    })

});