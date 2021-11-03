$(function(){
    $('.slider-1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: (".arrow-left"),
        nextArrow: (".arrow-right"),
        rows: 2, 
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1800,
        variableWidth: true,
      });
  
})
