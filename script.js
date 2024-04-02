// const darkModeToggle = document.getElementById('darkModeToggle');
// const body = document.body;

// darkModeToggle.addEventListener('change', () => {
    // body.classList.toggle('dark-mode');
// });


const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Get the current hour in 24-hour format
const currentHour = new Date().getHours();

// Determine whether it's daytime or nighttime based on local time
const isDaytime = currentHour >= 6 && currentHour < 18; // Assuming sunrise at 6 AM and sunset at 6 PM

// Set initial mode based on the time of day
if (isDaytime) {
    body.classList.remove('dark-mode');
    darkModeToggle.checked = false; // Ensure the toggle is unchecked for light mode
} else {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true; // Ensure the toggle is checked for dark mode
}

// Toggle dark mode based on user interaction
darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
});
