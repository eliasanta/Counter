//get input
const counter = document.getElementsByClassName("counter")[0];
const colourBtns = document.querySelectorAll("div.colour-btns>button");
const element = document.querySelector(".counter-obj");
const write = document.querySelector(".back");
//functions
const increase = () => counter.innerText++;
const decrease = () => counter.innerText--;
const setColour = (event) =>
  (counter.style.color = event.target.style.backgroundColor);

function resetCounter() {
  counter.innerHTML = 0;
}

colourBtns.forEach((btn) => btn.addEventListener("click", setColour));

function removeCounter() {
  element.classList.add("animate__animated", "animate__bounceOutLeft");
  setTimeout(createImage, 900);
  sleeper();
}

function darkMode() {
  document.getElementsByTagName("body")[0].style.backgroundColor="rgb(107, 116, 130)";
}
function whiteMode() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
}

function createImage() {
  var createText = document.getElementById("text");
  var text = document.createTextNode("Good Night!, Sleep Weel...");
  createText.appendChild(text);
  var img = document.createElement("img");
  img.src ="https://i.pinimg.com/564x/06/92/83/0692834ef41e618762c784066d0a5f24.jpg";
  var block = document.getElementById("x");

  block.appendChild(img).style.marginTop = "90px";
  block.appendChild(img).style.marginBottom = "50px";
  block.appendChild(img).style.width = "250px";
  block.appendChild(img).style.borderRadius='10px';

  document.getElementById("sheep").style.position = "absolute";
  document.getElementById("sheep").style.left = "50%";
  document.getElementById("sheep").style.transform = "translate(-50%)";
}
function sleeper() {
  document.getElementById("sleep").style.visibility = "hidden";
}
