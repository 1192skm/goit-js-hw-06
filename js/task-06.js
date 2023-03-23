const textInput = document.querySelector("#validation-input");

console.dir(textInput);
console.dir(textInput.dataset.length);

textInput.addEventListener('input', () => {
    console.log(textInput.value.length);
    textInput.addEventListener('blur', onFormBlur);
})

function onFormBlur(event) {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }    
};


















// textInput.value.length;
// const textInput = document.querySelector("#validation-input");
// const valid = Number(textInput.dataset.length); //отримуємо числове значення з дати-атрибуту
// //  console.dir(textInput);
// //  console.dir(textInput.dataset.length);
// textInput.addEventListener("input", (event) => {
//   //  console.log(textInput.value.length);
//   const counter = event.currentTarget.value.length; //тут отримуємо поточне число символів в полі введення
//   if (counter === valid) {
//     textInput.classList.add("valid");
//     textInput.classList.remove("invalid");
//   } else {
//     textInput.classList.add("invalid");
//     textInput.classList.remove("valid");
//   }
// });