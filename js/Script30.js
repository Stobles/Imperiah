    let position = 0
    const slidesToShow = 1
    const slidesToScroll = 1
    const container = document.querySelector('.comments__txt--container');
    const track = document.querySelector('.comments__track');
    const item = document.querySelectorAll('.comments__txt');
    const btnPrev = document.querySelector('.prev__btn');
    const btnNext = document.querySelector('.next__btn');
    const itemsCount = item.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToScroll) * itemWidth;
    };

    checkBtns();



let header = document.querySelector('.header');
let intro = document.querySelector('.content');
let introH = intro.clientHeight;
let scrollPos = window.pageYOffset;

window.onscroll = function () {
    scrollPos = this.pageYOffset;


    if (scrollPos > introH) {
        header.classList.add('fixed');
        intro.classList.add('height');
    }
    else {
        header.classList.remove('fixed');
        intro.classList.remove('height');
    }
};

window.onload = function () {
    scrollPos = this.pageYOffset;


    if (scrollPos > introH) {
        header.classList.add('fixed');
        intro.classList.add('height');
    }
    else {
        header.classList.remove('fixed');
        intro.classList.remove('height');
    }
};


const animItems = document.querySelectorAll('.anim__items');


if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (var i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;

            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active')
            }
            else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('acitve');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

    }

    setTimeout(animOnScroll, 400);
}