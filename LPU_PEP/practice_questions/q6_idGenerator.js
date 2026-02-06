
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
