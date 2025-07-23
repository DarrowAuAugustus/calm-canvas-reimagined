export const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-reveal class
  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
};

// Initialize scroll reveal when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
}