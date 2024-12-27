// Section content
const sections = [
  {
    id: 'about',
    title: 'About Sakshi 💖',
    content: `
      <p>Sakshi is my elder sissy who is the bestest sissy. She brings happiness wherever she goes!</p>
    `,
  },
  {
    id: 'welcome',
    title: 'Welcome',
    content: `<img src="sakshi.jpg" alt="Sakshi's image" loading="lazy" style="max-width: 100%; border-radius: 10px;">`,
  },
  {
    id: 'message',
    title: 'Special Message',
    content: `<p>This section will hold a heartfelt message for Sakshi.</p>`,
  },
  {
    id: 'photos',
    title: 'Photo Gallery',
    content: `
      <div id="photo-gallery">
        <a href="travel1-large.jpg" data-lightbox="gallery" data-title="Adventure at the mountains">
          <img src="travel1.jpg" alt="Travel memory" loading="lazy">
        </a>
      </div>
    `,
  },
  {
    id: 'timeline',
    title: 'Sakshi’s Timeline',
    content: `<p>Interactive milestones of Sakshi’s life can go here.</p>`,
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    content: `
      <blockquote>"Sakshi is amazing!" - Family</blockquote>
    `,
  },
  {
    id: 'music',
    title: 'Music Playlist',
    content: `<iframe src="https://www.youtube.com/embed/sPHRoZFnEkU" loading="lazy"></iframe>`,
  },
];

// Dynamic section loader
const mainContent = document.getElementById('main-content');
sections.forEach((section) => {
  const sectionElement = document.createElement('section');
  sectionElement.id = section.id;
  sectionElement.innerHTML = `<h2>${section.title}</h2>${section.content}`;
  mainContent.appendChild(sectionElement);
});

// Dark Mode Toggle
document.getElementById('theme-toggle-checkbox').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
