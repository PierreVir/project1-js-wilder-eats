const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);
function toggleModal() {
  modalContainer.classList.toggle("active");
}

// Fonction de notation étoiles
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".opinion-stars");
  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const rating = this.getAttribute("data-rating");
      updateStars(rating);
    });
  });

  function updateStars(rating) {
    stars.forEach((star) => {
      if (star.getAttribute("data-rating") <= rating) {
        star.src = "img/starFill.svg";
      } else {
        star.src = "img/starts.svg";
      }
    });
  }
});
// Fonction de remplissage du coeur
document.addEventListener("DOMContentLoaded", function () {
  const heart = document.querySelector(".heart-icon");
  heart.addEventListener("click", function () {
    heart.src = "img/hearthFill.svg";
  });
});
