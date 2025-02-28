document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Ваше повідомлення надіслано!");
            form.reset();
        });
    }

    const icons = document.querySelectorAll(".icon");
    icons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.color = "#ff9a9e";
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "0.3s ease-in-out";
        });
        icon.addEventListener("mouseout", () => {
            icon.style.color = "#000";
            icon.style.transform = "scale(1)";
        });
    });

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff9a9e";
            link.style.transition = "0.3s ease";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
        });
    });
});
