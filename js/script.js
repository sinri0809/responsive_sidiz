'use strict';

window.onload = function () {
  // modal
  $('.--close').click(function () { 
    $('.modal').stop().fadeOut();
  });
  $('.--confirm').click(function () { 
    $('.modal').stop().fadeOut();
  });

  var swp_v = new Swiper('.swp-v', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3500,
      pauseOnMouseEnter: true,
    },
    speed: 1500,
    navigation: {
      nextEl: '.controll-next',
      prevEl: '.controll-prev',
    }
  });

  // swiper
  $('.swp-v').mouseenter(function () {
    swp_v.autoplay.stop();
  });
  $('.swp-v').mouseleave(function () {
    swp_v.autoplay.start();
  });

  
  var depth2 = $('.nav__depth2');
  var depth2_timer;

  function depth2Out() {
    depth2.stop().fadeOut();
  }
  
  var menu_about = $('#about-s');
  var dpeth2_about = $('.--about-s');
  var menu_product = $('#product');
  var dpeth2_product = $('.--product');
  var menu_support = $('#support');
  var dpeth2_support = $('.--support');
  
  menu_about.mouseenter(function () {
    dpeth2_about.stop().fadeIn();
  });
  menu_about.mouseleave(function () {
    depth2_timer = setTimeout(depth2Out, 50);
    console.log("about"+depth2_timer);
  });

  menu_product.mouseenter(function () {
    dpeth2_product.stop().fadeIn();
  });
  menu_product.mouseleave(function () {
    depth2_timer = setTimeout(depth2Out, 50);
    console.log("product"+depth2_timer);
  });

  menu_support.mouseenter(function () {
    dpeth2_support.stop().fadeIn();
  });
  menu_support.mouseleave(function () {
    depth2_timer = setTimeout(depth2Out, 50);
    console.log("support"+depth2_timer);
  });

  depth2.mouseenter(function () {
    clearTimeout(depth2_timer);
  });
  depth2.mouseleave(function () {
    clearTimeout(depth2_timer);
    depth2Out();
  });

}
