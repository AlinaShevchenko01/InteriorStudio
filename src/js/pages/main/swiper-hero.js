import Swiper from "swiper";
import {Pagination, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const progressBar = document.querySelector('.hero__pagination-fill-progressbar');
const currentSlide = document.querySelector('.hero__pagination-slide-current');
const totalSlides = document.querySelector('.hero__pagination-slide-total');

const swiperHeroMain = new Swiper(".hero__swiper", {
    modules: [Pagination, Navigation],
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
        nextEl: '.hero__arrow_right',
        prevEl: '.hero__arrow_left',
    },

    on: {
      init(swiper){
          const realSlidesCount = swiper.el.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length
          totalSlides.textContent = String(realSlidesCount).padStart(2, "0");
          currentSlide.textContent = String(swiper.realIndex + 1).padStart(2, "0");

          const progress = ((swiper.realIndex + 1)/ realSlidesCount) * 100;
          progressBar.style.width = `${progress}%`;
      },

      slideChange(swiper){
          currentSlide.textContent = String(swiper.realIndex + 1).padStart(2, "0");

          const realSlidesCount = swiper.el.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length
          const progress = ((swiper.realIndex + 1)/ realSlidesCount) * 100;
          progressBar.style.width = `${progress}%`;
      }
    }
})