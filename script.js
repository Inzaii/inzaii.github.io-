document.addEventListener("DOMContentLoaded", function () {
    // Анімація з'явлення секцій
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2,
    };
    
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Прокрутка до секцій при кліці на меню
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
