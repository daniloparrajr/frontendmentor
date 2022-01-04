import {getGithubUser, showGithubUser} from './modules/github';
import {setFieldState, showInputMessage, removeInputMessage, mediaQuery} from './modules/form';
import {themeToggleInit, activateColorScheme} from "./modules/themeToggle";
import {hideSpinner, showSpinner} from "./modules/_spinner";
import '../scss/main.scss';

const form = document.querySelector('#githubUserSearchForm');
const githubUsernameField = document.querySelector('#githubUsernameField');
const resultContainer = document.querySelector('#result');

const searchGithubUser = username => {
    resultContainer.innerHTML = ""
    showSpinner();
    getGithubUser(username).then(response => {
        removeInputMessage(githubUsernameField);
        hideSpinner();
        if (response.ok) {
            setFieldState(githubUsernameField, 'success');
            showGithubUser(response, resultContainer);
        } else {
            setFieldState(githubUsernameField, 'error');
            showInputMessage(githubUsernameField, response.error);
        }
    });
}

const updateSearchForm = e => {
    if (e.matches) {
        githubUsernameField.setAttribute('placeholder', 'Search GitHub username…');
    } else {
        githubUsernameField.setAttribute('placeholder', 'Search..');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    searchGithubUser('octocat');
    activateColorScheme();

    form.addEventListener('submit', e => {
        e.preventDefault();
        removeInputMessage(githubUsernameField);

        if (!githubUsernameField.checkValidity()) {
            setFieldState(githubUsernameField, 'error');
            showInputMessage(githubUsernameField, githubUsernameField.validationMessage);
            return;
        }

        searchGithubUser((githubUsernameField.value).trim());
    });

    githubUsernameField.addEventListener('invalid', () => setFieldState(githubUsernameField, 'error'));

    themeToggleInit();
    mediaQuery(updateSearchForm);
});