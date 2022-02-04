
// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color и выводит 
// значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const body = document.querySelector('body');
const span = document.querySelector('span.color');
const button = document.querySelector('button.change-color');

button.addEventListener('click', eventHandler);

function eventHandler(event) {
  const color = getRandomHexColor();
  console.log(color);
  body.style.backgroundColor = color;
  //body.setAttribute('style', `background-color: ${color}`);
  span.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
