

$(function(){

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle()
    })
})

$(".program-slider").slick({
    arrows: true,
    dots: true,
    dotsClass:"programs-dots"
})

$(".photo-slider--up").slick({
    arrows: false,
    dots: false,
    sladesToShow:3,
    sladesToScroll:1,
    variableWidth: true,
    infinite: true,
      speed: 300
})

$(".photo-slider--down").slick({
    arrows: false,
    dots: false,
    sladesToShow:3,
    sladesToScroll:1,
    variableWidth: true,
    infinite: true,
      speed: 300

})
