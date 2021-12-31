export const setFieldState = (field, state) => {
    if (state === 'error') {
        field.classList.add('error');
        field.classList.remove('success');
    }

    if (state === 'success') {
        field.classList.add('success');
        field.classList.remove('error');
    }
}

export const showInputMessage = (field, message) => {
    const fieldID = field.getAttribute('id');
    const messageID = `inputMessage${fieldID}`;

    removeInputMessage(field);
    field.insertAdjacentHTML('afterend', `<p id="${messageID}" class="input-message">${message}</p>`)
}

export const removeInputMessage = field => {
    const fieldID = field.getAttribute('id');
    const messageID = `inputMessage${fieldID}`;
    document.querySelector(`#${messageID}`)?.remove(); // make sure we only have one input message.
}


export const mediaQuery = callback => {
    const media = window.matchMedia('(min-width: 375px)');
    const mediaQueryCallback = callback;
    media.addEventListener('change', mediaQueryCallback, false);
    mediaQueryCallback(media);
}
