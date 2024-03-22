let restaurants = [{
    name: "Le malabar Burger",
    type: "Burgers",
    adress: "125 Gd Rue Saint-Michel, 31400 Toulouse",
    itinerary: "https://www.google.com/maps/dir/8+Rue+de+Valenciennes,+Toulouse/125+Gd+Rue+Saint-Michel,+31400+Toulouse/@43.5932072,1.444796,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12aebc8f19918acd:0xf53ee9e03e6b07e7!2m2!1d1.4552985!2d43.5961277!1m5!1m1!1s0x12aebd11be1899c5:0xa0eb2d728ed3ce34!2m2!1d1.4454511!2d43.590149!3e2?entry=ttu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    openingHours: "mercredi 11:00-14:00 18:30-23:00 jeudi 11:00-14:00 18:30-23:00 vendredi 18:30-23:00 samedi 11:00-14:30 18:00-23:00 dimanche 11:00-14:30 18:00-23:00 lundi 11:00-14:00 18:30-23:00 mardi 11:00-14:00 18:30-23:00",
    walkTime: "à moins de 20 minutes",
    imgSrc: "img/burger-malabar.jpg",
},
{
    name: "Les Filoches",
    type: "Burgers",
    adress: "1 Rue Saint-Joseph, 31400 Toulouse",
    itinerary: "https://www.google.com/maps/dir/8+Rue+de+Valenciennes,+Toulouse/Les+Filoches,+1+Rue+Saint-Joseph,+31400+Toulouse/@43.5926312,1.4470695,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12aebc8f19918acd:0xf53ee9e03e6b07e7!2m2!1d1.4552985!2d43.5961277!1m5!1m1!1s0x12aebd6941d21e15:0x62467c80a1538fe9!2m2!1d1.4491516!2d43.5898061!3e2?entry=ttu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    openingHours: "",
    walkTime: "à 15 minutes",
    imgSrc: "img/burger-filoche.jpg",
},
{
    name: "Le Rotisseur",
    type: "Rotisserie",
    adress: "10 rue du pont Montaudran, 31000 Toulouse",
    itinerary: "https://www.google.com/maps/dir//10+Rue+du+Pont+Montaudran,+31000+Toulouse/@43.5987115,1.3731763,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12aebc8e3307c495:0x427126caf2fd8f51!2m2!1d1.455577!2d43.5987411?hl=fr&entry=ttu",
    description: "La rotisserie pour ceux qui veulent se manger un bon poulet a la rotisserie vous pourriez vous y rendre à moin de 5min a pied de la Wild de Toulouse",
    openingHours: "Lundi: 10h00-14h00 & 16h00-21h00, Mardi: 10h00-14h00 & 16h00-21h00, Mercredi: 10h00-14h00 & 16h00-21h00, Jeudi: 10h00-14h00 & 16h00-21h00, Vendredi: 10h00-14h00 & 16h00-21h00",
    walkTime: "à 5 minutes",
    imgSrc: "img/poulet-rotisseur.jpg",
},
{
    name: "Carrefour city",
    type: "Superette",
    adress: "1 Place A. Bernard, 31000 Toulouse",
    itinerary: "https://www.google.com/search?q=carrefour+city+grand+rond+toulouse&rlz=1C1ONGR_frFR1053FR1053&oq=carrefour+city+grand+rond+toulouse&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABNIBCDg5MzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#vhid=/g/1thlq3px&vssid=lclsmap",
    description: "tout ce qu'on a besoin c'est carrefour city tu veux du café pour la Wild il y en a, tu veux du sucre pour accompagner ton café c'est aussi possible tu veux te faire un sandwich avec plusieurs ingrédients c'est aussi possible la superette peut vraiment te sortir d'une faim incroyable",
    openingHours: "Lundi: 07h00-21h00, Mardi: 07h00-21h00, Mercredi: 07h00-21h00, Jeudi: 07h00-21h00, Vendredi: 07h00-21h00",
    walkTime: "à 2 minutes",
    imgSrc: "img/carrefour.jpg",

},
{
    name: "Le kiosque",
    type: "Asiatique",
    adress: "77 Allée Forain-François Verdier, 31000 Toulouse",
    itinerary: "https://www.google.com/maps/dir//77+All.+Forain-Fran%C3%A7ois+Verdier,+31000+Toulouse/@43.5968365,1.3699023,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12aebc859c7ecc03:0x568c00fa0109c281!2m2!1d1.4523084!2d43.5968283?entry=ttu",
    description: "Pour les Fins gourmet de restaurant asiatique vous avez le Kiosque",
    openingHours: "Lundi: 11h00-22h00, Mardi: 11h00-22h00, Mercredi: 11h00-22h00, Jeudi: 11h00-22h00, Vendredi: 11h00-22h00.",
    walkTime: "à 4 minutes",
    imgSrc: "img/asianfood.jpg",

}


]



const cardsContainer = document.querySelector(".restaurants"); // Sélectionnez le conteneur pour les cartes

function createCard(name, type, imgSrc) {
    const card = document.createElement("div");
    card.classList.add("restaurant-card");

    const cardImg = document.createElement("img");
    cardImg.style.backgroundImage = `url(${imgSrc})`;
    cardImg.classList.add("restaurant-img");
    card.appendChild(cardImg);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("restaurant-title");
    cardTitle.innerText = name;
    card.appendChild(cardTitle);

    const cardButton = document.createElement("button");
    cardButton.classList.add("restaurant-button");
    cardButton.innerText = type;
    card.appendChild(cardButton);
    cardsContainer.appendChild(card); // Ajoutez la carte complète au conteneur des cartes
}

for (let i = 0; i < restaurants.length; i++) {
    createCard(restaurants[i].name, restaurants[i].type, restaurants[i].imgSrc);
}


function filterRestaurant(type) {
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    restaurantCards.forEach((card) => {
        if (type === 'all' || card.querySelector('.restaurant-button').innerText === type) {
            card.style.display = 'block'; // Affiche les cartes correspondant au type sélectionné
        } else {
            card.style.display = 'none'; // Masque les cartes qui ne correspondent pas au type sélectionné
        }
    });
}


