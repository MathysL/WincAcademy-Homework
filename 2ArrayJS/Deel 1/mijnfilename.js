const addTheWordCool = function (array) {
    // add your code, push = toevoegen
    array.push("cool");
    return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
 // resultaat: ["nice", "awesome", "tof", "cool"]
//B
const amountOfElementsInArray = function (array) {
    // lenght= aantal
    return array.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// 3
//D
const selectBelgiumFromBenelux = function (array) {
    return array[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); // resultaat: "Belgie"
//E
//
const presidents = ["Trump", "Obama", "Bush", "Clinton"]
//
//

const impeachTrumpSlice = function (array) {
    const newArray = array.slice(1, 4)
    console.log("Nieuwe array:", newArray, "De (copySlice 1, 4 vd orginele) array", array);
    return newArray;
};
const impeachTrumpSplice = function (array) {
    const removedElement = array.splice(0, 1);
    console.log("removed element:", removedElement,
        "De mutated array, Trump is missing:",
        array );
    return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
  //resultaat: "Winc Academy is leuk ;-}"
return array.join(" ");

//G
const combineArrays= function (array1, array2) {
    return array1.concat(array2);
};
consol.log(combineArrays([1, 2, 3], [4, 5, 6]));
  // resultaat: [1,2,3,4,5,6]
//
// meer info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ 