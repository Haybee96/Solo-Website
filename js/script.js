/*===========================
    Preloader
============================*/ 
$(window).on('load', function() {
    $('.preloader').fadeOut(300);
    $('.preloader_div').delay(350).slideUp();
});

/*===========================
    Navigation
============================*/
// Show and Hide white Navigation
$(function() {
    
    // Show/Hide on page load
    showHideNav();

    $(window).scroll(function() {
        // Show/Hide on windows scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 100) {
            // Show white nav
            $("nav").addClass("white-nav-top");
            // show dark logo
            $(".navbar-brand img").attr("src", "./img/logo/logo-dark.png");
            // Show back to top button
            $("#back-to-top").fadeIn();
        } else {
            // Hide white nav
            $("nav").removeClass("white-nav-top");
            // Show white logo
            $(".navbar-brand img").attr("src", "./img/logo/logo.png");
            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

/*===========================
    Team member
============================*/
$(function() {
    $(".team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // Breakpoint for 0 up
            0: {
                items: 1
            },
            // Breakpoint for 480 up
            480: {
                items: 2
            }
        }
    });
});

/*===========================
    Progress bars
============================*/
$(function() {
    $(".progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
        /* Other offset option is: right-in-view */
    });
});

/*===========================
    Responsive tabs
============================*/
$(function() {
    $(".services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*===========================
    Portfolio
============================*/
$(window).on('load', function() {
    // Initialize isotope
    $("#isotope-container").isotope({});

    // Filter items on button click
    $("#isotope-filters").on('click', 'button', function() {

        // Get filter value
        var filterValue = $(this).attr('data-filter');

        // Filter value
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // Active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*===========================
    Magnific popup
============================*/
$(function() {
    $(".portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*===========================
    Testimonials
============================*/
$(function () {
    $(".testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*===========================
    Stats
============================*/
$(function() {
    $(".stats-counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*===========================
    Clients
============================*/
$(function () {
    $(".client-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: false,
        nav: false,
        dots: false,
        // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        responsive: {
            // Breakpoint for 0 up
            0: {
                items: 2
            },
            // Breakpoint for 480 up
            480: {
                items: 3
            },
            // Breakpoint for 768 up
            768: {
                items: 6
            }
        }
    });
});

/*===========================
    Google Map
============================*/
$(window).on('load', function() {
    // Map Variables
    var addressString = "230 Broadway, New York, NY 10007";
    var myLatlng = {lat: 40.680050, lng: -73.417458};

    // Render Google map by creating a new Map object
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatlng
    });
    // Add marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "See Address location here"
    });
    // Add info window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    // Show info window when user clicks on the 
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    // Resize function
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
});

/*===========================
    footer Year
============================*/
$(function() {
    var date = new Date();
    document.querySelector('.current-year').innerHTML = date.getFullYear();
});

/*===========================
    smooth scrolling
============================*/
$(function() {
    $("a.smooth-scroll").on('click', function(event) {
        // prevent the action from happening
        event.preventDefault();

        // Get section ID like #about, #services etc...
        var sectionId = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top - 60
        },1000, "easeInOutExpo");
    });
});

/*===========================
    Mobile Menu
============================*/
$(function() {
    // Hide mobile menu when user click on the button
    $(".navbar #mobile-nav-close-btn, #navbarSupportedContent a").click(function() {
        $("header .navbar #navbarSupportedContent").css("height", "0%");
    });
});

/*===========================
    Animation
============================*/

// Animate on scroll
$(function() {
    var wow = new WOW();
    wow.init();
});