document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт завантажено успішно!");

    const workItems = document.querySelectorAll(".work-item");

    workItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-10px)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0)";
        });
    });
});
