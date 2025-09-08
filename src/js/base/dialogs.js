import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const btnsOpenModal = document.querySelectorAll("[data-send='request']")
const modalRequest = document.querySelector('.pop-up-request')
const modalSuccess = document.querySelector('.pop-up-success')

btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!modalRequest.open){
            modalRequest.showModal();
            disablePageScroll(modalRequest);
        }
    })
})

export function openModalSuccess () {
    const modalRequest = document.querySelector('.pop-up-request')
    const modalSuccess = document.querySelector('.pop-up-success')

    if (modalRequest.open){
        modalSuccess.showModal();
        disablePageScroll()
    }
}

export function closeModal(modal) {
    modal.classList.add('closing')

    modal.addEventListener('animationend', () => {
        modal.close();
        formCleaning()
        enablePageScroll()
        modal.classList.remove('closing');
    }, {once: true});
}

function formCleaning () {
    const form = document.getElementById("request__form");
    const inputs = form.querySelectorAll("input")
    const select = document.getElementById('property-type');
    const errors = form.querySelectorAll('.form__error')
    inputs.forEach(input => {
        if (input.type === 'radio') {
            input.checked = false
        } else {
            input.value = ''
        }
    })
    select.selectedIndex = 0;

    errors.forEach(error => {
        error.classList.remove('active');
    })
}

modalRequest.addEventListener('click', (e) => {
    if (e.target.closest('.cross-close__icons')) {
        closeModal(modalRequest)
    }

    if (e.target === modalRequest) {
        closeModal(modalRequest)
    }
})

modalSuccess.addEventListener('click', (e) => {
    if (e.target.closest('.cross-close__icons')) {
        closeModal(modalSuccess)
    }

    if (e.target.classList.contains('pop-up-success__btn')) {
        closeModal(modalSuccess)
    }

    if (e.target === modalSuccess) {
        closeModal(modalSuccess)
    }
})
