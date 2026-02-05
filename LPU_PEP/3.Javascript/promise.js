let myPromise = new Promise((resolve, reject) => {
    let success = true; // change to false to test reject

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed!");
    }
});

myPromise
    .then(result => {
        console.log(result);   // runs if resolve()
    })
    .catch(error => {
        console.log(error);    // runs if reject()
    });

// set timeout (1)

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

getData()
    .then(data => console.log(data))
    .catch(err => console.log(err));

// set timeout (2)

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Fetched data");
        }, 1500);
    });
}

fetchData().then(data => console.log(data));

// chaining process

let promise = new Promise(resolve => {
    resolve(10);
});

promise
    .then(num => num * 2)
    .then(result => result + 5)
    .then(final => console.log(final));

// stimulating login
function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "123") {
            resolve("Login successful");
        } else {
            reject("Invalid credentials");
        }
    });
}

login("admin", "123")
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// number check

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Positive number");
        } else {
            reject("Not positive");
        }
    });
}

checkNumber(5)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// maggi program

function maggibnao() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Maggi boiled"), 5000);
    });
}

maggibnao()
    .then(msg => {
        console.log(msg);
        return "Adding masala";
    })
    .then(step => console.log(step))
    .then(() => console.log("Serve Maggi 😋"));


