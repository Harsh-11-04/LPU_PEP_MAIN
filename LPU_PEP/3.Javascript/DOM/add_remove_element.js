const foodList = document.createElement('ul');

const foodItem1 = document.createElement('li');
foodItem1.textContent = 'Pizza';

const foodItem2 = document.createElement('li');
foodItem2.textContent = 'Burger';

const foodItem3 = document.createElement('li');
foodItem3.textContent = 'Pasta';

foodList.appendChild(foodItem1);
foodList.appendChild(foodItem2);
foodList.appendChild(foodItem3);

document.body.appendChild(foodList);

const newFoodItem = document.createElement('li');
newFoodItem.textContent = 'Biryani';

foodList.replaceChild(newFoodItem, foodList.firstElementChild);


