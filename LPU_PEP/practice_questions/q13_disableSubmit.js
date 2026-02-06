

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("termsCheckbox");
    const submitBtn = document.getElementById("submitBtn");

    if (checkbox && submitBtn) {
        checkbox.addEventListener("change", function () {
            submitBtn.disabled = !this.checked;
        });
    }
});
