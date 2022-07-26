'use strict';

let parent = document.querySelector('#parent');

let input = parent.querySelector('#input');

let input1 = parent.querySelector('#input1');

let btn = parent.querySelector('#btn');

let paragraph = parent.querySelector('#paragraph');


function inArray(elem, arr) {
    if (arr.indexOf(elem) == -1) {
        return false;
    } else {
        return true;
    }
}
let arr = [];
let arr1 = [];
function findCommonDividers() {
    let result = [];
    for (let i = 2; i <= input.value; i++) {
        if (input.value % i == 0) {
            arr.push(i);
        }
    }
    for (let i = 2; i <= input1.value; i++) {
        if (input1.value % i == 0) {
            arr1.push(i);
        }
    }
    for (let elem of arr) {
        if (inArray(elem, arr1)) {
            result.push(elem);
        }
    }
    let out = result.join(', ');
    paragraph.innerHTML = out;
}

function clear() {
    input.value = '';
    input1.value = '';
    arr = [];
    arr1 = [];

    paragraph.innerHTML = '';
}
input.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        input1.focus();
    }
})

input1.addEventListener('keydown', function input1Enter(event) {
    if (event.code == 'Enter') {
        findCommonDividers();
        input1.removeEventListener('keydown', input1Enter);
        input1.addEventListener('keydown', function inputSecondEnter(event) {
            clear();
            input.focus();
            input1.removeEventListener('keydown', inputSecondEnter)
            input1.addEventListener('keydown', input1Enter);
        });
    }

})

input.addEventListener('keydown', function(event) {
    if (event.code == 'Backspace') {
        clear();
    }
})

window.addEventListener('click', function catchFocus(event) {
    if (event.target.tagName == 'INPUT') {
        return;
    }
    input.focus();
    clear();
}) 

btn.addEventListener('click', function btnFunc() {
    findCommonDividers();
    btn.removeEventListener('click', btnFunc);
    input.addEventListener('click', function() {
        clear();
        btn.addEventListener('click', btnFunc);
    })
})
