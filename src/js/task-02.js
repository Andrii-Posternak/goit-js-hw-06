const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('ul#ingredients');
const newIngredients = ingredients.map(elem => {
  const itemRef = document.createElement('li');
  itemRef.textContent = elem;
  itemRef.classList.add('item');
  return itemRef;
});

ingredientsListRef.append(...newIngredients);
