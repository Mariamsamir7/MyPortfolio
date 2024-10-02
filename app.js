const toggleMenu = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('nav ul');

toggleMenu.addEventListener('click', () => {
    if (window.innerWidth <= 777) {
        navMenu.classList.toggle('show-menu');
    }
});
/////////
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const landingImg = document.querySelector('.landing-img'); 

themeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
    landingImg.src = 'images/landing-dark.gif';  
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
    landingImg.src = 'images/landing-light.gif';
  }
});

window.addEventListener('load', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    landingImg.src = 'images/landing-dark.gif';
  } else {
    landingImg.src = 'images/landing-light.gif';  
  }
});
