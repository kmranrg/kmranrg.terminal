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
const characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", ";", "?", ";", "/", "<", ">", ":", "=", "+", "'"];
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

// Disable right-click globally
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevent right-click context menu
});

// Disable certain keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Prevent F12 (Inspect)
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+C (Element Inspector)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
});

const toggleButton = document.getElementById("toggle-theme-logo");
const profileImage = document.getElementById("ka-image");
const kaSign = document.getElementById("ka-sign");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Update button icon
    if (document.body.classList.contains("light-mode")) {
        profileImage.src = "me_light.png";
        kaSign.src = "sign_light.png";
    } else {
        profileImage.src = "me.png";
        kaSign.src = "sign.png";
    }
});
