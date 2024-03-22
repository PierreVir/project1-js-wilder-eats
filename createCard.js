const cards = document.querySelector(".restaurants")

function createCard(name, type){
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card-Body.appendChild(cardBody);
    
    
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("cardTitle");
    card.appendChild(cardTitle);

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    card.appendChild(card-button);

}


