const q = (el) => document.querySelector(el);

let textScroll = document.querySelector('.scroll_text');
let scrollLeft = document.querySelector('.scroll_left');
let scrollRight = document.querySelector('.scroll_right');

function scroll1() {
    let texto = textScroll.scrollTo({
        top: 228,
        behavior: 'smooth'
    })
    return texto
}
function scroll2() {
    let texto = textScroll.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    return texto
}
scrollLeft.addEventListener('click', scroll2)
scrollRight.addEventListener('click', scroll1)

/*SLIDER*/
const allSlides = document.querySelectorAll('.slider--item').length;
const sliderItem = q('.slider--item');
let currentSlide = 0;

q('.slider--width').style.width = `calc(100vw * ${allSlides})`;
q('.slider--width').style.heigth = `q('#banner').clientHeight`;
const allLines = document.querySelectorAll('.line');

function goNext() {
    currentSlide++;
    if (currentSlide > (allSlides - 1)) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = allSlides - 1;
    }
    updateMargin();
}

allLines[0].addEventListener('click', goNext)
allLines[1].addEventListener('click', goNext)
allLines[2].addEventListener('click', goNext)

function updateMargin () {
    newMargin = (currentSlide * sliderItem.clientWidth);
    q('.slider--width').style.marginLeft = `-${newMargin}px`;
  
    if (currentSlide === 0) {
        allLines[1].classList.remove('that');
        allLines[2].classList.remove('that');
        allLines[0].classList.add('that');
    }
    if (currentSlide === 1) {
        allLines[0].classList.remove('that');
        allLines[1].classList.add('that');
    }
    if (currentSlide === 2) {
        allLines[1].classList.remove('that');
        allLines[2].classList.add('that');
    }
}

setInterval(goNext, 10000);