// Объект с текущими валютами
const currency = {
    silver: 1000,
    gold: 1000,
    diamonds: 1000,
    tickets: 1000
};

// Функция для обновления отображения валюты
function updateCurrencyDisplay() {
    document.getElementById('silver').textContent = currency.silver;
    document.getElementById('gold').textContent = currency.gold;
    document.getElementById('diamonds').textContent = currency.diamonds;
    document.getElementById('tickets').textContent = currency.tickets;
}

// Функция для изменения количества валюты
function changeCurrency(type, amount) {
    if (currency[type] !== undefined) {
        currency[type] += amount;
        updateCurrencyDisplay();
    } else {
        console.error("Неверный тип валюты:", type);
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', updateCurrencyDisplay);
