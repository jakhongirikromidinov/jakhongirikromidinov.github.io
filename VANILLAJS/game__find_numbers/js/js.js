'use strict';

let parent = document.querySelector('#parent');

let input = parent.querySelector('#input');

let btn = parent.querySelector('#btn');

let btn2 = parent.querySelector('#btn2');

let paragraph = parent.querySelector('#paragraph');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = [];
btn.addEventListener('click', function startGame() {
    arr.push(getRandomInt(1, 100));
    console.log(arr);
    paragraph.innerHTML = 'Цифра загадана!';
    btn.classList.add('hidden');
    btn.classList.remove('active');
    btn.removeEventListener('click', startGame);
    input.classList.add('active');
    input.classList.remove('hidden');
    input.focus();
})
btn2.addEventListener('click', function() {
    input.focus();
    arr = [];
    arr.push(getRandomInt(1, 100));
    console.log(arr);
    input.value = '';
    input.classList.add('active');
    input.classList.remove('hidden');
    btn2.classList.add('hidden');
    btn2.classList.remove('active');
    paragraph.innerHTML = 'Цифра загадана!';
    
})
function checkTheAnswer() {
    if (input.value < arr[0]) {
        paragraph.innerHTML = 'Введите число побольше';
    }
    if (input.value > arr[0]) {
        paragraph.innerHTML = 'Введите число поменьше';
    }
    if (input.value == arr[0]) {
        paragraph.innerHTML = 'Поздравляем! Вы выиграли!';
        btn2.classList.add('active');
        btn2.classList.remove('hidden');
        input.classList.add('hidden');
    }
}
input.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        checkTheAnswer();
    }
})


