
//Напиши скрипт который, при наборе текста в инпуте 
//input#name-input (событие input), 
//подставляет его текущее значение в span#name-output. 
//Если инпут пустой,в спане должна отображаться строка "Anonymous".

const inputElement = document.querySelector("input#name-input");
const spanElement = document.querySelector("#name-output");

inputElement.addEventListener('input', eventHandler);

function eventHandler(event) {
    if (inputElement.value) {
        spanElement.textContent = inputElement.value;
    } else {
        spanElement.textContent = 'Anonymous';
    }
}

