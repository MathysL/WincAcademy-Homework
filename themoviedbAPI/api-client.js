const api_key = '21fe51973186dd156bd8da32ca25498f';
const API_KEY = api_key;
const apiUrl = "https://api.themoviedb.org/3";
const apiUrl_genre = 'https://api.themoviedb.org/3/genre/movie/list';
// api_key invullen op deze plaats of later bearer token info
//
const res = async function getData() {
    const apiUrlData = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {// 'adresnaam' of locatie +_genre
        const response = await makeRequest('https://api.themoviedb.org/3/movie/76341' + API_KEY);
        console.log("response Received");
        const proccessResponse = await processRequest();
        console.log(proccessResponse);
    } catch (err) {
        console.log(err);
    }
    //input
    res();
    // copy to output
    fetch("https://api.themoviedb.org/3/movie/76341")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.log(error)
        });
 }   
//
const TMDb_id = "id";
const Title = "name";
const getData = async () => {
    const apiUrlList = `${apiUrl}/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrlList, { method: "GET" });
        const data = await res.json();
        console.log("The data in getData function ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
//


//step 1
const getMovieGenres = async () => {
    //getMovie Genres
    const APIEndpoint = `${apiUrl}/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(APIEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getMovieById = async movieId => {
    // api.themoviedb.org/3/find/.. //movieId
    const movieByIDEndpoint = `${apiUrl}/find/${movieId}?external_source=TMDb_id&api_key=${API_KEY}`;
    try {
        const res = await fetch(movieByIDEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedMovies = async () => {
    // movie/top_rated
    const topRatedMoviesEndpoint = `${apiUrl}/movie/top_rated?api_key=${API_KEY}`;
    try {
        const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedMoviesFromYearX = async year => {
    // discover/movie?primary_release_year=2010&sort_by=vote_average.desc
    const topRatedMoviesEndpoint = `${apiUrl}/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
        const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedMoviesInGenreId = async genreId => {
    const topRatedMoviesEndpoint = `${apiUrl}/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
        const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};
