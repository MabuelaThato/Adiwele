const textElement = document.querySelector('#tagline p');
    const cursorElement = document.querySelector('#cursor');
    const text = ["Choose Adiwele for quality goods and personalised service."]; 
    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        cursorElement.style.visibility = 'hidden'; 
        if (letterIndex < text[wordIndex].length) {
            textElement.textContent += text[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 100); 
        } else {
            setTimeout(erase, 3000); 
        }
    }


    // Start the typing animation
    type();

