const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart); // вешаем слушатель на наш перетаскиваемый элемент (dragstar - говорит когда нужно перетаскивать)
item.addEventListener('dragend', dragend); // вешаем слушатель на наш перетаскиваемый элемент (dragend - говорит когда закончили)
item.addEventListener('mouseover', function mouseover(ev) {
    ev.target.classList.add('color');
    item.addEventListener('dragstart', function click(ev) {
        ev.target.classList.remove('color');
    });
});
item.addEventListener('mouseout', function mouseout(ev) {
    ev.target.classList.remove('color');
});


placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
});

//#region добавляем функции для перетаскиваемого объекта чтобы он выделялся при перетаскивании и исчезал при зажитии 
function dragstart(event) {
    event.target.classList.add('hold'); // создает границы
    setTimeout(() => event.target.classList.add('hide'), 0); // убирает объект из изначального положения при перемещении 
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide'); // когда отпустили грап убирает границы и возвращает объект в исходное положение
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hoverd'); // добавляем верхний бордер при перемещении 
}

function dragleave(event) {
    event.target.classList.remove('hoverd'); // удаляем бордер с покинутого объекта при перемещении 
}

function drop(event) {
    event.target.classList.remove('hoverd'); // удаляем верхний бордер при остановке перемещения объекта
    event.target.append(item);
}