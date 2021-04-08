let test = document.querySelector('.header__language--change')
let test2 = document.querySelector('.header__change')

test.addEventListener('click', (e)=>{
    e.preventDefault
    test2.classList.toggle('hide');
    setTimeout(animate, 1)
    
})

function animate() {
    test2.classList.toggle('change__animate')
}