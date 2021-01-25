const hidden = document.querySelectorAll(".hidden-service");
function openWholeList(event) {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.remove("hidden-service");
  }
  document.querySelector("#hide-btn-itself").style.display = "none";
  document.querySelector("#meet-health").classList.add("meet-health");
}



// slideshou control

function leftbtnFunc(event) {
  event.preventDefault();
  document.getElementById('prevArrowbtn').click()

}


function rightbtnFunc(event) {
  event.preventDefault();
  document.getElementById('nextArrowbtn').click()
}


function prevOpinion(event) {
  event.preventDefault();
  document.getElementById('opinion-prev').click()
}


function nextOpinion(event) {
  event.preventDefault();
  document.getElementById('opinion-next').click()
}