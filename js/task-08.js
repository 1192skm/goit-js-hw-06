const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = form.elements;

    if (!email.value || !password.value) {
      alert("Заповніть усі поля!");
      return;
    }
    const data = {
      email: email.value,
      password: password.value,
    };
    
    console.log(data);

    form.reset();
}