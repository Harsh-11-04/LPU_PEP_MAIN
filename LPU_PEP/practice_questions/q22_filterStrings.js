/**
 * Part C: Array Methods (Q22)
 * 22. Using filter(), extract only strings from ['a',1,'b',2,'c'].
 */

const mixed = ['a', 1, 'b', 2, 'c'];
const stringsOnly = mixed.filter(item => typeof item === 'string');

console.log("Mixed:", mixed);
console.log("Strings Only:", stringsOnly);
