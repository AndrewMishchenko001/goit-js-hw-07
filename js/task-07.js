const span = document.querySelector('#text');
const input = document.querySelector('#font-size-control');

function fontSize() {
    span.style.fontSize = input.value + 'px';
}

input.addEventListener('input', fontSize);