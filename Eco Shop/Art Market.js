let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const newTransform = `translateX(-${currentSlide * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransform;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Optional: Automatically move to the next slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);
