// Correct Password
const correctPassword = "munchkin";

// Event listener for page load
window.addEventListener("load", () => {
  // Hide the spinner loader
  document.getElementById("loader").style.display = "none";

  // Show the password modal
  document.getElementById("passwordModal").style.display = "flex";
});

// Verify the password
function verifyPassword() {
  const userPassword = document.getElementById("passwordInput").value; // Get user input
  const errorMessage = document.getElementById("errorMessage"); // Error message element

  if (userPassword === correctPassword) {
    // If password is correct, hide the modal and display the page content
    document.getElementById("passwordModal").style.display = "none";
    document.body.style.display = "block"; // Show the content
  } else {
    // Display an error message for incorrect password
    errorMessage.textContent = "Incorrect password. Please try again.";
  }
}

// Dark Mode Toggle
const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Initialize dark mode state
themeToggleCheckbox.checked = isDarkMode;
document.body.classList.toggle("dark-mode", isDarkMode);

// Toggle dark mode
themeToggleCheckbox.addEventListener("change", () => {
  const darkMode = themeToggleCheckbox.checked;
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("darkMode", darkMode);
  initializeParticles(darkMode);
});

// Initialize particles.js
function initializeParticles(isDarkMode) {
  const config = isDarkMode ? darkParticlesConfig : lightParticlesConfig;
  particlesJS("particles-js", config);
}

// Particles.js Configurations
const lightParticlesConfig = {
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
    },
    modes: { repulse: { distance: 200, duration: 0.4 } },
  },
  retina_detect: true,
};

const darkParticlesConfig = {
  ...lightParticlesConfig,
  particles: { ...lightParticlesConfig.particles, color: { value: "#aaaaaa" } },
  line_linked: { ...lightParticlesConfig.line_linked, color: "#aaaaaa" },
};

// Initialize particles on page load
initializeParticles(isDarkMode);

// Testimonials Carousel
const testimonials = document.querySelectorAll(".testimonial-carousel div");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
  });
}

// Show the first testimonial initially
showTestimonial(currentTestimonial);

// Rotate testimonials every 3 seconds
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 3000);
