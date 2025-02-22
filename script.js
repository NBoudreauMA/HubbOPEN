document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    // ===== Mobile Menu Toggle =====
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ===== Toggle Functionality (Fix for Expanding Sections) =====
    document.querySelectorAll(".toggle-content").forEach(content => {
        content.style.display = "none"; // Ensure all sections start hidden
    });

    document.querySelectorAll(".toggle-box").forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (content) {
                content.style.display = (content.style.display === "block") ? "none" : "block";
            }
        });
    });

    document.querySelectorAll(".sub-toggle-content").forEach(content => {
        content.style.display = "none"; // Ensure nested sections are hidden initially
    });

    document.querySelectorAll(".sub-toggle-box").forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (content) {
                content.style.display = (content.style.display === "block") ? "none" : "block";
            }
        });
    });

    // ===== Chart.js Fix (Destroy Existing Charts Before Re-Creating) =====
    let charts = {};

    function createChart(chartId, chartData) {
        const canvas = document.getElementById(chartId);
        if (canvas) {
            const ctx = canvas.getContext("2d");

            // Destroy the existing chart if it exists
            if (charts[chartId]) {
                charts[chartId].destroy();
            }

            charts[chartId] = new Chart(ctx, chartData);
        }
    }

    // Revenue Chart
    createChart("revenueChart", {
        type: "bar",
        data: {
            labels: ["Tax Levy", "State Aid", "Local Receipts"],
            datasets: [{
                label: "FY23 Actual",
                data: [8052778, 668674, 1364392],
                backgroundColor: "#2a7d2e"
            }, {
                label: "FY24 Actual",
                data: [8425343, 682452, 1478687],
                backgroundColor: "#1e5b24"
            }, {
                label: "FY25 Budget",
                data: [8852568, 711871, 1502964],
                backgroundColor: "#34d399"
            }, {
                label: "FY26 Proposed",
                data: [9276259, 730906, 1619684],
                backgroundColor: "#ffd700"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 3,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': $' + context.raw.toLocaleString();
                        }
                    }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Expenditure Chart
    createChart("expenditureChart", {
        type: "bar",
        data: {
            labels: ["General Gov", "Public Safety", "Education", "Public Works"],
            datasets: [{
                label: "FY23 Actual",
                data: [1150000, 2400000, 4800000, 1700000],
                backgroundColor: "#2a7d2e"
            }, {
                label: "FY24 Actual",
                data: [1180000, 2450000, 4900000, 1750000],
                backgroundColor: "#1e5b24"
            }, {
                label: "FY25 Budget",
                data: [1190000, 2480000, 4950000, 1780000],
                backgroundColor: "#34d399"
            }, {
                label: "FY26 Proposed",
                data: [1200000, 2500000, 5000000, 1800000],
                backgroundColor: "#ffd700"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 3,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': $' + context.raw.toLocaleString();
                        }
                    }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

});
