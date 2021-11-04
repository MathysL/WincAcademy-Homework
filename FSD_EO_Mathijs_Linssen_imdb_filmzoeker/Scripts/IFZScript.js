// JavaScript source code
//tst selector 2 dom
function selectBtn(movies) { 
//+selector radiobtns
    const selectorBtnFilms = document.getElementsByName("filterFilms");
    //
selectorBtnFilms.forEach((radiobtn) => {
    radiobtn.addEventListener("change", (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        handleOnChangeEvent();
    });
}); }
//const imdbList= filmlijst;
// Dom output
const outputList= Movies.forEach(function (movie, index) {
    // do ini elementen in 1 lege div "films"..voor indexpagina
    const divmovie = document.createElement("div");
    const posterLink = document.createElement("a");
    const divFilms = document.getElementById("films");
    //output
    const posterPlaatje = document.createElement("img");
    //output naar html
    divmovie.id = index;
    posterPlaatje.src = movie.Poster;
    posterPlaatje.height=440;
    // (werkt niet op hele title) moet id zijn (of iets via tabel cell 4 andere versie)
    posterLink.href = "https://www.imdb.com/title/" + movie.imdbID;
    posterLink.target = "_blank";
    divmovie.innerHTML = movie.Title;
    //set and forget uitvoering
    mDB.appendChild(divmovie);
    divmovie.appendChild(posterLink);
    posterLink.appendChild(posterPlaatje);
});
//FUNCTIES
// reset search
function reset() {
    document.getElementById('nope').innerHTML = '';
    const movieList = document.getElementById('mDB');
    let clrScreen = movieList.lastElementChild;
    while (clrScreen) {
        movieList.removeChild(clrScreen);
        clrScreen = movieList.lastElementChild;
    }
}

//reset 2
const reset = () => {
    Movies.forEach(function (movie, index) {
        document.getElementById(index).style.display = "block";
    })
}
//zoeken op titel (met een Hoofdletter)
// String filterTxt = "MEAN Stack stands for MongoDB, Express, Angular, and Node";
// start with, filterTxt.matches("(?i)mean.*"); // true
// ends with, filterTxt.matches("(?i).*node"); // true
// anywhere, filterTxt.matches("(?i).*mongo.*"); // true
//
// onclick="if(this.checked){imdb(this.id)}"

const zoek = (waarde) => {

    movies.forEach(function (movie, index) {
        const substring = waarde;
        if (movie.Title.includes(substring)) {
        }
        else {
            document.getElementById(index).style.display = "none";
        }
    })
}
//zoeken met Enter
function searchEnter() {
    document.addEventListener("Enter", function(event) {
        if (event.code == "Enter") {
            reset();
            const waarde = document.getElementById("cat6").value;
            zoek(waarde);
        }
    });
}
//zoeken door knop
const zoekKnop = () => {
    reset();
    const waarde = document.getElementById("cat6").value;
    zoek(waarde);
}
//filters door 5 radiobuttons  imdb checked?
function imdb(checked) {
    switch (checked) {
        case "cat0":
            reset();
            break;
        case "cat1":
            //nieuwere films vanaf 2016
            reset();
            Movies.forEach(function (movie, index) {
                const jaar = parseInt(movie.Year)
                if (movie.Year < 2014) {
                    document.getElementById(index).style.display = "none";
                }
            })
            break;
        case "cat2":
            //films met avengers in de titel
            reset();
            zoek("Avengers");
            break;
        case "cat3":
            //films met x-men in de titel
            reset();
            zoek("X-Men");
            break;
        case "cat4":
            //films met princess in de titel
            reset();
            zoek("Princess");
            break;
        case "cat5":
            //films met batman in de titel
            reset();
            zoek("Batman");
            break;
        default:
          console.log("Default: geen resultaat ") ;
            break;
    }
}