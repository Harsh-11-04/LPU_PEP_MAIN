

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
