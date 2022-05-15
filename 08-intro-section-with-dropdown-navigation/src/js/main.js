import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
	const body = document.body;
	const nav = document.querySelector('.nav');
	const navMenuOpen = document.querySelector('.nav-menu-open');
	const navMenuClose = document.querySelector('.nav-menu-close');
	const submenuToggles = document.querySelectorAll('.has-submenu > .menu-link');

	navMenuOpen.addEventListener('click', () => {
		body.classList.add('nav-is-open');
		body.classList.remove('nav-is-close');
	});

	navMenuClose.addEventListener('click', () => {
		body.classList.replace('nav-is-open', 'nav-is-closing');
	});

	nav.addEventListener('animationend', () => {
		if (body.classList.contains('nav-is-closing')) {
			body.classList.replace('nav-is-closing', 'nav-is-close');
		}
	}, false);

	submenuToggles.forEach((submenuToggle) => {
		submenuToggle.addEventListener('click', (e) => {
			e.preventDefault();
			submenuToggle.nextElementSibling.classList.toggle('is-active');
		});
	});
});