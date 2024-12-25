// Section content
const sections = [
  {
    id: 'about',
    title: 'About Sakshi 💖',
    content: `
      <p>Sakshi is a ray of sunshine, bringing happiness wherever she goes. Whether it's her infectious smile or her kind heart, she has a way of making every moment special.</p>
      <p>She loves traveling, spending time with loved ones, and cherishing beautiful memories. This page is dedicated to celebrating the wonderful person that she is.</p>
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
    content: '<p>This is where your heartfelt message goes. Add something meaningful for Sakshi here.</p>',
  },
  {
    id: 'photos',
    title: '📸 Memories We\'ve Made',
    content: `
      <div id="photo-gallery">
        <a href="travel1-large.jpg" data-lightbox="gallery" data-title="Adventure at the mountains">
          <img src="travel1.jpg" alt="Travel memory">
        </a>
        <a href="family1-large.jpg" data-lightbox="gallery" data-title="Family gathering moment">
          <img src="family1.jpg" alt="Family memory">
        </a>
        <a href="friends1-large.jpg" data-lightbox="gallery" data-title="Fun day with friends">
          <img src="friends1.jpg" alt="Friends memory">
        </a>
      </div>
    `,
  },
  {
    id: 'quotes',
    title: '💬 Quotes and Memories',
    content: `
      <p>"The best and most beautiful things in the world cannot be seen or touched - they must be felt with the heart." - Helen Keller</p>
    `,
  },
  {
    id: 'music',
    title: '🎶 Music Playlist',
    content: `
      <p>Here’s your favorite playlist from Amaran:</p>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/sPHRoZFnEkU" 
        title="Amaran Playlist" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `,
  },
];

// Add sections to the main content dynamically
const mainContent = document.getElementById('main-content');

sections.forEach((section) => {
  const sectionElement = document.createElement('section');
  sectionElement.id = section.id;
  sectionElement.innerHTML = `<h2>${section.title}</h2>${section.content}`;
  mainContent.appendChild(sectionElement);
});

// GSAP animations for scroll-triggered transitions
gsap.utils.toArray('section').forEach((section) => {
  gsap.fromTo(
    section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
    }
  );
});

// Back-to-top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
