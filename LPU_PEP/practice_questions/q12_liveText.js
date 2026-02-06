

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("nameInput");
    const display = document.getElementById("displayText");

    if (input && display) {
        input.addEventListener("input", (event) => {
            display.textContent = event.target.value;
        });
    }
});
