const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];


const allElements = document.querySelector("#ingredients");

const allIngredients = ingredients.map(
  ingredient => {
    const listElement = document.createElement("li");
    listElement.classList.add("item");
    listElement.textContent = ingredient;
    return listElement;
  }
);

allElements.append(...allIngredients);

/* Напиши скрипт, который для каждого элемента массива ingredients:
Создаст отдельный элемент <li>. 
Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.
*/