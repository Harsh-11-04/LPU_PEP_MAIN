
function createGreeting(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

const greetJohn = createGreeting("John");
greetJohn(); // Output: Hello, John!

const greetAlice = createGreeting("Alice");
greetAlice(); // Output: Hello, Alice!
