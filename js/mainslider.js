var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1085: {
      slidesPerView: 2,
      spaceBetween: 20,
     
    },
    980: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    700: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var mySecondSwiper = new Swiper(".opinion .swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".opinion-button-next",
    prevEl: ".opinion-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
