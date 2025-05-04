document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  
    const primaryBtn = document.querySelector('.primary-btn');
    const secondaryBtn = document.querySelector('.secondary-btn');
    
    if (primaryBtn) {
      primaryBtn.addEventListener('click', function() {
        alert('Calling our support team...');
      });
    }
    
    if (secondaryBtn) {
      secondaryBtn.addEventListener('click', function() {
        const name = prompt('Please enter your name:');
        if (name) {
          alert(`Thank you ${name}! We will call you back soon.`);
        }
      });
    }
  
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
      headerContent.style.opacity = '0';
      headerContent.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        headerContent.style.transition = 'all 0.8s ease';
        headerContent.style.opacity = '1';
        headerContent.style.transform = 'translateY(0)';
      }, 300);
    }
  
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
  });