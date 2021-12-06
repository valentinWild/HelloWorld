var contentBox = document.querySelector(".content-box");
var button = document.querySelector("#btn-start");
var header = document.querySelector("header")
var description = document.querySelector(".description");

console.log(contentBox);

function startHelloWorld(params) {
    contentBox.style.display = "block";
    button.style.display = "none";
    header.style.display = "none";
    description.style.display = "none";
    contentBox.classList.add("visible")

}