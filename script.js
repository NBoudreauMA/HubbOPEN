document.addEventListener("DOMContentLoaded", function () {
    
    // 📌 Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // 📌 Section Toggles (Ensure All Start Closed)
    document.querySelectorAll(".toggle-content").forEach(content => {
        content.style.display = "none";
    });

    document.querySelectorAll(".toggle-box").forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    });

    // 📌 Revenue Chart
    const revenueCtx = document.getElementById("revenueChart").getContext("2d");
    new Chart(revenueCtx, {
        type: "bar",
        data: {
            labels: ["Tax Levy", "State Aid", "Local Receipts"],
            datasets: [{
                label: "Revenue ($M)",
                data: [9.2, 2.5, 1.8], // Updated values
                backgroundColor: ["#2a7d2e", "#1e5b24", "#ffd700"],
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

});
