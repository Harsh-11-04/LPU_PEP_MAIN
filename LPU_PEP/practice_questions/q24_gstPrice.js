/**
 * Part C: Array Methods (Q24)
 * 24. Convert an array of prices to prices with 18% GST added.
 */

const prices = [100, 200, 500];
const pricesWithGST = prices.map(price => price * 1.18);

console.log("Prices:", prices);
console.log("Prices with 18% GST:", pricesWithGST);
