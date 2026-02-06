

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
