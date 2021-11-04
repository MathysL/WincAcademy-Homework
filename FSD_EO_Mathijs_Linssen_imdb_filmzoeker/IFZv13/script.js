//js code
function fetchMovies(movies) {
    const movieList = document.getElementById('films').getElementsByTagName('li');
    const outputList = movies.forEach(movie => {
        const divmovie = document.createElement("li");
        const posterLink = document.createElement("a");
        const posterPlaatje = document.createElement("img");
        posterPlaatje.src = movie.Poster;
        posterLink.href = `https://www.imdb.com/title/${movie.imdbID}`;
        posterLink.setAttribute('target', '_blank');
        films.appendChild(divmovie);
        divmovie.appendChild(posterLink);
        posterLink.appendChild(posterPlaatje);

    })
}

fetchMovies(movies);

function reset() {
    document.getElementById('nope').innerHTML = '';
    const movieList = document.getElementById('films');
    let clrScreen = movieList.lastElementChild;
    while (clrScreen) {
        movieList.removeChild(clrScreen);
        clrScreen = movieList.lastElementChild;
    }
}

const recentMovies = document.getElementsByName("moviefilters").
    forEach(filter => {
        filter.addEventListener("change",
            function handleOnChangeEvent(event) {
                document.getElementById('textfield').value = '';
                reset();

                if (event.target.value === "allmovies") {
                    fetchMovies(movies)
                }

                else if
                    (event.target.value === "recentmovies") {
                    const filterLatestMovies = movies.filter(movies => movies.Year >= 2014);
                    fetchMovies(filterLatestMovies)
                }

                else {
                    const title = event.target.value[0].toUpperCase() + event.target.value.slice(1);
                    const filteredMovies = movies.filter(movies => movies.Title.includes(title))
                    fetchMovies(filteredMovies);
                }

            }
        )
    })

function zoekKnop() {
    if (event.keyCode == 13) {
        reset();
        const title = event.target.value[0].toUpperCase() + event.target.value.slice(1);
        const filteredMovies = movies.filter(movies => movies.Title.includes(title))
        if (filteredMovies.length === 0) {
            document.getElementById('nope').innerHTML = 'Niets gevonden'
        }
        else {
            fetchMovies(filteredMovies);
        }
    }
}