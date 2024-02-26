document.addEventListener('DOMContentLoaded', function() {
    const jsonData = [
        {
            "r030": 840,
            "txt": "Долар США",
            "rate": 38.3527,
            "cc": "USD",
            "exchangedate": "26.02.2024"
        },
        {
            "r030": 978,
            "txt": "Євро",
            "rate": 41.5628,
            "cc": "EUR",
            "exchangedate": "26.02.2024"
        }
    ];

    const currencyRatesDiv = document.getElementById('currency-rates');

    jsonData.forEach(currencyData => {
        const currencyRateDiv = document.createElement('div');
        currencyRateDiv.innerHTML = `<strong>${currencyData.txt}</strong>: ${currencyData.rate.toFixed(4)} ${currencyData.cc}`;
        currencyRatesDiv.appendChild(currencyRateDiv);
    });
});