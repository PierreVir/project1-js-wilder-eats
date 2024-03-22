// Js pour pouvoir déplacer la map //

let startX = 0;
let startY = 0;
let scrollTop = 0;
let scrollLeft = 0;
let isMouseDown = false;


const scrollableMap = document.getElementById("map");
const wrapper = document.getElementById("map-wrapper");

function startScroll(event) {
   isMouseDown = true;
   startX = event.clientX || event.touches[0].clientX;
   startY = event.clientY || event.touches[0].clientY;
   scrollTop = wrapper.scrollTop;
   scrollLeft = wrapper.scrollLeft;
}

function moveMap(event) {

   event.preventDefault();
   if (!isMouseDown) return;

   wrapper.scrollTo({
      left: scrollLeft + (startX - (event.clientX || event.touches[0].clientX)),
      top: scrollTop + (startY - (event.clientY || event.touches[0].clientY)),
   });
}

function stopScroll() {
   isMouseDown = false;
}

let body = document.body;




scrollableMap.addEventListener("mousedown", startScroll);
scrollableMap.addEventListener("touchstart", startScroll);

scrollableMap.addEventListener("mousemove", moveMap);
scrollableMap.addEventListener("touchmove", moveMap);

scrollableMap.addEventListener("mouseup", stopScroll);
scrollableMap.addEventListener("mouseleave", stopScroll);
scrollableMap.addEventListener("touchend", stopScroll);


// JS pour l'affichage du nom du restaurant au survol


// Malabar burger
const malabarMapCard = document.querySelector("#malabarMapCard");
const malabarPin = document.getElementById("malabar-map-pin");

// Les filoches
const filochesMapCard = document.querySelector("#lesFilochesMapCard");
const filochesPin = document.getElementById("filoches-map-pin");

// rotisseur
const rotisseurMapCard = document.querySelector("#rotisseurMapCard");
const rotisseurPin = document.getElementById("rotisseur-map-pin");

// Le kiosque
const kiosqueMapCard = document.querySelector("#kiosqueMapCard");
const kiosquePin = document.getElementById("kiosque-map-pin");

// Carrefour City
const carrefourCityMapCard = document.querySelector("#carrefourCityMapCard");
const carrefourCityPin = document.getElementById("carrefourCity-map-pin");


// Malabar burger
malabarPin.addEventListener("mouseover", () => {
   if (malabarMapCard.className === "inactive") {
      malabarMapCard.classList.replace("inactive", "active")
   };

})
malabarPin.addEventListener("mouseout", () => {
   if (malabarMapCard.className === "active") {
      malabarMapCard.classList.replace("active", "inactive")
   };

})
// Les filoches
filochesPin.addEventListener("mouseover", () => {
   if (filochesMapCard.className === "inactive") {
      filochesMapCard.classList.replace("inactive", "active")
   };

})
filochesPin.addEventListener("mouseout", () => {
   if (filochesMapCard.className === "active") {
      filochesMapCard.classList.replace("active", "inactive")
   };
})

// Rotisseur
rotisseurPin.addEventListener("mouseover", () => {
   if (rotisseurMapCard.className === "inactive") {
      rotisseurMapCard.classList.replace("inactive", "active")
   };

})
rotisseurPin.addEventListener("mouseout", () => {
   if (rotisseurMapCard.className === "active") {
      rotisseurMapCard.classList.replace("active", "inactive")
   };
})

// Le kiosque
kiosquePin.addEventListener("mouseover", () => {
   if (kiosqueMapCard.className === "inactive") {
      kiosqueMapCard.classList.replace("inactive", "active")
   };
})
kiosquePin.addEventListener("mouseout", () => {
   if (kiosqueMapCard.className === "active") {
      kiosqueMapCard.classList.replace("active", "inactive")
   };
})

// Carrefour City
carrefourCityPin.addEventListener("mouseover", () => {
   if (carrefourCityMapCard.className === "inactive") {
      carrefourCityMapCard.classList.replace("inactive", "active")
   };

})
carrefourCityPin.addEventListener("mouseout", () => {
   if (carrefourCityMapCard.className === "active") {
      carrefourCityMapCard.classList.replace("active", "inactive")
   };
})


// Cache les MapCards sur affichage > à tablette

const resizeObserver = new ResizeObserver(entries => {
   for (const entry of entries) {
      // Vérifie si l'élément observé est map-wrapper
      if (entry.target.id === 'map-wrapper') {
         // Vérifie si la largeur de l'élément est supérieur à 768px
         if (entry.contentRect.width > 768) {
            // Si oui, change la classe des éléments à "inactive"
            carrefourCityMapCard.className = "inactive";
            kiosqueMapCard.className = "inactive";
            rotisseurMapCard.className = "inactive";
            filochesMapCard.className = "inactive";
            malabarMapCard.className = "inactive";
         } else {
            // Si non, change la classe en "active"
            carrefourCityMapCard.className = "active";
            kiosqueMapCard.className = "active";
            rotisseurMapCard.className = "active";
            filochesMapCard.className = "active";
            malabarMapCard.className = "active";
         }
      }
   }
});

resizeObserver.observe(document.querySelector("#map-wrapper"));
