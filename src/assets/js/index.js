const iconBookmark = document.querySelector("#icon-bookmark");
const bookmark = document.querySelector(".header-bookmark");

iconBookmark.addEventListener("click", () => {
  if (bookmark.classList.contains("is-display")) {
    bookmark.classList.remove("is-display");
  } else {
    bookmark.classList.add("is-display");
  }
});

window.addEventListener("click",  (e) => {
  if (!document.querySelector(".header-bookmark").classList.contains("is-display")) {
    if (!document.getElementById("header-bookmark-id").contains(e.target) && !document.getElementById("icon-bookmark").contains(e.target)) {
      bookmark.classList.add("is-display");
    } 
  }
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("reading-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
