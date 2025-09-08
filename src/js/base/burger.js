import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const burgerCall = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__menu');
const burgerIcon = document.querySelector('.burger__icon');
const header = document.querySelector('.header');
const headerWrapper = document.querySelector('.header__wrapper');
const burger = document.querySelector('.burger-open');
const burgerLink = document.querySelectorAll('.burger-open__navigation li');

burgerCall.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    burger.classList.toggle('active');
    header.classList.toggle('active');
    headerWrapper.classList.toggle('active');
    if (burgerMenu.classList.contains('active')) {
        disablePageScroll(burgerMenu);
    } else {
        enablePageScroll()
    }
})

function closeBurger() {
    if(burger.classList.contains('active')) {
        burger.classList.remove('active');
        burgerIcon.classList.remove('active');
        burgerMenu.classList.remove('active');
        header.classList.remove('active');
        headerWrapper.classList.remove('active');
        enablePageScroll()
    }
}

burgerLink.forEach(link => {
    link.addEventListener('click', () => {
        closeBurger();
    })
})

window.addEventListener('resize', (e) => {
    closeBurger()
})

