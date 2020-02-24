window.addEventListener('DOMContentLoaded', (event) => {
    

    //karuzela w index.html

    const prev = document.querySelector('.carousel-control-prev');
    const next = document.querySelector('.carousel-control-next');
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('li');

    let active = 0;
    slides[active].classList.add("visible");

    next.addEventListener("click", function () {
        slides[active].classList.remove("visible");
        if (active >= slides.length - 1){
         active = 0
        } else{
            active ++;
        }
        slides[active].classList.add("visible");
        
    });
    prev.addEventListener("click", function () {
        slides[active].classList.remove("visible");
        if (active === 0){
            active = slides.length - 1;
        }
        else{
            active--;
        }
        slides[active].classList.add("visible");
        
    });



    //hamburger menu
    const header = document.querySelector("header");
    const hamburger = document.querySelector("button.hamburger");
    const cross =document.querySelector("button.cross");

    hamburger.addEventListener("click", function(){
        header.classList.add("hamburger-menu-on");
    });

    cross.addEventListener("click", function(){
        header.classList.remove("hamburger-menu-on")
    })
    


});