'use strict';

const input = document.querySelector('#input');

const container = document.querySelector('.container');

const paragraph = document.querySelector('#paragraph');

const table = document.querySelector('#table');

let historicalEvents = {
	2000: {
		event1: {
            date: '12.12.2000',
            name: 'event1',
            descr: '!!!'
        },
        event2: {
            date: '12.12.2000',
            name: 'event2',
            descr: '!!!'
        },
        event3: {
            date: '12.12.2000',
            name: 'event3',
            descr: '!!!'
        }
	}
}
input.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        for (let key in historicalEvents) {
            if (input.value == key) {
                let subObj = historicalEvents[key];
                for (let subKey in subObj) {
                    let subSubObj = subObj[subKey];
                    let tr = document.createElement('tr');
                    for (let subSubKey in subSubObj) {
                        let td = document.createElement('td');
                        td.innerHTML = subSubObj[subSubKey];
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                }
            }

        }
    }
})