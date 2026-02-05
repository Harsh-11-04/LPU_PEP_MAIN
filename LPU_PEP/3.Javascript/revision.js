const container = document.getElementById('dom-tasks');

function createSection(title, contentFn) {
    const section = document.createElement('section');
    section.innerHTML = `<h2>${title}</h2>`;
    const content = document.createElement('div');
    contentFn(content);
    section.appendChild(content);
    container.appendChild(section);
}

/* ================= PART A ================= */

createSection("1. Closure Counter", parent => {
    let count = 0;
    const inc = document.createElement("button");
    const dec = document.createElement("button");
    const reset = document.createElement("button");
    const display = document.createElement("div");

    inc.textContent = "Increment";
    dec.textContent = "Decrement";
    reset.textContent = "Reset";

    inc.onclick = () => display.textContent = ++count;
    dec.onclick = () => display.textContent = --count;
    reset.onclick = () => display.textContent = count = 0;

    parent.append(inc, dec, reset, display);
});

createSection("2. Bank Account", parent => {
    let balance = 0;
    const d = document.createElement("button");
    const w = document.createElement("button");
    const out = document.createElement("div");

    d.textContent = "Deposit 100";
    w.textContent = "Withdraw 50";

    d.onclick = () => out.textContent = balance += 100;
    w.onclick = () => out.textContent = balance -= 50;

    parent.append(d, w, out);
});

createSection("3. Once Function", parent => {
    let used = false;
    const btn = document.createElement("button");
    btn.textContent = "Click Once";
    btn.onclick = () => {
        if (!used) {
            alert("Executed!");
            used = true;
        }
    };
    parent.appendChild(btn);
});

createSection("4. Multiplier", parent => {
    const btn = document.createElement("button");
    const out = document.createElement("div");
    btn.textContent = "Double 5";
    btn.onclick = () => out.textContent = 5 * 2;
    parent.append(btn, out);
});

createSection("5. Password Check", parent => {
    const input = document.createElement("input");
    input.placeholder = "password = 123";
    const btn = document.createElement("button");
    const out = document.createElement("div");

    btn.textContent = "Check";
    btn.onclick = () => out.textContent = input.value === "123";

    parent.append(input, btn, out);
});

/* ================= PART B (6–12 same) ================= */

createSection("6. Click Counter", parent => {
    const btn = document.createElement('button');
    let c = 0;
    btn.textContent = "Click 0";
    btn.onclick = () => btn.textContent = ++c;
    parent.appendChild(btn);
});

createSection("7. Dark Mode", parent => {
    const btn = document.createElement("button");
    btn.textContent = "Toggle";
    btn.onclick = () => document.body.classList.toggle("dark-mode");
    parent.appendChild(btn);
});

createSection("8. Validation", parent => {
    const i = document.createElement("input");
    const b = document.createElement("button");
    const o = document.createElement("div");
    i.placeholder = "min 6 chars";
    b.textContent = "Check";
    b.onclick = () => o.textContent = i.value.length >= 6 ? "OK" : "Too short";
    parent.append(i, b, o);
});

createSection("9. One Time Button", parent => {
    let once = true;
    const btn = document.createElement("button");
    btn.textContent = "Click";
    btn.onclick = () => {
        if (once) alert("Done");
        once = false;
    };
    parent.appendChild(btn);
});

createSection("10. Show Password", parent => {
    const i = document.createElement("input");
    i.type = "password";
    const c = document.createElement("input");
    c.type = "checkbox";
    c.onchange = () => i.type = c.checked ? "text" : "password";
    parent.append(i, c);
});

createSection("11. Delegation", parent => {
    const ul = document.createElement("ul");
    ["A","B","C"].forEach(x=>{
        const li=document.createElement("li");
        li.textContent=x;
        ul.appendChild(li);
    });
    ul.onclick=e=>alert(e.target.textContent);
    parent.appendChild(ul);
});

createSection("12. Char Count", parent => {
    const t = document.createElement("textarea");
    const d = document.createElement("div");
    t.oninput=()=>d.textContent=t.value.length;
    parent.append(t,d);
});

/* ================= PART C ================= */

createSection("13. Map Double", p=>p.textContent=[1,2,3,4].map(x=>x*2));

createSection("14. Filter Marks", p=>p.textContent=
JSON.stringify([{a:40},{a:80}].filter(x=>x.a>50)));

createSection("15. Reduce Salary", p=>p.textContent=
[{s:1000},{s:2000}].reduce((a,c)=>a+c.s,0));

createSection("16. Uppercase", p=>p.textContent=
["ram","sam"].map(x=>x.toUpperCase()));

createSection("17. Count", p=>{
const r=['a','b','a'].reduce((a,c)=>(a[c]=(a[c]||0)+1,a),{});
p.textContent=JSON.stringify(r);
});

createSection("18. Remove Duplicates", p=>p.textContent=[...new Set([1,2,2,3])]);

createSection("19. Highest Salary", p=>{
const r=[{s:2},{s:5}].reduce((a,c)=>a.s>c.s?a:c);
p.textContent=JSON.stringify(r);
});

createSection("20. Even ×10", p=>p.textContent=
[1,2,3,4,5,6].filter(x=>x%2==0).map(x=>x*10));
