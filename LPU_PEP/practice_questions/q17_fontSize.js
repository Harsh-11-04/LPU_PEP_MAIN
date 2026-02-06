/**
 * Part B: Events (Q17)
 * 17. Increase font size of text when a button is clicked.
 * 
 * Expected HTML:
 * <p id="textToResize">Some text here</p>
 * <button id="resizeBtn">Increase Font</button>
 */

document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("textToResize");
    const btn = document.getElementById("resizeBtn");

    if (text && btn) {
        btn.addEventListener("click", () => {
            const currentSize = parseFloat(window.getComputedStyle(text).fontSize);
            text.style.fontSize = (currentSize + 2) + "px";
        });
    }
});
