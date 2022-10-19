// HAMBURGER MENU TOGGLE
function mobileNavFunction() {
    var hamburger = document.getElementById("mobilenav-menu");
    if (hamburger.style.display === "block") {
      hamburger.style.display = "none";
    } else {
      hamburger.style.display = "block";
    }
}

// SLIDER
var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() {
        plusSlides(1)
    }, 1000);
  
    //Navigational arows are part of pause on hover
    slideshowContainer = document.getElementsByClassName('slider-container')[0];
  
    //Navigational arows not part of pause on hover
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// Next and Previous Controls
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
    showSlides(slideIndex += 1); 
    }
  
    //Navigational arows not part of pause on hover
    if (n === -1){
        myTimer = setInterval(function() {
            plusSlides(n + 2)
        }, 7000);
    } else {
        myTimer = setInterval(function() {
            plusSlides(n + 1)
        }, 7000);
    }
}

//Controls current slide and resets interval when needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlides(n + 1)
    }, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-image");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activedot";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function() {
    plusSlides(slideIndex)
    }, 4000);
}

// GALLERY LOAD MORE
function LoadMoreFunction() {
    document.getElementById("onload").style.display = "flex";
    document.getElementById("load-button").style.display = "none";
}