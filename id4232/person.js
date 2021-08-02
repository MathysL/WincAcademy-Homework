let person = {
    name: "Mathijs", age: 40
};

console.log(person.name);
console.log(person.age);
// 18+ chk ph voor brackets notatie
console.log(person["name"]);
console.log(person["age"]);
//key-value paar evaluation
let evaluations = [7, 10, 9];
console.log(person);
console.log(evaluations);
//* _ *//
const colors = ["rood", "groen", "blauw"];
// console.log(colors);
console.log(colors[0]);
let last = colors[colors.length - 1];
// console.log colors[last];
const count = colors.push("geel");
// console.log(count);
const five = 5;
// expected output: Array ["rood", "groen", "blauw", "5"]
console.log(colors);
// expected output: Array ["rood", "groen", "blauw", "5" "geel"]
// object msdn

colors.push({greeting: "Hi ik ben een object" });
// expected output: Array ["rood", "groen", "blauw", "5", 'geel', obj]
// colors.push('bruin', 'paars', 'oranje'); of count
console.log(colors);
//Deel 3
//

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]
// logica
//Log de naam van het laatste kattenras.
console.log("Naam laatste kattenras:", catBreeds[2].name);
//Log de energy levels van de eerste kat.
console.log("Energy levels eerste kattenras:", catBreeds[0].energy_level = 5);
//Log het eerste temperament van de temperamenten van de tweede kat.
console.log(
    "Eerste temperament van de temperamenten van de tweede kat:",
    catBreeds[1].temperament[0]
);
//Log het laatst temperament van de temperamenten van de derde kat.
//Hier kom ik niet uit, de log uitkomst is undefined
const lengthTemperamentCatThree = catBreeds[2].temperament.length;
console.log(
    "Laatste temperament van de temperamenten van de derde kat:",
    catBreeds[2].temperament[lengthTemperamentCatThree - 1]
);
//Log het favoriete voedsel van de derde kat
console.log("Favoriete voedsel derde kat:", catBreeds[2].food.favourite_food);

let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)
    }
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})
console.log(obj.length)
// → 2
Copy to