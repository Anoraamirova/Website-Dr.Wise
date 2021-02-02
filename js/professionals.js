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

$('.dropdown-s').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
// $('.dropdown-s').focusout(function () {
//   $(this).removeClass('active');
//   $(this).find('.dropdown-menu').slideUp(300);
// });
$('.dropdown-s .dropdown-menu li').click(function () {
  $(this).parents('.dropdown-s').find('span').text($(this).text());
  $(this).parents('.dropdown-s').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown-s').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 


// ------Order by select-------

$('.dropdown-o').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
// $('.dropdown-s').focusout(function () {
//   $(this).removeClass('active');
//   $(this).find('.dropdown-menu').slideUp(300);
// });
$('.dropdown-o .dropdown-menu li').click(function () {
  $(this).parents('.dropdown-o').find('span').text($(this).text());
  $(this).parents('.dropdown-o').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown-o').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 