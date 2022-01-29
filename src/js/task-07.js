
// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
//(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//В результате при перетаскивании ползунка будет меняться размер текста.

const inputElement = document.querySelector('input#font-size-control');
inputElement.setAttribute('value', '16');
const span = document.querySelector('span#text');

// event.currentTarget.value()

inputElement.addEventListener('input', eventHandler);

function eventHandler(event) {
    console.log(event.currentTarget.value);
    span.setAttribute('style', `font-size: ${event.currentTarget.value}px;`);

}
