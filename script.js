const carousel = document.querySelector(".carousel");
const card = carousel.querySelector(".card");
const goLeft = document.querySelector(".goLeft");
const goRight = document.querySelector(".goRight");

const carouselWidth = carousel.offsetWidth;
const cardStyling = window.getComputedStyle(card);
const marginInt = parseInt(cardStyling.marginRight.match(/\d+/g)[0]);

const totalCards = carousel.querySelectorAll("[data-target='card']").length;

let i = 0;
-(
  (totalCards / 3) * carouselWidth +
  marginInt * (totalCards / 3) -
  carouselWidth -
  marginInt
);
const maxX = -(
  (totalCards / 3) * carouselWidth +
  marginInt * (totalCards / 3) -
  carouselWidth -
  marginInt
);

console.log(maxX);

// 1 x 1398 + 16 x 1 - 16

goLeft.addEventListener("click", function () {
  if (i !== 0) {
    i += carouselWidth + marginInt;
    carousel.style.transform = `translateX(${i}px)`;
  }
});

goRight.addEventListener("click", function () {
  if (i !== maxX) {
    i -= carouselWidth + marginInt;
    carousel.style.transform = `translateX(${i}px)`;
  }
});

// subscription image gallery

const images = document.getElementById("subscription-images");
const imageSelection = document.getElementById("imageSelection");
const popup = document.getElementById("popup");
const info = document.getElementById("info");
const messageArray = ["test", "test-2", "test-3", "test-4"];
const imageArray = [1, 2, 3, 4];
const selectedIndex = null;

imageArray.forEach((x) => {
  const newImage = document.createElement("img");
  newImage.src = `images/service-${x}.jpg`;
  newImage.alt = `subscriptions`;
  newImage.classList.add(`imgStyle${x}`);
  newImage.addEventListener("click", (e) => {
    popup.style.transform = `translatey(0)`;
    imageSelection.src = `images/service-${x}.jpg`;
  });
  images.appendChild(newImage);
});

popup.addEventListener("click", (x) => {
  popup.style.transform = `translatey(-100%)`;
  popup.src = "";
  popup.alt = "";
});
