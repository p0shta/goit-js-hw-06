function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const outputEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
const body = document.body;

buttonEl.addEventListener('click', onButtonElClick);
function onButtonElClick() {
    const color = getRandomHexColor();
    outputEl.textContent = color;
    body.style.backgroundColor = color;
}
