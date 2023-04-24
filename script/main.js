// scroll to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollEvent();
};
window.addEventListener("mouseup", function (event) {
  closeNav();
});

function scrollEvent() {
  //Get the button
  var mybutton = document.getElementById("up");
  if (document.documentElement.scrollTop >= 20) {
    if (mybutton.style.display == "none") {
      mybutton.style.display = "block";
    }
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  // window.setTimeout(function () {
  //   location.href = "./index.html";
  // }, 800); //changes URL to home page
}

//navigation
function openNav() {
  document.getElementById("navSidebar").style.width = "400px";
  document.getElementById("menu").style.marginRight = "0px";
}

function closeNav() {
  document.getElementById("navSidebar").style.width = "0";
  document.getElementById("menu").style.marginRight = "0";
}

// text in B --> only appears when user scrolls down
function checkForVisibility() {
  var headers = document.querySelectorAll(".elements");
  headers.forEach(function(elements) {
    if (isElementInViewport(elements)) {
      elements.classList.add("elementsVisible");
    } else {
      elements.classList.remove("elementsVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}function checkForVisibility() {
  var headers = document.querySelectorAll(".elements");
  headers.forEach(function(elements) {
    if (isElementInViewport(elements)) {
      elements.classList.add("elementsVisible");
    } else {
      elements.classList.remove("elementsVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}