'use strict';
window.onload = function () {
  // modal
  $('.--close').click(function () { 
    $('.modal').stop().fadeOut();
  });
  $('.--confirm').click(function () { 
    $('.modal').stop().fadeOut();
  });

  // swiper
  let swp_v = new Swiper('.swp-v', {
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
  $('.swp-v').mouseenter(function () {
    swp_v.autoplay.stop();
  });
  $('.swp-v').mouseleave(function () {
    swp_v.autoplay.start();
  });

  // depth2 event jQuery

  // let depth2_timer;

  // let menu_lst = $('.nav__depth1').find('> li');
  // let menu_depth2 = $('.nav__depth2');
  
  // function depth2Out() {
  //   menu_depth2.stop().fadeOut();
  // }
  // for (let index in menu_lst){
  //   menu_lst.eq(index).mouseenter(function(){
  //     menu_depth2.eq(index).stop().fadeIn();
  //   });
  //   menu_lst.eq(index).mouseleave(function(){
  //     depth2_timer = setTimeout(depth2Out, 20);
  //   })
  // }
  // menu_depth2.mouseenter(function () {
  //   clearTimeout(depth2_timer);
  // });
  // menu_depth2.mouseleave(function () {
  //   clearTimeout(depth2_timer);
  //   depth2Out();
  // });

  // depth2 show and hide
  let menu_lst = document.querySelectorAll('.nav__depth1 > li'); 
  let depth2_lst = document.querySelectorAll('.nav__depth2');
  let depth2_timer;
  let depth2_out_timer;
  
  function depth2Out(obj){
    // clearTimeout(depth2_timer);
    obj.classList.add('--disappear');
    // waiting when --disappear animation end
    depth2_out_timer = setTimeout(()=>{
      obj.style.display = 'none';
      console.log(obj);
    }, 600);
  }
  function depth2In(obj){
    obj.classList.remove('--disappear');
    obj.style.display = 'block';
    console.log(obj);
  }
  
  menu_lst.forEach((item, index)=>{
    item.addEventListener('mouseenter', (e) =>{
      e.stopPropagation();
      depth2In(depth2_lst[index]);
      clearTimeout(depth2_out_timer);
      // depth2_timer = setTimeout(()=>{
      //   depth2Out(depth2_lst[index]);
      // }, 2000);3
      console.log('enter')
    });
    item.addEventListener('mouseleave', (e) =>{
      e.stopPropagation();
      // just start disappear
      depth2Out(depth2_lst[index]);
      console.log('leave')
      // but when depth2 enter,
      depth2_lst[index].addEventListener('mouseenter', ()=>{
        clearTimeout(depth2_out_timer);
        // clearTimeout(depth2_timer);
        depth2In(depth2_lst[index]);
        console.log('depth2');
      });
    });
  });


}
