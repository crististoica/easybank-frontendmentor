const hamburger = document.querySelector(".hamburger");
const mobileMenuModal = document.querySelector(".modal");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenuModal.classList.toggle("show-modal");
  body.classList.toggle("body-fixed");
});
