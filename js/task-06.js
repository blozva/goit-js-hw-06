
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.Для добавления стилей, используй 
// CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputElement = document.querySelector("input#validation-input");
 

inputElement.addEventListener('blur', eventHandler);

function eventHandler(event) {
    const minLength = inputElement.getAttribute('data-length');

    if (inputElement.value.length != minLength) {
        console.log('invalid');
        inputElement.className = 'invalid';
    } else {
        console.log('valid');
        inputElement.className = 'valid';
    }

}
