function toggleSection(sectionId) {
    var content = document.getElementById(sectionId);

    if (content.classList.contains("active")) {
        content.classList.remove("active");
    } else {
        content.classList.add("active");
    }
}
