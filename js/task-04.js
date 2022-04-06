const buttonDecEl = document.querySelector('button[data-action="decrement"]');
const buttonIncEl = document.querySelector('button[data-action="increment"]');
const outputEl = document.querySelector('#value');

let counterValue = Number(outputEl.textContent);

buttonDecEl.addEventListener('click', onButtonDecElClick);
buttonIncEl.addEventListener('click', onButtonIncElClick);

function onButtonDecElClick() {
    counterValue -= 1;
    outputEl.textContent = counterValue;
}

function onButtonIncElClick() {
    counterValue += 1;
    outputEl.textContent = counterValue;
}
