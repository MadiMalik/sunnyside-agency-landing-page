const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list-box');

menuIcon.addEventListener('click', showMenu);

function showMenu() {
  if (window.innerWidth <= 800) {
      navList.classList.toggle('hidden');
      
   } 
  }
