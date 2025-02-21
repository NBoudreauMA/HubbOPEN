document.addEventListener("DOMContentLoaded", function () {
    // Animated Expenditures Section
    document.querySelectorAll('.exp-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            gsap.to(card, { scale: 1.1, duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });
    });

    // Revenue Chart
    const ctx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctx, {
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
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
