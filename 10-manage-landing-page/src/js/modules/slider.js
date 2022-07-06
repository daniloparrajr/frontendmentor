// import Swiper JS
import Swiper, { Pagination } from 'swiper';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const setupSlider = element => {
    return new Swiper(
        element,
        {
            modules: [Pagination],
            spaceBetween: 30,
            centeredSlides: true,
            slidesPerView: 1,
            initialSlide : 1,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: "auto",
                    pagination: {
                        enabled: false
                    }
                }
            }
        }
    );
}

