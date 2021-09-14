const superheroes = [
    {
        "name": "Batman",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "Detective Comics #27",
        weight: "210"
    },
    {
        "name": "Superman",
        publisher: "DC Comics",
        alter_ego: "Kal-El",
        first_appearance: "Action Comics #1",
        weight: "220"
    },
    {
        name: "Flash",
        publisher: "DC Comics",
        alter_ego: "Jay Garrick",
        first_appearance: "Flash Comics #1",
        weight: "195"
    },
    {
        name: "Green Lantern",
        publisher: "DC Comics",
        alter_ego: "Alan Scott",
        first_appearance: "All-American Comics #16",
        weight: "186"
    },
    {
        name: "Green Arrow",
        publisher: "DC Comics",
        alter_ego: "Oliver Queen",
        first_appearance: "All-American Comics #16",
        weight: "195"
    },
    {
        name: "Wonder Woman",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "The Incredible Hulk #180",
        weight: "165"
    },
    {
        name: "Blue Beetle",
        publisher: "DC Comics",
        alter_ego: "Dan Garret",
        first_appearance: "Mystery Men Comics #1",
        weight: "145"
    },
    {
        name: "Spider Man",
        publisher: "Marvel Comics",
        alter_ego: "Peter Parker",
        first_appearance: "Amazing Fantasy #15",
        weight: "167"
    },
    {
        name: "Captain America",
        publisher: "Marvel Comics",
        alter_ego: "Steve Rogers",
        first_appearance: "Captain America Comics #1",
        weight: "220"
    },
    {
        name: "Iron Man",
        publisher: "Marvel Comics",
        alter_ego: "Tony Stark",
        first_appearance: "Tales of Suspense #39",
        weight: "250"
    },
    {
        name: "Thor",
        publisher: "Marvel Comics",
        alter_ego: "Thor Odinson",
        first_appearance: "Journey into Myster #83",
        weight: "200"
    },
    {
        name: "Hulk",
        publisher: "Marvel Comics",
        alter_ego: "Bruce Banner",
        first_appearance: "The Incredible Hulk #1",
        weight: "1400"
    },
    {
        name: "Wolverine",
        publisher: "Marvel Comics",
        alter_ego: "James Howlett",
        first_appearance: "The Incredible Hulk #180",
        weight: "200"
    },
    {
        name: "Daredevil",
        publisher: "Marvel Comics",
        alter_ego: "Matthew Michael Murdock",
        first_appearance: "Daredevil #1",
        weight: "200"
    },
    {
        name: "Silver Surfer",
        publisher: "Marvel Comics",
        alter_ego: "Norrin Radd",
        first_appearance: "The Fantastic Four #48",
        weight: "unknown"
    }
];

// 01 Maak een array van alle superhelden namen
const superheroNames = superheroes.map(superhero => {
    return superhero.name;
});
console.log(superheroNames);

// 2 Maak een array van alle "lichte" superhelden (< 190 pounds)
const lightsuperheroes = superheroes.filter(superhero => {
    return superhero.weight < 190;
});
console.log(lightsuperheroes.length);

// 3 Maak een array met de namen van de superhelden die 200 pounds wegen
//Stap 1:
const heavySupersuperheroes = superheroes
    .filter(superhero => superhero.weight == 200);

//Stap 2:
const heavySupersuperheroNames = heavySupersuperheroes
    .map(superhero => superhero.name);
console.log(heavySupersuperheroNames);

// 3 Extra: chaining ⛓️
const heavySupersuperheroChained = superheroes
    .filter(superhero => superhero.weight == 200)
    .map(superhero => superhero.name);
console.log(heavySupersuperheroChained);

// 4 Maak een array met alle comics waar de superhelden hun "first apprearances" hebben gehad
// 
const firstAppearance = superheroes
    .map(superhero => superhero.first_appearance);
console.log("first appearances :" + firstAppearance);

// 5 Maak een array met alle superhelden van DC Comics en een array met alle superhelden van Marvel Comics
const DCComics = superheroes
    .filter(superhero => superhero.publisher === "DC Comics");
console.log("DC Comics:", DCComics);
const marvelComics = superheroes
    .filter(superhero => superhero.publisher === "Marvel Comics");
console.log("Marvel Comics:", marvelComics);

// 6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op
const addWeightDC = DCComics
    .map(superhero => {return superhero.weight !== "unknown" ? parseInt(superhero.weight, 10) : 0; })
    .reduce((weight1, weight2) => weight1 + weight2);
console.log("TotalWeight of DC Comics - supersmall version:", addWeightDC);
// Let op! Conditionals to the rescue! 
//De bovenstaande oplossing kun je ook wat uitgebreider opschrijven:
const superheroWeights = DCComics.map(superhero => {
    if (superhero.weight !== "unknown") {
        // de superhero weights zijn in de data opgenamen als strings, e.g: '40'
        // Deze moet je even parsen naar een integer, zodat je er mee kunt rekenen.
        return parseInt(superhero.weight, 10);
    } else {
        // wanneer het gewicht dus "unknown" is, dan wil je het gewicht van 0 optellen.
        return 0;
    }
});

const totalWeightOffSuperheroes = superheroWeights
    .reduce((weight1, weight2) => weight1 + weight2);
console.log("TotalWeight of DC Comics:", addWeightDC, totalWeightOffSuperheroes);

// 7 Doe hetzelfde met alle superhelden van Marvel Comics
const addWeightMarvel = marvelComics
    .map(superhero => {
        return superhero.weight !== "unknown" ? parseInt(superhero.weight, 0.1) : 0;
    })
    .reduce((weight1, weight2) => weight1 + weight2, 0);
// die 0 op het laats, daarmee geef je aan wat de initiele waarde is van de reduce functie.
console.log("TotalWeight of Marvel:", addWeightMarvel);

// 8 Bonus: vind de zwaarste superheld!
// safthy First: cast all values to a number or 0 if unknown
const allSupers = superheroes.map(superhero => {
    const weight = superhero
        .weight !== "unknown" ? parseInt(superhero.weight)
        : 0;
    superhero.weight = weight;
    return superhero;
});
// next, use reduce to find the largest value
const heaviestSuper = allSupers
    .reduce((currentheaviestSuper, Super) => {
        if (Super.weight > currentheaviestSuper.weight) {
            return Super;
        } else {
            return currentheaviestSuper;
        }
    }, allSupers[0]);
// reset all superheroes met 0 

console.log("The Heaviest Super hero is : ", heaviestSuper);