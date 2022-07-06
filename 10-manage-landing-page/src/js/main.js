import { setupSlider } from './modules/slider';
import { menuInit } from './modules/responsive-menu';
import '../css/main.css';

document.addEventListener('DOMContentLoaded', () => {
    setupSlider('#testimonialsSlider');
    menuInit( '#menuToggle', '#navigation' );
});