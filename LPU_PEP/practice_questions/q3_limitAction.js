/**
 * Part A: Closure (Q3)
 * 3. Create a function that limits an action to run only a fixed number of times.
 */

function createLimiter(fn, limit) {
    let count = 0;
    return function (...args) {
        if (count < limit) {
            count++;
            return fn(...args);
        } else {
            console.log("Action limit reached!");
        }
    };
}

// Test
const limitedLog = createLimiter(msg => console.log(msg), 3);
limitedLog("First");
limitedLog("Second");
limitedLog("Third");
limitedLog("Fourth"); // Output: Action limit reached!
