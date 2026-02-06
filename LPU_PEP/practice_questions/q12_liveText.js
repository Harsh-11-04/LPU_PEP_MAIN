/**
 * Part B: Events (Q12)
 * 12. Display text live as the user types in an input field.
 * 
 * Expected HTML:
 * <input type="text" id="nameInput" placeholder="Type name...">
 * <p id="displayText"></p>
 */

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("nameInput");
    const display = document.getElementById("displayText");

    if (input && display) {
        input.addEventListener("input", (event) => {
            display.textContent = event.target.value;
        });
    }
});
