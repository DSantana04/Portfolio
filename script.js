// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1000);
});

// ===== MOBILE NAVIGATION =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ===== SMOOTH SCROLLING =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 100) {
    header.style.background = 'rgba(26, 26, 26, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(26, 26, 26, 0.95)';
    header.style.boxShadow = 'none';
  }
  
  // Hide/show header on scroll
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollY = currentScrollY;
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  // Add animation classes to elements
  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) {
    aboutContent.querySelector('.about-image').classList.add('fade-in');
    aboutContent.querySelector('.about-text').classList.add('fade-in');
  }
  
  // Timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    observer.observe(item);
  });
  
  // Project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
  
  // Skill items
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.classList.add('fade-in');
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });
  
  // Education items
  const educationItems = document.querySelectorAll('.education-item');
  educationItems.forEach((item, index) => {
    item.classList.add('fade-in');
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });
  
  // Contact items
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((item, index) => {
    item.classList.add('fade-in');
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });
  
  // Stats
  const stats = document.querySelectorAll('.stat');
  stats.forEach((stat, index) => {
    stat.classList.add('fade-in');
    stat.style.animationDelay = `${index * 0.1}s`;
    observer.observe(stat);
  });
  
  // Observe all elements with animation classes
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
});

// ===== BACK TO TOP BUTTON =====
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroBackground) {
    const rate = scrolled * -0.5;
    heroBackground.style.transform = `translateY(${rate}px)`;
  }
});

// ===== TYPING EFFECT FOR HERO TEXT =====
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Apply typing effect to hero name
document.addEventListener('DOMContentLoaded', () => {
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    const originalText = heroName.textContent;
    setTimeout(() => {
      typeWriter(heroName, originalText, 80);
    }, 500);
  }
});

// ===== ACTIVE NAVIGATION LINK =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    if (window.scrollY >= (sectionTop - headerHeight - 100)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== LAZY LOADING FOR IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  // Scroll-dependent functions here
}, 16); // ~60fps

// ===== ACCESSIBILITY IMPROVEMENTS =====
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Focus management for mobile menu
navToggle.addEventListener('click', () => {
  if (navMenu.classList.contains('active')) {
    // Focus first menu item when menu opens
    setTimeout(() => {
      const firstLink = navMenu.querySelector('.nav-link');
      if (firstLink) firstLink.focus();
    }, 100);
  }
});

// ===== PRELOAD CRITICAL RESOURCES =====
document.addEventListener('DOMContentLoaded', () => {
  // Preload hero image
  const heroImage = new Image();
  heroImage.src = './banner-hero.jpg';
  
  // Preload other critical images
  const criticalImages = [
    './foto-portfolio.jpg',
    './TicketGenerator.png',
    './AgeCalculator.png'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});

// ===== SMOOTH REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  el.style.animationPlayState = 'paused';
  revealObserver.observe(el);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
  console.error('JavaScript error:', e.error);
});

// ===== CONTACT FORM ENHANCEMENT (if needed in future) =====
// This can be extended when a contact form is added
function enhanceContactForm() {
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Handle form submission
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', enhanceContactForm);

// ===== CONSOLE EASTER EGG =====
console.log(`
🚀 Portfolio de Danilo Santana Garcia
💻 Desenvolvido com HTML5, CSS3 e JavaScript
🎨 Design moderno e responsivo
📱 Otimizado para todos os dispositivos

Interessado no código? Confira o GitHub: https://github.com/DSantana04
`);

// ===== SERVICE WORKER REGISTRATION (for future PWA features) =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Service worker can be registered here for PWA features
    // navigator.serviceWorker.register('/sw.js');
  });
}

