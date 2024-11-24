const calendarIcons = document.querySelectorAll(".calendar-icon");

document.addEventListener('DOMContentLoaded', () => {
    console.log("blogs_script.js loaded for blogs.html");

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
});

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

document.addEventListener('DOMContentLoaded', () => {
    console.log("blogs_script.js loaded for blogs.html");

    function toggleSection(sectionId) {
        const content = document.getElementById(sectionId);
        const title = content.previousElementSibling.querySelector('h2 > span');

        if (content.classList.contains("active")) {
            content.classList.remove("active");
            title.classList.remove("rotate");
        } else {
            content.classList.add("active");
            title.classList.add("rotate");
        }
    }

    // Initial rotation for first blog (expanded by default)
    document.querySelector('#blog4 .clickable-title h2 > span').classList.add('rotate');

    // Add click listeners for all clickable titles
    const clickableTitles = document.querySelectorAll(".clickable-title");
    clickableTitles.forEach((title) => {
        title.addEventListener("click", () => {
            const sectionId = title.nextElementSibling.id;
            toggleSection(sectionId);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle Functionality
    const toggleButton = document.getElementById("toggle-theme-logo");

    function applyTheme(theme) {
        if (theme === "light-mode") {
            document.body.classList.add("light-mode");
            calendarIcons.forEach(icon => {
                icon.src = "calendar_light.png";
            });
        } else {
            document.body.classList.remove("light-mode");
            calendarIcons.forEach(icon => {
                icon.src = "calendar.png";
            });
        }
    }

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            console.log("Theme toggle clicked.");
            const currentTheme = document.body.classList.contains("light-mode") ? "dark-mode" : "light-mode";
            applyTheme(currentTheme);
            localStorage.setItem("theme", currentTheme);
            console.log("Theme toggled to:", currentTheme);
        });
    } else {
        console.error("Toggle button not found in blogs.html!");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';

    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);

    const closeBtn = document.createElement('div');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    lightbox.appendChild(closeBtn);

    document.body.appendChild(lightbox);

    document.querySelectorAll('.blog-lightbox-trigger').forEach(image => {
        image.addEventListener('click', () => {
            const fullResolutionSrc = image.src;
            lightboxImg.src = fullResolutionSrc;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.classList.remove('active');
        }
    });
});