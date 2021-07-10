
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', inputNewName);

function inputNewName(inputText) {
    if (inputText.currentTarget.value === '') {
        output.textContent = 'незнакомец';
    } else {
        output.textContent = inputText.currentTarget.value;
    }
}