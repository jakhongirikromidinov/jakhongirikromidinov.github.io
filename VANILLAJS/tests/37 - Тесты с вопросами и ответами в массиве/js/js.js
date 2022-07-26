'use strict';
let inputs = document.querySelectorAll('.input');

let btn = document.querySelector('#btn');

let test = document.querySelector('#test');


let answers = [
	1,
	2,
	3,
];
let questions = [
	'вопрос 1?',
	'вопрос 2?',
	'вопрос 3?'
];
function check() {
    let inputs = document.querySelectorAll('.input');
    let i = 0;
    console.log(inputs);
        for (let input of inputs) {
            input.classList.remove('right');
            input.classList.remove('wrong');
            if (answers[i] == input.value) {
                input.classList.add('right');
            } else {
                input.classList.add('wrong');
            }
            i++;
        }
    }
for (let question of questions) {
    let newDiv = document.createElement('div');

    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = question;
    newDiv.appendChild(newParagraph);

    let newInput = document.createElement('input');
    newInput.classList.add('input');
    newDiv.appendChild(newInput);
    
    test.appendChild(newDiv);
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


