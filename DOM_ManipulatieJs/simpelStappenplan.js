//Simpel stappenplan:

//Stap 1: creëer jouw element dynamisch met JavaScript.
// Bijvoorbeeld:
//const listElement = document.createElement("li");
const listElement = document.createElement("li");
//Stap 2: Voeg eventueel dynamisch (meerdere) properties toe aan je HTML element
//Bijvoorbeeld:listItem.classList.add("list-item-class");
listItem.classList.add("list-item-class, 'voeg props toe aan html'");

//Stap 3: Selecteer het element waar je jouw nieuwe element aan vast wilt maken.
//Bijvoorbeeld (als je maar 1 ul hebt):
const list = document.querySelector("ul");

//Stap 4: Bepaal hoe het bestaande element (in dit geval list) en het nieuwe element (in dit geval list-item) zicht tot elkaar verhouden (in dit geval een parent <> child). Append het nieuwe element (list-item) aan het geselecteerde element (list) met de toepasselijke functie
//Bijvoorbeeld:
list.appendChild(listItem);
