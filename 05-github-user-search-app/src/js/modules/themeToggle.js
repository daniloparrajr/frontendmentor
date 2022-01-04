const root = document.documentElement;
const toggles = document.querySelectorAll('.theme-toggle');
const systemDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const USER_COLOR_SCHEME_STORAGE = 'userColorScheme';

const getUserColorScheme = () => {
    return localStorage.getItem(USER_COLOR_SCHEME_STORAGE);
}

const setUserColorScheme = theme => {
    localStorage.setItem(USER_COLOR_SCHEME_STORAGE, theme);
}

const updateTogglesState = (state) => {
    toggles.forEach(toggle => {
        updateToggleState(toggle, state);
    });
}

const updateToggleState = (toggle, theme) => {
    const toggleText = toggle.querySelector('.theme-toggle__label');
    const checkbox = toggle.querySelector('.theme-toggle__input');

    if (theme === 'dark') {
        toggle.classList.add('active');
        toggleText.textContent = 'Light';
        checkbox.checked = true;
    }

    if (theme === 'light') {
        toggle.classList.remove('active');
        toggleText.textContent = 'Dark';
    }
}

const updateSiteColorScheme = theme => {
    root.setAttribute('data-user-color-scheme', theme);
}

export const themeToggleInit = () => {
    toggles.forEach(toggle => {
        const toggleText = toggle.querySelector('.theme-toggle__label');
        const checkbox = toggle.querySelector('.theme-toggle__input');

        checkbox.addEventListener('change', e => {
            if (e.currentTarget.checked) {
                updateSiteColorScheme('dark');
                setUserColorScheme('dark');
                toggle.classList.add('active');
                toggleText.textContent = 'Light';
            } else {
                updateSiteColorScheme('light');
                setUserColorScheme('light');
                toggle.classList.remove('active');
                toggleText.textContent = 'Dark';
            }
        });
    });
};

export const activateColorScheme = () => {
    const userColorScheme = getUserColorScheme();

    if (!userColorScheme) {
        updateTogglesState((systemDarkScheme.matches ? 'dark' : 'light'));
        return;
    }

    updateSiteColorScheme(userColorScheme);
    updateTogglesState(userColorScheme);
}