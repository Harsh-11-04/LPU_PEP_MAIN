// ==========================================
// PART A: CLOSURE (Practical Questions)
// ==========================================
console.log("%c PART A: CLOSURE ", "background: #222; color: #bada55; font-size: 16px;");

// 1. Create a counter using closure with methods: increment(), decrement(), reset().
function createCounter() {
    let count = 0;
    return {
        increment: () => { count++; console.log(`Counter: ${count}`); return count; },
        decrement: () => { count--; console.log(`Counter: ${count}`); return count; },
        reset: () => { count = 0; console.log(`Counter: ${count}`); return count; }
    };
}
// Test Code
/*
const myCounter = createCounter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1
myCounter.reset();     // 0
*/

// 2. Create a private bank account using closure with methods: deposit(amount), withdraw(amount), getBalance().
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    return {
        deposit: (amount) => {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: ${amount}. New Balance: ${balance}`);
            }
        },
        withdraw: (amount) => {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: ${amount}. New Balance: ${balance}`);
            } else {
                console.log("Insufficient funds or invalid amount.");
            }
        },
        getBalance: () => {
            console.log(`Current Balance: ${balance}`);
            return balance;
        }
    };
}

// 3. Create a function once(fn) that allows a function to run only one time.
function once(fn) {
    let called = false;
    let result;
    return function (...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
            return result;
        }
        return undefined; // or return last result
    };
}

// 4. Create a multiplier factory function multiplyBy(x) that returns functions like double(5), triple(5).
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}
// Usage: const double = multiplyBy(2); console.log(double(5)); // 10

// 5. Create a secure password checker using closure.
function createPassword(correctPassword) {
    return function (inputPassword) {
        return inputPassword === correctPassword;
    };
}

// ==========================================
// PART B: EVENTS & EVENT LISTENERS (Practical DOM Tasks)
// ==========================================
// Helper to render sections
const container = document.getElementById('dom-tasks');
function createSection(title, contentFn) {
    const section = document.createElement('section');
    section.innerHTML = `<h2>${title}</h2>`;
    const content = document.createElement('div');
    contentFn(content);
    section.appendChild(content);
    container.appendChild(section);
}

// 6. Create a button click counter.
createSection("6. Click Counter", (parent) => {
    const btn = document.createElement('button');
    btn.textContent = "Click Me: 0";
    let count = 0;
    btn.onclick = () => {
        count++;
        btn.textContent = `Click Me: ${count}`;
    };
    parent.appendChild(btn);
});

// 7. Toggle Light/Dark Mode
createSection("7. Light/Dark Mode", (parent) => {
    const btn = document.createElement('button');
    btn.textContent = "Toggle Dark Mode";
    btn.onclick = () => {
        document.body.classList.toggle('dark-mode');
    };
    parent.appendChild(btn);
});

// 8. Form Validation
createSection("8. Form Validation", (parent) => {
    const form = document.createElement('form');
    form.innerHTML = `
        <input type="text" id="v-name" placeholder="Name" style="display:block; margin:5px 0;">
        <input type="text" id="v-email" placeholder="Email" style="display:block; margin:5px 0;">
        <input type="password" id="v-pass" placeholder="Password" style="display:block; margin:5px 0;">
        <button type="submit">Submit</button>
        <div id="v-msg" class="error"></div>
    `;
    form.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('v-name').value;
        const email = document.getElementById('v-email').value;
        const pass = document.getElementById('v-pass').value;
        const msg = document.getElementById('v-msg');

        if (!name.trim()) return msg.textContent = "Name cannot be empty";
        if (!email.includes('@')) return msg.textContent = "Email must contain @";
        if (pass.length < 6) return msg.textContent = "Password must be at least 6 chars";

        msg.textContent = "Success!";
        msg.style.color = "green";
    };
    parent.appendChild(form);
});

// 9. Button works only once
createSection("9. One-time Button", (parent) => {
    const btn = document.createElement('button');
    btn.textContent = "Click Only Once";
    const runOnce = once(() => alert("Button clicked!"));
    btn.onclick = runOnce;
    parent.appendChild(btn);
});

// 10. Show/Hide Password
createSection("10. Show/Hide Password", (parent) => {
    const input = document.createElement('input');
    input.type = "password";
    input.placeholder = "Type password...";

    const checkLabel = document.createElement('label');
    checkLabel.innerHTML = ` <input type="checkbox"> Show Password`;

    checkLabel.querySelector('input').onchange = (e) => {
        input.type = e.target.checked ? "text" : "password";
    };

    parent.appendChild(input);
    parent.appendChild(checkLabel);
});

// 11. Event Delegation List
createSection("11. Event Delegation", (parent) => {
    const ul = document.createElement('ul');
    ul.id = "list-container";
    ['Item 1', 'Item 2', 'Item 3'].forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    });

    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            alert(`You clicked: ${e.target.textContent}`);
        }
    });
    parent.appendChild(ul);
});

// 12. Textarea Character Count
createSection("12. Character Count", (parent) => {
    const tarea = document.createElement('textarea');
    const display = document.createElement('div');
    display.textContent = "Count: 0";

    tarea.oninput = () => {
        display.textContent = `Count: ${tarea.value.length}`;
    };

    parent.appendChild(tarea);
    parent.appendChild(display);
});


// ==========================================
// PART C: ARRAY METHODS (Practical Coding Questions)
// ==========================================
console.log("%c PART C: ARRAY METHODS ", "background: #222; color: #bada55; font-size: 16px;");

// 13. Map: Convert [1,2,3,4] into [2,4,6,8]
const arr13 = [1, 2, 3, 4];
console.log("13. Map Double:", arr13.map(x => x * 2));

// 14. Filter: Students with marks > 50
const students = [{ name: 'A', marks: 40 }, { name: 'B', marks: 80 }];
console.log("14. Filter Marks > 50:", students.filter(s => s.marks > 50));

// 15. Reduce: Total salary
const salaries = [{ salary: 1000 }, { salary: 2000 }];
console.log("15. Reduce Total Salary:", salaries.reduce((acc, curr) => acc + curr.salary, 0));

// 16. Map: Convert ['ram','sam','tom'] to uppercase
const names = ['ram', 'sam', 'tom'];
console.log("16. Map Uppercase:", names.map(n => n.toUpperCase()));

// 17. Count occurrences: ['a','b','a','c','b','a']
const chars = ['a', 'b', 'a', 'c', 'b', 'a'];
const counts = chars.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log("17. Count Occurrences:", counts);

// 18. Remove duplicates: [1,2,2,3,3,4]
const dupNums = [1, 2, 2, 3, 3, 4];
// Method 1: Set
console.log("18. Remove Duplicates (Set):", [...new Set(dupNums)]);
// Method 2: Filter
console.log("18. Remove Duplicates (Filter):", dupNums.filter((item, index) => dupNums.indexOf(item) === index));

// 19. Find highest salary person
const people = [{ name: 'A', salary: 2000 }, { name: 'B', salary: 5000 }];
const richest = people.reduce((prev, current) => (prev.salary > current.salary) ? prev : current);
console.log("19. Highest Salary:", richest);

// 20. Filter even numbers and multiply by 10
const nums20 = [1, 2, 3, 4, 5, 6];
const result20 = nums20.filter(n => n % 2 === 0).map(n => n * 10);
console.log("20. Filter Even & Multiply 10:", result20);
