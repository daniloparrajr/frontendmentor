import { setupSlider } from './modules/slider';
import { menuInit } from './modules/responsive-menu';
import { initializeForm } from './modules/form';
import '../css/main.css';

document.addEventListener('DOMContentLoaded', () => {
    setupSlider('#testimonialsSlider');
    menuInit( '#menuToggle' );
    initializeForm();
});