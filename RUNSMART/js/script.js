$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right.png"></button>' 
    });
});
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
            })
        }
    })
}
