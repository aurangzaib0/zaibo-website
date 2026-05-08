function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.toggle("show");
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll("#projects article");

    projects.forEach(project => {
        if (
            category === "all" ||
            project.classList.contains(category)
        ) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

const projectImages = document.querySelectorAll("#projects img");

projectImages.forEach(image => {
    image.addEventListener("click", function () {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";

        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${this.src}" alt="${this.alt}">
            </div>
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", function () {
            lightbox.remove();
        });
    });
});

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    contactForm.reset();
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

console.log("JavaScript loaded successfully.");