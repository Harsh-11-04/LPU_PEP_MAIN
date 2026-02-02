// Type C: Arrow function: introducted in ES6
const greet = (count) => {
  for (i = 0; i < count; i++) {
    console.log("Hello boys and girls");
  }
};
greet(3);

// 1. for single expression:
const square = (num) => {
  num * num;
};

// 2. multiple expression:
const squares = (num) => {
  return num * num;
};
console.log(squares(3));

// Type B: anonymous function: a function without a name is called anonymous function
let arr = [1, 23, 45, 67];
arr.forEach(function (val) {
  console.log(val);
});

// 3. function return:
function addTwoNumbersReturn(num1, num2) {
  return num1 + num2;
}
const result = addTwoNumbersReturn(3, 4);
console.log("Result:", result);

// 2. sum of two numbers:
function addTwoNumbers(num1, num2) {
  // parameters: num1 and num2
  console.log(num1 + num2);
}
addTwoNumbers(7, 6); // arguments: 6,7

// Type A:1. creating simple function:
function func() {
  console.log("Hi");
}
func();
