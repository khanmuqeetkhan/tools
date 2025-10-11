const currentYear = 2025;

document.getElementById('enableContributions').addEventListener('change', function() {
    document.getElementById('contributionGroup').style.display = this.checked ? 'block' : 'none';
});

function toggleSettings() {
    const drawer = document.getElementById('settingsDrawer');
    const overlay = document.getElementById('overlay');
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
}

function calculate() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const startYear = parseInt(document.getElementById('startYear').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100;
    const crashFrequency = parseInt(document.getElementById('crashFrequency').value);
    const crashImpact = parseFloat(document.getElementById('crashImpact').value) / 100;
    const enableContributions = document.getElementById('enableContributions').checked;
    const annualContribution = enableContributions ? parseFloat(document.getElementById('annualContribution').value) : 0;
    const inflationRate = parseFloat(document.getElementById('inflationRate').value) / 100;

    let balance = initialAmount;
    const years = [];
    const endYear = startYear + 50;

    for (let year = startYear; year <= endYear; year++) {
        const yearsSinceStart = year - startYear;
        const isCrash = yearsSinceStart > 0 && yearsSinceStart % crashFrequency === 0;

        if (yearsSinceStart === 0) {
            years.push({
                year: year,
                balance: balance,
                growth: 0,
                isCrash: false,
                isCurrent: year === currentYear
            });
        } else {
            if (isCrash) {
                balance = balance * (1 - crashImpact);
            } else {
                balance = balance * (1 + annualReturn);
            }

            if (enableContributions && yearsSinceStart > 0) {
                balance += annualContribution;
            }

            const growth = ((balance - initialAmount) / initialAmount) * 100;

            years.push({
                year: year,
                balance: balance,
                growth: growth,
                isCrash: isCrash,
                isCurrent: year === currentYear
            });
        }
    }

    displayResults(years, initialAmount, annualContribution, inflationRate);
}

function displayResults(years, initialAmount, annualContribution, inflationRate) {
    const summaryDiv = document.getElementById('summary');
    const resultsDiv = document.getElementById('results');

    const finalBalance = years[years.length - 1].balance;
    const totalGrowth = ((finalBalance - initialAmount) / initialAmount) * 100;
    const currentYearData = years.find(y => y.year === currentYear);
    const currentBalance = currentYearData ? currentYearData.balance : 0;

    const totalContributed = initialAmount + (annualContribution * 50);

    summaryDiv.innerHTML = `
        <div class="summary-card">
            <h3>Initial Investment</h3>
            <div class="value">$${initialAmount.toLocaleString()}</div>
        </div>
        <div class="summary-card">
            <h3>Current Value (${currentYear})</h3>
            <div class="value">$${Math.round(currentBalance).toLocaleString()}</div>
        </div>
        <div class="summary-card">
            <h3>Final Value (50 years)</h3>
            <div class="value">$${Math.round(finalBalance).toLocaleString()}</div>
        </div>
        <div class="summary-card">
            <h3>Total Growth</h3>
            <div class="value">${Math.round(totalGrowth)}%</div>
        </div>
    `;

    let html = `
        <div class="year-row header-row">
            <div>Year</div>
            <div>Status</div>
            <div>Balance</div>
            <div>Growth</div>
        </div>
    `;

    years.forEach(yearData => {
        const rowClass = yearData.isCrash ? 'crash-year' : (yearData.isCurrent ? 'current-year' : '');
        const badge = yearData.isCrash ? '<span class="crash-badge">📉 Crash</span>' :
                     (yearData.isCurrent ? '<span class="current-badge">📍 Today</span>' : '');

        html += `
            <div class="year-row ${rowClass}">
                <div>${yearData.year}</div>
                <div>${badge}</div>
                <div class="amount">$${Math.round(yearData.balance).toLocaleString()}</div>
                <div class="growth">${yearData.growth > 0 ? '+' : ''}${Math.round(yearData.growth)}%</div>
            </div>
        `;
    });

    resultsDiv.innerHTML = html;
}

window.onload = () => calculate();