/*
 Functions: three ways to write a single function.

The function will do the following.

take two numbers(n1,n2) each number will be squared (multiplied with itself)=>(sN1,sN2)
the squared numbers will be added together+> sS=(sN1+sN2)
this sum will be squared again=> sSs=(sS*sS)
the resulting value is returned
in
function declaration
function expression
arrow function
Alsocheck that all three functions give the same result if you give them the same arguments. consol.log(argument);
 */
// functie declare
function add(n1, n2) {
    return n1 + n2;
}
// add(5, 6);
// (sN1,sN2)
function sqrPlus(n1, n2) {
    const sN1 = n1 * n1;
    const sN2 = n2 * n2;
    var sS1 = sN1;
    var sS2 = sN2;
    return sS1 + sS2;
}
// sqrPlus(n1, n2);

//V2 Functon expression
const addV2 = function (number1, number2) {
    return number1 + number2;
};
addV2(5, 6); // 11
const sqrPlusV2 =function (n1, n2) {
    const sN1 = n1 * n1;
    const sN2 = n2 * n2;
    const sum = (sN1 + sN2);
    return sum;
}
// arrow the modern way
/* const sayHello = () => {
  console.log("hello, i cant read any numbers);
}; 
*/
const addV3 = (n1, n2) => {
    return n1 + n2;
};
n1 = 5;
n2 = 6;
addV3(n1, n2); // 11
// arrow func single argu
const n = () => {
    const n = 2;
};
const sqr = n => {
    return n * n;
};
sqr(n);
// bonus
const calc = (sN1, sN2) => {
    return sN1 + sN2;
};