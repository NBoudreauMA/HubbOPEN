function createChart(chartId, chartData) {
    const canvas = document.getElementById(chartId);
    if (canvas) {
        const ctx = canvas.getContext("2d");

        // ✅ Fully Destroy Chart Before Creating a New One
        if (Chart.getChart(canvas)) {  
            console.log(`Destroying existing chart: ${chartId}`);
            Chart.getChart(canvas).destroy();
            charts[chartId] = null; // Clear reference
        }

        // ✅ Clear the Canvas Before Redrawing
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

        // ✅ Create new chart
        charts[chartId] = new Chart(ctx, chartData);
        console.log(`Chart created: ${chartId}`);
    }
}
