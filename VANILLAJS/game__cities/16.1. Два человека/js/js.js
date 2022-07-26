'use strict';

const field   = document.querySelector('#field');
const message = document.querySelector('#message');
const btn = document.querySelector('#btn');

let citiesArr = [];

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
// Вешаем событие клика на кнопку
btn.addEventListener('click', function() {
    message.innerHTML = 'Игра началась!';
    field.classList.add('active');
    btn.classList.add('hidden');
});
// Вешаем событие нажатия клавиши Enter на input
field.addEventListener('keydown', function(event) {
    // Событие не будет срабатывать на нажатие клавиш отличных от Enter
    if (event.code != 'Enter') {
        return;
    }
    // При вводе города в первый раз, введенный город не будет проходить через фильтры, а будет просто записываться массив
    if (citiesArr.length == 0) {
        citiesArr.push(field.value);
        clear();
        
        message.innerHTML = 'Ответ принимается. Назовите город на букву ' + findLastLetter(citiesArr);
    } else {
        // Нахождение первой буквы нового города
        let firstLetter = field.value[field.value.length - field.value.length].split('');

        // Нахождение последней буквы уже введенного города
        findLastLetter(citiesArr);
        
        // Фильтрация массива на наличие введенного города
        let filter = function filterArr() {
            let result = citiesArr.indexOf(field.value);
            return result;
        }
        if (filter() == -1 && firstLetter == findLastLetter(citiesArr)) {
            citiesArr.push(field.value);
            clear();
            message.innerHTML = 'Ответ принимается. Назовите город на букву ' + findLastLetter(citiesArr);
        } else if (firstLetter != findLastLetter(citiesArr)) {
            message.innerHTML = 'Вы назвали неправильный город, вам всё ещё нужно написать город на букву ' + findLastLetter(citiesArr);
        } else if (filter() != -1) {
            message.innerHTML = 'Этот город уже был, вам всё ещё нужно написать город на букву ' + findLastLetter(citiesArr);
        }
    }
})

