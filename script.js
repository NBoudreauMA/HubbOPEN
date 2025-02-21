document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Section toggles
    document.querySelectorAll(".toggle-content").forEach(content => {
        content.style.display = "none";
    });

    document.querySelectorAll(".toggle-box").forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    // Revenue Chart
    const revenueCtx = document.getElementById("revenueChart").getContext("2d");
    new Chart(revenueCtx, {
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
            layout: {
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
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
    const expenditureCtx = document.getElementById("expenditureChart").getContext("2d");
    new Chart(expenditureCtx, {
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
            layout: {
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
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
