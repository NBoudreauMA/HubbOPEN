// Script to dynamically update the FY26 Budget Portal

document.addEventListener("DOMContentLoaded", function() {
    function fetchAndDisplayData(csvFile, elementId, columnIndex) {
        fetch(csvFile)
            .then(response => response.text())
            .then(text => {
                const lines = text.split("\n");
                const value = lines[lines.length - 1].split(",")[columnIndex];
                document.getElementById(elementId).textContent = `$${parseInt(value).toLocaleString()}`;
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    fetchAndDisplayData("revenue_data.csv", "total-revenue", 4);
    fetchAndDisplayData("expenditures_cleaned.csv", "total-expenditures", 6);
    
    // Fetch and display budget breakdown table
    fetch("expenditures_cleaned.csv")
        .then(response => response.text())
        .then(text => {
            const lines = text.split("\n").slice(1, -1);
            let tableContent = "";
            
            lines.forEach(line => {
                const cols = line.split(",");
                if (cols.length > 6) {
                    tableContent += `<tr><td>${cols[0]}</td><td>$${parseInt(cols[6]).toLocaleString()}</td></tr>`;
                }
            });
            document.getElementById("budget-table").innerHTML = tableContent;
        })
        .catch(error => console.error("Error fetching budget data:", error));
});
