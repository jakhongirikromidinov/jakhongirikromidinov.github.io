'use strict';
const main = document.querySelector('#main');

const slider = main.querySelector('.slider');

let texts = ['text1', 'text2', 'text3'];

let i = 0;
let timerId = setInterval(() => {
    slider.innerHTML = texts[i];

    i++;
    if (i == texts.length) {
        i = 0;
    }
}, 1000);




