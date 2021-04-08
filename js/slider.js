
new Swiper('.main__slider--container',{


    observer: true,  
    observeParents: true,

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },


    pagination:{
        el: '.swiper-pagination',
        clickable: true, 
        dynamicBullets: true
    },

   simulateTouch: false,

   autoplay: {
       delay: 2000,
       stopOnLastSlide: true,
       disableOnInteraction: false
   }, 

   speed: 1000,
   slidesPerView: 1
});




new Swiper('.container--slider',{
    slidesPerView: 1,

    observer: true,  
    observeParents: true,

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})






