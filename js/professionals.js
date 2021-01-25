function openProfModal() {
  document.getElementById("profModal").style.display = "block";
}

function closeProfModal() {
  document.getElementById("profModal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("profModal")) {
    document.getElementById("profModal").style.display = "none";
  }
};

var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function profMoveLeft(event) {
  event.preventDefault();
  document.getElementById("prof-to-left").click();
}

function profMoveRight(event) {
  event.preventDefault();
  document.getElementById("prof-to-right").click();
}
