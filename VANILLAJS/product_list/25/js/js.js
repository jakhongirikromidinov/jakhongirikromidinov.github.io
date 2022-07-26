'use strict';
let name   = document.querySelector('#name');
let price  = document.querySelector('.price');
let amount = document.querySelector('.amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

function createCell (tr, value, name) {
    let td = document.createElement('td');
    td.innerHTML = value;
    td.classList.add(name);
    
    return tr.appendChild(td);
}
function recountTotal() {
	let costs = table.querySelectorAll('.cost');
        let sum = 0;
		for (let cost of costs) {
            sum += +cost.innerHTML;
        }
        return total.innerHTML = sum;
}
function allowEdit(td) {
	td.addEventListener('dblclick', function edit() {
		let input = document.createElement('input');
        input.value = td.innerHTML;
        td.innerHTML = '';
        input.focus();
        td.removeEventListener('dblclick', edit);
        td.appendChild(input);

        input.addEventListener('keydown', function(event) {
            if (event.key == 'Enter') {
                td.innerHTML = this.value;
                
                if (td.classList.contains('amount') || td.classList.contains('price')) { 
                    td.parentElement.cells[3].innerHTML = td.parentElement.cells[1].innerHTML * td.parentElement.cells[2].innerHTML;
                    recountTotal();
                }
    
                td.addEventListener('dblclick', edit);
            }
        })
	});
}
add.addEventListener('click', function() {
    let tr = document.createElement('tr');

    allowEdit(createCell(tr, name.value, 'name'));
	allowEdit(createCell(tr, price.value, 'price'));
	allowEdit(createCell(tr, amount.value, 'amount'));
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
        this.parentElement.remove();

        recountTotal();
    });

    table.appendChild(tr);
    recountTotal();
})