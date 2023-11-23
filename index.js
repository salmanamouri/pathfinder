const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

/*function toggleTheme() {
       let theme = document.getElementById("theme");
       let darkTheme = document.getElementById("dark-theme");
       if (theme.disabled) {
         theme.disabled = false;
         darkTheme.disabled = true;
       } else {
         theme.disabled = true;
         darkTheme.disabled = false;
   }
}*/

const toggleSwitch = document.querySelector('#toggle');
const themeLink = document.querySelector('#theme-link');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeLink.setAttribute('href', 'dark.css');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeLink.setAttribute('href', 'light.css');
  }    
}









