'use strict';
const main = document.querySelector('#main');

const slider = main.querySelector('.slider');

const left = main.querySelector('#left');

const right = main.querySelector('#right');

let texts = ['text1', 'text2', 'text3'];

function toLeft() {
    i--;
    console.log(i);
    if (i == 0) {
        left.removeEventListener('click', toLeft);
        right.addEventListener('click', toRight);
    }
    slider.innerHTML = texts[i];
}
function toRight() {
    i++;
    console.log(i);
    if (i == 2) {
        right.removeEventListener('click', toRight);
        left.addEventListener('click', toLeft);
    }
    slider.innerHTML = texts[i];
}
let i = 1;
slider.innerHTML = texts[i];
left.addEventListener('click', toLeft());

right.addEventListener('click', toRight())






