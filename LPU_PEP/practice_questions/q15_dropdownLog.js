/**
 * Part B: Events (Q15)
 * 15. Log selected value when a dropdown value changes.
 * 
 * Expected HTML:
 * <select id="mySelect">
 *   <option value="A">Option A</option>
 *   <option value="B">Option B</option>
 * </select>
 */

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("mySelect");

    if (select) {
        select.addEventListener("change", (event) => {
            console.log("Selected value:", event.target.value);
        });
    }
});
