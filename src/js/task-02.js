const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const allElements = document.querySelector("#ingredients");

const allIngredients = ingredients.map(
  ingredient => {
    const listElement = document.createElement("li");
    listElement.classList.add("item");
    listElement.textContent = ingredient;
    allElements.append(listElement);
    return ingredient;
  }
);

console.log(allIngredients);
