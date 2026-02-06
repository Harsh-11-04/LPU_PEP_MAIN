/**
 * Part C: Array Methods (Q29)
 * 29. Separate even and odd numbers from [1,2,3,4,5,6].
 */

const nums = [1, 2, 3, 4, 5, 6];

const evens = nums.filter(n => n % 2 === 0);
const odds = nums.filter(n => n % 2 !== 0);

console.log("Numbers:", nums);
console.log("Evens:", evens);
console.log("Odds:", odds);
