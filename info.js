"use strict"
import {language} from "./script.js"
const position = document.getElementById("position");
const msgIntro = document.getElementById("msg-intro");
const aboutMe = document.getElementById("about");

export const load = async (data)=> {
    let pos = (language == "en") ? data.info.position.en :
                                   data.info.position.es;
    position.textContent = pos;

    let dynMsg = (language == "en") ? data.info.msgIntro.en :
                                   data.info.msgIntro.es;
    msgIntro.textContent = dynMsg;

    let about = (language == "en") ? data.info.about.en :
                                   data.info.about.es;
    aboutMe.innerHTML = about;
}

export const getPhrases = async (data) => {
    const phrases = (language == "en") ? data.phrases.en : data.phrases.es; 
    return phrases;
}