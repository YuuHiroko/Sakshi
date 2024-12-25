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

  // Add dynamic content to the "Special Message" section
  const messageSection = document.getElementById("message");
  if (messageSection) {
    const message = document.createElement("p");
    message.textContent = "Sakshi, you are truly amazing! This page is dedicated to you with love.";
    message.style.fontSize = "1.2em";
    message.style.color = "#ff007f";
    message.style.fontWeight = "bold";
    messageSection.appendChild(message);
  }

  // Add a simple photo gallery to the Photos section
  const photosSection = document.getElementById("photos");
  if (photosSection) {
    const photoGallery = document.createElement("div");
    photoGallery.style.display = "flex";
    photoGallery.style.justifyContent = "center";
    photoGallery.style.flexWrap = "wrap";
    photoGallery.innerHTML = `
      <img src="photo1.jpg" alt="Photo 1" style="width:150px; margin:10px; border-radius:8px;">
      <img src="photo2.jpg" alt="Photo 2" style="width:150px; margin:10px; border-radius:8px;">
      <img src="photo3.jpg" alt="Photo 3" style="width:150px; margin:10px; border-radius:8px;">
    `;
    photosSection.appendChild(photoGallery);
  }

  // Add a simple audio player to the Music section
  const musicSection = document.getElementById("music");
  if (musicSection) {
    const audioPlayer = document.createElement("audio");
    audioPlayer.controls = true;
    audioPlayer.src = "song.mp3"; // Replace with your audio file path
    audioPlayer.style.marginTop = "20px";
    musicSection.appendChild(audioPlayer);
  }

  // Add a scroll-to-top button
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "⬆️ Top";
  scrollToTopButton.style.position = "fixed";
  scrollToTopButton.style.bottom = "20px";
  scrollToTopButton.style.right = "20px";
  scrollToTopButton.style.padding = "10px";
  scrollToTopButton.style.backgroundColor = "#ff80bf";
  scrollToTopButton.style.color = "#fff";
  scrollToTopButton.style.border = "none";
  scrollToTopButton.style.borderRadius = "5px";
  scrollToTopButton.style.cursor = "pointer";

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(scrollToTopButton);
});
