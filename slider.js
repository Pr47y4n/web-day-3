const current = document.getElementById('current');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
];

let currentIndex = 0;

current.src = images[currentIndex];

prev.addEventListener('click', showPrev);
next.addEventListener('click', showNext);

function showPrev(){
    currentIndex = (currentIndex -1 + images.length) % images.length;
    current.src = images[currentIndex];
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    current.src = images[currentIndex]
}