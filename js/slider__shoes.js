new Swiper('.container__slider',{


    observer: true,
    observeParents: true,
    slidesPerView: 6,

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination:{
        el: '.swiper-pagination',
        clickable: true, 
        dynamicBullets: true,
        type: 'progressBar'
    },

    spaceBetween: 40,
    slidesPerGroup: 5,
    speed: 1000
});