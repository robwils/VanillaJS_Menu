// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('box1');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// my code

console.log('connected');

const navIcon = document.getElementById('navIcon');
const navMenu = document.querySelector('.menuContainer');

console.log(navMenu.classList);

navIcon.addEventListener('mouseover', openMenu);
navMenu.addEventListener('mouseleave', closeMenu);

function openMenu() {
  console.log('clicked');
  navMenu.classList.toggle(`open`);
  console.log(navMenu.classList);
}

function closeMenu() {
  navMenu.classList.remove(`open`);
  console.log('clicked');
}
