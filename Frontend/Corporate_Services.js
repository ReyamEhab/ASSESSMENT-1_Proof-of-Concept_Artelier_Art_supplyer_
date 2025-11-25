// ================= HERO IMAGE ANIMATION =================
const heroImg = document.getElementById('heroImage');

// Function to animate the hero image
function animateHero() {
  heroImg.classList.add('active'); // Add 'active' class to trigger CSS animations
  
  // After 6 seconds, remove 'active' class to fade back & zoom in (loop effect)
  setTimeout(() => {
    heroImg.classList.remove('active');
  }, 6000);
}

// Repeat hero animation smoothly every 12 seconds
setInterval(animateHero, 12000);
animateHero(); // Start animation immediately on page load

// ================= SIDE MENU TOGGLE =================
const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const closeBtn = document.getElementById('closeBtn');

// Open side menu when clicking the menu button
menuBtn.addEventListener('click', () => menuPanel.classList.add('open'));

// Close side menu when clicking the close button
closeBtn.addEventListener('click', () => menuPanel.classList.remove('open'));

// ================= FADE-IN ELEMENTS ON SCROLL =================
const fadeElements = document.querySelectorAll('.fade-in');

// Function to check if element is in viewport and add 'visible' class
function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) { // trigger 100px before element enters view
      el.classList.add('visible');
    }
  });
}

// Listen to scroll events to trigger fade-in
window.addEventListener('scroll', handleScroll);
handleScroll(); // Run once on page load to show elements already in view

// ================= AUTO IMAGE SLIDER PER SECTION =================
const artSections = document.querySelectorAll('.art-image');

artSections.forEach(section => {
  const images = section.querySelectorAll('img');
  let current = 0;

  // Cycle through images in each section every 4 seconds
  setInterval(() => {
    images[current].classList.remove('active'); // Hide current image
    current = (current + 1) % images.length;     // Move to next image
    images[current].classList.add('active');    // Show next image
  }, 4000);
});

// ================= REVEAL ANIMATION ON SCROLL =================
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150; // Trigger distance from bottom of viewport

    // Add or remove 'active' class based on scroll position
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
});

// ================= INTERACTIVE SCROLLING BANNER =================
const bannerTrack = document.getElementById('bannerTrack');

// Duplicate content for seamless scrolling loop
bannerTrack.innerHTML += bannerTrack.innerHTML;

// Add 3D tilt interactivity based on mouse movement
const banner = document.getElementById('banner');
let mouseX = 0;
let rotation = 0;

banner.addEventListener('mousemove', (e) => {
  const rect = banner.getBoundingClientRect();
  const midX = rect.width / 2;
  mouseX = e.clientX - rect.left;
  const diff = (mouseX - midX) / midX;
  rotation = diff * 10; // rotation multiplier
  banner.style.transform = `perspective(600px) rotateY(${rotation}deg)`; // apply 3D rotation
});

banner.addEventListener('mouseleave', () => {
  banner.style.transform = `perspective(600px) rotateY(0deg)`; // reset rotation
});

// ================= CLIENT CARDS SCROLL REVEAL =================
const cards = document.querySelectorAll('.client-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) { // show cards when 100px from viewport
      card.classList.add('visible');
    }
  });
});

// ================= INTERACTIVE 3D TILT ON CLIENT CARDS =================
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    // Apply rotation and slight scale for 3D effect
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  // Reset rotation when mouse leaves card
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  });
});

// ================= CONTACT BUTTON REDIRECT =================
document.getElementById("contactBtn").addEventListener("click", () => {
  // Redirect to contact page when CTA button is clicked
  window.location.href = "contact_us.html";
});
