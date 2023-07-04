"use strict";
import * as Aux from "./ext.js"
import * as Card from "./card.js"
import * as Theme from "./theme.js"
import * as LangMenu from "./langMenu.js"
import * as Info from "./info.js"
import * as TypingWords from "./typingWords.js"

export const pendingData = await Aux.requestData();

export const language = localStorage.getItem("lang") || "en";
document.querySelector(".lang").textContent = language.toUpperCase();

LangMenu.addEvents();

export const changingMsgEl = document.getElementById("changing-msg");
Info.load(pendingData);

TypingWords.init();

const btnTheme = document.getElementById("btn-theme");
btnTheme.addEventListener('click', Theme.changeMode);

Card.load(pendingData, language);
Card.addEvents();