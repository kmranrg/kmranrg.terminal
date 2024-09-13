function toggleSection(sectionId) {
    var content = document.getElementById(sectionId);

    if (content.classList.contains("active")) {
        content.classList.remove("active");
    } else {
        content.classList.add("active");
    }
}

// Characters to be used for the floating background effect
const characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", ";"];
const backgroundContainer = document.getElementById("background-container");

// Function to generate a random floating character
function generateFloatingChar() {
    const charElement = document.createElement("div");
    charElement.classList.add("floating-char");
    charElement.innerText = characters[Math.floor(Math.random() * characters.length)];

    // Randomize position, size, and animation duration
    charElement.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    charElement.style.fontSize = Math.random() * 40 + 20 + "px"; // Random font size between 20px and 60px
    charElement.style.animationDuration = Math.random() * 8 + 5 + "s"; // Random animation speed

    backgroundContainer.appendChild(charElement);

    // Remove the character after its animation ends
    setTimeout(() => {
        charElement.remove();
    }, parseInt(charElement.style.animationDuration) * 1000);
}

// Generate floating characters at intervals
setInterval(generateFloatingChar, 300);
