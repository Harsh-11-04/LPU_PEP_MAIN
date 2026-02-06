/**
 * Part A: Closure (Q10)
 * 10. Create a discount calculator using closure that applies a fixed discount percentage.
 */

function createDiscountCalculator(discountContext) {
    return function (price) {
        const discountAmount = price * (discountContext / 100);
        return price - discountAmount;
    };
}

// Test
const tenPercentOff = createDiscountCalculator(10);
console.log("Price after 10% off 100:", tenPercentOff(100)); // Output: 90
console.log("Price after 10% off 200:", tenPercentOff(200)); // Output: 180
