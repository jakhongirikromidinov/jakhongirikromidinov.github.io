'use strict';

const start = document.querySelector('#start');

const stop = document.querySelector('#stop');

const timer = document.querySelector('#timer');

const text = document.querySelector('#text');

let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forecastTexts = [
    'у вас сегодня будет замечательный день',
    'устройте сегодня себе выходной - пусть весь мир подождет',
    'сегодня вас ждет удача и успех во всех начинаниях',
    'сегодня вас ждет успех при изучении JavaScript',
    'сегодня вы рискуете что-нибудь забыть при выходе из дома',
    'сегодня лучше полежите весь день на диване',
    'автор поленился добавить предсказание',
    'автор поленился добавить предсказание',
    'автор поленился добавить предсказание',
    'автор поленился добавить предсказание'
]

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
	let key = getRandomInt(0, arr.length - 1);
	return arr[key];
}

start.addEventListener('click', function() {
    start.classList.remove('active');
    stop.classList.add('active');

    let timerId = setInterval(() => {
        timer.innerHTML = random(numberArr);
    }, 100);

    stop.addEventListener('click', function() {
        clearInterval(timerId);
        stop.classList.remove('active');

        let number = timer.innerHTML;

        text.innerHTML = forecastTexts[number - 1];

        if (number % 2 == 0) {
            text.classList.add('green');
        } else {
            text.classList.add('red');
        }
        
    })
})



