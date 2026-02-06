/**
 * Part A: Closure (Q7)
 * 7. Store a secret message using closure and allow access only through a returned function.
 */

function createSecret(secret) {
    return function () {
        return `The secret is: ${secret}`;
    };
}

// Test
const getSecret = createSecret("HiddenTreasure");
console.log(getSecret()); // Output: The secret is: HiddenTreasure
// console.log(secret); // Error: secret is not defined
