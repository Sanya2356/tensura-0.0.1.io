// Стоимость крутки
const SPIN_COST = 1;
const SPIN_TEN_COST = 10;

// Доступные изображения персонажей
const cardImages = [
    "img/rimurucard1.jpg",
    "img/rigurcard.jpg",
    "img/rigurdcard.jpg"
];

// Функция для получения случайного изображения персонажа
function getRandomCharacterImage() {
    return cardImages[Math.floor(Math.random() * cardImages.length)];
}

// Функция создания и добавления черного экрана с контейнером
function createBlackScreen() {
    const blackScreen = document.createElement("div");
    blackScreen.classList.add("black-screen");
    blackScreen.style.position = "fixed";
    blackScreen.style.top = "0";
    blackScreen.style.left = "0";
    blackScreen.style.width = "100vw";
    blackScreen.style.height = "100vh";
    blackScreen.style.backgroundColor = "black";
    blackScreen.style.display = "flex";
    blackScreen.style.justifyContent = "center";
    blackScreen.style.alignItems = "center";
    blackScreen.style.zIndex = "999";

    const container = document.createElement("div");
    container.classList.add("card-container");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";

    blackScreen.appendChild(container);
    document.body.appendChild(blackScreen);

    return container;
}

// Функция для отображения выпавшего персонажа (по 2 в ряду)
function showCharacterCard(container) {
    // Проверяем, есть ли последняя строка и заполнена ли она
    let lastRow = container.lastElementChild;
    if (!lastRow || lastRow.children.length >= 2) {
        // Создаем новую строку, если строки нет или последняя заполнена
        lastRow = document.createElement("div");
        lastRow.style.display = "flex"; // Располагаем карточки в ряд
        lastRow.style.gap = "20px"; // Промежуток между карточками
        container.appendChild(lastRow);
    }

    // Создаем изображение карточки
    const cardImage = document.createElement("img");
    const cardSrc = getRandomCharacterImage();
    cardImage.src = cardSrc;
    cardImage.alt = "Character Card";

    // Задаём размеры карточек
    cardImage.style.width = "100px"; // Фиксированная ширина
    cardImage.style.height = "140px"; // Фиксированная высота

    // Стилизация карточки
    cardImage.style.borderRadius = "10px";

    // Эффект увеличения при наведении
    cardImage.style.transition = "transform 0.3s ease";
    cardImage.addEventListener("mouseover", () => cardImage.style.transform = "scale(1.1)");
    cardImage.addEventListener("mouseout", () => cardImage.style.transform = "scale(1)");

    // Добавляем карточку в текущую строку
    lastRow.appendChild(cardImage);
}

// Функция для сообщения об ошибке
function showError(message) {
    const errorMsg = document.createElement("div");
    errorMsg.textContent = message;
    errorMsg.style.position = "fixed";
    errorMsg.style.top = "50%";
    errorMsg.style.left = "50%";
    errorMsg.style.transform = "translate(-50%, -50%)";
    errorMsg.style.color = "white";
    errorMsg.style.fontSize = "24px";
    errorMsg.style.zIndex = "1000";

    document.body.appendChild(errorMsg);

    setTimeout(() => errorMsg.remove(), 2000);
}

// Основная функция крутки
function spin(times) {
    // Проверяем, достаточно ли билетов
    const totalCost = times === 1 ? SPIN_COST : SPIN_TEN_COST;

    if (currency.tickets < totalCost) {
        showError("У вас нет билетов!");
        return;
    }

    // Списываем билеты
    changeCurrency("tickets", -totalCost);

    // Скрываем основной контент
    document.querySelector(".content").style.visibility = "hidden";

    // Создаем затемненный экран
    const container = createBlackScreen();

    // Показываем одного или нескольких персонажей
    for (let i = 0; i < times; i++) {
        setTimeout(() => showCharacterCard(container), 500 * i);
    }

    // Возвращаем элементы через 3 секунды
    setTimeout(() => {
        document.querySelector(".content").style.visibility = "visible";
        container.parentNode.remove();
        updateCurrencyDisplay();
    }, 3000 + 500 * (times - 1));
}
