const validateForm = (form) => {
    const emailField = form.querySelector('#email');

    removeErrorMessages(form);

    emailField.classList.remove('invalid', 'valid');

    if (!emailField.checkValidity()) {
        let validationMessage = emailField.validationMessage;
        if (emailField.validity.valueMissing) {
            validationMessage = 'Please fill out the email field.';
        }

        if (emailField.validity.typeMismatch) {
            validationMessage = 'Oops! please check your email.';
        }

        emailField.insertAdjacentHTML('afterend', `<p class="access-form__error-message">${validationMessage}</p>`);
        emailField.classList.add('invalid');
        emailField.classList.remove('valid');
    } else {
        emailField.classList.add('valid');
        emailField.classList.remove('invalid');
    }
}

const removeErrorMessages = (form) => {
    form.querySelectorAll('.access-form__error-message').forEach(error => {
        error.remove();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const accessForm = document.querySelector('#accessForm');
    const emailField = accessForm.querySelector('#email');

    accessForm.addEventListener('submit', e => {
        e.preventDefault();
        validateForm(accessForm);
    });

    emailField.addEventListener('input', () => {
        validateForm(accessForm);
    });
});
