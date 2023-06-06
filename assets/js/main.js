(function ($) {
    "use strict";

// Preloader
$(".preloader").delay(1600).fadeOut("slow");

// Sticky Menu
$(window).on( 'scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".header-menu-area").addClass("sticky");
    } else {
        $(".header-menu-area").removeClass("sticky");
    }
});
        
// Mobile menu
$('.hamburger').on( 'click', function (event) {
    $(this).toggleClass('h-active');
    $('.main-nav').toggleClass('slidenav');
});
$('.header-home .main-nav ul li  a').on( 'click', function (event) {
    $('.hamburger').removeClass('h-active');
    $('.main-nav').removeClass('slidenav');
});

$(".main-nav .fl").on('click', function(event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
    if($fl.hasClass('flaticon-plus')){
        $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
    }else{
        $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
    }
    $fl.next(".sub-menu").slideToggle();
});



// slider 
$('.hero-silder').owlCarousel({
  items: 1,
  loop: true,
  smartSpeed: 1500,
  autoplay: true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  dots: true,
  nav: false,
  rtl:true
});


// clinets
$('.inner-slide-wrap').owlCarousel({
  items: 4,
  loop: true,
  smartSpeed: 1500,
  autoplay: false,
  dots: true,
  margin:24,
  nav: false,
  navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
  responsive:{
      0:{
          items:1
      },
      480:{
          items:1
      },

      768:{
          items:2
      },
      992:{
          items:3
      },
      1200:{
          items:4
      },
      1400:{
          items:4
      }

  } 
});


// Bottom to top start
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });
  $('#scroll-top').on( 'click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
// Bottom to top End


jQuery(window).on( 'load', function(){
  //wow Animation
  new WOW().init();
  window.wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true,        // default
    offset: 100
  }
  )
  window.wow.init();  
});

}(jQuery)); 
