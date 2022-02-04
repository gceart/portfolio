"use strict";
/* ### JS dynamic msg ###*/
const changingMsgEl = document.getElementById("changing-msg");
const phrases = [ "code", "resolve problems", "team work"]
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
    document.querySelector(".color-flipper > .card--info").style.display = 'block'
    document.getElementById("img-flipper").style.opacity = ".05"
})

cardFlipper.addEventListener("mouseleave", (e)=>{
    document.querySelector(".color-flipper > .card--info").style.display = 'none'
    e.target.style.backgroundColor = "transparent"
    document.getElementById("img-flipper").style.opacity = "1"
})