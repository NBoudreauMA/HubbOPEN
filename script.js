document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Section toggles - All Start Closed
    document.querySelectorAll(".toggle-content").forEach(content => {
        content.style.display = "none";
    });

    document.querySelectorAll(".toggle-box").forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
            
            // If this is a chart section, trigger a resize to fix chart display
            if (content.querySelector('canvas')) {
                window.dispatchEvent(new Event('resize'));
            }
        });
    });

    // Sub-section toggles
    document.querySelectorAll(".sub-toggle-content").forEach(content => {
        content.style.display = "none";
    });

    document.querySelectorAll(".sub-toggle-box").forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    // Create Charts
    const createCharts = () => {
        try {
            // Destroy existing charts if they exist
            if (window.revenueChart) {
                window.revenueChart.destroy();
            }
            if (window.revenuePieChart) {
                window.revenuePieChart.destroy();
            }
            if (window.expenditureChart) {
                window.expenditureChart.destroy();
            }

            // Revenue Bar Chart
            const revenueCtx = document.getElementById("revenueBarChart")?.getContext("2d");
            if (revenueCtx) {
                window.revenueChart = new Chart(revenueCtx, {
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
                        plugins: {
                            title: {
                                display: true,
                                text: 'Revenue Trends By Year',
                                font: {
                                    size: 16
                                }
                            },
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
                        }
                    }
                });
            }

            // Revenue Pie Chart
            const revenuePieCtx = document.getElementById("revenuePieChart")?.getContext("2d");
            if (revenuePieCtx) {
                window.revenuePieChart = new Chart(revenuePieCtx, {
                    type: 'pie',
                    data: {
                        labels: ['Tax Levy', 'State Aid', 'Local Receipts'],
                        datasets: [{
                            data: [9276259, 730906, 1619684], // FY26 numbers
                            backgroundColor: [
                                '#2a7d2e',
                                '#1e5b24',
                                '#34d399'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'FY26 Revenue Distribution',
                                font: {
                                    size: 16
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const value = context.raw;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = ((value / total) * 100).toFixed(1);
                                        return `${context.label}: $${value.toLocaleString()} (${percentage}%)`;
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

            // Expenditure Chart
            const expenditureCtx = document.getElementById("expenditureChart")?.getContext("2d");
            if (expenditureCtx) {
                window.expenditureChart = new Chart(expenditureCtx, {
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
                        plugins: {
                            title: {
                                display: true,
                                text: 'Expenditure Trends By Year',
                                font: {
                                    size: 16
                                }
                            },
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
                        }
                    }
                });
            }
        } catch (error) {
            console.error("Error creating charts:", error);
        }
    };

    // Initialize charts
    createCharts();

    // Handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Open the section if it's closed
                const content = targetElement.querySelector('.toggle-content');
                if (content && content.style.display === 'none') {
                    content.style.display = 'block';
                }
            }
        });
    });

    // Handle window resize for charts
    window.addEventListener('resize', () => {
        if (window.revenueChart) {
            window.revenueChart.resize();
        }
        if (window.revenuePieChart) {
            window.revenuePieChart.resize();
        }
        if (window.expenditureChart) {
            window.expenditureChart.resize();
        }
    });
});
