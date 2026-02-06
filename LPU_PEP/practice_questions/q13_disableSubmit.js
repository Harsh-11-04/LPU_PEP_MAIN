/**
 * Part B: Events (Q13)
 * 13. Disable a submit button until terms checkbox is selected.
 * 
 * Expected HTML:
 * <input type="checkbox" id="termsCheckbox"> I agree
 * <button id="submitBtn" disabled>Submit</button>
 */

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("termsCheckbox");
    const submitBtn = document.getElementById("submitBtn");

    if (checkbox && submitBtn) {
        checkbox.addEventListener("change", function () {
            submitBtn.disabled = !this.checked;
        });
    }
});
