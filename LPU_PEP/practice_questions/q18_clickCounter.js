

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("counterBtn");

    if (btn) {
        let count = 0;

        btn.addEventListener("click", () => {
            count++;
            btn.textContent = `Count: ${count}`;
        });

        btn.addEventListener("dblclick", () => {
            count -= 2; 
           
            count--; 
            count--; 
            btn.textContent = `Count: ${count}`;
        });
    }
});
