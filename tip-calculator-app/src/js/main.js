import {
    getTipAmountPerPerson,
    getTotalPerPerson,
    getTip,
    displayErrorMessage,
    removeErrorMessages,
    setFieldState,
    updateFormState,
    resetForm
} from './modules/helper.js';
import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const billField = document.querySelector('#bill');
    const numberOfPeopleField = document.querySelector('#number-of-people');
    const tipRadioFields = document.querySelectorAll('input[name="tip"]');
    const tipCustomField = document.querySelector('#tip-custom');
    const tipForm = document.querySelector('#tip-form');
    const tipAmountDiv = document.querySelector('#tip-amount-per-person');
    const totalDiv = document.querySelector('#total-per-person');
    const tipFieldset = document.querySelector('#tipFieldSet');

    const displayResults = () => {
        const tipAmount = getTipAmountPerPerson(billField.value, getTip(), numberOfPeopleField.value);
        tipAmountDiv.textContent = `$${tipAmount.toFixed(2)}`;
        totalDiv.textContent = `$${getTotalPerPerson(billField.value, numberOfPeopleField.value, tipAmount).toFixed(2)}`;
    };

    const resetResults = () => {
        tipAmountDiv.textContent = '$0.00';
        totalDiv.textContent = '$0.00';
    }

    // Display results whenever form fields change.
    numberOfPeopleField.addEventListener('input', displayResults);
    billField.addEventListener('input', displayResults);
    tipCustomField.addEventListener('input', displayResults);
    tipRadioFields.forEach(tipRadioField => {
        tipRadioField.addEventListener('input', () => {
            tipCustomField.value = "";
            displayResults();
            updateFormState();
        });
    });

    // Reset results on form reset.
    tipForm.addEventListener('reset', () => {
        resetResults();
        resetForm();
        tipForm.querySelector('input[type="reset"]').setAttribute('disabled', 'disabled');
    });

    tipForm.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            updateFormState();
        });
    });

    tipCustomField.addEventListener('input', () => {
        tipRadioFields.forEach(tipRadioField => {
            tipRadioField.checked = false;
        });
    });

    tipCustomField.addEventListener('input', () => {
        const fieldsetId = tipFieldset.getAttribute('id');
        const fieldId = tipCustomField.getAttribute('id');
        if (!tipCustomField.validity.valid) {
            setFieldState('error', fieldId);
            displayErrorMessage(fieldsetId, tipCustomField.validationMessage, 'beforeend');
        } else {
            setFieldState('success', fieldId);
            removeErrorMessages(fieldsetId);
        }
    });

    billField.addEventListener('input', () => {
        const fieldId = billField.getAttribute('id');

        if (!billField.validity.valid) {
            setFieldState('error', fieldId);
            displayErrorMessage(fieldId, billField.validationMessage);
        } else {
            setFieldState('success', fieldId);
            removeErrorMessages(fieldId);
        }
    });

    numberOfPeopleField.addEventListener('input', () => {
        const fieldId = numberOfPeopleField.getAttribute('id');

        if (!numberOfPeopleField.validity.valid) {
            setFieldState('error', fieldId);
            displayErrorMessage(fieldId, numberOfPeopleField.validationMessage);
        } else {
            setFieldState('success', fieldId);
            removeErrorMessages(fieldId);
        }
    });
});