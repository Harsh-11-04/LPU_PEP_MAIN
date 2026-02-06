/**
 * Part A: Closure (Q6)
 * 6. Create a simple incremental ID generator using closure.
 */

function createIdGenerator() {
    let id = 0;
    return function () {
        id++;
        return `ID_${id}`;
    };
}

// Test
const generateId = createIdGenerator();
console.log(generateId()); // Output: ID_1
console.log(generateId()); // Output: ID_2
console.log(generateId()); // Output: ID_3
