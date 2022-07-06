const newsletterForm = document.querySelector('#newsletter');
const emailField = newsletterForm.querySelector('#email');

const removeErrorMessages = form => {
    form.querySelectorAll('.error-message').forEach(error => {
        error.remove();
    });
}

const validateForm = form => {
    const emailField = form.querySelector('#email');

    removeErrorMessages(form);

    emailField.classList.remove('invalid', 'valid');

    if (!emailField.checkValidity()) {
        let validationMessage = emailField.validationMessage;
        if (emailField.validity.valueMissing) {
            validationMessage = 'Please fill out the email field.';
        }

        if (emailField.validity.typeMismatch) {
            validationMessage = 'Please insert a valid email';
        }

        emailField.insertAdjacentHTML('afterend', `<p class="error-message">${validationMessage}</p>`);
        emailField.classList.add('invalid');
        emailField.classList.remove('valid');
    } else {
        emailField.classList.add('valid');
        emailField.classList.remove('invalid');
    }
}

export const initializeForm = () => {
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        validateForm(newsletterForm);
    });

    emailField.addEventListener('input', () => {
        validateForm(newsletterForm);
    });
}