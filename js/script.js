function fetchCurrencyRates() {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(response => response.json())
        .then(data => {
            updateCurrencyRates(data);
        })
        .catch(error => console.error('Ошибка получения данных о курсах валют:', error));
}

function updateCurrencyRates(data) {
    const currencyRatesDiv = document.getElementById('currency-rates');
    currencyRatesDiv.innerHTML = ''; // Очищаем предыдущие данные

    const selectedCurrencies = ['USD', 'EUR'];

    selectedCurrencies.forEach(currencyCode => {
        const currencyData = data.find(item => item.cc === currencyCode);
        if (currencyData) {
            const currencyRateDiv = document.createElement('div');
            currencyRateDiv.innerHTML = `${currencyData.cc} &nbsp; ${currencyData.rate.toFixed(4)}`;
            currencyRatesDiv.appendChild(currencyRateDiv);
        }
    });
}

// Получаем данные о курсах валют при загрузке страницы
document.addEventListener('DOMContentLoaded', fetchCurrencyRates);

// Обновляем данные каждый день (86400000 миллисекунд в сутках)
setInterval(fetchCurrencyRates, 86400000);