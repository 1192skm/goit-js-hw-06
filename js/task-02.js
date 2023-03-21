const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const items = []
ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = ingredient;
  console.log(li);
  items.push(li)
});
list.append(...items);