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

    // ===== Ensure Event Listeners Attach Properly =====
    function attachToggleListeners() {
        document.querySelectorAll(".toggle-content").forEach(content => {
            content.style.display = "none"; // Ensure all sections start hidden
        });

        document.querySelectorAll(".toggle-box").forEach(button => {
            button.removeEventListener("click", toggleSection); // Prevent duplicate listeners
            button.addEventListener("click", toggleSection);
        });

        console.log("Toggle event listeners attached!");
    }

    function toggleSection() {
        console.log("Toggle clicked:", this.innerText);
        const content = this.nextElementSibling;
        if (content) {
            content.style.display = (content.style.display === "block") ? "none" : "block";
            console.log("Toggled:", content.style.display);
        }
    }

    // Ensure event listeners attach properly even after page load delays
    setTimeout(attachToggleListeners, 500);

    // ===== Chart.js Fix (Destroy Old Charts Before Creating New Ones) =====
    let charts = {};

    function createChart(chartId, chartData) {
        const canvas = document.getElementById(chartId);
        if (canvas) {
            const ctx = canvas.getContext("2d");

            if (charts[chartId]) {
                charts[chartId].destroy();
            }

            charts[chartId] = new Chart(ctx, chartData);
        }
    }

    // ===== Load Charts Only When Visible =====
    function initChartsIfVisible() {
        const revenueCanvas = document.getElementById("revenueChart");
        const expenditureCanvas = document.getElementById("expenditureChart");

        if (revenueCanvas && revenueCanvas.offsetParent !== null) {
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
        }

        if (expenditureCanvas && expenditureCanvas.offsetParent !== null) {
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
        }
    }

    // Initialize Charts When Sections Expand
    document.querySelectorAll(".toggle-box").forEach(button => {
        button.addEventListener("click", function () {
            setTimeout(initChartsIfVisible, 300);
        });
    });

    initChartsIfVisible();
});
