const headerScroll = document.querySelector('.header');

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= headerScroll.offsetHeight) {
        headerScroll.classList.add('scroll');
    }else {
        headerScroll.classList.remove('scroll');
    }
})