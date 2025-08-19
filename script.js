// Smooth scrolling for navbar links
const navLinksSmooth = document.querySelectorAll('.navbar a[href^="#"]');

navLinksSmooth.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor jump

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Calculate the position to scroll to (center of screen)
      const sectionTop = targetSection.offsetTop;
      const sectionHeight = targetSection.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollTo = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
  });
});

// Responsive navbar toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
