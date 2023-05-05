const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const closee = document.getElementById("close");


if (bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add(`active`);
    })

}
if (closee) {
    closee.addEventListener("click", () => {
        navbar.classList.remove("active");
    })
}

var MainImg = document.getElementById("mainimg");
var smallimg = document.getElementsByClassName("small-img");

function imgs(img) {
    MainImg.src = img
}
