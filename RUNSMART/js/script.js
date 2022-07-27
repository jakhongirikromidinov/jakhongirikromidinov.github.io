//Реализация слайдера
let next = document.querySelector('.slick-next');
let prev = document.querySelector('.slick-prev');
let slider = document.querySelector('.carousel__slide img');

let addresses = ['img/slider/slide_1.jpg', 'img/slider/slide_2.jpg', 'img/slider/slide_3.jpg'];

let i = 0;

prev.addEventListener('click', function toLeft(event) {
    i--;
    if (i == 0) {
        i = 2;
    }
    slider.src = addresses[i];
});

next.addEventListener('click', function toRight(event) {
    i++;
    if (i == 3) {
        i = 0;
    }
    slider.src = addresses[i];
});

//Реализация переключения вкладок в секции "каталог"
const tabs = document.querySelectorAll('.catalog__tabs');
const contents = document.querySelectorAll('.catalog__content');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        console.log('done');
        for (let tab of tabs) {
            tab.classList.remove('catalog__tabs_active');
        }
        this.classList.add('catalog__tabs_active');
        for (let content of contents) {
            content.classList.remove('catalog__content_active');
        }
        contents[i].classList.add('catalog__content_active');
    });
};

//Реализация возникновения окна "подробнее" при нажатии на ссылку в секции "каталог"
let moreLink = document.querySelectorAll('.catalog-item__link');
let backLink = document.querySelectorAll('.catalog-item__back');

for (let link of moreLink) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.parentElement.classList.remove('catalog-item__content_active');
        this.parentElement.nextElementSibling.classList.add('catalog-item__list_active');
        for (let link of backLink) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                console.log('done');
                this.parentElement.classList.remove('catalog-item__list_active');
                this.parentElement.previousElementSibling.classList.add('catalog-item__content_active');
            });
        };
    });
};


// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right.png"></button>' 
//     });
// });