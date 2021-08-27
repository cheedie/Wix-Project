// select the button, nav,links


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navLinks");
const closeBtn = document.querySelector('.close-btn');
const removeBody = document.querySelector('.display');

menuToggle.addEventListener('click', function(){
    // console.log(navLinks.classList);
    navLinks.classList.toggle('active');


})

