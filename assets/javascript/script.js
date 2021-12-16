/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 10,
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
  stagger: 0.2,
});

// HERO SECTION
gsap.from(".hero__big", { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from(".hero__image--bibit", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});
gsap.from(".hero__description", { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from(".image__app-hero", { opacity: 0, duration: 1, delay: 1.8, y: 30 });

AOS.init();

/*===== CHANGE TEXT EVERY 3 SECONDS on lARGE SCREEN =====*/
const hero__text_span = document.querySelectorAll(".hero__text-span");

//Create a var to store the index of hero element
var count = -1;
function showMessage() {
  var boxes = $(".hero__text-span");
  var boxLength = boxes.length - 1;

  /*
    Check if the actual item isn't more 
    than the length then add 1 otherway 
    restart to 0
  */
  count < boxLength ? count++ : (count = 0);

  //Remove the class and add it to the new target
  boxes
    .removeClass("hero__text-active")
    .eq(count)
    .addClass("hero__text-active");
}
setInterval(showMessage, 2200);

/*===== CHANGE TEXT EVERY 3 SECONDS =====*/
const partner_pilihan_gambar = document.querySelectorAll(
  ".partner__pilihan-gambar"
);

//Create a var to store the index of hero element
var hitung = -1;
function showImagePilihan() {
  var pilihan_gambar = $(".partner__pilihan-gambar");
  var pilihan_gambar_length = pilihan_gambar.length - 1;

  /*
    Check if the actual item isn't more 
    than the length then add 1 otherway 
    restart to 0
  */
  hitung < pilihan_gambar_length ? hitung++ : (hitung = 0);

  //Remove the class and add it to the new target
  pilihan_gambar
    .removeClass("partner__pilihan-active")
    .eq(hitung)
    .addClass("partner__pilihan-active");
}
setInterval(showImagePilihan, 2200);

/*===== CHANGE TEXT EVERY 3 SECONDS on MEDIUM SCREEN =====*/
//Create a var to store the index of hero element
var count_medium = -1;
function showMessageMedium() {
  var boxes_medium = $(".text__hero-span-medium");
  var boxLength_medium = boxes_medium.length - 1;

  /*
    Check if the actual item isn't more 
    than the length then add 1 otherway 
    restart to 0
  */
  count_medium < boxLength_medium ? count_medium++ : (count_medium = 0);

  //Remove the class and add it to the new target
  boxes_medium
    .removeClass("text__hero-medium-active")
    .eq(count_medium)
    .addClass("text__hero-medium-active");
}
setInterval(showMessageMedium, 2200);
