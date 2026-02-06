
function createStepCounter(step) {
    let count = 0;
    return function () {
        count += step;
        console.log(`Current Count: ${count}`);
    };
}

// Test
const countByFive = createStepCounter(5);
countByFive(); // Output: Current Count: 5
countByFive(); // Output: Current Count: 10

const countByTwo = createStepCounter(2);
countByTwo(); // Output: Current Count: 2
