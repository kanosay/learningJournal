const burgerBtn = document.getElementById('burger');
const nav = document.querySelector('.nav');
const timeHtml = document.querySelector('.time'); 
const date = new Date();

burgerBtn.addEventListener('click', function(){
    if (burgerBtn.classList.toggle('open')) {
        burgerBtn.src = "./img/burger-menu/close.svg";
        nav.classList.add('nav__active')
    } else {
        burgerBtn.src = "./img/burger-menu/menu.svg";
        nav.classList.remove('nav__active')
    }
})

timeHtml.innerHTML = date.getFullYear();