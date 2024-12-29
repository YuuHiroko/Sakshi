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
    content: `<p>"The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart."</p>`,
  },
  {
    id: 'music',
    title: '🎶 Music Playlist',
    content: `
      <p>Your favorite playlist:</p>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/sPHRoZFnEkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
  },
];

// Dynamically load sections into the main content area
const mainContent = document.getElementById('main-content');
sections.forEach((section) => {
  const sectionElement = document.createElement('section');
  sectionElement.id = section.id;
  sectionElement.innerHTML = `<h2>${section.title}</h2>${section.content}`;
  mainContent.appendChild(sectionElement);
});

// Scroll animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('section').forEach((section) => observer.observe(section));

// Active navigation link highlighting
const navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionElement = document.getElementById(section.id);
    const sectionTop = sectionElement.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Back-to-top button visibility and functionality
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

// Preloader functionality
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
  document.getElementById('preloader').style.display = 'none';
});
