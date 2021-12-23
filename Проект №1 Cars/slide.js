//#region 
/* const slides = document.querySelectorAll('.slide');
slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    });
});

function clearActiveClasses() {
    slides.forEach((sl) => {
        sl.classList.remove('active');
    });
} */
//#endregion

//#region А можно использовать toggle. Есть определенные нюансы, но все же. Можем и им ) 
const slides = document.querySelectorAll('.slide');
slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        slide.classList.toggle('active');
    });
});
//#endregion
