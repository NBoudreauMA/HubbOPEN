document.addEventListener("DOMContentLoaded", function () {
    function toggleSection(element) {
        let content = element.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    }

    window.toggleSection = toggleSection;

    // Revenue Chart
    const revCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revCtx, {
        type: 'bar',
        data: {
            labels: ['Taxes', 'State Aid', 'Fees & Permits', 'Other Revenue'],
            datasets: [{
                label: 'Revenue Sources ($M)',
                data: [9.2, 2.5, 1.8, 1.3],
                backgroundColor: ['#2a7d2e', '#1e5b24', '#ffd700', '#555']
            }]
        }
    });
});
