var activeSlide = 0;
function autoSlide(slides,buttons) {
    setInterval(function(){
        if(activeSlide === slides.length-1){
            moveSlide(0,slides,buttons);
        }
        else
        moveSlide(activeSlide+1,slides,buttons);
    },5000)
}

function moveSlide(slideNumber,slides,buttons) {
    activeSlide = slideNumber;
    for(var i = 0;i < slides.length; i++){
        slides[i].style.left = ((i - slideNumber)*800).toString() + 'px';
        if(i === slideNumber){
           buttons[i].style.width = '8px';
           buttons[i].style.height = '8px';
           buttons[i].style.backgroundColor = 'white'
        }
        else{
            buttons[i].style.width = '6px';
            buttons[i].style.height = '6px';
            buttons[i].style.backgroundColor = '#b0e8e6'
        }
    }
}

function slider() {
    var slides = document.querySelectorAll('.quotes__slide');
    var buttons = document.querySelectorAll('.quotes__button');
    autoSlide(slides,buttons);
    for(var i = 0;i < slides.length; i++){
        (function(buttonNumber){
            buttons[buttonNumber].onclick = function () {
                moveSlide(buttonNumber,slides,buttons);
            }
        }(i));
    }
}
function burgerMenu() {
    var navActive = false;
    var burger = document.querySelector('.header__burger');
    var nav = document.querySelector('.nav');
    burger.onclick = function () {
        if(navActive === true){
            navActive = !navActive;
            nav.style.opacity='0';
            nav.style.right='-100px'

        }
        else{
            navActive = !navActive;
            nav.style.right= '10px';
            nav.style.opacity='1';
        }
    }

}
burgerMenu();
slider();