// slider section staff
$(".staff-content-mobile-list").slick({
    autoplay: true,
    dots: true,
    arrows: false,
});

// slider section saying
$(".saying-content-list").slick({
    prevArrow: $(".saying-content-description-button-prev"),
    nextArrow: $(".saying-content-description-button-next"),
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

// slider section articles
$(".articles-content-list").slick({
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                dots: true,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
                slidesToShow: 1,
            }
        },
    ]
});