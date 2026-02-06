/**
 * Part C: Array Methods (Q28)
 * 28. Find the average of numbers in [10,20,30,40].
 */

const numbers = [10, 20, 30, 40];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
const average = total / numbers.length;

console.log("Numbers:", numbers);
console.log("Average:", average);
