import {closeModal, openModalSuccess} from "./dialogs.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("request__form");

    const patterns = {
        text: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]{2,}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^\+?\d[\d\s\-]{7,14}\d$/
    };

    function validate (input, pattern = null) {
        const errorRequired = input.parentElement.querySelector('.form__error_required')
        const errorPattern = input.parentElement.querySelector('.form__error_pattern')

        if (!input.value.trim()) {
            errorRequired.classList.add('active')
            if (errorPattern)
                errorPattern.classList.remove('active')
            return false;
        } else if (errorPattern && !pattern.test(input.value.trim())) {
            errorRequired.classList.remove('active')
            errorPattern.classList.add('active')
            return false;
        } else {
            errorRequired.classList.remove('active')
            if (errorPattern)
            {errorPattern.classList.remove('active')}
            return true
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;

        ["userName", "userLastName", "userCity"].forEach(id => {
            const input = document.getElementById(id);
            if (!validate(input, patterns.text)) {
                isValid = false
            }
        });

        const email = document.getElementById('userEmail');
        if (!validate(email, patterns.email)) {
            isValid = false
        }

        const phone = document.getElementById('userPhone');
        if (!validate(phone, patterns.phone)) {
            isValid = false
        }

        const select = document.getElementById('property-type');
        const selectorError = select.parentElement.querySelector('.form__error_required');
        if (!select.value){
            selectorError.classList.add('active')
            isValid = false
        } else {
            selectorError.classList.remove('active')
        }

        const radioChecked= form.querySelector('input[name="area"]:checked') !== null;
        const radioError = form.querySelector('.form__radio-btns .form__error_required')

        if (!radioChecked){
            radioError.classList.add('active')
            isValid = false
        } else {
            radioError.classList.remove('active')
        }

        if (isValid){
            const modalRequest = document.querySelector('.pop-up-request')
            closeModal(modalRequest);
            const inputs = form.querySelectorAll("input")
            inputs.forEach(input => {
                if (input.type === 'radio') {
                    input.checked = false
                } else {
                    input.value = ''
                }
            })
            select.selectedIndex = 0;
            openModalSuccess()
        }
    })
})