const filmLijst = document.querySelector("#movies");
const movieList = document.querySelector('.movie-list');
const adMoviesToDom = (movies)=> {
    const ul = document.getElementById("movieList");

    return '<li>' + movies.Poster + '</li>';
   };

const addMoviesToDom = (movieArray) => {
    movieArray.forEach(movie => {
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const newImg = document.createElement('img');
        newImg.src = movie.Poster;
        newA.href = `https://www.imdb.com/title/${movie.imdbID}`;
        newA.appendChild(newImg);
        newLi.appendChild(newA);
        movieList.appendChild(newLi);
    });
}
movieArray.forEach(function(item) {
    let li = document.createElement('li');
    let a = document.createElement("a");
    const img = document.createElement("img");

    ul.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
    img.setAttribute("src", movies.Poster);
    img.setAttribute("alt", movies.Title);
    li.innerHTML += item;

});
​
 

addMoviesToDom(movies);
    const listItems = movieArray.map(movie => {

        const newLi = document.createElement("li");
        const newImage = document.createElement("img");
        newImage.src = movie.Poster;
        console.log(newImage);
        newLi.innerHTML = newImage;
        newLi.appendChild(newImage);
        return newLi;
    });
    listItems.foreach(li => {
        moviesList.appendChild(li);
    });

addMoviesToDom(movies);
//newestID
//
function addMoviesToDom(movies) {

    const ul = document.getElementById("movieList");


    const movieArray = movies.map((movies) => {
        // return '<li>' + movies.Title + '</li>';
    })

    movieArray.forEach(function (item) {
        let li = document.createElement('li');
        let a = document.createElement("a");
        const img = document.createElement("img");

        ul.appendChild(li);
        li.appendChild(a);
        a.appendChild(img);
        img.setAttribute("src", movies.Poster);
        img.setAttribute("alt", movies.Title);
        li.innerHTML += item;

    });

}

addMoviesToDom(movies);
//
//phonebook trick
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    //
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
//
var newest = movies.forEach(Year > 2016[movies.Year]);
var batman = movies.name.forEach(getElementsByTagName("batman"));
 // Execute the function and show all columns : filterSelection("all")

function filterSelection(c) {
  var x, i;
    x =
        document.getElementsByClassName("column");//filterDiv is column
  if (c == "allmovies") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//change videoselector ID for database acces js

// Create an object: const car = { type: "Fiat", model: "500", color: "white", poster: "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"};
// Change a property: car.color = "red";
// Add a property: car.Noposter = "imDB_videoSelector\imagesTempunderwater.jpg";
// Display the property: document.getElementById("demo").innerHTML = "poster img link " + car.Poster;