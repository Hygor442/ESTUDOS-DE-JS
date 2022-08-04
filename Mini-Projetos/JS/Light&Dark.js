const themeSwitch = document.querySelectorAll('.theme-swicth');
const body = document.querySelector('body');
const initialTheme = 'theme-light';

body.classList.add(initialTheme);
document.querySelector(`#${initialTheme}`).checked = true;

function toggleTheme(e){
    const theme = this.value;
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add(`theme-${theme}`);
}

Array.from(themeSwitch).forEach(radio => radio.addEventListener('change', toggleTheme) );
