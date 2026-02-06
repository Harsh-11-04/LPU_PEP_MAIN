/**
 * Part A: Closure (Q1)
 * 1. Create a function createGreeting(name) that returns a function which prints a greeting using the given name.
 */

function createGreeting(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

// Test
const greetJohn = createGreeting("John");
greetJohn(); // Output: Hello, John!

const greetAlice = createGreeting("Alice");
greetAlice(); // Output: Hello, Alice!
