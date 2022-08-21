// Import stylesheets
import './style.css';

console.log('connected');

// note - fix nav bar bug

const navIcon = document.getElementById('navIcon');
const navMenu = document.querySelector('.menuContainer');
const navLinks = document.querySelectorAll('.menuLink');
const navBtn = document.querySelector('.navBtn');
const menuIcons = document.querySelectorAll('.menuLinkIcon');

navIcon.addEventListener('mouseenter', openMenu);
navMenu.addEventListener('mouseleave', closeMenu);
navBtn.addEventListener('mouseenter', closeMenu);

navLinks.forEach((navLink) => {
  navLink.addEventListener('mouseenter', (e) => {
    // navLink.classList.add('open');
    console.log('hovered');
    console.log(navLink.children);
  });
});

function openMenu() {
  console.log('clicked');
  navMenu.classList.add(`open`);
  console.log(navMenu.classList);
  navIcon.classList.remove(`fas`);
  navIcon.classList.remove(`fa-bars`);
  navIcon.classList.add(`fa-solid`);
  navIcon.classList.add(`fa-arrow-down`);
  navIcon.style.color = 'white';
}

function closeMenu() {
  navMenu.classList.remove(`open`);
  console.log('closed');
  navIcon.classList.remove(`fa-solid`);
  navIcon.classList.remove(`fa-arrow-down`);
  navIcon.classList.add(`fas`);
  navIcon.classList.add(`fa-bars`);
  navIcon.style.color = 'black';
}

function linkHoverOn(e) {
  console.log('cleared');
}

console.log(navLinks);
