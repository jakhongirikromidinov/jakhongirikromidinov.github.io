'use strict';

let list1 = document.querySelector('#list1');

let list2 = document.querySelector('#list2');

let list3 = document.querySelector('#list3');

const headerTitle = document.querySelector('#headerH2');

const header = document.querySelector('header');

const monthsInRussian = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let date = new Date();

let yearNow = date.getFullYear();

let monthNow = date.getMonth();

let today = date.getDate();

let howManyDays = new Date(yearNow, monthNow + 1, 0);

let lastDayOfMonth = howManyDays.getDate();

for (let i = 1; i <= lastDayOfMonth - 20; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    
    if (i == today) {
        li.classList.add('red');
    }
    list1.appendChild(li);
}
for (let i = 11; i <= lastDayOfMonth - 10; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    
    if (i == today) {
        li.classList.add('red');
    }
    list2.appendChild(li);
}
for (let i = 21; i <= lastDayOfMonth; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    
    if (i == today) {
        li.classList.add('red');
    }
    list3.appendChild(li);
}

headerTitle.innerHTML = monthsInRussian[monthNow] + ' ' + yearNow + ' ' + 'года';

header.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName != 'A') {
        return;
    }
    if (target.matches('a.next')) {
        monthNow++;
        if (monthNow > 11) {
            monthNow = 0;
            yearNow++;
        }
    }
    if (target.matches('a.previous')) {
        monthNow--;
        if (monthNow < 0) {
            monthNow = 11;
            yearNow--;
        }
    }

    let listAll = document.querySelectorAll('li');
    for (let li of listAll) {
        if (li.innerHTML == today) {
            li.classList.remove('red');
        }
    }
    if (monthNow == date.getMonth()) {
        for (let li of listAll) {
            if (li.innerHTML == today) {
                li.classList.add('red');
            } 
        }
    }

    let howManyDays = new Date(yearNow, monthNow + 1, 0);
    headerTitle.innerHTML = monthsInRussian[monthNow] + ' ' + yearNow + ' ' + 'года';

    let lastDayOfMonth = howManyDays.getDate();
    if (lastDayOfMonth == 31 && list3.children.length < 11) {
        for (let i = list3.children.length + 20; i < lastDayOfMonth; i++) {
            let li = document.createElement('li');
            li.innerHTML = list3.children.length + 21;
            li.classList.add('newLi');
            list3.appendChild(li);
        }
    }
    if (lastDayOfMonth <= 30 && lastDayOfMonth >= 28 && list3.children.length > 10) {
        let list3 = document.querySelector('#list3');
        console.log(list3.children);
        for (let i = list3.children.length + 20; i > lastDayOfMonth; i--) {
            list3.children[i - 21].remove();
        }

    }
    let lis = document.querySelectorAll('li');
    let j = 1;
    for (let li of lis) {
        li.innerHTML = j;
        j++;
        if (j == lastDayOfMonth) {
            break;
        }
    }
})