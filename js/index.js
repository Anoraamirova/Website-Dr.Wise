AOS.init(
    {
        // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    }
);



$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});


//----------CONTACT FORM VALIDATION FORM ----------
function checkform(f) {
  var errMSG = ""; 
           
  for (var i = 0; i<f.elements.length; i++) 
    if (null!=f.elements[i].getAttribute("required")) 
        if (isEmpty(f.elements[i].value)) 
            errMSG += "  " + f.elements[i].name + "\\n";
        if ("" != errMSG) {
            alert("Please fill all the fields:\\n" + errMSG);
            return false;
        }
}


// -----------FAQ Accordeon-----------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var open_content = this.nextElementSibling;
    if (open_content.style.height) {
      open_content.style.height = null;
    } else {
      open_content.style.height = open_content.scrollHeight + "px";
    } 
  });
}

// ----------SHOW ALL ADVANTAGES function ----------

function showAll() {
  var x = document.getElementById("show-hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
