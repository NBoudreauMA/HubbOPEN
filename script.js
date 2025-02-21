:root {
    --primary-color: #2a7d2e;
    --secondary-color: #1e5b24;
    --accent-color: #ffd700;
    --text-color: #333;
    --background-color: #f5f5f5;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
}

.navbar {
    background-color: var(--primary-color);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo img {
    height: 50px;
}

.nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent-color);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

.hero {
    background-color: var(--secondary-color);
    color: white;
    text-align: center;
    padding: 4rem 2rem;
}

.hero h1 {
    margin: 0;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.dashboard-section {
    margin: 2rem auto;
    max-width: 1200px;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.toggle-box {
    width: 100%;
    padding: 1rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    text-align: left;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.toggle-box:hover {
    background-color: var(--secondary-color);
}

.toggle-content {
    padding: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

#revenueChart {
    height: 300px !important;
    max-height: 300px;
    width: 100% !important;
    margin: 20px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
}

th, td {
    padding: 0.75rem;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    background-color: var(--primary-color);
    color: white;
}

footer {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        width: 100%;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--primary-color);
        padding: 1rem;
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links li {
        margin: 0.5rem 0;
    }
}

canvas {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
}
