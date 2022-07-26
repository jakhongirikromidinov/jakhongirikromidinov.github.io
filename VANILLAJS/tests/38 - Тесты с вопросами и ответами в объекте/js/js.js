'use strict';
let inputs = document.querySelectorAll('.input');

let btn = document.querySelector('#btn');

let test = document.querySelector('#test');

let questions = [
	{
		text:  'вопрос 1?',
		right: 1,
	},
	{
		text:  'вопрос 2?',
		right: 2,
	},
	{
		text:  'вопрос 3?',
		right: 3,
	},
];
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
for (let question of questions) {
    let newDiv = document.createElement('div');

    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = question.text;
    newDiv.appendChild(newParagraph);

    let newInput = document.createElement('input');
    newInput.classList.add('input');
    newInput.dataset.right = question.right;
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


