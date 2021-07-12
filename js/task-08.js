const inputRef = document.querySelector("#controls input");
const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const containerBox = document.querySelector("#boxes");


function getAmount() {
    let amount = +inputRef.value;
    createBoxes(amount);
}
function random() {
    return Math.floor(Math.random() * 256);
}
function destroyBoxes() {
    containerBox.innerHTML = "";
}

function createBoxes(amount) {
    let startBoxSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i += 1) {
        let boxSize = startBoxSize + i * 10;
        let div = document.createElement("div");
        div.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: rgba(${random()},${random()},${random()})`;
        fragment.appendChild(div);
    }
    containerBox.appendChild(fragment);
}
renderBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);
