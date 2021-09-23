var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
//parent ul
var child = parent.getElementsByTagName("li")[0];
// child li
// remove element child
var removed = parent.removeChild(child);
// restore deleted last
parent.appendChild(removed);