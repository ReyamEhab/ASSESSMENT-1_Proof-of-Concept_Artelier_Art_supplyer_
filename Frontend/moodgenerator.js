// ===================== ELEMENT SELECTION =====================
// Get references to the main interactive elements on the page
const menuBtn = document.getElementById('menuBtn');        // Button to open the side menu
const menuPanel = document.getElementById('menuPanel');    // Side menu panel
const closeBtn = document.getElementById('closeBtn');      // Button to close the side menu
const showSignup = document.getElementById('showSignup');  // Link to switch to signup form
const showLogin = document.getElementById('showLogin');    // Link to switch back to login form
const loginForm = document.getElementById('loginForm');    // Login form element
const signupForm = document.getElementById('signupForm');  // Signup form element
const formTitle = document.getElementById('formTitle');    // Title above the forms

// ===================== SIDE MENU TOGGLE =====================
// Open the side menu when menu button is clicked
menuBtn.addEventListener('click', () => menuPanel.classList.add('open'));

// Close the side menu when close button is clicked
closeBtn.addEventListener('click', () => menuPanel.classList.remove('open'));

// ===================== FORM SWITCHING =====================
// Switch from Login form to Signup form
showSignup.addEventListener('click', (e) => {
  e.preventDefault();                // Prevent default link behavior
  loginForm.style.display = 'none';  // Hide login form
  signupForm.style.display = 'block';// Show signup form
  formTitle.textContent = 'Sign Up'; // Update the form title
});

// Switch from Signup form back to Login form
showLogin.addEventListener('click', (e) => {
  e.preventDefault();                // Prevent default link behavior
  signupForm.style.display = 'none'; // Hide signup form
  loginForm.style.display = 'block'; // Show login form
  formTitle.textContent = 'Welcome Back'; // Update the form title
});



// ====================== LANGUAGE SWITCH ======================

// Get references to language dropdown
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.getElementById('languageOptions');

// Toggle dropdown display when language icon is clicked
languageDropdown.addEventListener('click', () => {
    languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
});

    // Default load
    loadProducts("underglazes");

    const reviewTrack = document.getElementById("reviewTrack");
const reviewPrev = document.querySelector(".reviewPrev");
const reviewNext = document.querySelector(".reviewNext");
let reviewIndex = 0;

function slideReview(direction) {
  const reviews = document.querySelectorAll(".singleReview");
  const cardWidth = reviews[0].offsetWidth + 40;
  const totalReviews = reviews.length;

  if (direction === "next") {
    reviewIndex = (reviewIndex + 1) % (totalReviews - 2);
  } else {
    reviewIndex = (reviewIndex - 1 + (totalReviews - 2)) % (totalReviews - 2);
  }

  reviewTrack.style.transform = `translateX(-${reviewIndex * cardWidth}px)`;
}

reviewNext.addEventListener("click", () => slideReview("next"));
reviewPrev.addEventListener("click", () => slideReview("prev"));

function showPopup(event) {
  event.preventDefault();
  document.getElementById('popupMessage').classList.add('active');
  document.getElementById('emailInput').value = '';
}

function closePopup() {
  document.getElementById('popupMessage').classList.remove('active');
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".artelier-loader");
  const bar = document.querySelector(".loader-bar");

  // Wait for progress bar animation (4s) then fade out
  bar.addEventListener("animationend", () => {
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 300); // small delay for visual smoothness
  });
});

  const contactForm = document.getElementById('creative-contact-form');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  });

  // Language translations object
