$(document).ready(function () {
    /***************** Navbar-Collapse ******************/

    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /***************** Page Scroll ******************/

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /***************** Scroll Spy ******************/

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    /***************** Owl Carousel ******************/

    $("#owl-hero").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });


    /***************** Full Width Slide ******************/

    var slideHeight = $(window).height();

    $('#owl-hero .item').css('height', slideHeight);

    $(window).resize(function () {
        $('#owl-hero .item').css('height', slideHeight);
    });
    /***************** Owl Carousel Testimonials ******************/

    $("#owl-testi").owlCarousel({

        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "backSlide",
        autoPlay: true

    });
    /***************** Countdown ******************/

    $('#fun-facts').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });

    /***************** Google Map ******************/

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(23.732887,121.3452572),
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    /***************** Wow.js ******************/
    
    new WOW().init();
    
    /***************** Preloader ******************/
    
    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove();
    });

    /***************** Wish board ******************/
    function getData(){
                $.getJSON('js/data.json', function(data) {
                    wishes = data.dataset;
                    var length = wishes.length;

                    //開始製作每個 wish
                    for( var i = length; i >0; i-- ){
                        // var showHtml = escapeHtml( wishes[i-1] );
                        var showHtml = wishes[i-1];

                        $('.wish-pool').append('<div class="wish hide">'+showHtml+'</div>');
                        $('.wish-pool div').eq( length - i ).delay( (length - i)*30 ).fadeIn(800);
                    }
                });
            };
            getData();          
            //Click Wish Button to Save
            $('#wish-btn').click(function(){
                saveData();
            });

    $(function() {
        $( ".box" ).draggable();
    });
})


