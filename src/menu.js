const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
function toggleMenu () {  
  navbar.classList.toggle('show-nav')
  }
  burger.addEventListener('click', toggleMenu);   

  