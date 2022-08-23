$(function(){
  $('#menu').slicknav();
});

$(window).on("load", function(){
  $(".preloader_container").fadeOut();
});

$(window).on('scroll', function() {
  if($(this).scrollTop() > 25){
      $('.slicknav_menu').addClass('sticky');
  } else{
      $('.slicknav_menu').removeClass('sticky');
  }
});
$(window).on('scroll', function() {
  if($(this).scrollTop() > 25){
      $('.header').addClass('sticky');
  } else{
      $('.header').removeClass('sticky');
  }
});
$('.homepage-slider').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  fade: true,
  autoplay:true,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.blogs-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1000,
  dots: true,
  arrows: false,
  // autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1000,
  dots: true,
  arrows: false,
  // autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
new WOW().init();

$(window).scroll(function(){
  if($(this).scrollTop() > 150) {
    $('#scroll').addClass('scroll-show');
  }else{
    $('#scroll').removeClass('scroll-show');
  }
});

$('#scroll').click(function(){
  $('html, body').animate({
    scrollTop: 0
  }, 1000)
});