const translations = {
  en: {
    "hero-title": "One Stop for All<br>Your Artistic Needs",
    "hero-subtitle": "Discover a world of creativity — premium art supplies for professionals, students, and dreamers who turn imagination into art.",
    "features-title": "Why Artists Love Artelier",
    "feature1-title": "Premium Art Tools",
    "feature1-desc": "Only the finest brushes, paints, and canvases — curated to bring your vision to life.",
    "feature2-title": "Endless Color Range",
    "feature2-desc": "Explore thousands of rich shades and pigments crafted for true artistic depth.",
    "feature3-title": "Creative Inspiration",
    "feature3-desc": "Workshops, tutorials, and creative kits that spark your imagination daily.",
    "feature4-title": "Eco-Friendly Supplies",
    "feature4-desc": "Sustainable materials that care for your art — and for the planet."
  },
  fr: {
    "hero-title": "Tout en un pour tous<br>Vos besoins artistiques",
    "hero-subtitle": "Découvrez un monde de créativité — fournitures artistiques premium pour professionnels, étudiants et rêveurs qui transforment l'imagination en art.",
    "features-title": "Pourquoi les artistes adorent Artelier",
    "feature1-title": "Outils artistiques premium",
    "feature1-desc": "Seulement les meilleurs pinceaux, peintures et toiles — sélectionnés pour donner vie à votre vision.",
    "feature2-title": "Gamme de couleurs infinie",
    "feature2-desc": "Explorez des milliers de nuances et pigments riches conçus pour une profondeur artistique réelle.",
    "feature3-title": "Inspiration créative",
    "feature3-desc": "Ateliers, tutoriels et kits créatifs qui stimulent votre imagination au quotidien.",
    "feature4-title": "Fournitures écologiques",
    "feature4-desc": "Matériaux durables qui prennent soin de votre art — et de la planète."
  },
  ar: {
    "hero-title": "كل شيء في مكان واحد<br>لجميع احتياجاتك الفنية",
    "hero-subtitle": "اكتشف عالمًا من الإبداع — مستلزمات فنية مميزة للمحترفين والطلاب والحالمين الذين يحولون الخيال إلى فن.",
    "features-title": "لماذا يحب الفنانون أرتيليير",
    "feature1-title": "أدوات فنية مميزة",
    "feature1-desc": "أفضل الفرش والألوان واللوحات — مختارة لإحياء رؤيتك.",
    "feature2-title": "مجموعة ألوان لا نهائية",
    "feature2-desc": "استكشف آلاف الظلال والأصباغ الغنية المصممة لأعمق تجربة فنية.",
    "feature3-title": "إلهام إبداعي",
    "feature3-desc": "ورش عمل ودروس وأطقم إبداعية تشعل خيالك يوميًا.",
    "feature4-title": "مستلزمات صديقة للبيئة",
    "feature4-desc": "مواد مستدامة تهتم بفنك — وتهتم بالكوكب."
  }
};

// Toggle dropdown
const switcher = document.getElementById('languageSwitcher');
const options = document.getElementById('languageOptions');

switcher.addEventListener('click', () => {
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

// Change language
options.querySelectorAll('div').forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.getAttribute('data-lang');
    document.querySelectorAll('[data-lang-key]').forEach(el => {
      const key = el.getAttribute('data-lang-key');
      el.innerHTML = translations[lang][key] || el.innerHTML;
    });
    options.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".menu-link").forEach((link, i) => {
        link.style.opacity = "0";
        setTimeout(() => {
            link.style.transition = "0.7s ease";
            link.style.opacity = "1";
        }, i * 120);
    });
});

// ======= Fetch Mood Art from JSON =======
async function fetchMoodArt(mood) {
  try {
    const response = await fetch("./FrontEnd/mood_art_data.json");
    const data = await response.json();

    const art = data.find(
      a => a.mood.toLowerCase() === mood.toLowerCase()
    );

    return art || {
      title: "Custom Mood Art",
      type: "Abstract Art",
      colors: ["#f6d32d", "#3e64ff", "#ffb347", "#6bcB77"],
      exampleImage:
        "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=60"
    };

  } catch (err) {
    console.error(err);
  }
}

// ======= Handle Generate Button =======
const generateBtn = document.getElementById("generateBtn");
const moodInput = document.getElementById("moodInput");
const descInput = document.getElementById("descInput");
const generatedArt = document.getElementById("generatedArt");

generateBtn.addEventListener("click", async () => {
  const mood = moodInput.value.trim();
  const desc = descInput.value.trim();

  if (!mood) {
    alert("Please enter a mood!");
    return;
  }

  generatedArt.innerHTML = "Generating your art...";

  const art = await fetchMoodArt(mood);

  generatedArt.innerHTML = `
    <h3>${art.title}</h3>
    <p><strong>Mood Type:</strong> ${art.type}</p>

    <div class="colors-container">
      ${art.colors.map(c => `<div style="background:${c}"></div>`).join("")}
    </div>

    <p><strong>Description:</strong> ${desc || "No description provided."}</p>

    <img src="${art.exampleImage}" alt="${art.title}">
  `;
});
