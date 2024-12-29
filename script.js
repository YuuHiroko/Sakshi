// Section content
const sections = [
  // Add your sections here...
];

const mainContent = document.getElementById('main-content');
sections.forEach((section) => {
  const sectionElement = document.createElement('section');
  sectionElement.id = section.id;
  sectionElement.innerHTML = `<h2>${section.title}</h2>${section.content}`;
  mainContent.appendChild(sectionElement);
});

// Scroll animation
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('section').forEach((section) => observer.observe(section));

// Active navigation link
const navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionElement = document.getElementById(section.id);
    const sectionTop = sectionElement.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.get
