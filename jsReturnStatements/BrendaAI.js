const vraag_Brenda = function (maximum, huidig, leeftijd)
{
    console.log("Hallo, ik ben Brenda een AI, en houd hier de wacht als portier, en zie " + huidig + " aantal bezoekers max,  " + leeftijd + " met een leeftijd " + huidig + "wat tot huidig aantal is gekomen, dus.. calc calc");
    // controle en invoer funct
    if (leeftijd < 18) {
        return "this is a club for adults";
    }
    if (huidig >= maximum) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};

console.log(vraag_Brenda(250, 12, 17)); //"this is a club for adults"
console.log(vraag_Brenda(250, 199, 66)); //"come in"
console.log(vraag_Brenda(250, 251, 40)); //"it's too busy now, come back later"
// einde uitsmijter Brenda bericht
