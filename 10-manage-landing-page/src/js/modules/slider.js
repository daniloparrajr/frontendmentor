// import Swiper JS
import Swiper, { Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';

export const setupSlider = element => {
    return new Swiper(
        element,
        {
            modules: [Pagination],
            spaceBetween: 30,
            centeredSlides: true,
            slidesPerView: "auto",
            initialSlide : 1,
            grabCursor: true,
            infinite: true
        }
    );
}