

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", function () {
            this.textContent = "Clicked!";
        });
    }
});
