// Content for each section
const sections = {
  message: `
    <h2>A Special Message for You 💌</h2>
    <p>This is where your special message will go. You can add a heartfelt message for Sakshi here.</p>
  `,
  photos: `
    <h2>Memories We've Made 📸</h2>
    <div class="category-buttons">
      <button onclick="filterPhotos('all')">All</button>
      <button onclick="filterPhotos('travel')">Travel</button>
      <button onclick="filterPhotos('family')">Family</button>
      <button onclick="filterPhotos('friends')">Friends</button>
    </div>
    <div id="photo-gallery">
      <figure class="photo-item travel">
        <a href="travel1-large.jpg" data-lightbox="gallery" data-title="Adventure at the mountains (Jan 2023)">
          <img src="travel1.jpg" alt="Travel 1">
        </a>
        <figcaption>Adventure at the mountains (Jan 2023)</figcaption>
      </figure>
      <figure class="photo-item family">
        <a href="family1-large.jpg" data-lightbox="gallery" data-title="Family gathering moment (Diwali 2022)">
          <img src="family1.jpg" alt="Family 1">
        </a>
        <figcaption>Family gathering moment (Diwali 2022)</figcaption>
      </figure>
      <figure class="photo-item friends">
        <a href="friends1-large.jpg" data-lightbox="gallery" data-title="A fun day with friends (Feb 2023)">
          <img src="friends1.jpg" alt="Friends 1">
        </a>
        <figcaption>A fun day with friends (Feb 2023)</figcaption>
      </figure>
      <figure class="photo-item travel">
        <a href="travel2-large.jpg" data-lightbox="gallery" data-title="Beautiful sunset by the sea (Summer 2022)">
          <img src="travel2.jpg" alt="Travel 2">
        </a>
        <figcaption>Beautiful sunset by the sea (Summer 2022)</figcaption>
      </figure>
    </div>
  `,
  quotes: `
    <h2>Quotes and Memories 💬</h2>
    <p>"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." - Helen Keller</p>
    <p>"Life is what happens when you're busy making other plans." - John Lennon</p>
  `,
  friends: `
    <h2>Messages from Your Friends 🧑‍🤝‍🧑</h2>
    <p>Hey Sakshi, remember that time we went hiking and completely lost the trail? That was a wild adventure!</p>
    <p>You have such a contagious laugh, Sakshi! It always brightens my day.</p>
  `,
  music: `
    <h2>Your Favorite Tune 🎶</h2>
    <iframe src="http://www.youtube.com/watch?v=sPHRoZFnEkU" title="Sai Pallavi's Intro (From 'Amaran')" frameborder="0"></iframe>
  `,
};

// Attach event listeners to nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').substring(1); // Remove '#' from href
    displaySection(sectionId);
  });
});

// Function to display content in the details section
function displaySection(sectionId) {
  const detailsSection = document.getElementById('details');
  const overviewSection = document.getElementById('overview');
  const backButton = document.createElement('button');
  backButton.id = 'back-to-overview';
  backButton.textContent = 'Back to Overview';
  backButton.addEventListener('click', backToOverview);

  detailsSection.innerHTML = sections[sectionId] || '<p>Content not available.</p>';
  detailsSection.style.display = 'block';
  detailsSection.classList.add('fade-in');
  overviewSection.style.display = 'none';

  // Add back button
  if (!document.getElementById('back-to-overview')) {
    detailsSection.appendChild(backButton);
  }
}

function backToOverview() {
  const detailsSection = document.getElementById('details');
  const overviewSection = document.getElementById('overview');
  detailsSection.style.display = 'none';
  overviewSection.style.display = 'block';
}

// Filter photos by category
function filterPhotos(category) {
  const photos = document.querySelectorAll('.photo-item');
  photos.forEach(photo => {
    if (category === 'all' || photo.classList.contains(category)) {
      photo.style.display = 'block';
    } else {
      photo.style.display = 'none';
    }
  });
}
