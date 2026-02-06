
function createSecret(secret) {
    return function () {
        return `The secret is: ${secret}`;
    };
}

// Test
const getSecret = createSecret("HiddenTreasure");
console.log(getSecret()); // Output: The secret is: HiddenTreasure

