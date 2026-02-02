console.log(1 + 2); // 3
console.log(1 + "2"); // 12: here number is being converted to string
console.log(10 - "2"); // 8: here string is being converted to number
console.log(10 + "A"); // 10A
console.log(10 - "A"); // NAN
console.log(10 + "2" + "A"); //102A
console.log(10 + "2" - "A"); //NAN

// String to number:
let a = "20";
console.log(typeof a);
console.log(parseInt(a));
console.log(typeof a);
