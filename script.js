// File: script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page fully loaded and ready!");

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll("header nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Prevent default anchor behavior
      const sectionId = link.getAttribute("href").substring(1); // Get section ID
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth", // Smooth scrolling animation
          block: "start",
        });
      }
    });
  });

  // Placeholder: Add interactivity for "Special Message" when content is added
  const messageSection = document.getElementById("message");
  if (messageSection) {
    console.log("Special Message section ready for customization.");
  }

  // Placeholder: Photos section interactivity (e.g., a gallery or carousel in the future)
  const photosSection = document.getElementById("photos");
  if (photosSection) {
    console.log("Photos section loaded. Add functionality here if needed.");
  }

  // Placeholder: Music section interactivity (e.g., playing a playlist)
  const musicSection = document.getElementById("music");
  if (musicSection) {
    console.log("Music section is ready. Add playlist integration if needed.");
  }
});
