let currentIndex = dotIndex = 0;
let slides = $('.slide');
let dots = $('.dot');

$(document).on('scroll', () => {
    if ($(this).scrollTop() >= $('#restaurant').position().top) {
        $("#second-nav").slideDown();
    } else {
        $("#second-nav").slideUp();
    }
});


function initializeSlides() {
    hideSlides();
    $(".slide").first().show(); 
}

function hideSlides() {
    $(".slide").each((slide) => {
        $(".slide").hide();
    });
}

function removeDotActives() {
    $('.dots-cont').each(() => {
        $('span').removeClass("dot-active");
    });
}

dots.each((d) => {
    dots.eq(d).click(() => {
        hideSlides()
        slides.eq(d).show();    
        removeDotActives();
        dots.eq(d).addClass("dot-active");
    });
});

setInterval(function() {
    hideSlides();
    if (currentIndex == $('.slide').length - 1) {
        currentIndex = -1;
        dotIndex = -1;
    }

    slides.eq(currentIndex + 1).animate({ width: 'toggle' }, 2000);
    currentIndex++;
    dotIndex++;

    removeDotActives();
    dots.eq(dotIndex).addClass("dot-active");

}, 3500);

initializeSlides();

$(".home-btn").click(() => {
    $('html, body').animate({ scrollTop: '0px' }, 500);
});

$(".restaurant-btn").click(() => {
    $('html, body').animate({ scrollTop: $("#restaurant").offset().top });
});

$(".menu-btn").click(() => {
    $('html, body').animate({ scrollTop: $("#menu").offset().top });
});

$(".drinks-btn").click(() => {
    $('html, body').animate({ scrollTop: $("#rest-menu-drinks").offset().top });
});

$(".reservations-btn").click(() => {
    $('html, body').animate({ scrollTop: $("#reservations").offset().top });
});