
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


 
