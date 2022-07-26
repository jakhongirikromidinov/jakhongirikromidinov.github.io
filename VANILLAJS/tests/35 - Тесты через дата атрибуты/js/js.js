'use strict';
let inputs = document.querySelectorAll('.input');

let btn = document.querySelector('#btn');

function check(elem) {
    if (elem.value == elem.dataset.right) {
        return elem.classList.add('right');
    } else {
        return elem.classList.add('wrong');
    }
}

for (let input of inputs) {
    input.addEventListener('keydown', function(event) {
        if (event.key == 'Enter') { 
            check(input);
        }
    })
}
btn.addEventListener('click', function() {
    for (let input of inputs) {
        check(input);
    }
})