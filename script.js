// Section content to dynamically load into the main content area
const sections = [
  {
    id: 'about',
    title: 'About Sakshi 💖',
    content: `
      <p>Sakshi is a ray of sunshine, bringing happiness wherever she goes. Whether it's her infectious smile or her kind heart, she has a way of making every moment special.</p>
    `,
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
        <div class="carousel-dots">
          <span data-slide="0"></span>
          <span data-slide="1"></span>
          <span data-slide="2"></span>
        </div>
        <a class="carousel-control-prev">❮</a>
        <a class="carousel-control-next">❯</a>
      </div>
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

// Carousel Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-inner img');
const dots = document.querySelectorAll('.carousel-dots span');
const totalSlides = slides.length;

function updateCarousel() {
  const offset = -slideIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

document.querySelector('.carousel-control-next')?.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateCarousel();
});

document.querySelector('.carousel-control-prev')?.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    updateCarousel();
  });
});

// Initialize carousel
if (slides.length > 0) updateCarousel();
