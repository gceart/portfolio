"use strict"
const cardsContainer = document.querySelector(".cards-container");

// START CREATE PROJECT CARD ELEMENT
export const create = (title, description, image, className, link, repo) => {
    const card = document.createElement("ARTICLE");
    const cardInfo = document.createElement("DIV");
    const cardTitle = document.createElement("H4");
    const cardDescription = document.createElement("P");
    const cardBtnContainer = document.createElement("DIV");
    const cardBtnLink = document.createElement("A");
    const cardBtnRepo = document.createElement("A");
    const img = document.createElement("IMG");

    card.classList.add("projects--card",`${className}`);
    cardInfo.classList.add("card--info");
    cardTitle.classList.add("card--title");
    cardDescription.classList.add("card--description");
    cardBtnContainer.classList.add("btn-container");
    cardBtnLink.classList.add("btn", "btn-site", "fas", "fa-external-link-alt");
    cardBtnRepo.classList.add("btn", "btn-repo", "fab", "fa-github");
    img.classList.add("img");
    img.setAttribute("src",`${image}`);
    img.setAttribute("alt",`${title}`);

    cardTitle.textContent = `${title}`;
    cardDescription.textContent = `${description}`;
    cardBtnLink.setAttribute("href",link);
    cardBtnLink.setAttribute("target", "_blank");
    cardBtnRepo.setAttribute("href",repo);
    cardBtnRepo.setAttribute("target", "_blank");

    cardBtnContainer.appendChild(cardBtnLink);
    cardBtnContainer.appendChild(cardBtnRepo);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardDescription);
    cardInfo.appendChild(cardBtnContainer)
    card.appendChild(cardInfo);
    card.appendChild(img);
    return card;
}
// END CREATE PROJECT CARD ELEMENT

export const load = async (data, language) => {
    const docFragment = new DocumentFragment;
    for(let i = 0; i < data.projects.length; i++){
        const description = (language == "en") ? data.projects[i].description.en : data.projects[i].description.es; 
        const newCard = create(data.projects[i].name, description, data.projects[i].image, data.projects[i].class, data.projects[i].link, data.projects[i].repo);
        docFragment.appendChild(newCard);
    }
    cardsContainer.appendChild(docFragment);
    cardsContainer.classList.add("loaded");
}

export const addEvents = () => {
    // START CARDS MOUSE EVENTS
    cardsContainer.addEventListener("mouseover", (e) =>{
        if (cardsContainer.classList.contains("loaded")){
            const cards = document.querySelectorAll(".projects--card");
            cards.forEach(card => {
                card.addEventListener("mouseenter", (e)=>{
                    e.target.querySelector(".card--info").style.opacity= '1'
                    e.target.querySelector("img").style.opacity = ".05"
                })
                card.addEventListener("mouseleave", (e)=>{
                    e.target.querySelector(".card--info").style.opacity= '0'
                    e.target.style.backgroundColor = "transparent"
                    e.target.querySelector("img").style.opacity = "1"
                })
            })
        }
    })
    // END CARDS MOUSE EVENTS
}