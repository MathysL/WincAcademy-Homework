// JavaScript source code
const muurVerf = function (muur, kleur, kleur1, kleur2,kleur3) {
    console.log("De " + muur + " muur is in de kleur " + kleur + " geschilderd " + '... ik heb alleen nog maar een beetje ' + kleur + " over, maar nog genoeg:" + kleur1 + kleur2 + kleur3);
};

// nieuwe zin muurVerf *3
//"(no argument) rode"= muur
muurVerf("(no argument) rode",/*leeg blik*/),//;
//"singleArgument", "groen" = kleur
muurVerf("singleArgument", "groen");
// een voor een uit de lijst multiple argus" 1" "zin 2" "zin 3"
muurVerf("blauwe", "licht-blauw", kleur1="donker-blauw ", kleur2="Delfs- ", kleur3="'undifined' leeg blik");

