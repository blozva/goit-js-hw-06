// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
// где имя поля будет именем свойства, а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// event.preventDefault(); - зупинка перезаванттажування сторінки 

const logForm = document.querySelector('form.login-form');

const formButton = document.querySelector('button');
logForm.addEventListener('submit', eventHandler);

const inputElementEmail = document.querySelector('input.email'); 
const inputElementPassword = document.querySelector('input.password'); 

function eventHandler(event) {
    event.preventDefault();
    if (!(logForm.elements.email.value && logForm.elements.password.value)) {
        alert('Це не все!');
        return;
    }

    // console.log(logForm.elements.email.value);
    // console.log(logForm.elements.password.value);

    const email= logForm.elements.email.value;
    const password = logForm.elements.password.value;

    const user = {
        email,
        password,
    };
    console.log(user);
    logForm.reset();
}
