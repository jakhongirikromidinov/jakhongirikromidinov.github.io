'use strict';

const parent = document.querySelector('#parent');

parent.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName != 'A') {
        return;
    };
    event.preventDefault();
    target.parentElement.nextElementSibling.classList.toggle('active');
})
