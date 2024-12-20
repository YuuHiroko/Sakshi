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
  quoteDiv.classList.add('zoom-in');
  quoteContainer.appendChild(quoteDiv);
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

// Add the "show" class to elements with a delay for fade-in effect
function showElementsWithDelay() {
  const elements = document.querySelectorAll('.fade-in, .zoom-in');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('show');
    }, index * 200); 
  });
}

// Call the function to show elements with a delay
showElementsWithDelay();


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
