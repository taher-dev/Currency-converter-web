// Select the theme toggle checkbox and the body element
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Function to apply the saved theme on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  // If a theme is saved and it's 'dark'
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.checked = true; // Sync the toggle switch
  } else {
    // Default to light mode
    body.classList.remove("dark-mode");
    themeToggle.checked = false; // Sync the toggle switch
  }
}

// Add an event listener to the checkbox to handle theme changes
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark"); // Save 'dark' to localStorage
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light"); // Save 'light' to localStorage
  }
});

// Call the function to apply the theme when the script first loads
applySavedTheme();
