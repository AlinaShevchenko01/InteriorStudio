import { disablePageScroll, enablePageScroll } from 'scroll-lock';

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img:not([loading="lazy"])')
    const totalImages = images.length
    let loadedImages = 0

    const preloader = document.querySelector('.preloader')
    const preloaderPercent = document.querySelector('.preloader__percent')
    const preloaderText = document.querySelector('.preloader__hi-text')

    if (!preloader) {
        return;
    }

    disablePageScroll();

    function updatePreloaderPercent() {
        loadedImages++
        const percent = Math.round((loadedImages / totalImages) * 100)
        preloaderPercent.innerText = `${percent}%`

        if (loadedImages === totalImages) {
            preloaderPercent.innerText = '100%';

            setTimeout(() => {
                preloaderText.innerText = ''
                preloaderPercent.innerText = 'hilight';

                setTimeout(() =>{
                    preloader.classList.add('loaded')
                    document.body.classList.remove('loading')
                    enablePageScroll()
                    preloader.addEventListener('transitionend', () =>{
                        preloader.remove()
                    }, {once: true})
                                    },500)
            }, 200)
        }
    }

    images.forEach(image => {
        if (image.complete) {
            updatePreloaderPercent()
        }else {
            image.addEventListener('load', updatePreloaderPercent)
            image.addEventListener('error', updatePreloaderPercent)
        }
    })

    if (totalImages === 0) {
        document.body.classList.remove('loading')
        enablePageScroll()
        preloader.style.display = 'none'
    }
})

