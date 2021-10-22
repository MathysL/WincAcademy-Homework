/*
 * // load(File) image as src in htmlDOM from db
var loadFile = function (event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

 zelfde als upload img file ;*)
 const readURL= function (event) {
    var activimg = document.getElementsByClassName("readURLOut");
    var url = URL.createObjectURL(event.target.files[0]);
    activimg[0].innerHTML = "<img class=\"output\" src=\"" + url + "\" alt=\"img\" >";
}
 

 */