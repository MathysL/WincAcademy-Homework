//*Opdracht : Rest Parameter and Spread OperatorJe gaat 2 functies schrijven Functie 1:Schrijf een simpele functie die meerdere cijfers bij elkaar optelt De functie accepteert meerdere argumenten Gebruik de rest parameter om ervoor te zorgen dat je functie alle argumenten als een array behandelt. *//
// const som =
function sum(...numbers) {
    return numbers.reduce(function (past, current) {
        return past + current;
    })
    //;
}
console.log(sum(1, 2, 3, 4, 5));
//oplossing rest
const sumR = function (...args) {
    return args.reduce((acc, item) => {
        return acc + item;
    })
}

console.log(sumR(1, 2, 3, 4, 5, 6)); // expected result: 21
//* Functie 2: Schrijf een simpele functie die meerdere cijfers bij elkaar optelt De functie accepteert 1 argument, namelijk een array van cijfers Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.*//
//logic
//1 const telop= 
function sum(x, y) { return x + y; }
//2 const of let
let nums = [1, 2];
// output
console.log(sum(...nums));
//oplossing spread
const sumS = function (num1, num2, num3) {return num1 + num2 + num3;}
const digits = [1, 2, 3];
console.log(optellen(...cijfers));
// expected result: 6