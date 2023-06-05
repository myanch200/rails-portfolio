import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('turbo:load', () => {
    const swiper = new Swiper('.project-images', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        modules: [Navigation, Pagination]
    });
});