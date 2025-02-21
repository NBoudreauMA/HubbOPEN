document.addEventListener("DOMContentLoaded", function () {
    // Toggle Section Functionality
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

    // Expenditure Chart
    const expCtx = document.getElementById('expenditureChart').getContext('2d');
    new Chart(expCtx, {
        type: 'pie',
        data: {
            labels: ['Public Safety', 'Education', 'Public Works', 'General Government'],
            datasets: [{
                label: 'Expenditures ($M)',
                data: [5.1, 12.8, 4.3, 2.6],
                backgroundColor: ['#ff5733', '#ffd700', '#2a7d2e', '#1e5b24']
            }]
        }
    });

    // Capital Improvement Chart
    const capCtx = document.getElementById('capitalChart').getContext('2d');
    new Chart(capCtx, {
        type: 'line',
        data: {
            labels: ['2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Capital Spending ($M)',
                data: [1.2, 2.5, 3.0, 3.8],
                borderColor: '#2a7d2e',
                fill: false
            }]
        }
    });
});
