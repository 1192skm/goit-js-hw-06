const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});


