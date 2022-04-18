const inputEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');

outputEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', onInput);

function onInput(event) {
    outputEl.style.fontSize = event.currentTarget.value + 'px';
}
