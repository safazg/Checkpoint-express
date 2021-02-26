const agencySlide = document.querySelector(".agency-slide");
const agencyImages = document.querySelectorAll(".agency-slide img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = agencyImages[0].clientWidth;
agencySlide.style.transform = "translateX(" + -size * counter + "px)";

//button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= Images.length - 1) return;

  agencySlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  Slide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  agencySlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  agencySlide.style.transform = "translateX(" + -size * counter + "px)";
});

agencySlide.addEventListener("transitionend", () => {
  if (agencyImages[counter].id === "lastClone") {
    agencySlide.style.transition = "none";
    counter = agencyImages.length -2;
    agencySlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (agencyImages[counter].id === "firstClone") {
    agencySlide.style.transition = "none";
    counter = agencyImages.length - counter;
    agencySlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
