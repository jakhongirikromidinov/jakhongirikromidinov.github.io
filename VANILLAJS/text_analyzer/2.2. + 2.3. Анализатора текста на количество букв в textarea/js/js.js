'use strict';

let parent = document.querySelector('#parent');

let textarea = parent.querySelector('#textarea');

let paragraph = parent.querySelector('#paragraph');

textarea.addEventListener('blur', function() {
    let strs = '';
    strs = textarea.value.split('');
    paragraph.innerHTML = 'символов в тексте: ';
    
    let newArr = strs.filter(function(str) {
        if (str == ' ' || str == ',' || str == '.' || str == '\n') {
            return false;
        } else {
            return true;
        }
    })
    console.log(newArr);
    paragraph.innerHTML += newArr.length;
        
    textarea.addEventListener('click', function() {
        paragraph.innerHTML = 'символов в тексте: ' + newArr.length;
        strs = '';
        
    })
})