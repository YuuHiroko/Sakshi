// Dark Mode Toggle
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const themeToggleLabel = document.querySelector('.theme-toggle label');
const isDarkMode = localStorage.getItem('darkMode') === 'true';
document.body.classList.toggle('dark-mode', isDarkMode);
themeToggleCheckbox.checked = isDarkMode;

themeToggleCheckbox.addEventListener('change', () => {
  const darkModeEnabled = themeToggleCheckbox.checked;
  document.body.classList.toggle('dark-mode', darkModeEnabled);
  localStorage.setItem('darkMode', darkModeEnabled);

  // Update toggle label text
  themeToggleLabel.textContent = darkModeEnabled ? '☾ Dark Mode' : '☀ Light Mode';
});

// Back-to-top button functionality
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
