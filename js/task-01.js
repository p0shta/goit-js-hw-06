const listEl = document.querySelector('#categories');
const listStringEl = `Number of categories: ${listEl.children.length}`;
console.log(listStringEl);

const itemsEl = document.querySelectorAll('.item');
const itemStringEl = itemsEl.forEach(item => {
    return console.log(
        `Category: ${item.firstElementChild.innerHTML}. Elements: ${item.lastElementChild.children.length}`
    );
});
