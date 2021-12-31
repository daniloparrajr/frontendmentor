export const themeToggleInit = () => {
    const body = document.body;
    const toggles = document.querySelectorAll('.theme-toggle');

    toggles.forEach(toggle => {
        const toggleText = toggle.querySelector('.theme-toggle__label');
        const checkbox = toggle.querySelector('.theme-toggle__input');

        checkbox.addEventListener('change', e => {
            if (e.currentTarget.checked) {
                body.classList.add('is-dark-theme');
                toggle.classList.add('active');
                toggleText.textContent = 'Dark';
            } else {
                body.classList.remove('is-dark-theme');
                toggle.classList.remove('active');
                toggleText.textContent = 'Light';
            }
        });
    });
};