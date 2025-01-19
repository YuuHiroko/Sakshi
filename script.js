// Particles.js Configurations
const particlesConfigLight = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6 },
    size: { value: 3, random: true },
    opacity: { value: 0.5 },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  retina_detect: true,
};

const particlesConfigDark = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#aaaaaa" },
    line_linked: { enable: true, distance: 150, color: "#aaaaaa", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6 },
    size: { value: 3, random: true },
    opacity: { value: 0.5 },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  retina_detect: true,
};

// Function to Initialize Particles.js
function initializeParticles(isDarkMode) {
  particlesJS("particles-js", isDarkMode ? particlesConfigDark : particlesConfigLight);
}

// Function to Apply Theme (Light/Dark)
function applyTheme(darkMode) {
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("darkMode", darkMode);
}

// Get the Theme Toggle Checkbox
const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");

// Initialize Theme and Particles on Page Load
const isDarkMode = localStorage.getItem("darkMode") === "true";
themeToggleCheckbox.checked = isDarkMode;
applyTheme(isDarkMode);
initializeParticles(isDarkMode);

// Add Event Listener for Theme Toggle
themeToggleCheckbox.addEventListener("change", () => {
  const darkMode = themeToggleCheckbox.checked;
  applyTheme(darkMode);
  initializeParticles(darkMode);
});
