"use strict"
// START BUTTON THEME 
let canLightTheme = true;
export const changeMode = () => {
    if (canLightTheme){
        document.documentElement.style.setProperty('--color-background', '#fcfcfc');
        document.documentElement.style.setProperty('--color-primary', '#aaccff');
        document.documentElement.style.setProperty('--color-secondary', '#5c80bc');
        document.documentElement.style.setProperty('--color-accent', '#2c1c66');
        document.documentElement.style.setProperty('--color-light', '#233021');
        canLightTheme = false;
        document.querySelector("#btn-theme > i").classList.replace("fa-moon","fa-sun")
    } else {
        document.documentElement.style.setProperty('--color-accent', '#e8c547');
        document.documentElement.style.setProperty('--color-background', '#30323d');
        document.documentElement.style.setProperty('--color-light', '#cdd1c4');
        document.documentElement.style.setProperty('--color-primary', '#4d5061');
        document.documentElement.style.setProperty('--color-secondary', '#5c80bc');
        canLightTheme = true;
        document.querySelector("#btn-theme > i").classList.replace("fa-sun","fa-moon")
    }
}
// END BUTTON THEME 