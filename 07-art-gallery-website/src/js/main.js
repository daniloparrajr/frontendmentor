import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../scss/main.scss';

gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.saveStyles(".hero-banner__image, .hero-banner__title, .hero-banner__text, .hero-banner__button, .intro, .gallery-grid__item");

ScrollTrigger.matchMedia({
    "(min-width: 1440px)": () => {
        const tl = gsap.timeline({defaults:{duration: 1}});
        tl.from(
            '.hero-banner__image',
            {
                x:-30,
                opacity: 0,
                duration: 0.3
            })
            .from(
                '.hero-banner__title',
                {
                    x: 200,
                    opacity: 0,
                    ease: "power1.out",
                    duration: 1.2
                })
            .from(
                '.hero-banner__text, .hero-banner__button',
                {
                    y: 50,
                    stagger: 0.3,
                    opacity: 0,
                    duration: 0.6
                },
                '-=0.3'
            ).from(
            '.intro',
            {
                y:50,
                stagger: 0.3,
                opacity: 0,
                duration: 0.6,
            }
        );

        gsap.from(
            '.gallery-grid__item',
            {
                y:50,
                stagger: 0.3,
                opacity: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: '.intro',
                    toggleActions: 'play none none none',
                    start: 'center center',
                }
            }
        );
    },
    "(max-width: 1439px) and (min-width: 767px)": () => {
        const tl = gsap.timeline({defaults:{duration: 1}});
        tl.from(
            '.hero-banner__image',
            {
                x:-50,
                opacity: 0,
                duration: 0.5
            })
            .from(
                '.hero-banner__title, .hero-banner__text, .hero-banner__button',
                {
                    y: 50,
                    stagger: 0.3,
                    opacity: 0,
                    duration: 0.6
                }
            ).from(
            '.intro',
            {
                y:50,
                stagger: 0.3,
                opacity: 0,
                duration: 0.6,
            }
        );

        gsap.from(
            '.gallery-grid__item',
            {
                y:50,
                stagger: 0.3,
                opacity: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: '.intro',
                    toggleActions: 'play none none none',
                    start: 'center center',
                }
            }
        );
    },
});

