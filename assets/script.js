const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];

let index = 0
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagLine")


const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {

	if (index === 0) {
		index = slides.length - 1;
	} else {
		index--;
	}
	actualiserSlide()
});


const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {

	if (index === slides.length - 1) {
		index = 0;
	} else {
		index++;
	}
	actualiserSlide()
});


const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
    dot.classList.add("dot");
	if (i === 0) {
		dot.classList.add("dot_selected");
	} 
    dotsContainer.appendChild(dot);
}
	

function actualiserSlide() {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	tagLine.innerHTML = slides[index].tagLine;

	const dotsList = document.querySelectorAll(".dot");

	for (let i = 0; i < dotsList.length; i++) {
        dotsList[i].classList.remove("dot_selected");
	}

	if (dotsList[index]) {
		dotsList[index].classList.add("dot_selected");
	}
}

actualiserSlide();


  