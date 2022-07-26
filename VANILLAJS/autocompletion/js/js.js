'use strict';

const elem = document.querySelector('#elem');

let list = document.querySelector('#list');

const countries = ['Albania', 'Armenia', 'Andorra', 'Australia', 'Austria']

elem.addEventListener('input', function() {
    let countriesFiltered = countries.filter(function(country) {
        if (country.startsWith(elem.value)) {
            return true;
        } else {
            return false;
        }
    });
    

    if (countriesFiltered == 0 || elem.value.length == 0) {
        list.classList.add('hidden');
    } else {
        list.classList.remove('hidden')
    }

    let lis = document.querySelectorAll('li');
    for (let country of countriesFiltered) {
        for (let li of lis) {
            li.remove();
        }
        let li = document.createElement('li');
        li.innerHTML = country;

        list.appendChild(li);
    }

    list.addEventListener('click', function(event) {
        let target = event.target;
        if (event.target.tagName != 'LI') {
            return;
        }
        elem.value = target.innerHTML;
        let lis = document.querySelectorAll('li');
        for (let li of lis) {
            li.remove();
        }
    });
})

