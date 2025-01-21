// Particle.js Configuration
particlesJS("particles-js", {
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
});

// Theme Toggle
const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");
const isDarkMode = localStorage.getItem("darkMode") === "true";

themeToggleCheckbox.checked = isDarkMode;
document.body.classList.toggle("dark-mode", isDarkMode);

// Initialize theme and particles on page load
function initializeParticles() {
  particlesJS("particles-js", isDarkMode ? {
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
      },
      modes: { repulse: { distance: 200, duration: 0.4 } },
    },
    retina_detect: true,
  } : {
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
  });
}

initializeParticles();

// Toggle Theme
themeToggleCheckbox.addEventListener("change", () => {
  const darkMode = themeToggleCheckbox.checked;
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("darkMode", darkMode);
  initializeParticles();
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
