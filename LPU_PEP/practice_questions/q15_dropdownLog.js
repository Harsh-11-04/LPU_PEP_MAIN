
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("mySelect");

    if (select) {
        select.addEventListener("change", (event) => {
            console.log("Selected value:", event.target.value);
        });
    }
});
