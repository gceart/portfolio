"use strict"
import * as Info from "./info.js";
import * as Main from "./script.js"
import { resolveAfterSeconds } from "./ext.js";

let phrases = "";
let indexMsg = 0;
let isTyping = "";
let msg = "";

export async function init() {
    const requestPhrases = Info.getPhrases(Main.pendingData).then(value => phrases = value);
    isTyping = Main.changingMsgEl.getAttribute("animation") == "typing"; 
    msg = Main.changingMsgEl.textContent;
    animateTyping()
}

const changeAnimation = () => {
    let chooseAnim = isTyping? "typing" : "deleting";
    isTyping = !isTyping
    Main.changingMsgEl.style.animation = `${chooseAnim} 1s steps(${msg.length}) forwards, blink .5s infinite step-end alternate`
}

const changeMsg = () => {
    indexMsg = (indexMsg > phrases.length -1) ? 0 : indexMsg;
    msg = phrases[indexMsg]
    indexMsg++
    Main.changingMsgEl.textContent = msg;
    Main.changingMsgEl.style.width = `${msg.length}ch`
}

const animateTyping = () => {
    resolveAfterSeconds(changeAnimation, 0)
    resolveAfterSeconds(changeAnimation, 2000)
    resolveAfterSeconds(changeMsg, 3500)
}
// END JS dynamic msg

setInterval(() => {
    animateTyping()
}, 4000);