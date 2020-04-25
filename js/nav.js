const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
})