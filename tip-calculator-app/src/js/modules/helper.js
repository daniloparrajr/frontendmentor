export const getTip = () => {
    let tipRadio = Number.parseFloat(document.querySelector('input[name="tip"]:checked')?.value);
    let tipCustom = Number.parseFloat(document.querySelector('#tip-custom')?.value);

    if (!Number.isNaN(tipCustom)) {
        return tipCustom;
    }

    if (!Number.isNaN(tipRadio)) {
        return tipRadio;
    }

    return 0;
}

export const getTipAmountPerPerson = (bill, tip, people) => {
    if (Number.isNaN(Number.parseFloat(bill)) || Number.isNaN(Number.parseFloat(people)) || (Number.isNaN(Number.parseFloat(tip)) || tip === 0)) {
        return 0;
    }
    return (bill * (tip / 100)) / people;
}

export const getTotalPerPerson = (bill, people, tipAmount ) => {
    if (Number.isNaN(Number.parseFloat(bill)) || Number.isNaN(Number.parseFloat(people)) || (Number.isNaN(Number.parseFloat(tipAmount)) || tipAmount === 0)) {
        return 0;
    }

    return ( bill / people ) +  tipAmount;
}

export const displayErrorMessage = (fieldId, message, position = 'afterend') => {
    const errorID = `${fieldId}Error`;
    document.querySelector(`#${errorID}`)?.remove();
    document.querySelector(`#${fieldId}`).insertAdjacentHTML(position, `<span id="${errorID}" class="error-message">${message}</span>` );
}

export const removeErrorMessages = fieldId => {
    document.querySelector(`#${fieldId}Error`)?.remove();
}

export const setFieldState = (state, fieldId) => {
    const field = document.querySelector(`#${fieldId}`);

    if (state === 'success') {
        field.classList.remove('error');
        field.classList.add('success');
    }

    if (state === 'error') {
        field.classList.remove('success');
        field.classList.add('error');
    }

    return false;
}

export const isFormEmpty = () => {
    let tipRadio = Number.parseFloat(document.querySelector('input[name="tip"]:checked')?.value);
    let tipCustom = Number.parseFloat(document.querySelector('#tip-custom')?.value);
    const billField = Number.parseFloat(document.querySelector('#bill')?.value);
    const numberOfPeopleField = Number.parseFloat(document.querySelector('#number-of-people')?.value);

    return !isNaN(tipRadio) || !isNaN(tipCustom) || !isNaN(billField) || !isNaN(numberOfPeopleField);
}

export const updateFormState = (formId = 'tip-form') => {
    const form = document.querySelector(`#${formId}`);
    const formReset = form.querySelector('input[type="reset"]');

    if (isFormEmpty()) {
        formReset.removeAttribute('disabled');
    } else {
        formReset.setAttribute('disabled', 'disabled');
    }
}

export const resetForm = () => {
    let tipCustom = document.querySelector('#tip-custom');
    const billField = document.querySelector('#bill');
    const numberOfPeopleField = document.querySelector('#number-of-people');

    tipCustom.classList.remove('success', 'error');
    billField.classList.remove('success', 'error');
    numberOfPeopleField.classList.remove('success', 'error');

    document.querySelectorAll('.error-message').forEach(error => error.remove());
}