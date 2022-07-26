'use strict';
let inputs = document.querySelectorAll('.input');

let btn = document.querySelector('#btn');

let answers = [
	1,
	2,
	3,
];
function check() {
    let i = 0;
        for (let input of inputs) {
            if (answers[i] == input.value) {
                input.classList.add('right');
            } else {
                input.classList.add('wrong');
            }
            i++;
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
    let inputs = document.querySelectorAll('.input');
    check();
})


