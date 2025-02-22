document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Initialize Charts if Canvas Elements Exist
    if (window.Chart) {
        const revenueBarCtx = document.getElementById("revenueBarChart");
        const revenuePieCtx = document.getElementById("revenuePieChart");
        const expenditureCtx = document.getElementById("expenditureChart");

        if (revenueBarCtx) {
            new Chart(revenueBarCtx, {
                type: "bar",
                data: {
                    labels: ["Taxes", "State Aid", "Local Receipts"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [500000, 200000, 100000],
                            backgroundColor: ["#2a7d2e", "#1e5b24", "#ffd700"],
                        },
                    ],
                },
                options: { responsive: true },
            });
        }

        if (revenuePieCtx) {
            new Chart(revenuePieCtx, {
                type: "pie",
                data: {
                    labels: ["Taxes", "State Aid", "Local Receipts"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [500000, 200000, 100000],
                            backgroundColor: ["#2a7d2e", "#1e5b24", "#ffd700"],
                        },
                    ],
                },
                options: { responsive: true },
            });
        }

        if (expenditureCtx) {
            new Chart(expenditureCtx, {
                type: "doughnut",
                data: {
                    labels: ["Education", "Public Safety", "Infrastructure"],
                    datasets: [
                        {
                            label: "Expenditures",
                            data: [600000, 300000, 150000],
                            backgroundColor: ["#2a7d2e", "#1e5b24", "#ffd700"],
                        },
                    ],
                },
                options: { responsive: true },
            });
        }
    }
});
