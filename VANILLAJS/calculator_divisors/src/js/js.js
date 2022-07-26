'use strict';

let parent = document.querySelector('#parent');

let input = parent.querySelector('#input');

let btn = parent.querySelector('#btn');

let paragraph = parent.querySelector('#paragraph');

let arr = [];

function findDividers() {
    for (let i = 2; i <= input.value - 1; i++) {
        if (input.value % i == 0) {
            arr.push(i);
        }
    }
    if (arr.length == 0) {
        paragraph.innerHTML = 'данное число простое';
    } else {
        let result = arr.join(', ');
        paragraph.innerHTML = result;
    }
    
}

function clear() {
    input.value = '';
    arr = [];
    paragraph.innerHTML = '';
}
input.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        findDividers();
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
    findDividers();
    btn.removeEventListener('click', btnFunc);
    input.addEventListener('click', function() {
        clear();
        btn.addEventListener('click', btnFunc);
        
    })
    input.addEventListener('change', function() {
        clear();
        btn.addEventListener('click', btnFunc);  
    })
})
