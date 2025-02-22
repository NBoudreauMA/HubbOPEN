document.addEventListener("DOMContentLoaded", function () {
    // ===== Mobile Menu Toggle =====
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ===== Section Toggles =====
    document.querySelectorAll(".toggle-content").forEach(content => {
        content.style.display = "none";
    });

    document.querySelectorAll(".toggle-box").forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (content) {
                content.style.display = content.style.display === "block" ? "none" : "block";
            }
        });
    });

    // ===== Sub-Toggles for Nested Sections =====
    document.querySelectorAll(".sub-toggle-box").forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (content) {
                content.style.display = content.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Ensure all sub-toggle contents are initially hidden
    document.querySelectorAll(".sub-toggle-content").forEach(content => {
        content.style.display = "none";
    });

    // ===== Chart.js Fix: Properly Destroy Old Charts Before Creating New Ones =====
    let revenueChartInstance, expenditureChartInstance;

    function createRevenueChart() {
        const revenueCanvas = document.getElementById("revenueChart");

        if (revenueCanvas) {
            const revenueCtx = revenueCanvas.getContext("2d");

            // Destroy the existing chart instance if it exists
            if (revenueChartInstance) {
                revenueChartInstance.destroy();
            }

            revenueChartInstance = new Chart(revenueCtx, {
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
        }
    }

    function createExpenditureChart() {
        const expenditureCanvas = document.getElementById("expenditureChart");

        if (expenditureCanvas) {
            const expenditureCtx = expenditureCanvas.getContext("2d");

            // Destroy the existing chart instance if it exists
            if (expenditureChartInstance) {
                expenditureChartInstance.destroy();
            }

            expenditureChartInstance = new Chart(expenditureCtx, {
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
        }
    }

    // Initialize Charts After DOM Loads
    createRevenueChart();
    createExpenditureChart();
});
