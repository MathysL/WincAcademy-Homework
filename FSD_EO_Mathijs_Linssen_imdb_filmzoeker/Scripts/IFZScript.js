// JavaScript source code

//DOM output
Movies.forEach(function (movie, index) {
    //ini elementen in 1 lege div "films"..voor indexpagina
    const divFilms = document.getElementById("films");
    //output
    const divmovie = document.createElement("div");
    const posterPlaatje = document.createElement("img");
    const posterLink = document.createElement("a");
    //output naar html
    divmovie.id = index;
    posterPlaatje.src = movie.Poster;
    posterPlaatje.height = 440;
    // (werkt niet op hele title) moet id zijn (of iets via tabel cell 4 andere versie)
    posterLink.href = "https://www.imdb.com/title/" + movie.imdbID;
    posterLink.target = "_blank";
    divmovie.innerHTML = movie.Title;
    //set and forget uitvoering
    divFilms.appendChild(divmovie);
    posterLink.appendChild(posterPlaatje);
    divmovie.appendChild(posterLink);
});
//FUNCTIES
//reset
const reset = () => {
    Movies.forEach(function (movie, index) {
        document.getElementById(index).style.display = "block";
    })
}
//zoeken op titel (met een Hoofdletter)
const zoek = (zoekwoord) => {
    Movies.forEach(function (movie, index) {
        const substring = zoekwoord;
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
                if (movie.Year < 2016 || jaar < 2016) {
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
            ;
            break;
    }
}