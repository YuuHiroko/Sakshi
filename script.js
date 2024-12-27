// Section content
const sections = [
  { id: 'about', title: 'About Sakshi 💖' },
  { id: 'welcome', title: 'Welcome' },
  { id: 'message', title: 'Special Message' },
  { id: 'photos', title: 'Photo Gallery' },
  { id: 'timeline', title: 'Timeline' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'music', title: 'Music Playlist' },
  { id: 'contact', title: 'Contact' },
];

// Dynamically load sections
const mainContent = document.getElementById('main-content');
sections.forEach((section) => {
  const sectionElement = document.createElement('section');
  sectionElement.id = section.id;
  sectionElement.innerHTML = `<h2>${section.title}</h2>`;
  mainContent.appendChild(sectionElement);
});

// Smooth scroll for navigation links
document.querySelectorAll('header nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopButton.classList.toggle('visible', window.scrollY > 200);
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lazy loading for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('section').forEach((section) => observer.observe(section));

// Dark Mode Toggle
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const isDarkMode = localStorage.getItem('darkMode') === 'true';
document.body.classList.toggle('dark-mode', isDarkMode);
themeToggleCheckbox.checked = isDarkMode;

themeToggleCheckbox.addEventListener('change', () => {
  const darkModeEnabled = themeToggleCheckbox.checked;
  document.body.classList.toggle('dark-mode', darkModeEnabled);
  localStorage.setItem('darkMode', darkModeEnabled);
});

// Carousel Functionality
const testimonials = document.querySelector('.carousel');
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.testimonial');
  const totalSlides = slides.length;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

document.querySelectorAll('.testimonial').forEach((_, i) => showSlide(i));

// Search Functionality
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('section').forEach((section) => {
    const matches = section.textContent.toLowerCase().includes(query);
    section.style.display = matches ? 'block' : 'none';
  });
});
