/**
 * Part C: Array Methods (Q23)
 * 23. Using reduce(), find the product of numbers in [1,2,3,4].
 */

const nums = [1, 2, 3, 4];
const product = nums.reduce((acc, curr) => acc * curr, 1);

console.log("Numbers:", nums);
console.log("Product:", product);
