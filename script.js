document.addEventListener("DOMContentLoaded", function () {
    
    // 📌 Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // 📌 Section Toggle Functionality
    function toggleSection(button) {
        const content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }

    const toggleButtons = document.querySelectorAll(".toggle-box");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            toggleSection(this);
        });
    });

});
