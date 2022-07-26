'use strict';
const main = document.querySelector('#main');

const slider = main.querySelector('.slider');

const left = main.querySelector('#left');

const right = main.querySelector('#right');

let addresses = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];

let i = 0;

left.addEventListener('click', function toLeft(event) {
    i--;
    console.log(i);
    if (i == 0) {
        i = 2;
    }
    slider.src = addresses[i];
});

right.addEventListener('click', function toRight(event) {
    i++;
    if (i == 3) {
        i = 0;
    }
    slider.src = addresses[i];
})

setInterval(() => {
    slider.src = addresses[i];
    console.log(i);
    if (i == -1) {
        i = 0;
    }
    i++;
    if (i == 3) {
        i = 0;
    }
}, 3000);

