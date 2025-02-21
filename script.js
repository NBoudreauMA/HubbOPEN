document.addEventListener("DOMContentLoaded", function () {
    // Revenue Chart
    const ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Taxes', 'State Aid', 'Fees & Permits', 'Other Revenue'],
            datasets: [{
                label: 'Revenue Sources ($M)',
                data: [9.2, 2.5, 1.8, 1.3],
                backgroundColor: ['#2a7d2e', '#1e5b24', '#ffd700', '#555']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Animated Cards
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.addEventListener('mouseover', () => {
            gsap.to(section, { scale: 1.02, duration: 0.3 });
        });
        section.addEventListener('mouseleave', () => {
            gsap.to(section, { scale: 1, duration: 0.3 });
        });
    });
});
