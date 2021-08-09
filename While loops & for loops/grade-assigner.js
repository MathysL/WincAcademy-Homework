// continue
function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}
// calc loop
for (let score = 60; score <= 100; score++) {
 //   console.log("Voor " + i + " punten krijg je een : ");
    assignGrade(i);
 //   if score(40 < 60); {
   //     ("score to low, helaas..."); break;
}

    score = i;
//uitvoering

for (let i = 60; i <= 100; i++) {
    console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
}