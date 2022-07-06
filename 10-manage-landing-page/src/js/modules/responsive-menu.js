export const menuInit = ( triggerEl, navEl ) => {
    triggerEl = document.querySelector(triggerEl);
    navEl = document.querySelector(navEl);

    triggerEl.addEventListener('click', function() {
        this.classList.toggle('is-active');
        navEl.classList.toggle('is-active');
    });
}