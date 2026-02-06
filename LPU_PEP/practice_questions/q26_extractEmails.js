/**
 * Part C: Array Methods (Q26)
 * 26. Extract email addresses from an array of user objects.
 */

const users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" }
];

const emails = users.map(user => user.email);

console.log("Users:", users);
console.log("Emails:", emails);
