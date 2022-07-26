'use strict';

let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
        

        let task = document.createElement('span');
        task.innerHTML = this.value;
        task.classList.add('task');
        task.addEventListener('dblclick', function editing() {
            let input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';

            task.removeEventListener('dblclick', editing);

            input.addEventListener('blur', function() {
                task.innerHTML = input.value;

                task.addEventListener('dblclick', editing);
            })
            input.addEventListener('keydown', function(event) {
                if (event.code != 'Enter') {
                    return;
                }
                task.innerHTML = input.value;

                task.addEventListener('dblclick', editing);
            })
            task.appendChild(input);
        })
        li.appendChild(task);

        let remove = document.createElement('span');
        remove.innerHTML = 'удалить';
        remove.classList.add('remove');
        remove.addEventListener('click', function() {
            this.parentElement.remove();
        })
        li.appendChild(remove);

        let mark = document.createElement('span');
        mark.innerHTML = 'сделано';
        mark.classList.add('mark');
        mark.addEventListener('click', function() {
            task.classList.add('lthrough');
        })
        li.appendChild(remove);
        li.appendChild(mark);

        list.appendChild(li);
	}
});