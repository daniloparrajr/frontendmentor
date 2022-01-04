const spinner = document.querySelector('.spinner');

export const showSpinner = () => {
    spinner.classList.add('active');
}

export const hideSpinner = () => {
    spinner.classList.remove('active');
}