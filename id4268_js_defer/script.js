var myButton = document.getElementById("myButton");
    myButton.addEventListner("click", clickAlert);
var test = document.getElementById("mybuttoN");
    test.addEventListener("click", "function (){}or_message");
var mybutton2 = document.getElementById("mybutton2").addEventListner("click", background);
    mybutton2.addEventListener("click", "red");
var myButton3 = doument.getElementById("mybutton3");
    mybutton3.addEventListner("click", toggleColor);
// Toggle background whend click on second button
var mybuttoN = document.querySelector("mybuttoN");
mybuttoN.addEventListener("click", changekleur);

myButton.onclick= clickAlert;
function clickAlert() { alert: "button clicked" };
// https://youtu.be/F3odgpghXzY
// eventlistners
function changeColor() {
    body = document.querySelector("#body");
    body.classList.toggle("red-background");
    myButton.onclick = changeColor};

function toggleColor () {
    let body = document.querySelector("body");
    body.classList.toggle("red-background");
};

myButtoN.addEventListener("click", changekleur, false);

function changeText() {
    myButtonN.textContent = myButtoN +="-staartje"
};
function changekleur() {
    myButtonN.style.background= "red"};
mybuttoN.removeEventListener("click", changekleur);
// Button clicked alert when click on first button
const button = document.querySelector("#mybutton");
button.addEventListener("click", function () {
  alert("button clicked");
});

// Change page background when click on second button
// const button2 = document.querySelector("#mybutton2");
// button2.addEventListener("click", function () {
//   const body = document.querySelector("body");
//   body.classList.add("red-background");
// });

// Toggle background whend click on second button
const button2 = document.querySelector("#mybutton2");
button2.addEventListener("click", function () {
  const body = document.querySelector("body");
  body.classList.toggle("red-background");
});
