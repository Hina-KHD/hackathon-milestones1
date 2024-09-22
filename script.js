var toggleButton = document.getElementById('toggleButton');
var skillsElement = document.getElementById('skills');
if (toggleButton && skillsElement) {
    toggleButton.addEventListener('click', function () {
        // Always hide the skills section when the button is clicked
        skillsElement.style.display = 'none';
    });
}
