// Function to calculate Business Zakat
function calculateBusinessZakat() {
    const income = parseFloat(document.getElementById('business-income').value);
    if (isNaN(income) || income <= 0) {
        document.getElementById('business-zakat-result').innerText = "Please enter a valid income.";
        return;
    }
    const nisab = 1000; // Assume a nisab for business zakat
    let zakat = 0;
    if (income >= nisab) {
        zakat = income * 0.025; // Zakat rate is 2.5%
    }
    document.getElementById('business-zakat-result').innerText = `Business Zakat: RM ${zakat.toFixed(2)}`;
    updateZakatSummary('Business Zakat', income, zakat);
}

// Function to calculate Income Zakat
function calculateIncomeZakat() {
    const income = parseFloat(document.getElementById('income').value);
    if (isNaN(income) || income <= 0) {
        document.getElementById('income-zakat-result').innerText = "Please enter a valid income.";
        return;
    }
    const nisab = 2500; // Assume a nisab for income zakat
    let zakat = 0;
    if (income >= nisab) {
        zakat = income * 0.025; // Zakat rate is 2.5%
    }
    document.getElementById('income-zakat-result').innerText = `Income Zakat: RM ${zakat.toFixed(2)}`;
    updateZakatSummary('Income Zakat', income, zakat);
}

// Function to calculate Gold Zakat
function calculateGoldZakat() {
    const weight = parseFloat(document.getElementById('gold-weight').value);
    if (isNaN(weight) || weight <= 0) {
        document.getElementById('gold-zakat-result').innerText = "Please enter a valid weight.";
        return;
    }
    const nisab = 85; // Nisab for gold is around 85 grams
    let zakat = 0;
    if (weight >= nisab) {
        zakat = weight * 0.025; // Zakat rate for gold is 2.5%
    }
    document.getElementById('gold-zakat-result').innerText = `Gold Zakat: RM ${zakat.toFixed(2)}`;
    updateZakatSummary('Gold Zakat', weight, zakat);
}

// Function to calculate Savings Zakat
function calculateSavingsZakat() {
    const savings = parseFloat(document.getElementById('savings').value);
    if (isNaN(savings) || savings <= 0) {
        document.getElementById('savings-zakat-result').innerText = "Please enter a valid savings amount.";
        return;
    }
    const nisab = 3000; // Assume a nisab for savings zakat
    let zakat = 0;
    if (savings >= nisab) {
        zakat = savings * 0.025; // Zakat rate for savings is 2.5%
    }
    document.getElementById('savings-zakat-result').innerText = `Savings Zakat: RM ${zakat.toFixed(2)}`;
    updateZakatSummary('Savings Zakat', savings, zakat);
}

// Function to update the Zakat Summary Table
function updateZakatSummary(type, amount, zakat) {
    const table = document.getElementById('zakat-summary-table');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${type}</td><td>RM ${amount.toFixed(2)}</td><td>RM ${zakat.toFixed(2)}</td>`;
    table.appendChild(row);
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

// Function to toggle between normal, deuteranopia, and tritanopia themes
function toggleTheme() {
    let body = document.body;

    if (body.classList.contains('normal-theme')) {
        body.classList.remove('normal-theme');
        body.classList.add('deuteranopia-theme');
        localStorage.setItem('theme', 'deuteranopia');
        document.getElementById('colorBlindToggle').innerText = "Enable Tritanopia Mode";
    } 
    else if (body.classList.contains('deuteranopia-theme')) {
        body.classList.remove('deuteranopia-theme');
        body.classList.add('tritanopia-theme');
        localStorage.setItem('theme', 'tritanopia');
        document.getElementById('colorBlindToggle').innerText = "Disable Color-Blind Mode";
    } 
    else {
        body.classList.remove('tritanopia-theme');
        body.classList.add('normal-theme');
        localStorage.setItem('theme', 'normal');
        document.getElementById('colorBlindToggle').innerText = "Enable Deuteranopia Mode";
    }
}

// Function to load the saved theme preference
function loadThemePreference() {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'deuteranopia') {
        document.body.classList.add('deuteranopia-theme');
        document.getElementById('colorBlindToggle').innerText = "Enable Tritanopia Mode";
    } 
    else if (savedTheme === 'tritanopia') {
        document.body.classList.add('tritanopia-theme');
        document.getElementById('colorBlindToggle').innerText = "Disable Color-Blind Mode";
    } 
    else {
        document.body.classList.add('normal-theme');
        document.getElementById('colorBlindToggle').innerText = "Enable Deuteranopia Mode";
    }
}

// Run the theme preference loader on page load
document.addEventListener('DOMContentLoaded', loadThemePreference);
