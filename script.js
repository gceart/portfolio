"use strict";
/* ### JS dynamic msg ###*/
const changingMsgEl = document.getElementById("changing-msg");
const phrases = [ "code", "resolve problems", "learn"]
let isTyping = changingMsgEl.getAttribute("animation") == "typing"; 
let indexMsg = 0;
let msg = changingMsgEl.textContent;

function resolveAfterSeconds(funct,x) {
    setTimeout(()=> {
        // console.log(`done ${funct.name} in ${x} ms`);
        funct()
    }, x)
}

const changeAnim = () => {
    let chooseAnim = isTyping? "typing" : "deleting";
    isTyping = !isTyping
    changingMsgEl.style.animation = `${chooseAnim} 1s steps(${msg.length}) forwards, blink .5s infinite step-end alternate`
}

const changeMsg = () => {
    indexMsg = (indexMsg > phrases.length -1) ? 0 : indexMsg;
    msg = phrases[indexMsg]
    indexMsg++
    changingMsgEl.textContent = msg;
    changingMsgEl.style.width = `${msg.length}ch`
}

// first animation for 010101010
resolveAfterSeconds(changeAnim, 0)
resolveAfterSeconds(changeAnim, 2000)
resolveAfterSeconds(changeMsg, 3000)
// end animation

setInterval(() => {
    resolveAfterSeconds(changeAnim, 0)
    resolveAfterSeconds(changeAnim, 2000)
    resolveAfterSeconds(changeMsg, 3500)
}, 4000);

/* ### END JS dynamic msg ###*/

const cardFlipper = document.querySelector(".color-flipper");

cardFlipper.addEventListener("mouseenter", (e)=>{
    document.querySelector(".color-flipper > .card--info").style.opacity= '1'
    document.getElementById("img-flipper").style.opacity = ".05"
})

cardFlipper.addEventListener("mouseleave", (e)=>{
    document.querySelector(".color-flipper > .card--info").style.opacity= '0'
    e.target.style.backgroundColor = "transparent"
    document.getElementById("img-flipper").style.opacity = "1"
})

const btnTheme = document.getElementById("btn-theme");
let canLightTheme = true;

const changeMode = () => {
    if (canLightTheme){
        document.documentElement.style.setProperty('--color-accent', '#30323d');
        document.documentElement.style.setProperty('--color-dark', '#cdd1c4');
        document.documentElement.style.setProperty('--color-light', '#4d5061');
        document.documentElement.style.setProperty('--color-primary', '#5c80bc');
        canLightTheme = false;
        document.querySelector("#btn-theme > i").classList.replace("fa-moon","fa-sun")
    } else {
        document.documentElement.style.setProperty('--color-accent', '#e8c547');
        document.documentElement.style.setProperty('--color-dark', '#30323d');
        document.documentElement.style.setProperty('--color-light', '#cdd1c4');
        document.documentElement.style.setProperty('--color-primary', '#4d5061');
        canLightTheme = true;
        document.querySelector("#btn-theme > i").classList.replace("fa-sun","fa-moon")
    }
}

btnTheme.addEventListener('click',changeMode)

