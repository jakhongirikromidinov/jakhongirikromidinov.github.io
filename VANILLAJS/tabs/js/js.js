'use strict';

const parent = document.querySelector('#parent');

const tabs = document.querySelectorAll('.tab');

parent.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName != 'A') {
        return;
    }
    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    target.parentElement.parentElement.classList.toggle('active');
})


