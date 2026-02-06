/**
 * Part C: Array Methods (Q21)
 * 21. Using map(), add 5 to each element in [10,20,30].
 */

const numbers = [10, 20, 30];
const addedFive = numbers.map(num => num + 5);

console.log("Original:", numbers);
console.log("Added 5:", addedFive);
