// Function to create and append a photo element
function addPhoto(imageUrl) {
  const photoGallery = document.getElementById('photo-gallery');
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Photo';
  img.classList.add('fade-in'); // Add the fade-in animation class
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
  quoteDiv.classList.add('zoom-in'); // Add the zoom-in animation class
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
  messageDiv.classList.add('zoom-in'); // Add the zoom-in animation class
  friendMessages.appendChild(messageDiv);
}

// Add messages from friends (replace with actual messages)
addFriendMessage('Happy birthday, Sakshi! Wishing you all the best on your special day!');
addFriendMessage('Dear Sakshi, I hope you have a wonderful day filled with joy and laughter.');
