//Simpel stappenplan:
//console.dir(document);  https://www.youtube.com/watch?v=0ik6X4DJKCc
//Stap 1: creëer jouw element dynamisch met JavaScript.
// Bijvoorbeeld: const naam = document.createElement("li");
var newLi = document.createElement("li");
var newA = document.createElement("a");
//var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];
//var items = document.getElementsByClassName('list-group-item')
//console.log(items);
//console.log(items[1]);
//console.log(listElement);
//Stap 2: Voeg eventueel dynamisch (meerdere) properties toe aan je HTML element
//Bijvoorbeeld:listItem.classList.add("list-item-class");
newLi.classList.add("list-item-class, 'voeg props toe aan html'");
newA.classList.add("classList-item-A, 'voeg props toe aan tekst/html'");

//Stap 3: Selecteer het element waar je jouw nieuwe element aan vast wilt maken.
//Bijvoorbeeld (als je maar 1 ul hebt):
const navList = document.querySelector("#nav-list");
list.style.borderBottom= "solid 4px #ccc";
console.log(navList);
//Stap 4: Bepaal hoe het bestaande element (in dit geval list) en het nieuwe element (in dit geval list-item) zicht tot elkaar verhouden (in dit geval een parent <> child). Append het nieuwe element (list-item) aan het geselecteerde element (list) met de toepasselijke functie
//Bijvoorbeeld: navList.appendChild(newLi);
navList.appendChild(newLi);
/*
var titles = document.querySelectorAll('.title');
consol.log(titles);
titles[0].textContent = "(listItem) ?";
*/