const toggleBtn = document.querySelector('.navbar__toogleButton');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    icons.classList.toggle('active')
});