'use strict';
let cells = document.querySelectorAll('#field td');

function start(cells) {
    let i = 0;
    for (let cell of cells) {
    cell.addEventListener('click', function check() {
        this.innerHTML = ['X', 'O'][i % 2];
        cell.removeEventListener('click', check);

        if (isVictory(cells)) {
            alert(this.innerHTML);
        } else if (i === 8) {
            alert('ничья');
        }
        i++;
    })
    }
}

function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4 ,7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]
    for (let comb of combs) {
        if (cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
            cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[0]].innerHTML != '') {
                return true;
            }
    }
    return false;
}
start(cells);