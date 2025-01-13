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

// Back-to-top button functionality
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Parallax Effect with GSAP
document.addEventListener('DOMContentLoaded', () => {
  const parallaxSections = document.querySelectorAll('section[data-speed]');
  
  parallaxSections.forEach((section) => {
    const speed = section.getAttribute('data-speed');
    gsap.to(section, {
      y: () => -(window.innerHeight * speed), // Move based on speed
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
});

// GSAP Scroll Animation for Header
const header = document.querySelector('header');
gsap.to(header, {
  scrollTrigger: {
    trigger: header,
    start: "top top",
    end: "bottom+=50 top",
    scrub: true,
  },
  height: "60px",
  duration: 0.5,
  ease: "power2.out",
});

// GSAP Fade-in Animation for Sections
gsap.from("section", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
});
