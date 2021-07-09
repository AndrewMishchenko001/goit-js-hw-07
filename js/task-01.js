
// Task 1
const categoryItem = document.querySelectorAll('.item');
console.log(`'В списке ${categoryItem.length} категории.'`);

// Task 2

const categoryList = document.querySelectorAll('.item');
categoryList.forEach(category => {
    console.log('Категория:', category.querySelector('h2').textContent);
    console.log('Количество элементов:', category.querySelectorAll('li').length);
});