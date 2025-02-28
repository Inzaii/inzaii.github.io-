document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Ваше повідомлення надіслано!");
        form.reset();
    });

    const icons = document.querySelectorAll(".icon");
    icons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.color = "#ff9a9e";
        });
        icon.addEventListener("mouseout", () => {
            icon.style.color = "#000";
        });
    });
});
