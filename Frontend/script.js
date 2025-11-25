const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  menuPanel.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menuPanel.classList.remove('open');
});

// Subtle parallax effect
document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 15;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 15;
  document.querySelector('.hero-content').style.transform = 
    `translate(${moveX}px, calc(${moveY}px - 60px))`;
});

 const productData = {
      underglazes: [
        { name: "Amaco Glaze Cosmos CO-8 Pint Dark Star", img: "images/glaze1.jpg", hover: "images/glaze1_hover.jpg" },
        { name: "Amaco Glaze Cosmos CO-7 Pint Solar Flare", img: "images/glaze2.jpg", hover: "images/glaze2_hover.jpg" },
        { name: "Amaco Glaze Cosmos CO-6 Pint Supernova", img: "images/glaze3.jpg", hover: "images/glaze3_hover.jpg" },
        { name: "Amaco Glaze Cosmos CO-14 Pint Solar Rainbow", img: "images/glaze4.jpg", hover: "images/glaze4_hover.jpg" }
      ],
      highfire: [
        { name: "High Fire Galaxy Blue", img: "images/highfire1.jpg", hover: "images/highfire1_hover.jpg" },
        { name: "High Fire Sunset Bronze", img: "images/highfire2.jpg", hover: "images/highfire2_hover.jpg" },
        { name: "High Fire Nebula Red", img: "images/highfire3.jpg", hover: "images/highfire3_hover.jpg" },
        { name: "High Fire Celestial Mist", img: "images/highfire4.jpg", hover: "images/highfire4_hover.jpg" }
      ],
      additives: [
        { name: "Gloss Additive Medium", img: "images/add1.jpg", hover: "images/add1.jpg" },
        { name: "Matte Finish Aid", img: "images/add2.jpg", hover: "images/add2.jpg" },
        { name: "Color Enhancer Gel", img: "images/add3.jpg", hover: "images/add3.jpg" },
        { name: "Texture Booster", img: "images/add4.jpg", hover: "images/add4.jpg" }
      ]
    };

    const container = document.getElementById("productContainer");
    const tabs = document.querySelectorAll(".tab");

    function loadProducts(type) {
      container.innerHTML = "";
      productData[type].forEach(item => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
          <div class="product-img">
            <img src="${item.img}" alt="${item.name}" class="main-img">
            <img src="${item.hover}" alt="${item.name} hover" class="hover-img">
          </div>
          <h3>${item.name}</h3>
          <p class="price">AED 166.67 <span>plus VAT</span></p>
          <button class="cart-btn">Add to cart</button>
        `;
        container.appendChild(card);
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        loadProducts(tab.dataset.tab);
      });
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

