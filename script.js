document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const shapes = document.querySelectorAll('.shape');
  
    // Fade in navigation
    setTimeout(() => {
      nav.classList.add('visible');
    }, 1000);
  
    // Mouse-based shape movement
    document.addEventListener('mousemove', (e) => {
      const { clientX: x, clientY: y } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
  
      shapes.forEach(shape => {
        const depth = parseFloat(shape.getAttribute('data-depth'));
        const rect = shape.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
  
        // Calculate offset based on mouse position
        const moveX = ((x - width / 2) / width) * 50 * depth;
        const moveY = ((y - height / 2) / height) * 50 * depth;
  
        // Apply transform, layering with CSS float animation
        shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  
    // Reset transform on mouse leave to avoid sticking
    document.addEventListener('mouseleave', () => {
      shapes.forEach(shape => {
        shape.style.transform = 'translate(0, 0)';
      });
    });
  });