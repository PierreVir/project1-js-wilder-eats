const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");
const modalContainerTrigger = document.querySelector(".heart-icon");

modalTrigger.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);
function toggleModal() {
  modalContainer.classList.toggle("active");
}
