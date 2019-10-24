var css = document.querySelector(".newinput");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var container = document.querySelector(".container");
var button = document.querySelector(".button");
var button2 = document.querySelector(".button2");

color1.value = "#57ff78";
color2.value = "#1f1f1f";
changeBackgroundColor();






function changeBackgroundColor() {
	container.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.value = container.style.background + ";";


};



function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

 	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomColor() {
	var r = getRandomNumber(0, 255);
	var g = getRandomNumber(0, 255);
	var b = getRandomNumber(0, 255);

	var color = ("rgb(" + r + ", " + g + ", " + b + ")");

	//rgb(240, 102, 206), rgb(31, 31, 31)) repeat scroll 0% 0%;
	//rgba(0, 0, 0, 0) linear-gradient(to right, rgb(87, 255, 120), rgb(31, 31, 31)) repeat scroll 0% 0%;

	return color;
};




function randomBackgroundColor() {
	var a = getRandomColor();
	var b = getRandomColor();

	container.style.background = 
	"linear-gradient(to right, " + a + ", " + b + ")";

	css.value = container.style.background + ";";
};









color1.addEventListener("input", changeBackgroundColor);

color2.addEventListener("input", function() { changeBackgroundColor() });

button.addEventListener("click", function() {
	css.select();
	css.setSelectionRange(0, 99999);

	document.execCommand("copy");
})

button2.addEventListener("click", function() {
	randomBackgroundColor();
})

