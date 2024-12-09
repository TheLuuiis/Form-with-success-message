'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const container = document.getElementById('container');
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const subscribing = document.getElementById('subscribing');
    const button = document.getElementById('button');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Error inputs 
        const errorInputs = () => {
            email.style.border = '1px solid red';
            email.classList.add('invalid');
        };

        const resetErrors = () => {
            email.style.border = '';
            emailError.style.border = '';
            email.classList.remove('invalid');
            email.textContent = '';
        };

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        let isValid = true;

        if (!email.value.trim() === '') {
            emailError.textContent = 'Valid email required';
            errorInputs();
            isValid = false;
        } else if(!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Valid email required';
            errorInputs();
        } else {
            emailError.textContent = '';
        };

        email.addEventListener('input', () => {
            if (email.value.trim() && isValidEmail(email.value.trim())) {
                email.style.border = '';
                email.classList.remove('invalid');
                emailError.textContent = '';
            };
        });

        button.addEventListener('click', (e) => {
            e.preventDefault();

            if (email.value.trim()) {
                container.style.display = 'none';
                subscribing.style.display = 'flex';
            } 
        });

        email.addEventListener('change', resetErrors);

    });
});