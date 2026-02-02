console.log("Learning about filters");

// 1.filter: they also dont change our original array values

let arr = [1, 23, 47, 65, 62, 34];

let a = arr.filter((val) => {
  return val < 10;
});
console.log(a);

// 2.greater than 20: let b:
let b = arr.filter((val) => {
  return val > 20;
});
console.log("Value greater than 20 is:", b);

// 3.chaining number btw 20 and 60:
let c = arr.filter((val) => val > 20).filter((val) => val < 60);
console.log("Number btw 20 and 60 is:", c);

// 4.filter with index and array parameters
let d = arr.filter((num, index, array) => {
  return num > array[0];
});
console.log("Number greater than index 0 is: ", d);

// 6. filter the even element greater than 50:
let set = 50;
let e = arr.filter((num) => num >= set && num % 2 === 0);
console.log("Even number greater than 50 is: ", e);

// 7.find number in range btw 23 to 63:

// 7.1: hard coded:
let f = arr.filter((num) => {
  return num >= 23 && num <= 63;
});
console.log("Custom range between 23-63 is:", f);

// 7.2: dynamic way:
const constFilter = (minVal, maxVal) => (num) => num >= minVal && num <= maxVal;

let g = arr.filter(constFilter(23, 63));
console.log("Custome range [23-63]", g);
