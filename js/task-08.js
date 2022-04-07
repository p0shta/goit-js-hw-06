const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert('The field is empty! Write correct info');
    } else {
        const loginData = {
            email,
            password,
        };
        event.currentTarget.reset();
        console.log(loginData);
    }
}
