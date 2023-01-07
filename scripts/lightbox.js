const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const closeButton = document.getElementById('close-button');
const images = document.querySelectorAll('.image');

let index = -1;
let currentIndex;
let imageArray = [];
console.log(images)
images.forEach(image => {
    const imgEl = image.querySelector('img')
    imageArray.push(imgEl.src)
    image.style.cursor = "pointer";
    index++;
    image.setAttribute("id", index);
    image.addEventListener('click', event => {
        currentIndex = event.currentTarget.id;
        console.log(event.currentTarget.id)
        lightbox.style.display = "block";
        lightboxImage.src = event.target.src;
    });
});

console.log(imageArray.length)
arrowLeft.addEventListener('click', () => {
    currentIndex--;
    console.log(currentIndex)
    if (currentIndex < 0) {
        lightboxImage.src = imageArray[imageArray.length - 1];
        currentIndex = imageArray.length - 1;
    }
    else {
        lightboxImage.src = imageArray[currentIndex];
    }
});

arrowRight.addEventListener('click', () => {
    currentIndex++;
    console.log(currentIndex)
    if (currentIndex >= imageArray.length) {
        lightboxImage.src = imageArray[0];
        currentIndex = 0;
    }
    else {
        lightboxImage.src = imageArray[currentIndex];
    }
});

closeButton.addEventListener('click', () => {
    lightbox.style.display = "none";
});