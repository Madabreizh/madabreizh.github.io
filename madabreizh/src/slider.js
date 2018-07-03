// Slider 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n){
	showSlides(slideIndex += n);
}
function currentSlide(n){
	showSlides(slideIndex = n);
}
function showSlides(n){
	var i;
	var slides = document.getElementsByClassName('slider_content_description');
	var dots = document.getElementsByClassName('slider_dot');

	if(n > slides.length) { slideIndex = 1 }
	if(n < 1) { slideIndex = slides.length }

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i = 0; i < dots.length; i++){
		dots[i].classList.remove("slider_active");
	}

	slides[slideIndex-1].style.display = "block";

	dots[slideIndex-1].classList.add("slider_active");

}
