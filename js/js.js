'use strict';
const field = document.querySelector('#field');

const paragraph = document.querySelector('#paragraph');

let colors = ['red', 'green', 'blue'];

let rows = 3;
let cols = 3;
let i = 0;

// Функция для создания таблицы
function newTable(rows, cols) {
    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= cols; j++) {
            let td = document.createElement('td');
            td.classList.add(random(colors));
            tr.appendChild(td);
        }
        field.appendChild(tr);
    }

}
// Функция для нахождения случайного числа в указанном диапазоне
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Функция для нахождения рандомного элемента из массива с помощью функции getRandomInt
function random(arr) {
	return arr[getRandomInt(0, arr.length - 1)];
}



// создаем таблицу вызовом функции newTable
newTable(rows, cols);

field.addEventListener('click', function(event) {
    i++;
    paragraph.innerHTML = i;
    let target = event.target;
    if (target.tagName != 'TD') {
        return;
    }
    function changeColor(arr) {
        let elemIndex = arr.indexOf(target.className);
        if (colors[elemIndex + 1] == undefined) {
            target.classList.remove(target.className);
            elemIndex -= 3;
            target.classList.add(colors[elemIndex + 1]);
        } else {
            target.classList.remove(target.className);
            target.classList.add(colors[elemIndex + 1]);
        }
    }
    changeColor(colors);
    console.log(target.className);
    let tds = document.querySelectorAll('#field td');

    if (tds[0].className == target.className &&
        tds[1].className == target.className &&
        tds[2].className == target.className &&
        tds[3].className == target.className &&
        tds[4].className == target.className &&
        tds[5].className == target.className &&
        tds[6].className == target.className &&
        tds[7].className == target.className &&
        tds[8].className == target.className) {
        alert('Победа!');
    }
    
})