document.addEventListener('DOMContentLoaded', () => {
  const aboutLink = document.getElementById('about-link');
  const aboutSection = document.getElementById('about-section');

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutSection.classList.toggle('visible');
  });
});