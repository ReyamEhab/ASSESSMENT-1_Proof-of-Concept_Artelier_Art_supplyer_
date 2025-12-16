/* shop.js - logic for menu, hero reveal, products, filters, accessibility */

/* ---------- MENU OPEN/CLOSE ---------- */
const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  const open = menuPanel.classList.toggle('open');
  menuPanel.setAttribute('aria-hidden', String(!open));
  menuBtn.setAttribute('aria-expanded', String(open));
});
closeBtn.addEventListener('click', () => {
  menuPanel.classList.remove('open');
  menuPanel.setAttribute('aria-hidden', 'true');
  menuBtn.setAttribute('aria-expanded', 'false');
});
/* close panel by clicking outside (for desktop) */
document.addEventListener('click', (e) => {
  if(!menuPanel.contains(e.target) && !menuBtn.contains(e.target)) {
    menuPanel.classList.remove('open');
    menuPanel.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

/* ---------- HERO SCROLL REVEAL ---------- */
const text = document.getElementById('textBox');
const heroImg = document.getElementById('heroImg');

function heroOnScroll() {
    const triggerPoint = window.innerHeight / 1.25;
    const boxTop = text.getBoundingClientRect().top;

    if (boxTop < triggerPoint) text.classList.add('visible');

    // Smooth parallax + elegant zoom effect
    const scrolled = window.scrollY;
    heroImg.style.transform = 
        `translateY(${Math.min(scrolled * 0.15, 70)}px) scale(1.10)`;
}

window.addEventListener('scroll', heroOnScroll);
window.addEventListener('load', heroOnScroll);

/* ------------------------
   PRODUCTS DATA (34 items)
   Each product: id, title, category, price, rating (0-5), badge(optional), tags[], imageURL
   Images come from unsplash (direct links). Replace any with your hosted images if desired.
   ------------------------ */
const products = [
  // Colored Pencils (3)
  {id:1, title:"MM Calligraphy Set 33pc", category:"colored_pencils", price:12, rating:5, badge:"NEW", tags:["Vibrant","Smooth"], img:"images_shop/MM Calligraph.png"},
  {id:2, title:"Acrylic Paint Set of 36", category:"acrylic", price:200, rating:5, badge:"TOP", tags:["Artist","Blendable"], img:"images_shop/Acrylic Gouache Paint.png"},
  {id:3, title:"Gouache Paint", category:"colored_pencils", price:380, rating:4, tags:["Premium"], img:"images_shop/LUK STUDIO GOUACHE 6X20ML SET.png"},

  // Watercolors (4)
  {id:4, title:"Lukas Watercolour 24", category:"watercolor", price:55, rating:4, badge:"Bestseller", tags:["Travel","Beginner"], img:"images_shop/Lukas Terzia Gouache Opaque Watercolour 24 Colours + 1 Tube White.png"},
  {id:5, title:"LUK GOUACHE 12X20ML", category:"watercolor", price:94, rating:5, tags:["Artist"], img:"images_shop/LUK STUDIO GOUACHE 12X20ML STARTER SET.png"},
  {id:6, title:"Palette Pad 40 Sheets", category:"watercolor", price:40, rating:4,tags:["Top"], img:"images_shop/Disposable Palette Pad, 9 x 12 in, 40 Sheets - Pack of 1.png"},
  {id:7, title:"Gouache Paint Set", category:"watercolor", price:380, rating:4,tags:["Artist"], img:"images_shop/Gouache Paint & Tool Small Art Set.png"},

  // Markers (3)
  {id:8, title:"Drawing tools 35 Piece", category:"markers", price:12, rating:4,tags:["Student"], badge:"NEW", img:"images_shop/Drawing & Detailing Accessory Tools - 35 Piece Set.png"},
  {id:9, title:"Caligraphy Dip Pen Set", category:"markers", price:30, rating:5,tags:["Artist"], img:"images_shop/Caligraphy Dip Pen Se.png"},
  {id:10, title:"Caligraphy 2 Nib Set", category:"markers", price:20, rating:4,tags:["Top"], img:"images_shop/Caligraphy 2 Nib Pen Set.png"},

  // Acrylic (3)
  {id:11, title:"38ML INDIAN RED", category:"acrylic", price:18, rating:4, tags:["Student"], img:"images_shop/38ML GOC INDIAN RED.png"},
  {id:12, title:"OIL 200ML TURQUOISE", category:"acrylic", price:48, rating:5, badge:"PREMIUM", tags:["Archival"], img:"images_shop/LUK STUDIO OIL 200ML TURQUOISE.png"},
  {id:13, title:"OIL 37ML BURNT UMBER", category:"acrylic", price:15, rating:3, img:"images_shop/LUK STUDIO OIL 37ML BURNT UMBER.png"},

  // Brushes (3)
  {id:14, title:"Painting Brush - 9pcs", category:"brushes", price:22, rating:4, img:"images_shop/Art Asia 5pc Mix Pink Synthetic Hair Paint Brush Set of 5.png"},
  {id:15, title:"Flat Paintbrush - 3pcs", category:"brushes", price:28, rating:5, badge:"TOP", img:"images_shop/Art Asia Synthetic Triple Hair Flat Paintbrush - Set of 3.png"},
  {id:16, title:"PAINTING BRUSHES 4psc", category:"brushes", price:16, rating:4, img:"images_shop/CHINESE PAINTING BRUSHES SET OF 4.png"},

  // Canvas (4)
  {id:17, title:"CANVAS 24X30CM", category:"canvas", price:15, rating:4, img:"images_shop/CREATIVA CANVAS WITH EASEL 24X30CM.jpg"},
  {id:18, title:"STRETCHED CANVAS 15X15CM", category:"canvas", price:25, rating:5, badge:"NEW", img:"images_shop/CREATIVA CANVAS WITH EASEL 24X30CM.jpg"},
  {id:19, title:"CANVAS 30X30CM ", category:"canvas", price:10, rating:3, img:"images_shop/CREATIVA CANVAS WITH EASEL 24X30CM.jpg"},
  {id:20, title:"Premium Cotton Canvas", category:"canvas", price:35, rating:5, badge:"PREMIUM", img:"images_corprate/CREATIVA ROUND CANVAS 80CM 350GSM 8oz 12X50MM.png"},

  // Sketchbooks (3)
  {id:21, title:"OIL & ACRYLIC 10SHEETS", category:"sketchbooks", price:12, rating:4, img:"images_shop/OIL AND ACRYLICBLOCK 230GSM 24X32CM 10SHEETS.jpg"},
  {id:22, title:" SKETCHPAD A5 25SHEETS", category:"sketchbooks", price:22, rating:5, badge:"TOP", img:"images_shop/SKETCHPAD.jpg"},
  {id:23, title:"ACRYLICBLOCK 10SHEETS", category:"sketchbooks", price:8, rating:3, img:"images_shop/10628144 ACRYLICBLOCK 360GSM 42X56CM 10SHEETS.jpg"},

  // Charcoal (3)
  {id:24, title:"Charcoal Pencils 12pc", category:"charcoal", price:9, rating:4, img:"images_shop/Mont Marte Charcoal Pencils 12pc.png"},
  {id:25, title:"COMPRESSED CHARCOAL 6PCS", category:"charcoal", price:6, rating:3, img:"images_shop/SINOART COMPRESSED CHARCOAL 6PCS.png"},
  {id:26, title:"Coloured Charcoal Pencils 4pc", category:"charcoal", price:11, rating:4, img:"images_shop/Mont Marte Coloured Charcoal Pencils 4pc.png"},

  // Premium (3) — mixed categories but tagged premium
  {id:27, title:"DRY CLAY TERRACOTTA 500g", category:"premium", price:56, rating:5, badge:"PREMIUM", tags:["Handmade"], img:"images_shop/27072 JOVI AIR DRY CLAY TERRACOTTA 500g.png"},
  {id:28, title:"OIL PASTEL -36 COLORS", category:"premium", price:48, rating:5, badge:"LIMITED", tags:["Limited"], img:"images_shop/COLORINO ARTIST OIL PASTEL -36 COLORS.png"},
  {id:29, title:"Oil Pastels 36pc Tin Box", category:"premium", price:42, rating:5, badge:"PREMIUM", tags:["Archival"], img:"images_shop/MM Oil Pastels 36pc Tin Box.png"},

  // Extra canvases to raise count
  {id:30, title:"0 Blender Colourless Marker.", category:"canvas", price:33, rating:5,tags:["Smooth"], img:"images_shop/0 Blender Colourless Sketch Marker.png"},
  {id:31, title:"40139 SILKSCREEN STENCIL", category:"markers", price:26, rating:4, img:"images_shop/40139 SILKSCREEN STENCIL.png"},
  {id:32, title:"Acrylic Pad 16 Sheets", category:"colored_pencils", price:5, rating:3, img:"images_shop/colors pad.png"},
  {id:33, title:"SPONGE BRUSHES 5PCSSET", category:"brushes", price:7, rating:4, img:"images_shop/5935 SPONGE BRUSHES 5PCSSET.png"},
  {id:34, title:"GLOSSY EFFECT LIGHT BLUE 100ML", category:"sketchbooks", price:14, rating:4, img:"images_shop/3DG3 3D GLOSSY EFFECT LIGHT BLUE 100ML.png"}
];

/* Build unique filter list (order desired) */
const filterOrder = ["all","colored_pencils","watercolor","markers","acrylic","brushes","canvas","sketchbooks","charcoal","premium"];
const filterNames = {
  all: "All",
  colored_pencils: "Colored Pencils",
  watercolor: "Watercolors",
  markers: "Markers",
  acrylic: "Acrylic",
  brushes: "Brushes",
  canvas: "Canvas",
  sketchbooks: "Sketchbooks",
  charcoal: "Charcoal",
  premium: "Premium"
};

/* DOM refs */
const filterListEl = document.getElementById('filterList');
const cardsGrid = document.getElementById('cardsGrid');

/* Create filter buttons */
filterOrder.forEach(key=>{
  const btn = document.createElement('div');
  btn.className = 'filter-chip' + (key==='all' ? ' active' : '');
  btn.dataset.filter = key;
  btn.textContent = filterNames[key] || key;
  btn.addEventListener('click', ()=> {
    document.querySelectorAll('.filter-chip').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(key);
  });
  filterListEl.appendChild(btn);
});

/* Render cards initially */
function renderCards(items){
  cardsGrid.innerHTML = '';
  if(!items || items.length===0){
    const no = document.createElement('div');
    no.className = 'no-results';
    no.textContent = 'No products found for this filter.';
    cardsGrid.appendChild(no);
    return;
  }

  items.forEach((p, idx) => {
    const card = document.createElement('article');
    card.className = 'art-card';
    card.dataset.cat = p.category;
    card.dataset.id = p.id;

    // inner HTML
    card.innerHTML = `
      ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
      <div class="img-wrap"><img loading="lazy" src="${p.img}" alt="${p.title}"></div>
      <div class="info">
        <div class="title">${p.title}</div>
        <div class="type">${(filterNames[p.category] || p.category).replace('_',' ')}</div>
        <div class="stars">${renderStars(p.rating)}</div>
        <div class="tag-row">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <div class="card-footer">
        <div class="price">$${p.price}</div>
        <button class="add-btn">ADD</button>
      </div>
    `;

    // tilt mousemove
    card.addEventListener('mousemove', (e)=>{
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (y - 0.5) * 8; // tilt X
      const ry = (x - 0.5) * -12; // tilt Y
      const s = 1.02;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`;
      card.classList.add('tilt');
      const img = card.querySelector('img');
      if(img) img.style.transform = `translateZ(30px) rotate(${(x-0.5)*-12}deg) scale(1.05)`;
    });
    // reset on leave
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = '';
      card.classList.remove('tilt');
      const img = card.querySelector('img');
      if(img) img.style.transform = '';
    });

    // add button demo action
    card.querySelector('.add-btn').addEventListener('click', (ev)=>{
      ev.stopPropagation();
      // small animation feedback
      const btn = ev.currentTarget;
      btn.style.transform = 'scale(.96)';
      setTimeout(()=> btn.style.transform = '',150);
      // simple toast-like feedback (quick)
      showToast(`${p.title} added to cart — $${p.price}`);
    });

    cardsGrid.appendChild(card);
  });

  // observe reveal
  observeReveal();
}

/* helper to render star unicode (★ ☆) */
function renderStars(r){
  r = Math.round(r || 0);
  let out = '';
  for(let i=0;i<5;i++){
    out += i<r ? '★' : '☆';
  }
  return out;
}

/* apply filter */
function applyFilter(key){
  if(key === 'all'){
    renderCards(products);
  } else {
    const filtered = products.filter(p => p.category === key || (key === 'premium' && p.category === 'premium'));
    renderCards(filtered);
  }
}

/* simple toast */
let toastTimer;
function showToast(text){
  let t = document.getElementById('__toast__');
  if(!t){
    t = document.createElement('div');
    t.id = '__toast__';
    t.style.position = 'fixed';
    t.style.right = '22px';
    t.style.bottom = '22px';
    t.style.background = 'rgba(59,46,35,0.95)';
    t.style.color = '#fff';
    t.style.padding = '12px 16px';
    t.style.borderRadius = '12px';
    t.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    t.style.fontWeight = '700';
    t.style.zIndex = 9999;
    document.body.appendChild(t);
  }
  t.textContent = text;
  t.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ t.style.opacity = '0'; }, 1600);
}

/* reveal on scroll with IntersectionObserver */
function observeReveal(){
  const cards = document.querySelectorAll('.art-card');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((en, i) => {
      if(en.isIntersecting){
        setTimeout(()=> en.target.classList.add('visible'), (i%6)*90);
        obs.unobserve(en.target);
      }
    });
  }, {threshold:0.12});
  cards.forEach(c => io.observe(c));
}

/* initial render */
renderCards(products);

/* keyboard accessibility: navigate filters with left/right arrows */
document.addEventListener('keydown', e=>{
  if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
    const filters = Array.from(document.querySelectorAll('.filter-chip'));
    const active = filters.findIndex(f=>f.classList.contains('active'));
    let next = active;
    if(e.key === 'ArrowLeft') next = Math.max(0, active-1);
    if(e.key === 'ArrowRight') next = Math.min(filters.length-1, active+1);
    filters[next].click();
  }
});

/* small resize: re-render small fix (optional) */
window.addEventListener('resize', ()=>{
  // keep layout stable (no heavy ops)
});

/* accessibility: toggle hearts with Enter */
document.addEventListener('keydown', e=>{
  if(e.key === 'Enter' && document.activeElement.classList.contains('heart')) {
    document.activeElement.click();
  }
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

