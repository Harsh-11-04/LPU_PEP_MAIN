/**
 * Part B: Events (Q19)
 * 19. Prevent form submission and display a custom message.
 * 
 * Expected HTML:
 * <form id="myForm">
 *   <button type="submit">Submit</button>
 * </form>
 * <p id="msg"></p>
 */

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
