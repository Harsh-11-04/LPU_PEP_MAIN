let str1 = "shiva";
let str2 = str1;
console.log(str1 == str2);

let marks = [89, 91, 56, 34];
let newMarks = marks;
console.log(marks == newMarks);
console.log(marks === newMarks);
marks = [89, 91, 22];
console.log(marks == newMarks);

// ####
const arr = [1, 2, 3, 4, 5];
console.log(arr);
// assignment is not possible in array
// arr = [1, 2, 3, 4, 8];
// console.log(arr);
console.log(arr.push(5));
console.log(arr);

// ## Multi dimensional array or nested array:

let marks1 = [
  [98, 76],
  [34, 45],
  [45, 76],
  [34, 89],
];

console.log(marks1);
console.log(marks1[3], [1]);
