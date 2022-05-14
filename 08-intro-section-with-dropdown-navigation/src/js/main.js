import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
	const navMenuOpen = document.querySelector('.nav-menu-open');
	const navMenuClose = document.querySelector('.nav-menu-close');
	const submenuToggles = document.querySelectorAll('.has-submenu > .menu-link');

	navMenuOpen.addEventListener('click', () => {
		document.body.classList.add('nav-is-active');
	});

	navMenuClose.addEventListener('click', () => {
		document.body.classList.remove('nav-is-active');
	});

	submenuToggles.forEach((submenuToggle) => {
		submenuToggle.addEventListener('click', (e) => {
			e.preventDefault();
			submenuToggle.nextElementSibling.classList.toggle('is-active');
		});
	});
});