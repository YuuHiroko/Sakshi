// Section content
const sections = [
  { id: 'about', title: 'About Sakshi 💖' },
  { id: 'welcome', title: 'Welcome' },
  { id: 'message', title: 'Special Message' },
  { id: 'photos', title: 'Photo Gallery' },
  { id: 'testimonials', title: 'Testimonials' },
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
