const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const addToCart = document.querySelector(".btn-add");
const cartValue = document.querySelector(".cart");

counter = 0;

addToCart.addEventListener("click", function () {
  counter = counter + 1;
  cartValue.textContent = counter;
});
