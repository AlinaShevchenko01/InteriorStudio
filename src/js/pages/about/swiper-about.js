import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import {swiperProgressbarChangeSlide, swiperProgressbarInit} from "../../base/swiper-pagination.js";

const swiperAbout = new Swiper(".about-philosophy__swiper", {
    modules : [Navigation],
    loop : true,
    grabCursor: true,
    speed: 800,
    spaceBetween: 12,
    slidesPerView: 1.19,

    navigation: {
        nextEl: '.about-philosophy__pagination .swiper-navigation__arrow_right',
        prevEl: '.about-philosophy__pagination .swiper-navigation__arrow_left',
    },

    on: {
        init(swiper){
            swiperProgressbarInit(swiper, {
                currentSlide:  document.querySelector('.about-philosophy__pagination .swiper-navigation__slide-current'),
                totalSlides: document.querySelector('.about-philosophy__pagination .swiper-navigation__slide-total'),
                progressBar: document.querySelector('.about-philosophy__pagination .swiper-navigation__fill-progressbar')
            })
        },

        slideChange(swiper){
            swiperProgressbarChangeSlide(swiper, {
                currentSlide:  document.querySelector('.about-philosophy__pagination .swiper-navigation__slide-current'),
                progressBar: document.querySelector('.about-philosophy__pagination .swiper-navigation__fill-progressbar')
            })
        }
    }
})