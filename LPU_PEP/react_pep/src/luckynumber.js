import ejs from "ejs";

const DESIRED_NUMBER = 7;
const MIN = 1;
const MAX = 10;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findLuckyNumber(desiredNumber, min, max) {
    const attempts = [];
    let current;
    let count = 0;

    do {
        current = getRandomNumber(min, max);
        count++;
        attempts.push(current);
    } while (current !== desiredNumber);

    return { desiredNumber, attempts, count };
}

const template = `
========================================
  🍀  Lucky Number Finder  🍀
========================================
Desired Number : <%= desiredNumber %>
Range          : <%= min %> – <%= max %>
----------------------------------------
Shuffle Log    :
<% attempts.forEach(function(num, index) { %>
  Attempt #<%= index + 1 %> → <%= num %><%= num === desiredNumber ? "  ✅ FOUND!" : "" %>
<% }); %>
----------------------------------------
Total Attempts : <%= count %>
========================================
`;

const result = findLuckyNumber(DESIRED_NUMBER, MIN, MAX);

const output = ejs.render(template, {
    desiredNumber: result.desiredNumber,
    attempts: result.attempts,
    count: result.count,
    min: MIN,
    max: MAX,
});

console.log(output);
