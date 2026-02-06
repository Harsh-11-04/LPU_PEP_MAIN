
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
