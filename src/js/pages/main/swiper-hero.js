import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import '../../base/swiper-pagination.js'
import {
    swiperProgressbarChangeSlide,
    swiperProgressbarInit
} from "../../base/swiper-pagination.js";

const swiperHeroMain = new Swiper(".hero__swiper", {
    modules: [Navigation],
    loop: true,
    grabCursor: true,
    speed: 800,
    spaceBetween: 0,

    breakpoints:{
      0:{
          slidesPerView: 1.193,
      },

      768:{
           slidesPerView: 1.173,
      },

      1024:{
          slidesPerView: 1.185,
      },

      1440:{
          slidesPerView: 1.1758,
      }
    },


    navigation: {
        nextEl: '.hero__inner_pagination .swiper-navigation__arrow_right',
        prevEl: '.hero__inner_pagination .swiper-navigation__arrow_left',
    },

    on: {
      init(swiper){
          swiperProgressbarInit(swiper, {
              currentSlide:  document.querySelector('.hero__inner_pagination .swiper-navigation__slide-current'),
              totalSlides: document.querySelector('.hero__inner_pagination .swiper-navigation__slide-total'),
              progressBar: document.querySelector('.hero__inner_pagination .swiper-navigation__fill-progressbar')
          })
      },

      slideChange(swiper){
         swiperProgressbarChangeSlide(swiper, {
             currentSlide:  document.querySelector('.hero__inner_pagination .swiper-navigation__slide-current'),
             progressBar: document.querySelector('.hero__inner_pagination .swiper-navigation__fill-progressbar')
         })
      }
    }
})