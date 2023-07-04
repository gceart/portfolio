"use strict"

const langBox = document.querySelector(".lang-box");
const langMenu = document.querySelector(".lang-menu");
const langES = document.getElementById("lang-es");
const langEN = document.getElementById("lang-en");
export const addEvents = () => {
    langBox.addEventListener("mouseover",()=>{
        langMenu.classList.toggle("appear",true);
    })

    langBox.addEventListener("mouseleave",()=>{
        langMenu.classList.toggle("appear",false);
    })

    langES.addEventListener("click",()=>{
        localStorage.setItem("lang", "es");
        window.location.reload();
    })

    langEN.addEventListener("click",()=>{
        localStorage.setItem("lang", "en");
        window.location.reload();
    })
}