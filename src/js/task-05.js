

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

