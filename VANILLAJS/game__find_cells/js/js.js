'use strict';

let parent = document.querySelector('#parent');

const container = document.querySelector('.container')

const defeat = container.querySelector('.defeat');

let winClass = container.querySelector('.winClass');

let tds = document.querySelectorAll('#table td');

let trs = document.querySelectorAll('#table tr');

let table = container.querySelector('#table');

const timerP = timer.querySelector('p');

const btn = document.querySelector('#btn');

let k = 0;

let timerId;
function restart() {
    console.log('restart')
    btn.classList.remove('hidden');
    k = 0;
    for (let td of tds) {
        if (td.matches('td.red')) {
            td.classList.remove('red');
        }
    }
    for (let td of tds) {
        if (td.matches('td.green')) {
            td.classList.remove('green');
        }
    }
}
function defeatFunc() {
    table.classList.add('hidden');
    defeat.classList.remove('hidden');
}
function winFunc() {
    console.log('win');
    table.classList.add('hidden');
    winClass.classList.remove('hidden');
}
function clearIntervalFunc() {
    clearInterval(timerId);
}
let j = 1;
for (let td of tds) {
    td.dataset.col = j;
    j++;
    if (j == 11) {
        j = 1;
    }
}
let i = 1;
for (let tr of trs) {
    let elems = tr.children;
    for (let td of elems) {
        td.dataset.row = i;
    }
    i++;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
btn.addEventListener('click', function startGame() {
    btn.removeEventListener('click', startGame);
    if (defeat.matches('hidden') == false) {
        defeat.classList.add('hidden');
    }
    if (winClass.matches('hidden') == false) {
        winClass.classList.add('hidden');
    }
    console.log(table.matches('hidden'))
    if (table.matches('table.hidden')) {
        console.log(table.matches('hidden'))
        table.classList.remove('hidden');
    }
    btn.classList.toggle('hidden'); 
    let rowNumArr = [];
    let colNumArr = [];
    for (let i = 1; i <= 10; i++) {
        rowNumArr.push(getRandomInt(1, 10));
        colNumArr.push(getRandomInt(1, 10));
    }
    console.log(rowNumArr);
    console.log(colNumArr);
    for (let i = 0; i <= 9; i++) {
        table.addEventListener('click', function clicke(event) {
            if (event.target.tagName != 'TD') {
                return
            }
            if (event.target.dataset.col == colNumArr[i] && event.target.dataset.row == rowNumArr[i]) {
                table.removeEventListener('click', clicke);
                k++;
                event.target.classList.add('green');
                if (k == 10) {
                    setTimeout(function() {
                        restart();
                    }, 1000);
                    winFunc();
                    clearIntervalFunc();
                    btn.addEventListener('click', startGame);
                    
                }
            }
            if (event.target.dataset.col != colNumArr[i] || event.target.dataset.row != rowNumArr[i]) {
                event.target.classList.add('red');
            }
        })
    }
    let j = 60;
    timerId = setInterval(() => {
        j--;
        if (j < 10) {
            timerP.innerHTML = '00:' + '0'+ j;
        } else {
            timerP.innerHTML = '00:' + j;
        }
        if (j == 0) {
            setTimeout(function() {
                restart();
            }, 1000)
            clearIntervalFunc();
            defeatFunc();
            btn.addEventListener('click', startGame);
        }
    }, 1000);
})
