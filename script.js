// Section content
const sections = [
  {
    id: 'about',
    title: 'About Sakshi 💖',
    content: `
      <p>Sakshi is a ray of sunshine, bringing happiness wherever she goes. Whether it's her infectious smile or her kind heart, she has a way of making every moment special.</p>
    `,
  },
  {
    id: 'welcome',
    title: 'Welcome, Sakshi! 💕',
    content: '<p>Explore the heartfelt sections below.</p>',
  },
  {
    id: 'message',
    title: '💌 Special Message',
    content: '<p>Add something meaningful for Sakshi here.</p>',
  },
  {
    id: 'photos',
    title: '📸 Memories We\'ve Made',
    content: `
      <div id="photo-gallery">
        <a href="travel1-large.jpg" data-lightbox="gallery" data-title="Adventure at the mountains">
          <img src="travel1.jpg" alt="Travel memory" loading="lazy">
        </a>
        <a href="family1-large.jpg" data-lightbox="gallery" data-title="Family gathering moment">
          <img src="family1.jpg" alt="Family memory" loading="lazy">
        </a>
        <a href="friends1-large.jpg" data-lightbox="gallery" data-title="Fun day with friends">
          <img src="friends1.jpg" alt="Friends memory" loading="lazy">
        </a>
      </div>
    `,
  },
  {
    id: 'quotes',
    title: '💬 Quotes and Memories',
    content: `<p>"The best and most beautiful things..."</p>`,
  },
  {
    id: 'music',
    title: '🎶 Music Playlist',
    content: `
      <p>Your favorite playlist:</p>
      <iframe src="https://www.youtube.com/embed/sPHRoZFnEkU"></iframe>
    `,
  },
];

// Load sections
const mainContent = document.getElementById('main-content');
sections.forEach((section) => {
  const sectionElement = document.createElement('section');
  sectionElement.id = section.id;
  sectionElement.innerHTML = `<h2>${section
