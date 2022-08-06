//Реализация слайдера
const carouselSection = document.querySelector('.carousel');
let next = carouselSection.querySelector('.slick-next');
let prev = carouselSection.querySelector('.slick-prev');
let slider = carouselSection.querySelectorAll('.carousel__slide img');

let i = 0;

function removeActive() {
    for (let slide of slider) {
        slide.classList.remove('active');
    }
}
function changeSlide() {
    slider[i].classList.add('active');
}
prev.addEventListener('click', function toLeft(event) {
    removeActive();
    if (i == 0) {
        i = 3;
    }
    i--;
    changeSlide();
});

next.addEventListener('click', function toRight(event) {
    removeActive();
    i++;
    if (i == 3) {
        i = 0;
    }
    changeSlide();
});

//Реализация переключения вкладок в секции "каталог"
const calalogSection = document.querySelector('.catalog');
const tabs = calalogSection.querySelectorAll('.catalog__tabs');
const contents = calalogSection.querySelectorAll('.catalog__content');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
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
let moreLink = calalogSection.querySelectorAll('.catalog-item__link');
let backLink = calalogSection.querySelectorAll('.catalog-item__back');

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
//Реализация возникновения модального окна при нажатии на кнопки "Заказать звонок" и "Заказать консультацию";
const consultationButtons = document.querySelectorAll('.button_book');
const consultationOverLay = document.querySelector('#consultation');
const closeButtons = document.querySelectorAll('.overlay__close');

for (let button of consultationButtons) {
    button.addEventListener('click', function() {
        consultationOverLay.classList.add('active');

        for (let button of closeButtons) {
            button.addEventListener('click', function() {
                consultationOverLay.classList.remove('active');
            });
        }
    });
};
//Реализация возникновения модального окна при нажатии на кнопки "Купить";
const buyButtons = document.querySelectorAll('.button_buy');
const buyOverLay = document.querySelector('#booking');
const buyOverLaySubtitle = document.querySelector('#buy_descr');

for (let button of buyButtons) {
    button.addEventListener('click', function() {
        buyOverLay.classList.add('active');
        buyOverLaySubtitle.innerHTML = this.parentElement.parentElement.children[1].innerHTML;
        console.log(button.parentElement.parentElement.children[1].innerHTML);
        for (let button of closeButtons) {
            button.addEventListener('click', function() {
                buyOverLay.classList.remove('active');
            });
        }
    })
}



// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right.png"></button>' 
//     });
// });
