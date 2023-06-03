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

      
// Nice select
$(document).ready(function() {
  $('select').niceSelect();
});

// Magnific Popup video
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
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



  
// Home One  Popular Jobs Slide

$('.popular-job-slide').owlCarousel({
  items: 3.5,
  loop: true,
  smartSpeed: 1500,
  autoplay: false,
  dots: true,
  margin:24,
  nav: false,
  navText : ["<i class='ts ts-1 bx bxs-left-arrow-alt'></i>","<i class='ts ts-2 bx bxs-right-arrow-alt' ></i>"], 
  responsive:{
      0:{
          items:1,
          autoplay: true
      },
      480:{
          items:1,
          autoplay: true
      },

      768:{
          items:1
      },
      992:{
          items:2
      },
      1200:{
          items:3
      },
      1400:{
          items:3.5
      }

  } 
});

// Home One  Popular Jobs Slide End


// Slick slide testimonial Home One Start


$('.testimonial-img-slide-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.testimonial-content-slide-wrap',
  dots: false,
  fade: true,
  arrows: false,
  speed: 1000
});
$('.testimonial-content-slide-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 1000,
  arrows: true,
  prevArrow:"<i class='tst tst-1 bi bi-arrow-left'></i>",
  nextArrow:"<i class='tst tst-2 bi bi-arrow-right' ></i>",
  asNavFor: '.testimonial-img-slide-wrap'
});
// Slick slide testimonial Home One End


// Slick slide Destination Start


$('.destination-slide-wrap').slick({
slidesToShow: 2.5,
slidesToScroll: 1,
dots: false,
arrows: true,
prevArrow:"<i class='tst tst-1 bi bi-arrow-left'></i>",
nextArrow:"<i class='tst tst-2 bi bi-arrow-right' ></i>",
centerMode: false,
focusOnSelect: false,
responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }

    ]
});

// Slick slide Destination End

    
// Pricing Toggle

var checkBox = document.querySelectorAll("#checbox")

for(let i = 0; i < checkBox.length; i++){
  checkBox[i].addEventListener("click", ()=>{
    var text1 = document.querySelectorAll(".text1")
    var text2 = document.querySelectorAll(".text2")
    
    if(checkBox[i].checked == true){
      console.log(text2)
      text1.forEach((e)=>{
        e.style.display = "block";
      })
      text2.forEach((e)=>{
        e.style.display = "none";
      })
    } else if (checkBox[i].checked == false) {
      text1.forEach((e)=>{
        e.style.display = "none";
      })
      text2.forEach((e)=>{
        e.style.display = "block";
      })
    }

  })
}

// Pricing Toggle End



// agency testimonial slider 
$('.ag-testimonial-silder').owlCarousel({
  items: 1,
  loop: true,
  smartSpeed: 1500,
  autoplay: false,
  dots: false,
  margin:24,
  nav: true,
  navText : ["<i class='ts ts-1 bx bxs-left-arrow-alt'></i>","<i class='ts ts-2 bx bxs-right-arrow-alt' ></i>"], 
});

// EDu testimonial slider 
$('.edu-testimonial-silder').owlCarousel({
  items: 1,
  loop: true,
  smartSpeed: 3500,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  autoplay: false,
  dots: false,
  margin:24,
  nav: true,
  // animateOut: 'edufadeOut',
  navText : ["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right' ></i>"], 
});


// Owl Carousel Creator
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


// Contact Form Start

// Get the form.
var form = $('#contact-form');

// Get the messages div.
var formMessages = $('.form-message');

// Set up an event listener for the contact form.
$(form).on( 'submit', function(e) {
  // Stop the browser from submitting the form.
  e.preventDefault();

  // Serialize the form data.
  var formData = $(form).serialize();

  // Submit the form using AJAX.
  $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
  })
  .done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#contact-form input,#contact-form textarea').val('');
  })
  .fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
      $(formMessages).text(data.responseText);
    } else {
      $(formMessages).text('Oops! An error occured. Message could not be sent.');
    }
  });
});
// Contact Form End


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

// Datepicker
$('input[name="dates"]').daterangepicker();

//Mixitup
$('.work-mixi').mixItUp();



// Odometer Counter
$(".counter-item").each(function () {
  $(this).isInViewport(function (status) {
  if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
      var el = document.querySelectorAll('.odometer')[i];
      el.innerHTML = el.getAttribute("data-odometer-final");
    }
  }
  });
});



}(jQuery)); 
