"use strict";

const changingMsgEl = document.getElementById("changing-msg");

const phrases = [ "code", "resolve problems", "team work"]

/* 
    select phrase
    pass length to widt

*/

let isTyping = changingMsgEl.getAttribute("animation") == "typing"; 
const changeMsg = (msg) => {
    changingMsgEl.textContent = msg;
    changingMsgEl.style.width = `${msg.length}ch`
    let chooseAnim = isTyping? "typing" : "deleting";
    changingMsgEl.style.animation = `${chooseAnim} 1s steps(${msg.length}) forwards`

    setTimeout(()=>{
        isTyping = !isTyping;
    },1000)
}

setInterval(()=>{
    changeMsg(phrases[2])
}, 2000)


