'use strict';

const field   = document.querySelector('#field');
const message = document.querySelector('#message');
const btn = document.querySelector('#btn');

let submittedCities = [];

let Base = ['Абаза', 'Абакан', 'Абдулино', 'Абердин', 'Абиджан', 'Багдад', 'Бухарест', 'Бухара', 'Брюгге', 'Берн', 'Валенсия', 'Вильнюс', 'Веллингтон', 'Воркута', 'Волгоград', 'Гамбург', 'Ганновер', 'Гданьск', 'Гулистан', 'Гавана' , 'Дамаск', 'Даллас', 'Дели', 'Дакар', 'Дербенд', 'Ереван', 'Езнас', 'Ейск', 'Екабпилс', 'Екатеринбург', 'Жетысай', 'Женвилье', 'Женда', 'Железноводск', 'Женева', 'Загреб', 'Зальцбург', 'Запорожье', 'Забже', 'Заверце', 'Иерусалим', 'Исламабад', 'Исфахан', 'Иваново', 'Йоханнесбург', 'Кабул', 'Лас-Вегас', 'Мадрид', 'Ницца','Оклахома-Сити', 'Панама', 'Рабат', 'Санкт-Петербург', 'Ташкент', 'Уфа', 'Филадельфия', 'Хельсинки'];

function isThere(arr, word) {
    let result = arr.indexOf(word);
    return result;
}
function isUsed(arr, word) {
    let result = arr.indexOf(word);
    return result;
}

// Функция для очистки input'a после нажатия клавиши Enter
function clear() {
    field.value = '';
}
// Функция для нахождения последней буквы введенного города
function findLastLetter(arr) {
    let city = arr[arr.length - 1];
    let lastLetter = city[city.length - 1].toUpperCase();
    return lastLetter;
}
function firstCheck(CityBase, submitArr) {
    // Проверяем введенный в input город на наличие в базе
    if (isThere(CityBase, field.value) != -1) {
        submitArr.push(field.value);
        clear();
        for (let city of CityBase) {
            let str = city.split('');
            let firstLetter = str[0];
            if (firstLetter == findLastLetter(submitArr)) {
                submitArr.push(city);
                message.innerHTML = 'Я выбрал город ' + city + '. ' + 'Напишите город на букву ' + findLastLetter(submitArr);
            }
        }
    } else {
        message.innerHTML = 'Город не найден в базе, попробуйте ещё раз';
    }
}
function secondCheck(CityBase, submitArr) {
    if (isThere(CityBase, field.value) == -1) {
        message.innerHTML = 'Город не найден в базе, попробуйте ещё раз';
    }

    if (isUsed(submitArr, field.value) != -1) {
        message.innerHTML = 'Данный город уже был назван';
    }

    let firstLetter = field.value[field.value.length - field.value.length];
    if (firstLetter != findLastLetter(submitArr)) {
        message.innerHTML = 'Вы назвали неправильный город. Вам всё ещё нужно назвать город на букву ' + findLastLetter(submitArr);
    }
    if (firstLetter == findLastLetter(submitArr) && isThere(CityBase, field.value) != -1 && isUsed(submitArr, field.value) == -1) {
        submitArr.push(field.value);
        for (let city of CityBase) {
            let str = city.split('');
            let firstLetter = str[0];
            if (firstLetter == findLastLetter(submitArr) && isUsed(submitArr, city) == -1) {
                submitArr.push(city);
                clear();
                message.innerHTML = 'Я выбрал город ' + city + '. ' + 'Напишите город на букву ' + findLastLetter(submitArr);
            } else {
                clear();
                message.innerHTML = 'В базе закончились подходящие города. Вы выиграли';
            }
        }
    }
}

// Вешаем событие клика на кнопку
btn.addEventListener('click', function() {
    message.innerHTML = 'Игра началась!';
    field.classList.add('active');
    btn.classList.add('hidden');
});
field.addEventListener('keydown', function(event) {
    if (event.code != 'Enter') {
        return;
    }
    if (submittedCities == 0) {
        firstCheck(Base, submittedCities);
    } else {
        secondCheck(Base, submittedCities);
    }
})

