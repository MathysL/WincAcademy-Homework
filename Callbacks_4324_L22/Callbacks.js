// logic
const huiswerkMaken = function (vak, callback) {
    console.log("Ok, ok, ik ga nu mijn ${vak} huiswerk maken");
    callback();
};
// 2 huiswerkMaken(vak, callback); is klaar
const klaarMetHuiswerk = () => {
    console.log('Kijk Paps/Mams, ik ben klaar met mijn ${vak} huiswerk!')
};
//3 callback is ingevuld
huiswerkMaken('Wiskunde', klaarMetHuiswerk);

//4
const myFunction = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken ;D`);
    setTimeout(function () {
        callback();
    }, 10000);
};
myFunction('Wiskunde', klaarMetHuiswerk);
