

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
