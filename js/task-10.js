function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector("button[data-destroy]");
const textInput = document.querySelector('input');
const container = document.querySelector('#boxes')

textInput.addEventListener('input', () => {
  createBtn.addEventListener('click', onCreateBtnClick);
})

function onCreateBtnClick() {
  // createBoxes(textInput.value)
  const items = new Array(Number(textInput.value));
  const itemsArray = items
    .map((item) => {
      "<div></div>";
    })
    .join("");
  container.insertAdjacentHTML("beforeend", itemsArray);
}

// function createBoxes(amount) {
//   const items = new Array(amount);
//   const itemsArray = items.map(item => {
//     '<div></div>'
//   }).join('')
//   container.insertAdjacentHTML("beforeend", itemsArray);
// };

// destroyBoxes() => {
//   container.innerHTML = '';
//   textInput.reset()
// }