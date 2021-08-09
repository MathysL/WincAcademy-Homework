for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    // TODO: determine if i is odd or even
    eoReporter(i);
    // TODO: use console.log
    console.log(eoReporter(i));
}

const number = i;
// Expected output:
// 1 is oneven 
// 2 is even 
// 3 is oneven 
// 4 is even 
// ...
function rekenTafel(number) {
    for (number = 1; number <= 10; number++) {
        for (factor = 1; factor <= 10; factor++) {
            console.log(number * factor);
        }
     //   console.log("De rekentafel.js func: "rekenTafel(number);
    }
}
