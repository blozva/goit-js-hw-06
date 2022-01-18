

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




