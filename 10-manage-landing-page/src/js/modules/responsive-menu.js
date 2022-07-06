export const menuInit = ( triggerEl ) => {
    triggerEl = document.querySelector(triggerEl);

    triggerEl.addEventListener('click', function() {
        this.classList.toggle('is-active');
        document.body.classList.toggle('mobile-menu-active');
    });
}