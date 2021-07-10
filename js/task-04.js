let counterValue = 0;

const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const newValue = document.querySelector('#value');

function onClickIncrement() {

    counterValue += 1;
    newValue.textContent = counterValue;
}

function onClickDecrement() {

    counterValue -= 1;
    newValue.textContent = counterValue;

}

increment.addEventListener('click', onClickIncrement);
decrement.addEventListener('click', onClickDecrement);


