// Disable Right Clicking
document.addEventListener('contextmenu', event => event.preventDefault());
// Get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();
