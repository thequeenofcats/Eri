const button = document.querySelector("button");
const pictures = document.querySelectorAll("img");

function displayImage(number) {
  const pic = document.querySelector(".pic-" + number);
  pic.style.display = "block";
}

button.addEventListener("click", function () {
  pictures.forEach((img) => (img.style.display = "none"));
  const number = Math.floor(Math.random() * 53);
  displayImage(number);
});
