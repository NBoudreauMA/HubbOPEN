<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HubbBudget - Town of Hubbardston</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script defer src="script.js"></script>
</head>
<body>
    <header class="hero">
        <div class="hero-content">
            <img src="https://www.hubbardstonma.gov/sites/all/themes/custom/sites/hubbardstonma/vts_hubbardstonma/logo.png" alt="Hubbardston Seal" class="town-seal">
            <h1>HubbBudget - Fiscal Year 2026</h1>
            <p>📊 A modern, interactive, and transparent digital budget for Hubbardston 📊</p>
        </div>
    </header>

    <nav class="navbar">
        <ul class="nav-links">
            <li><a href="#message">🏛 TA Message</a></li>
            <li><a href="#executive-summary">📑 Executive Summary</a></li>
            <li><a href="#revenue">💰 Revenue</a></li>
            <li><a href="#expenditures">📉 Expenditures</a></li>
            <li><a href="#capital">🏗 Capital Plan</a></li>
            <li><a href="#long-term">📈 Long-Term Outlook</a></li>
            <li><a href="#info">ℹ️ More Info</a></li>
        </ul>
    </nav>

    <section class="dashboard-section" id="message">
        <button class="toggle-box">👋 Town Administrator’s Message</button>
        <div class="toggle-content">
            <p>Welcome to the **next-generation budget experience** for Hubbardston! Our goal is to make **finance approachable, data-driven, and engaging**. This interactive budget book puts **real-time data, strategic investments, and financial transparency** right at your fingertips.</p>
        </div>
    </section>

    <section class="dashboard-section" id="executive-summary">
        <button class="toggle-box">📑 Executive Summary</button>
        <div class="toggle-content">
            <p>Quick glance at **Hubbardston's financial health** and **major priorities**:</p>
            <ul>
                <li><strong>Total Budget:</strong> 💵 $XX,XXX,XXX</li>
                <li><strong>Revenue Growth:</strong> 📈 X%</li>
                <li><strong>Key Investments:</strong> 🚔 Public Safety, 🏫 Education, 🏗 Infrastructure</li>
            </ul>
        </div>
    </section>

    <section class="dashboard-section" id="revenue">
        <button class="toggle-box">💰 Revenue Overview</button>
        <div class="toggle-content">
            <p>Where does **our money come from**? Property taxes, state aid, and local receipts fuel our community.</p>
            <div class="chart-grid">
                <div class="chart-box"><canvas id="revenueBarChart"></canvas></div>
                <div class="chart-box"><canvas id="revenuePieChart"></canvas></div>
            </div>
        </div>
    </section>

    <section class="dashboard-section" id="expenditures">
        <button class="toggle-box">📉 Expenditure Overview</button>
        <div class="toggle-content">
            <p>Where does **our money go**? Hubbardston prioritizes education, public safety, and municipal services.</p>
            <div class="chart-box"><canvas id="expenditureChart"></canvas></div>
        </div>
    </section>

    <section class="dashboard-section" id="capital">
        <button class="toggle-box">🏗 Capital Improvement Plan</button>
        <div class="toggle-content">
            <p>🌟 Smart investments in **public safety, roads, and technology** to keep Hubbardston growing.</p>
            <ul>
                <li>🚒 **Public Safety HQ:** $X.XM</li>
                <li>🛣 **Road Upgrades:** $X.XM</li>
                <li>💻 **Digital Transformation:** $X.XM</li>
            </ul>
        </div>
    </section>

    <section class="dashboard-section" id="long-term">
        <button class="toggle-box">📈 Long-Term Financial Outlook</button>
        <div class="toggle-content">
            <p>🔮 **Strategic forecasting** for future stability, focusing on **sustainable revenue sources** and **controlled spending.**</p>
        </div>
    </section>

    <footer>
        <p>🚀 Built for **transparency, engagement, and clarity** | © 2025 Town of Hubbardston - HubbBudget 🚀</p>
    </footer>
</body>
</html>
