const categoriesListRef = document.querySelector('ul#categories');
const categoriesItemsRef = categoriesListRef.querySelectorAll('li.item');

console.log('Number of categories: ', categoriesItemsRef.length);

categoriesItemsRef.forEach(category => {
  const categoryNameRef = category.querySelector('h2');
  const categoryQtyRef = category.querySelectorAll('li');
  console.log('Category: ', categoryNameRef.textContent);
  console.log('Elements: ', categoryQtyRef.length);
});
