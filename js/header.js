let header = document.querySelector('.header');
let logo = document.querySelector('.header__logo--img');

window.onload = headerLoad()

function headerLoad() {
    let scrollPos = getBodyScrollTop(self.pageYOffset)
        if(scrollPos > 1 ){
            logo.style.display = 'none'
            header.classList.add('black');
        }
        else{
            logo.style.display = 'block'
            header.classList.remove('black')
        }
}


    window.addEventListener('scroll', () =>{
        let scrollPos = getBodyScrollTop(self.pageYOffset)
        if(scrollPos > 1 ){
            logo.style.display = 'none'
            header.classList.add('black');
        }
        else{
            logo.style.display = 'block'
            header.classList.remove('black')
        }
    
        
    })






function getBodyScrollTop()
{
return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}