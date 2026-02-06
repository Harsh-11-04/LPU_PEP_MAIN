

document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("myImage");
    const btn = document.getElementById("switchBtn");

    if (img && btn) {
        let isImage1 = true;
        btn.addEventListener("click", () => {
            if (isImage1) {
                img.src = "image2.jpg";
            } else {
                img.src = "image1.jpg";
            }
            isImage1 = !isImage1;
        });
    }
});
