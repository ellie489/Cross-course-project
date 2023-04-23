const menu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const movieDetails = document.querySelector(".movie-details");
const movieCover = document.querySelector(".movie-cover");
let active = true;


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


navLink.forEach( 
    function(navLink) { 
      navLink.addEventListener("click", toggleMenu);
    }
  )


let toggleDetails = function() {
    if(active){
        movieDetails.style.display = "block";
        // movieCover.style.display = "none";
        active = false;
    }
    else{
        movieDetails.style.display = "none";
        movieCover.style.display = "block";
        active = true;
    }
}
