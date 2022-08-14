const menuBar = document.querySelector('#menu__bar');
const menu = document.querySelector('#menu');
const closeBtn  = document.querySelector('#close');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('hidden');
    menu.classList.toggle('hidden');
} );
closeBtn.addEventListener('click', () => {
    menuBar.classList.toggle('hidden');
    menu.classList.toggle('hidden');
} );