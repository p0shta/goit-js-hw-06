const inputEl = document.querySelector('#validation-input');
const validInputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
    if (event.currentTarget.value.length >= validInputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
