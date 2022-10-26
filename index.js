
let menu = document.querySelector('#menu-bars');
let head = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    head.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    head.classList.remove('active');
}