//1 ini const
const apiUrl_genre = 'https://api.themoviedb.org/3/genre/movie/list';
const apiUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>';
const API_KEY = 'api_key='+ myApi_key;
const api_key = '<<api_key>>';
const myApi_key = '000000000000000000000000007'
// api_key invullen op deze plaats of later bearer token info
    const ACCES_TOKEN = access_token;
    const bearerurl= 'https://api.themoviedb.org/3/movie/76341'
//2 logic
async function getData()
    try {
    // 'adresnaam' of locatie +_genre
        const response = await makeRequest('https://api.themoviedb.org/3/movie/76341' + API_KEY)
    console.log("response Received")
    const proccessResponse = await processRequest()
    console.log(proccessResponse)
} catch (err) {
    console.log(err)
}
    //input
getData()
// copy to output
fetch("https://api.themoviedb.org/3/movie/76341")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error)
    });