
const controlsElements = document.querySelector('div#controls');
const inputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('div#boxes');

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  // boxes.textContent = inputNumber.value;
  for (let i = 1; i <= inputNumber.value; i++) {
    let size = 30 + i * 10;
    let el = document.createElement('div');
    let color = getRandomHexColor();
    el.setAttribute('style', `background-color: ${color}; height: ${size}px; width: ${size}px`);
    boxes.appendChild(el);
    console.log(el);
  }
  
}

function destroyBoxes() {
  while (boxes.lastElementChild) {
    boxes.removeChild(boxes.lastElementChild);
  }
}


/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.
               
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
тем самым удаляя все созданные элементы.*/
