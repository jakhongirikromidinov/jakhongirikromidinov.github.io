'use strict';

const container = document.querySelector('.container');

const table = container.querySelector('#table');

const input = container.querySelector('#input');

let shift = table.querySelector('#shift')

const rightShift = table.querySelector('#rightShift')

const tab = table.querySelector('#tab');

const capsLock = table.querySelector('#capsLock')

const backspace = table.querySelector('#backspace')

const ctrl = table.querySelector('#ctrl')

const rightCtrl = table.querySelector('#rightCtrl')

const winBtn = table.querySelector('#winBtn')

const alt = table.querySelector('#alt')

const rightAlt = table.querySelector('#rightAlt')

const fn = table.querySelector('#fn')

const space = table.querySelector('#space');

let tds = table.querySelectorAll('td');

table.classList.add('hidden')
// Перевод клавиатуры в нижний регистр
for (let td of tds) {
    td.innerHTML = td.innerHTML.toLowerCase();
}
input.addEventListener('click', function() {
    table.classList.remove('hidden');
})

// Вешание события на таблицу
table.addEventListener('click', function(event) {
    const target = event.target;

    const serviceTarget = target != shift && target != capsLock && target != tab && target != rightShift && target != backspace && target != ctrl && target != rightCtrl && target != rightAlt && target != alt && target != winBtn && target != fn && target != space;
    
    if (target.tagName != 'TD') {
        return;
    }

    // Запрет на перенос названий сервисных кнопок в input
    if (serviceTarget) {
        input.value += target.innerHTML;
    }

    // Реализация функции backspace
    let strs = input.value.split('');
    if (target == backspace) {
        strs.pop()
        let result = strs.join('');
        input.value = result;
    }

    // Реализация функции шифта
    if (target == shift || target == rightShift) {
        shift.classList.toggle('pressed');
        rightShift.classList.toggle('pressed');
        if (shift.classList.contains('pressed') || rightShift.classList.contains('pressed')) {
            for (let td of tds) {
                if (td != shift && td != capsLock && td != tab && td != rightShift && td != backspace && td != ctrl && td != rightCtrl && td != rightAlt && td != alt && td != winBtn && td != fn && td != space) 
                td.innerHTML = td.innerHTML.toUpperCase();
            }
        } else {
            for (let td of tds) {
                td.innerHTML = td.innerHTML.toLowerCase();
            }
        }
    }
    if (serviceTarget && shift.classList.contains('pressed')) {
        shift.classList.remove('pressed');
        rightShift.classList.remove('pressed');
        for (let td of tds) {
            td.innerHTML = td.innerHTML.toLowerCase();
        }
    }
    // Реализация функции капс
    if (target == capsLock) {
        target.classList.toggle('pressed');
        if (capsLock.classList.contains('pressed')) {
            for (let td of tds) {
                if (td != shift && td != capsLock && td != tab && td != rightShift && td != backspace && td != ctrl && td != rightCtrl && td != rightAlt && td != alt && td != winBtn && td != fn && td != space) 
                td.innerHTML = td.innerHTML.toUpperCase();
            }
        } else {
            for (let td of tds) {
                td.innerHTML = td.innerHTML.toLowerCase();
            }
        }
    }
    // Реализация функции пробела
    if (target == space) {
        input.value += ' ';
    }
})
