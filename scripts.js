const headingElement = document.querySelector('#typing-heading h1');
    const cursorElement = document.querySelector('#cursor');
    const heading = ["Adiwele"]; // Add your heading here
    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        cursorElement.style.visibility = 'hidden'; // Hide the cursor before typing
        if (letterIndex < heading[wordIndex].length) {
            headingElement.textContent += heading[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 100); // Adjust the typing speed (milliseconds) if needed
        } else {
            setTimeout(erase, 2000); // Wait for 2 seconds before erasing
        }
    }

    function erase() {
        if (letterIndex > 0) {
            headingElement.textContent = heading[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50); // Adjust the erasing speed (milliseconds) if needed
        } else {
            cursorElement.style.visibility = 'hidden'; // Show the cursor before typing the next word
            wordIndex = (wordIndex + 1) % heading.length;
            setTimeout(type, 500); // Wait for 0.5 seconds before typing the next word
        }
    }

    // Start the typing animation
    type();