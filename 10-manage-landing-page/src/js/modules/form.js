const removeErrorMessage = input => {
    const inputId = input.getAttribute('id');
    const message = document.querySelector(`[data-input-field="${inputId}"]`);

    if (message) {
        message.remove();
    }
}

const addInputMessage = (input, message) => {
    input.insertAdjacentHTML('afterend', `<p data-input-field="${input.getAttribute('id')}" class="error-message">${message}</p>`);
}

const validateInput = input => {
    input.classList.remove('invalid', 'valid');

    removeErrorMessage(input);

    if (!input.checkValidity()) {
        let validationMessage = input.validationMessage;
        if (input.validity.valueMissing) {
            validationMessage = 'Please fill out the email field.';
        }

        if (input.validity.typeMismatch) {
            validationMessage = 'Please insert a valid email';
        }

        addInputMessage(input, validationMessage);
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
}

const validateForm = form => {
    removeErrorMessages(form);

    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
        });
    })
}

export const initializeForm = form => {
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
        });
    })

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateForm(form);
    });
}