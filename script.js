// Dark Mode Toggle
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const themeToggleLabel = document.querySelector('.theme-toggle label');

// Check if dark mode is enabled from localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (themeToggleCheckbox) {
  // Apply the initial dark mode state
  document.body.classList.toggle('dark-mode', isDarkMode);
  themeToggleCheckbox.checked = isDarkMode;

  // Update label text based on initial state
  if (themeToggleLabel) {
    themeToggleLabel.textContent = isDarkMode ? '☾ Dark Mode' : '☀ Light Mode';
  }

  // Add event listener for toggle changes
  themeToggleCheckbox.addEventListener('change', () => {
    const darkModeEnabled = themeToggleCheckbox.checked;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
    localStorage.setItem('darkMode', darkModeEnabled);

    // Update toggle label text
    if (themeToggleLabel) {
      themeToggleLabel.textContent = darkModeEnabled ? '☾ Dark Mode' : '☀ Light Mode';
    }
  });
}

// Back-to-top Button Functionality
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
  window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
