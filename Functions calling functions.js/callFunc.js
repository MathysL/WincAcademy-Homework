const age = 40;
const isAdult = function (age) {
    if (age >= 18) {
        console.log("Hello there");
        return true;
    } else {
        console.log("Hey kiddo");
        return false;
    }
};
/*
 second func
*/
const theAge = function (age) {
    isAdult(age);
};
console.log(theAge(age));

// VAT
const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / (1 + VATPercentage / 100);
  //  console.log(" Basis prijs");
    return basePrice;
};
// VAT []
const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
  //  console.log(" Basis prijs, en VAT %");
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));
