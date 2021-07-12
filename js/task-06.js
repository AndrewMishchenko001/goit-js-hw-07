const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

function getColor() {
    if (+inputLength === input.value.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

input.addEventListener('input', getColor);