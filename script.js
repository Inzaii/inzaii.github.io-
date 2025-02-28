document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            document.body.appendChild(overlay);

            const popup = document.createElement("div");
            popup.classList.add("popup");
            const newImg = document.createElement("img");
            newImg.src = this.src;
            popup.appendChild(newImg);
            overlay.appendChild(popup);

            overlay.addEventListener("click", function () {
                overlay.remove();
            });
        });
    });
});
