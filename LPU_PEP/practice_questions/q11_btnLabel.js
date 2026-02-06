/**
 * Part B: Events (Q11)
 * 11. Create a button that changes its label text after clicking.
 * 
 * Expected HTML:
 * <button id="myButton">Click Me</button>
 */

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", function () {
            this.textContent = "Clicked!";
        });
    }
});
