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

const car = document.querySelector('.car');
const road = document.querySelector('.road');


const containerWidth = road.offsetWidth;
const carWidth = car.offsetWidth;

let currentPosition = 0;
let speed = 2; // Скорость движения объекта, можно изменить на другое значение

function moveCar() {
  currentPosition += speed;
  if (currentPosition > containerWidth - carWidth) {
    currentPosition = 0;
  }
  car.style.left = currentPosition + 'px';
}

car.addEventListener('click', function() {
  car.classList.toggle('clicked'); // Добавляем или убираем класс 'clicked' при клике
  setTimeout(() => {
    road.style.opacity = '0';
    road.style.width = "0";
    road.style.height = "0";
    inputColumn.style.opacity = '1';
    toggleClass();
    }, 1000);
});

function toggleClass() {
  const taxes = document.querySelector('.taxes');
  setTimeout(() => {
    taxes.classList.toggle('none');
  }, 1000);
}