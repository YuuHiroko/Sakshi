// Function to create and append a photo element
function addPhoto(imageUrl) {
  const photoGallery = document.getElementById('photo-gallery');
// ... (rest of the JavaScript code is the same as before) ...

// Add event listeners to the expand headers
const expandHeaders = document.querySelectorAll('.expand-header');
expandHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('expanded');

    // Adjust max-height for smooth transition
    if (content.classList.contains('expanded')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});
 day!');
addFriendMessage('Dear Sakshi, I hope you have a wonderful day filled with joy and laughter.');

// Add the "show" class to elements with a delay for fade-in effect
function showElementsWithDelay() {
  const elements = document.querySelectorAll('.fade-in, .zoom-in');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('show');
    }, index * 200); // 200ms delay between each element
  });
}

// Call the function to show elements with a delay
showElementsWithDelay();

// Add parallax effect to the header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  let scrollPosition = window.pageYOffset;
  header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
