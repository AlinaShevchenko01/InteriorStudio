import Swiper from "swiper";
import 'swiper/css';

const oneNewsSwiper = new Swiper('.one-news-latest__swiper', {
    loop: true,
    grabCursor: true,
    speed: 800,

    breakpoints:{
        0:{
            slidesPerView: 1.192,
            spaceBetween: 26
        },

        376:{
            slidesPerView: 1.715,
            spaceBetween: 20
        },

        576:{
            slidesPerView: 1.715,
            spaceBetween: 20
        },

        769:{
            slidesPerView: 2.715,
            spaceBetween: 40
        },

        1025:{
            slidesPerView: 3.53,
            spaceBetween: 48
        },

        1441:{
            slidesPerView: 4.8,
            spaceBetween: 48
        }
    },
})