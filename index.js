// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('box1');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// my code

console.log('connected');

const navIcon = document.getElementById('navIcon');
const navMenu = document.querySelector('.menuContainer');
const navLinks = document.querySelectorAll('.menuLink');

navIcon.addEventListener('mouseover', openMenu);
navMenu.addEventListener('mouseleave', closeMenu);

navLinks.forEach((navLink) => {
  navLink.addEventListener('mouseenter', linkHover);
});

function openMenu() {
  console.log('clicked');
  navMenu.classList.toggle(`open`);
  console.log(navMenu.classList);
  navIcon.style.color = 'white';
}

function closeMenu() {
  navMenu.classList.remove(`open`);
  console.log('clicked');
  navIcon.style.color = 'black';
}

function linkHover() {
  console.log('hovered link');
}
