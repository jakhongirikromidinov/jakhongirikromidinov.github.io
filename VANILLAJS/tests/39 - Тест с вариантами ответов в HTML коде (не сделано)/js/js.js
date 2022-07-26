'use strict';
let inputs = document.querySelectorAll('.input');

let btn = document.querySelector('#btn');

let test = document.querySelector('#test');

function check() {
    let inputs = document.querySelectorAll('.input');
        for (let input of inputs) {
            input.classList.remove('right');
            input.classList.remove('wrong');
            if (input.dataset.right == input.value) {
                input.classList.add('right');
            } else {
                input.classList.add('wrong');
            }
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
    check();
})


