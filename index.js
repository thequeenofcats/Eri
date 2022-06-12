const button = document.querySelector("button");
const pictures = document.querySelectorAll("img");
const picture = document.querySelector(".cat");
const load = document.querySelector(".load");

function getImage() {
  const number = 1 + Math.floor(Math.random() * 53);
  if (number < 21) {
    picture.className = "vertical";
  } else if (number > 21) {
    picture.className = "horizontal";
  }
  picture.src = "./Assets/" + number + ".jpg";
  picture.style.display = "block";

  picture.addEventListener("load", function () {
    load.style.display = "block";
  });
  load.style.display = "none";
}

button.addEventListener("click", getImage);
