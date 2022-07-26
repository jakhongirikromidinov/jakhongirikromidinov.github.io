'use strict';

const menu = document.querySelector('.menu');

const menuLinks = menu.querySelectorAll('a');

const tabs = document.querySelectorAll('.tab');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        for (let link of menuLinks) {
            link.classList.remove('active');
        }
        for (let tab of tabs) {
            tab.classList.remove('active');
        }
        tabs[i].classList.add('active');
        menuLinks[i].classList.add('active');   
    })
}


