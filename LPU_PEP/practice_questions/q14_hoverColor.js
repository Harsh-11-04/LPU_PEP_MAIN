/**
 * Part B: Events (Q14)
 * 14. Change background color of a box on mouse enter and mouse leave.
 * 
 * Expected HTML:
 * <div id="colorBox" style="width: 100px; height: 100px; border: 1px solid black;"></div>
 */

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("colorBox");

    if (box) {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "yellow";
        });

        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "white"; // or initial color
        });
    }
});
