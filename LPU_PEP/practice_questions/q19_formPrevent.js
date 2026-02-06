

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const msg = document.getElementById("msg");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (msg) {
                msg.textContent = "Form submission prevented!";
            }
            console.log("Form submission prevented!");
        });
    }
});
