document.addEventListener("DOMContentLoaded", function() {
    function fetchAndDisplayData(csvFile, elementId, columnIndex) {
        fetch(csvFile)
            .then(response => response.text())
            .then(text => {
                const lines = text.split("\n").filter(line => line.trim() !== ""); // Remove empty lines
                const headers = lines[0].split(","); // Get column headers
                const lastRow = lines[lines.length - 1].split(",");

                let value = lastRow[columnIndex].replace(/[$,]/g, ""); // Remove dollar signs and commas

                if (!isNaN(value) && value.trim() !== "") {
                    document.getElementById(elementId).textContent = `$${parseInt(value).toLocaleString()}`;
                } else {
                    document.getElementById(elementId).textContent = "Data Error";
                    console.error(`Parsing error in ${csvFile} for column: ${headers[columnIndex]}`);
                }
            })
            .catch(error => console.error(`Error fetching ${csvFile}:`, error));
    }

    fetchAndDisplayData("revenue_data.csv", "total-revenue", 4); // Adjust column number if needed
    fetchAndDisplayData("expenditures_cleaned.csv", "total-expenditures", 6); // Adjust column number if needed

    // Fetch and display budget breakdown table
    fetch("expenditures_cleaned.csv")
        .then(response => response.text())
        .then(text => {
            const lines = text.split("\n").slice(1).filter(line => line.trim() !== "");
            let tableContent = "";

            lines.forEach(line => {
                const cols = line.split(",");
                if (cols.length > 6) {
                    let category = cols[0].trim();
                    let amount = cols[6].replace(/[$,]/g, ""); // Remove formatting

                    if (!isNaN(amount) && amount.trim() !== "") {
                        tableContent += `<tr><td>${category}</td><td>$${parseInt(amount).toLocaleString()}</td></tr>`;
                    } else {
                        tableContent += `<tr><td>${category}</td><td>Error</td></tr>`;
                        console.error(`Data issue in expenditures_cleaned.csv: ${cols}`);
                    }
                }
            });

            document.getElementById("budget-table").innerHTML = tableContent;
        })
        .catch(error => console.error("Error fetching budget data:", error));
});
