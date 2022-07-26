'use strict';
const wrapper = document.querySelector('#wrapper');
const create = wrapper.querySelector('#create');
const text = wrapper.querySelector('#text textarea');
const btn = wrapper.querySelector('#text button');
const notes = wrapper.querySelector('#notes');
let links = document.querySelectorAll('a');
let list = document.querySelector('#list');
let texts = [];

function clear(elem) {
    elem.value = '';
}


btn.addEventListener('click', function saveText() {
    links = document.querySelectorAll('a');
    if (links.length == 0) {
        let link = document.createElement('a');
        link.innerHTML = notes.children[0].innerHTML;
        notes.children[0].innerHTML = '';
        notes.children[0].appendChild(link);
        texts.push(text.value);
        alert('Сохранено в ' + link.innerHTML);
        clear(text);
    } else {
        let link = document.createElement('a');
        link.innerHTML = notes.children[links.length].innerHTML;
        notes.children[links.length].innerHTML = '';
        notes.children[links.length].appendChild(link);
        texts.push(text.value);
        alert('Сохранено в ' + link.innerHTML);
        clear(text);
    }
    if (links.length == notes.children.length - 1) {
        btn.removeEventListener('click', saveText);
    }

})


