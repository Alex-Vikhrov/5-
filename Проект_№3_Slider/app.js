const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidebar = document.querySelector('.slidebar');
const mainSlide = document.querySelector('.main-slide');
const slideCount = mainSlide.querySelectorAll('div').length; // высчитываем сколько всего у нас картинок и стилям к ним 
const container = document.querySelector('.container');
const btn = document.querySelector('button');
let activeSlideIndex = 0;

slidebar.style.top = `-${(slideCount - 1) * 100}vh`; // высчитываем сколько всего у нас картинок и стилям к ним и выставляем нужный 

upButton.addEventListener('click', () => {
    changeSlide('up');
});

downButton.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('mouseover', function mouseover(ev) {
    console.log('hello');
    upButton.style.display = 'block';
    upButton.style.transition = 'opacity 2s ease-in';
    downButton.style.display = 'block';
});
document.addEventListener('mouseout', function mouseout(ev) {
    console.log('bay');
    upButton.style.display = 'none';
    downButton.style.display = 'none';
});

document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(event) {
    if (event.key === "ArrowUp" || event.key === "Up") {
        changeSlide('up');
    } else if (event.key === "ArrowDown" || event.key === "Down") {
        changeSlide('down');
    }
}


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    slidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}