const button = document.querySelector("button");
const pictures = document.querySelectorAll("img");
const picture = document.querySelector(".cat");
const load = document.querySelector(".load");

function getImage() {
  const number = Math.floor(Math.random() * 53);
  if (number < 21) {
    picture.classList.remove("horizontal");
    picture.classList.add("vertical");
  } else {
    picture.classList.remove("vertical");
    picture.classList.add("horizontal");
  }
  picture.src = "./Assets/" + number + ".jpg";
  picture.style.display = "block";

  picture.addEventListener("load", function () {
    load.style.display = "block";
  });
  load.style.display = "none";
}

button.addEventListener("click", getImage);
