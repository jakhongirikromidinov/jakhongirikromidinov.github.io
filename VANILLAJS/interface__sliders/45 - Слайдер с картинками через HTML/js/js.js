'use strict';
const main = document.querySelector('#main');

const slider = main.querySelector('.slider');

const left = main.querySelector('#left');

const right = main.querySelector('#right');

let imgs = document.querySelectorAll('img');


let i = 0;
setInterval(() => {
    for (let img of imgs) {
        img.classList.remove('active');
    }
    imgs[i].classList.add('active');
    i++;
    if (i == 3) {
        i = 0;
    }
}, 1000);

