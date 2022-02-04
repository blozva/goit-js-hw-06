
let counterValue = 0
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

decrement.addEventListener('click', function () {
    console.log('-1');
    
    counterValue.innerText --;
});

increment.addEventListener('click', function () {
    console.log('+1');

    counterValue.innerText++;
});

/*Счетчик состоит из спана и кнопок, которые, при клике,
 должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
Создай переменную counterValue в которой будет храниться
 текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых 
увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.
*/
 
