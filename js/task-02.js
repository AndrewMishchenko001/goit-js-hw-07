const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsNew = ingredients.map(ingredient => {
  const ingredientNewItem = document.createElement('li');
  ingredientNewItem.textContent = ingredient;
  return ingredientNewItem;
});

ingredientsList.append(...ingredientsNew);