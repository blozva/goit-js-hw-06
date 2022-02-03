
const allCategories = document.querySelectorAll("ul#categories li.item");
const numberCategories = allCategories.length;
console.log(`Number of categories: ${numberCategories}`);

const printCategory = function (category) {
    const nameCategory = category.querySelector('h2');
    console.log('Category:', nameCategory.textContent);

    const elementsList = category.querySelectorAll('ul li')
    console.log('Elements:', elementsList.length);
}

allCategories.forEach(printCategory);

/*Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и 
выведет в консоль текст заголовка элемента (тега <h2>) 
и количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/


