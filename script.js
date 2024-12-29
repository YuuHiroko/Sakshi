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
      <div class="carousel">
        <div class="carousel-inner">
          <img src="travel1.jpg" alt="Travel memory">
          <img src="family1.jpg" alt="Family memory">
          <img src="friends1.jpg" alt="Friends memory">
        </div>
        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
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

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
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

// Modal Popup functionality
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModal = document.getElementsByClassName("close")[0];

openModalButton.onclick = function() {
  modal.style.display = "block";
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Image Carousel functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-inner img');
const totalSlides = slides.length;

document.querySelector('.carousel-control-next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateCarousel();
});

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  const offset = -slideIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Initialize carousel
updateCarousel();
