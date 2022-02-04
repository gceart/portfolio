"use strict";

const changingMsgEl = document.getElementById("changing-msg");

const phrases = [ "code", "resolve problems", "team work"]

/* 
    select phrase
    pass length to width

*/

let isTyping = changingMsgEl.getAttribute("animation") == "typing"; 
let indexMsg = 0;
let msg = changingMsgEl.textContent;

const changeAnim = () => {
    let chooseAnim = isTyping? "typing" : "deleting";
    isTyping = !isTyping
    changingMsgEl.style.animation = `${chooseAnim} 1s steps(${msg.length}) forwards, blink .5s infinite step-end alternate`
}

function resolveAfterSeconds(funct,x) {
    setTimeout(()=> {
        // console.log(`done ${funct.name} in ${x} ms`);
        funct()
    }, x)
}

const changeMsg = () => {
    indexMsg = (indexMsg > phrases.length -1) ? 0 : indexMsg;
    msg = phrases[indexMsg]
    indexMsg++
    changingMsgEl.textContent = msg;
    changingMsgEl.style.width = `${msg.length}ch`
}

setInterval(() => {
    resolveAfterSeconds(changeAnim, 0)
    resolveAfterSeconds(changeAnim, 2000)
    resolveAfterSeconds(changeMsg, 3000)
}, 4000);

    resolveAfterSeconds(changeAnim, 0)
    resolveAfterSeconds(changeAnim, 2000)
    resolveAfterSeconds(changeMsg, 3000)

/* 
anim typing 1s
wait .5s
anim deleting 1s
change msg
anim typing 1s ...
*/

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