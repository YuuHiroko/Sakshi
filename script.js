// Add event listeners to the expand headers
const expandHeaders = document.querySelectorAll('.expand-header');

expandHeaders.forEach(header => {
  header.addEventListener('click', (event) => {
    // Prevent the link from navigating to another page
    event.preventDefault();

    const content = header.nextElementSibling;
    content.classList.toggle('expanded');

    // Adjust max-height for smooth transition
    if (content.classList.contains('expanded')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});
