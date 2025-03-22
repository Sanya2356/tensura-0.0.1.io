// Объект с информацией о персонажах
const characters = {
    // Римуру - АОЕ Атака
    "Римуру": {
        class: "АОЕ Атака",
        level: 1,
        experience: 0,
        battlePower: 150,
        stats: {
            attack: 50,         // АОЕ персонаж — высокая атака
            speed: 30,          // Средняя скорость
            health: 500,        // Среднее здоровье
            defense: 20,        // Низкая защита
            critChance: 15,     // Шанс крита (в %)
            critDamage: 120,    // Крит. урон (в %)
            antiCritChance: 5,  // Шанс антикрита (в %)
            blockChance: 10,    // Шанс блока (в %)
            pierceChance: 12,   // Шанс пробоя (в %)
            coverChance: 8      // Шанс покрова (в %)
        },
        images: [
            "img/avatar1.png", "img/avatar2.png", "img/avatar3.png", "img/avatar4.png",
            "img/model1.png", "img/model2.png", "img/model3.png", "img/model4.png",
            "img/model1.2.png", "img/model2.2.png", "img/model3.2.png", "img/model4.2.png",
            "img/rimurucard1.jpg", "img/rimurucard2.jpg", "img/rimurucard3.jpg", "img/rimurucard4.jpg"
        ]
    },

    // Ригур - Соло Атака
    "Ригур": {
        class: "Соло Атака",
        level: 1,
        experience: 0,
        battlePower: 130,
        stats: {
            attack: 60,         // Высокая атака (соло)
            speed: 40,          // Быстрая скорость
            health: 400,        // Меньше здоровья
            defense: 15,        // Низкая защита
            critChance: 20,     // Шанс крита (в %)
            critDamage: 130,    // Крит. урон (в %)
            antiCritChance: 5,  // Шанс антикрита (в %)
            blockChance: 8,     // Шанс блока (в %)
            pierceChance: 15,   // Шанс пробоя (в %)
            coverChance: 5      // Шанс покрова (в %)
        },
        images: [
            "img/riguravatar.png",
            "img/rigurmodel.png",
            "img/rigurcard.jpg"
        ]
    },

    // Ригурд - Защита
    "Ригурд": {
        class: "Защита",
        level: 1,
        experience: 0,
        battlePower: 160,
        stats: {
            attack: 30,         // Низкая атака
            speed: 20,          // Медленная скорость
            health: 700,        // Высокое здоровье
            defense: 50,        // Высокая защита
            critChance: 5,      // Шанс крита (в %)
            critDamage: 110,    // Крит. урон (в %)
            antiCritChance: 25, // Высокий шанс антикрита (в %)
            blockChance: 30,    // Шанс блока (в %)
            pierceChance: 5,    // Шанс пробоя (в %)
            coverChance: 20     // Шанс покрова (в %)
        },
        images: [
            "img/rigurdavatar.png",
            "img/rigurdmodel.png",
            "img/rigurdcard.jpg"
        ]
    }
};

// Функция для получения данных персонажа по имени
function getCharacter(name) {
    return characters[name] || null;
}

// Пример использования:
console.log(getCharacter("Римуру"));  // Данные о Римуру
console.log(getCharacter("Ригур"));   // Данные о Ригуре
console.log(getCharacter("Ригурд"));  // Данные о Ригурде
