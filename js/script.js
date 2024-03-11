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

function startAnimation() {
  const car = document.getElementById('car');
  const road = document.getElementById('road');
  const inputColumn = document.getElementById('inputColumn');

  car.classList.add('clicked'); // Запускаем анимацию машины
  
  // После окончания анимации машины, скрываем дорогу и показываем колонку с инпутами
  setTimeout(() => {
    road.style.opacity = '0';
    inputColumn.style.opacity = '1';
    createInputs(); // Создаем инпуты
  }, 1000); // Длительность анимации машины
}

// Функция для создания инпутов
function createInputs() {
  const inputColumn = document.getElementById('inputColumn');

  for (let i = 0; i < 5; i++) { // Создаем 5 инпутов
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите данные';
    inputColumn.appendChild(input);
  }
}

