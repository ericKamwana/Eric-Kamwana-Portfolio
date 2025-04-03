// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function () {

    // -------------------------------
    // 1. Contact Form Submission
    // -------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Simulate form submission (e.g., using a fetch API call to your server)
        // For now, just show a success message for demonstration purposes.
        const formMessage = document.getElementById('form-message');
        if (formMessage) {
          formMessage.classList.remove('hidden');
  
          // Optionally, reset the form fields after submission
          contactForm.reset();
  
          // Hide the message after 3 seconds
          setTimeout(() => {
            formMessage.classList.add('hidden');
          }, 3000);
        }
      });
    }
  
    // -------------------------------
    // 2. Smooth Scrolling for Internal Anchor Links
    // -------------------------------
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // -------------------------------
    // 3. (Optional) Enhance <details> Toggles Smoothly
    // -------------------------------
    // The <details> element provides native toggling.
    // If you’d like to add any additional styling or transitions when they open/close,
    // you can attach listeners here.
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach((detail) => {
      detail.addEventListener('toggle', function () {
        // For example, you might add a custom animation when a details element opens.
        // Currently, no extra functionality is added.
        // console.log(`Details toggled: ${this.open}`);
      });
    });
  
  });