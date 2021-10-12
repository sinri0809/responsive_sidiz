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

  // header fix
  const header = document.querySelector('.header');
  const visual = document.querySelector('.visual');
  let scY;
  let transform_y = 0;

  document.addEventListener('scroll', ()=>{
    scY = window.scrollY;

    if(scY >= 300 && scY < 800){
      header.classList.add('header-active');
      // when it become position fix -> another contents are going up suddenly
      visual.style.marginTop = '60px';
      //transform y : -100% ~ 0%
      transform_y = -160 + (scY/5) ;
      header.style.transform = `translateY(${transform_y}%)`;
    } else if(scY < 100){
      header.classList.remove('header-active');
      visual.style.marginTop = '0';
      header.style.transform = `translateY(0px)`;
    }
  });

  // depth2 show and hide
  let menu_lst = document.querySelectorAll('.nav__depth1 > li'); 
  let depth2_lst = document.querySelectorAll('.nav__depth2');
  let fadeout_timer;

  function fadeIn(obj){
    clearTimeout(fadeout_timer);
    obj.classList.remove('--disappear');
    obj.style.display = 'block';
  }
  function fadeOut(obj){
    obj.classList.add('--disappear');
    fadeout_timer = setTimeout(()=>{
      obj.style.display = 'none';
    }, 500);
  }

  menu_lst.forEach(function(item, index){
    item.addEventListener('mouseenter', function(){
      depth2_lst.forEach((item, index)=>{
        item.style.display = 'none';
      });
      fadeIn(depth2_lst[index]);
    });
    item.addEventListener('mouseleave', function(){
      fadeOut(depth2_lst[index]);
      depth2_lst[index].addEventListener('mouseenter', function(){
        clearTimeout(fadeout_timer);
        fadeIn(this);
      });
    });
  });

}
