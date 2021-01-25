var element = document.getElementsByClassName("navbar-outer-container");

function toggleFunction(event) {
  event.preventDefault();
  for (let i = 0; i < element.length; i++) {
    element[i].classList.toggle("navbar-responsive");
  }
}

function hoverColor1() {
  document.getElementById("hover-btns").style.background = "#ff6969";
}

function hoverColor2() {
  document.getElementById("hover-btns").style.background = "#00acde";
}

function loginModalFunc() {
  document.getElementById("hover-modal-btns").style.background = "#ff6969";
  document.getElementById("LoginModal").style.display = "block";
}

function SignUpModalFunc() {
  document.getElementById("hover-modal-btns").style.background = "#00acde";
  document.getElementById("SignUpModal").style.display = "block";
}

function langModalFunc() {
  document.getElementById("langModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("LoginModal").style.display = "none";
}

function closeSignUp() {
  document.getElementById("SignUpModal").style.display = "none";
}

function closeLang() {
  document.getElementById("langModal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("LoginModal")) {
    document.getElementById("LoginModal").style.display = "none";
  } else if (event.target == document.getElementById("SignUpModal")) {
    document.getElementById("SignUpModal").style.display = "none";
  } else if (event.target == document.getElementById("langModal")) {
    document.getElementById("langModal").style.display = "none";
  }
};
