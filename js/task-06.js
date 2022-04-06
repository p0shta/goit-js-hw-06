const inputEl = document.querySelector('#validation-input');
const validInputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
    event.currentTarget.value.length >= validInputLength
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid');
}
