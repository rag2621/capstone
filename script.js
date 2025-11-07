// Get the necessary elements by their IDs
var subMenu = document.getElementById("subMenu");
var darkBtn = document.getElementById("dark-btn");

// Toggle the settings menu open and close
function settingsMenuToggle() {
    const subMenu = document.getElementById("subMenu");  // Fetch the subMenu element
    subMenu.classList.toggle("open-menu");  // Toggle the class to open/close menu
}

// Dark theme toggle functionality
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");  // Toggle dark button appearance
    document.body.classList.toggle("dark-theme");  // Toggle the dark theme on body

    // Save theme preference in localStorage
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme on page load
if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");  // Ensure dark button is off
    document.body.classList.remove("dark-theme");  // Light theme active
} 
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");  // Ensure dark button is on
    document.body.classList.add("dark-theme");  // Dark theme active
} 
else {
    // Set default theme to light if no preference is saved
    localStorage.setItem("theme", "light");
}
