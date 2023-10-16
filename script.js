const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let mainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");
for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    mainImg.src = smallImg[i].src;
  };
}
