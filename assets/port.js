// header.style.color = "red";
var val = document.querySelector(".mix_col")

var header = document.querySelector(".abt3")
    // 


function getRandomColor() {
    var letters = '0123456789ABCDEFGHIJKLMNOP';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 18)];
    }
    return color
}


function live() {
    value = getRandomColor()
    val.style.color = value;
}

function changeHeaderColor() {
    colorInput = getRandomColor()
    header.style.color = colorInput;
}


setInterval("live()", 500);
setInterval("changeHeaderColor()", 500);

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}