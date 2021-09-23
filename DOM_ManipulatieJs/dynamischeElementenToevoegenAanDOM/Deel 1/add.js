console.log("----------------------------");
let butn = document.querySelector(".big-five-button");
let removeFirst = document.querySelector(".remove-first-item-button");
const removeFirstItem = () => {
    const firstItem = document.getElementById("spotted-animals-list").firstChild;
    firstItem.remove();
};

const removeAllBtns = document.querySelector(".remove-all-button");
removeAllBtns.addEventListener("click", removeAll);

const removeAll = () => {
    const spottedAnimalsList = document.getElementById("spotted-animals-list");
    spottedAnimalsList.innerHTML = "";
};

function onlyFunction(e) {
    e.preventDefault();
    btn.innerHTML = "Jep ;-) een .." + btn.child.getElementById;
    // en alle andere losse functies
    addFunction
}
btn.addEventListener("click",
    function () {
        btn.style.backgroundColor ="blue";
});

function addFunction() {
    console.log("addFunction:... "+animalSpotted);
};
btn.addEventListener("click", addFunction);

const animalSpotted = event => {
        console.log("spotted:", event.target.textContent);
        const spottedAnimal = event.target.textContent;
        const listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(spottedAnimal));
        const list = document.getElementById("spotted-animals-list");
        list.appendChild(listItem);
};

/*
spotted-animals-list
var allAnimals =("Duck", "Leopard", "Lion", "Elephant", "Rhino", "Buffalo");
btn.addEventListener("click", clickButton);
console.log("test detected is it a Lion.. = "+ allAnimals)
var parent = document.getElementById("item-list").getElementsByTagName("li")[selectedAnimal];
var child = parent.getElementsByTagName("li")[button.id];
remove script= remove element child
var removed = parent.removeChild(child);
restore deleted last = parent.appendChild(removed);
*/
const removeAll = () => {
    const spottedAnimalsList = document.getElementById("spotted-animals-list");
    spottedAnimalsList.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", function () {
    const animalButtons = document.querySelectorAll(".big-five-button");
    animalButtons.forEach(function (animalButton) {
        animalButton.addEventListener("click", animalSpotted);
    });

    const removeFirstItemButton = document.getElementById(
        "remove-first-item-button"
    );
    removeFirstItemButton.addEventListener("click", removeFirstItem);

    const removeAllButton = document.getElementById("remove-all-button");
    removeAllButton.addEventListener("click", removeAll);
});