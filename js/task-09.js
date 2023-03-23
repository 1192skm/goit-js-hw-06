function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const valueColor = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', onButtonClick);

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  valueColor.textContent = getRandomHexColor();
}