/**
 * Part B: Events (Q20)
 * 20. Highlight only the clicked list item using event handling.
 * 
 * Expected HTML:
 * <ul id="list">
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 *   <li>Item 3</li>
 * </ul>
 */

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("list");

    if (list) {
        list.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                // Remove highlight from all
                const items = list.getElementsByTagName("li");
                for (let item of items) {
                    item.style.backgroundColor = "";
                }
                // Highlight clicked
                event.target.style.backgroundColor = "yellow";
            }
        });
    }
});
