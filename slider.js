'use strict';


let currentImage = 0; // start point
const images = [];
const time = 1000;      // time in milliseconds
let isPaused = false;
const pause = document.querySelector('.playPause');
let interval = setInterval(() => {
    nextImage();
    changeImg();
}, time);

// select class in html                      add event             function
document.querySelector('.prevSlide').addEventListener('click', previousImage);
document.querySelector('.nextSlide').addEventListener('click', nextImage);
document.querySelector('.playPause').addEventListener('click', playPause);
document.querySelector('.playPause').addEventListener('click', playPause);
document.addEventListener('keydown', arrows);

// image list
images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';

function arrows(event) {
    if (event.keyCode === 37){
        // 37 = left arrow
        previousImage();

    } else if (event.keyCode === 39){
        //39 = right arrow
        nextImage();
    }
}

function changeImg() {
    document.slide.src = images[currentImage]; // selecting first image
}

function nextImage(){
    if(currentImage < images.length - 1){
        currentImage++;                     // + 1 img

    } else {
        currentImage = 0;
    }
    changeImg();
}

function previousImage() {
    if(currentImage !== 0){
        currentImage--;                     // - 1 img

    } else {
        currentImage =  images.length - 1; // 1 image back (from 3 to 2 to 1)
    }
    changeImg();
}

function playPause(){
    // if isPaused is true he wil run the "if" statement
    if(!isPaused){
        pause.innerText = 'Play';
        isPaused = true;
        clearInterval(interval);
    // if isPaused is false he wil run the "else" statement
    } else {
        pause.innerText = 'Pause';
        isPaused = false;
        interval = setInterval(function (){
            nextImage();
            changeImg();
        }, time);
    }
}
