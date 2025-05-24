new Splide('#splideSection1 div.splide', {
    type: 'loop',
    perPage: 3,
    gap: "1rem",
    pagination: false,
}).mount();

new Splide('#splideSection2 div.splide', {
    type: 'loop',
    perPage: 1,
    gap: "1rem",
    pagination: false,
}).mount();

new Splide('#main-marquee', {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    gap: '15px',
    pagination: false,
    arrows: true,
}).mount();

function addAnimation() {
    // Use jQuery's .each() method instead of forEach
    $(".scroller").each(function () {
        const scroller = $(this); // 'this' refers to the current `.scroller` element

        // Add data-animated="true" to every `.scroller` on the page
        scroller.attr("data-animated", true);

        // Make an array from the elements within `.scroller__inner`
        const scrollerInner = scroller.find(".scroller__inner");
        const scrollerContent = scrollerInner.children().toArray(); // Convert jQuery object to an array

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller__inner`
        scrollerContent.forEach((item) => {
            const duplicatedItem = $(item).clone(); // Clone the item using jQuery
            duplicatedItem.attr("aria-hidden", true); // Set aria-hidden attribute
            scrollerInner.append(duplicatedItem); // Append duplicated item
        });
    });
}

// Handle video 
$(document).ready(function () {
    addAnimation();
    /*$(".navbar .nav-link").on("click", function () {
        $(".navbar").find(".active").removeClass("active");
        $(this).addClass("active");
    });*/
    let navLinks = $('.navbar-nav .nav-link');
    let sections = navLinks.map(function() {
        let sectionId = $(this).attr('href');
        return $(sectionId);
    });
    $("body").scroll(function () {
        let scrollPos = $(window).scrollTop();
        let closestSection = null;
        sections.each(function() {
            let sectionTop = $(this).offset().top - 150;
            let sectionBottom = sectionTop + $(this).outerHeight();

            // Check if the current scroll position is within the section
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                closestSection = this;
                return false;
            }
        });

        if (closestSection) {
            let activeLink = $('a[href="#' + $(closestSection).attr('id') + '"]');
            navLinks.removeClass('active');
            activeLink.addClass('active');
        }
    });

    let videoElement = document.getElementById('video');

    // Play video when modal is shown
    $('#videoModal').on('shown.bs.modal', function () {
        videoElement.play();
    });

    // Pause and reset video when modal is hidden
    $('#videoModal').on('hidden.bs.modal', function () {
        videoElement.pause();
        videoElement.currentTime = 0;
    });
    
    $('.feature-card').on('click', function () {
        let featureDesc = $(this).find('.feature-description');
        $(".feature-card").not(this).removeClass("active").find(".feature-description").slideUp();
        $(this).toggleClass("active");
        featureDesc.slideToggle("fast")
    });

    $(".accordion").click(function () {
        const panel = $(this).next(".panel");
        $(".accordion").not(this).removeClass("active").next(".panel").slideUp();
        $(this).toggleClass("active");
        panel.slideToggle("fast")
    });

    $(".loadMore-accordion").click(function () {
        const panel = $(".loadMore-panel");
        $(".accordion").not(this).removeClass("active").next(".panel").slideUp();
        $(this).toggleClass("active");
        panel.slideToggle("fast")
    });

    //for Google Maps Locations
    $("#turkeyLocation").on('click', () => $("#googleMap").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12768073.765992034!2d24.5217149142188!3d38.62115306420776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1sen!2str!4v1748090796648!5m2!1sen!2str"));
    $("#canadaLocation").on('click', () => $("#googleMap").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43027940.48913476!2d-135.66126120043236!3d48.834998046665056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2str!4v1748090970101!5m2!1sen!2str"));
});