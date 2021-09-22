//37 add elements to DOM
var newLi = document.createElement("li");
//newLial     <li></li>
var newA = document.createElement("a");
// newA <a>..</a>
var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];
//menu
menu.appendChild(newLi);
menu.appendChild(newA);
newA.innerHTML = "new A for inner efford";
//text
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);