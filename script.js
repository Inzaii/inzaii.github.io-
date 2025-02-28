document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт завантажено успішно!");

    const heroImage = document.querySelector(".hero img");
    heroImage.addEventListener("mouseenter", () => {
        heroImage.style.transform = "scale(1.1)";
    });

    heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform = "scale(1)";
    });
});
