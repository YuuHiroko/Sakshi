// Function to create and append a photo element
function addPhoto(imageUrl) {
  const photoGallery = document.getElementById('photo-gallery');
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Photo';
  img.classList.add('fade-in');
  photoGallery.appendChild(img);
}

// Add photos to the gallery (replace with your actual image URLs)
addPhoto('image1.jpg');
addPhoto('image2.jpg');
addPhoto('image3.jpg');

// Function to create and append a quote or memory element
function addQuote(quoteText) {
  const quoteContainer = document.getElementById('quote-container');
  const quoteDiv = document.createElement('div');
  quoteDiv.textContent = quoteText;
// Function to create and append a photo element
function addPhoto(imageUrl) {
  // ... (same as before) ...
}

// Add photos to the gallery (replace with your actual image URLs)
addPhoto('image1.jpg');
addPhoto('image2.jpg');
addPhoto('image3.jpg');

// Function to create and append a quote or memory element
function addQuote(quoteText) {
  // ... (same as before) ...
}

// Add quotes and memories (replace with your actual quotes)
addQuote('"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." - Helen Keller');
addQuote('"Life is what happens when you\'re busy making other plans." - John Lennon');


// Function to create and append a friend message element
function addFriendMessage(messageText) {
  const friendMessages = document.getElementById('friend-messages');
  const messageDiv = document.createElement('div');
  messageDiv.textContent = messageText;
  messageDiv.classList.add('zoom-in');
  friendMessages.appendChild(messageDiv);
}

// Add messages from friends (replace with actual messages)
addFriendMessage('Hey Sakshi, remember that time we went hiking and completely lost the trail? That was a wild adventure!');
addFriendMessage('You have such a contagious laugh, Sakshi! It always brightens my day.');
addFriendMessage('I\'m so glad we met, Sakshi. You\'re one of the most genuine and kind-hearted people I know.');

// ... (rest of the JavaScript code is the same as before) ...
ect to the header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  let scrollPosition = window.pageYOffset;
  header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

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
