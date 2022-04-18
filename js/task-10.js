function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const WIDTH_BOX_VALUE = 30;
const HEIGHT_BOX_VALUE = 30;
let widthValue = WIDTH_BOX_VALUE;
let heightValue = HEIGHT_BOX_VALUE;

function calcPropertiesWidth(n) {
    widthValue += n;
    return widthValue;
}

function calcPropertiesHeight(n) {
    heightValue += n;
    return heightValue;
}

const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls > input');
const boxEl = document.querySelector('#boxes');

let amount = 0;

inputEl.addEventListener('input', getInputValue);
function getInputValue() {
    amount = Number(inputEl.value);
}

btnCreateEl.addEventListener('click', onBtnCreateElClick);
function onBtnCreateElClick() {
    if (amount >= 1) {
        createBoxes(amount);
    }
}

function createBoxes(amount) {
    const arrayBoxes = [];

    for (let i = 0; i < amount; i += 1) {
        let box = `<div style="width:${calcPropertiesWidth(10)}px; height:${calcPropertiesHeight(
            10
        )}px; background-color:${getRandomHexColor()}; margin-top:10px;"></div>`;
        arrayBoxes.push(box);
    }

    boxEl.insertAdjacentHTML('beforeend', arrayBoxes.join(''));
    inputEl.value = '';
}

btnDestroyEl.addEventListener('click', onBtnDestroyElClick);
function onBtnDestroyElClick() {
    destroyBoxes();
}

function destroyBoxes() {
    boxEl.innerHTML = '';
    inputEl.value = '';
    amount = 0;
    widthValue = WIDTH_BOX_VALUE;
    heightValue = HEIGHT_BOX_VALUE;
}
