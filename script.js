function toggleSection(sectionId) {
    var content = document.getElementById(sectionId);
    var title = content.previousElementSibling.querySelector('h2 > span');

    if (content.classList.contains("active")) {
        content.classList.remove("active");
        title.classList.remove("rotate");
    } else {
        content.classList.add("active");
        title.classList.add("rotate");
    }
}

// Initial rotation for the "About Me" section as it's active by default
document.querySelector('#about-me .clickable-title h2 > span').classList.add('rotate');

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

window.onload = function() {
    const kaImage = document.getElementById('ka-image');
    kaImage.classList.add('tubelight-effect');
};

