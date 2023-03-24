function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const textInput = document.querySelector("input");
const container = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = Number(textInput.value);
  const itemsArray = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement("div");
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.backgroundColor = getRandomHexColor();
    itemsArray.push(item);
    size += 10;
  }
  container.append(...itemsArray);
}
function onDestroyBtnClick() {
  container.innerHTML = "";
  textInput.value = "";
}




// createBoxes(textInput.value)

// function createBoxes(amount) {
//   const items = new Array(Number(amount));
//   const itemsArray = items.map(item => {
//     '<div></div>'
//   }).join('')
//   container.insertAdjacentHTML("beforeend", itemsArray);
// };
