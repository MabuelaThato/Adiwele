const textElement = document.querySelector('#tagline p');
    const cursorElement = document.querySelector('#cursor');
    const text = ["Delivering Quality On Time"]; // Add your heading here
    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        cursorElement.style.visibility = 'hidden'; // Hide the cursor before typing
        if (letterIndex < text[wordIndex].length) {
            textElement.textContent += text[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 100); // Adjust the typing speed (milliseconds) if needed
        } else {
            setTimeout(erase, 3000); // Wait for 2 seconds before erasing
        }
    }

    function erase() {
        if (letterIndex > 0) {
            textElement.textContent = text[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50); // Adjust the erasing speed (milliseconds) if needed
        } else {
            cursorElement.style.visibility = 'hidden'; // Show the cursor before typing the next word
            wordIndex = (wordIndex + 1) % text.length;
            setTimeout(type, 500); // Wait for 0.5 seconds before typing the next word
        }
    }

    // Start the typing animation
    type();


    const imageCarousel = document.getElementById('image-carousel');
    const images = document.querySelectorAll('.carousel-image');

    // Clone the images to create a seamless loop
    for (let i = 0; i < 19; i++) {
        images.forEach(image => {
            const clone = image.cloneNode(true);
            imageCarousel.appendChild(clone);
        });
    }
    let currentPosition = 0;
    const speed = 0.1; // Adjust the speed of movement

    const moveImages = () => {
        currentPosition -= speed;
        imageCarousel.style.transform = `translateX(${currentPosition}vw)`;

        if (currentPosition < -100 * images.length) {
            currentPosition = 0;
        }

        requestAnimationFrame(moveImages);
    };

    // Start the animation
    moveImages();
