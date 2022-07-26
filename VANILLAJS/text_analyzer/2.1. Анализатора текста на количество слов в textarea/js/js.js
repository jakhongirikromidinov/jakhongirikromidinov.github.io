'use strict';

let parent = document.querySelector('#parent');

let textarea = parent.querySelector('#textarea');

let paragraph = parent.querySelector('#paragraph');

textarea.addEventListener('blur', function() {
    let strs = '';
    strs = textarea.value.split(' ');
    paragraph.innerHTML = 'слов в тексте: ';
    
    let newArr = strs.filter(function(str) {
        if (str == '') {
            return false;
        } else {
            return true;
        }
    })
    paragraph.innerHTML += newArr.length;
        
    textarea.addEventListener('click', function() {
        paragraph.innerHTML = 'слов в тексте: ' + newArr.length;
        strs = '';
        
    })
})