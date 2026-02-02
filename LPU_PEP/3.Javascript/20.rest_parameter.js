// rest parameter (...) allows a function to accept unlimited number of arguments and collects them into an array.
// imp notes:
// 1. only one rest parameter us allowed.
// 2. rest parameter must be last
// 3. rest parameter always becomes an array

// 1. simple rest parameter:
function showNumber(...nums) {
  console.log(nums);
}
showNumber(10, 20, 30, 40, 50);

// 2.normal parameter + rest parameter:
function printData(para, ...restValues) {
  console.log("Normal argument value: ", para);
  console.log("Rest parameter value: ", restValues);
}
printData(1, 2, 3, 4, 4);

// 3.sum of N numbers:
function sum(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40, 50));

// 4. rest with arrow function:
const mutiply = (...nums) => {
  return nums.reduce((acc, val) => acc * val, 1);
};
console.log(mutiply(2, 3, 4));
