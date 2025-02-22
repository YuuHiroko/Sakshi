// Particle.js Configuration for Light and Dark Modes
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

// Initialize Particles.js
function initializeParticles(isDarkMode) {
  particlesJS("particles-js", isDarkMode ? darkParticlesConfig : lightParticlesConfig);
}

// Theme Toggle
const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");
const isDarkMode = localStorage.getItem("darkMode") === "true";

themeToggleCheckbox.checked = isDarkMode;
document.body.classList.toggle("dark-mode", isDarkMode);
initializeParticles(isDarkMode);

themeToggleCheckbox.addEventListener("change", () => {
  const darkMode = themeToggleCheckbox.checked;
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("darkMode", darkMode);
  initializeParticles(darkMode);
});

// Testimonials Carousel
const testimonials = document.querySelectorAll(".testimonial-carousel div");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
  });
}

showTestimonial(currentTestimonial);

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 3000);

// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
