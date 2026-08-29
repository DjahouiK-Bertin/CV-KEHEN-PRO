import { createIcons, Phone, Mail, MapPin } from 'lucide';

// Initialize Lucide icons
createIcons({
  icons: {
    Phone,
    Mail,
    MapPin
  }
});

// Update Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 100;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load

// Navbar Scroll Effect
const navbar = document.querySelector('.glass-nav');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Progress Bars Animation
const progressBars = document.querySelectorAll('.progress-bar');
const skillsSection = document.getElementById('skills');

const animateProgressBars = () => {
  if (!skillsSection) return;
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    progressBars.forEach((bar) => {
      const target = bar.style.getPropertyValue('--target-width');
      if (target) {
        bar.style.width = target;
      }
    });
    // Remove listener once animated to avoid re-triggering constantly
    window.removeEventListener('scroll', animateProgressBars);
  }
};

window.addEventListener('scroll', animateProgressBars);
animateProgressBars(); // Trigger on load if already in view
