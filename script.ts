const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const skillsElement = document.getElementById('skills') as HTMLElement;

if (toggleButton && skillsElement) {
  toggleButton.addEventListener('click', () => {
    // Always hide the skills section when the button is clicked
    skillsElement.style.display = 'none';
  });
}