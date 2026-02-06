

const users = [
    { name: "Sita", active: true },
    { name: "Ram", active: false },
    { name: "Laxman", active: true }
];

const activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name);

console.log("Users:", users);
console.log("Active Users:", activeUserNames);
