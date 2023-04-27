var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  spaceBetween: 30,
  touch: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
