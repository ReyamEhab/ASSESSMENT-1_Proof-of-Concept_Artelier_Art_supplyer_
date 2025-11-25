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
  {id:11, title:"Acrylic Basic", category:"acrylic", price:18, rating:4, tags:["Student"], img:"https://images.unsplash.com/photo-1508973372616-67c1b2f9e3d6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d"},
  {id:12, title:"Golden Acrylic 6pc", category:"acrylic", price:48, rating:5, badge:"PREMIUM", tags:["Archival"], img:"https://images.unsplash.com/photo-1526318472351-c75fcf0701d6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d"},
  {id:13, title:"Acrylic Starter", category:"acrylic", price:15, rating:3, img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4"},

  // Brushes (3)
  {id:14, title:"Round Brushes Set", category:"brushes", price:22, rating:4, img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=b3c4d5e6f7a8091b2c3d4e5f6a7b8c9d"},
  {id:15, title:"Flat Brushes Pro", category:"brushes", price:28, rating:5, badge:"TOP", img:"https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=12ab34cd56ef78ab90cd12ef34ab56cd"},
  {id:16, title:"Watercolor Brushes", category:"brushes", price:16, rating:4, img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"},

  // Canvas (4)
  {id:17, title:"Mini Canvas 20x30", category:"canvas", price:15, rating:4, img:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d"},
  {id:18, title:"Stretched Canvas 30x40", category:"canvas", price:25, rating:5, badge:"NEW", img:"https://images.unsplash.com/photo-1473447194083-605b4d6a1b6d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd1234ef567890abcd1234ef567890"},
  {id:19, title:"Canvas Panel 10x12", category:"canvas", price:10, rating:3, img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"},
  {id:20, title:"Premium Cotton Canvas", category:"canvas", price:35, rating:5, badge:"PREMIUM", img:"https://images.unsplash.com/photo-1496284045406-d3e0b918d23b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5678abcd1234ef90785634abcd1234ef"},

  // Sketchbooks (3)
  {id:21, title:"Spiral Sketchbook A4", category:"sketchbooks", price:12, rating:4, img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=98abc765def43210abcd1234ef567890"},
  {id:22, title:"Moleskine Sketch", category:"sketchbooks", price:22, rating:5, badge:"TOP", img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=98abc765def43210abcd1234ef567890"},
  {id:23, title:"Pocket Sketchbook", category:"sketchbooks", price:8, rating:3, img:"https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f1e2d3c4b5a69788766554433221100"},

  // Charcoal (3)
  {id:24, title:"Charcoal Sticks Set", category:"charcoal", price:9, rating:4, img:"https://images.unsplash.com/photo-1526318472351-c75fcf0701d6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d"},
  {id:25, title:"Vine Charcoal", category:"charcoal", price:6, rating:3, img:"https://images.unsplash.com/photo-1547516508-4f9a8b7f8d1d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=a1b2c3d4e5f67890abcdef1234567890"},
  {id:26, title:"Compressed Charcoal", category:"charcoal", price:11, rating:4, img:"https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1234abcd5678ef901234abcd5678ef90"},

  // Premium (3) — mixed categories but tagged premium
  {id:27, title:"Artisan Brush Set", category:"premium", price:56, rating:5, badge:"PREMIUM", tags:["Handmade"], img:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=bead1234face5678bead1234face5678"},
  {id:28, title:"Limited Palette", category:"premium", price:48, rating:5, badge:"LIMITED", tags:["Limited"], img:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=face1234bead5678face1234bead5678"},
  {id:29, title:"Archival Paper Pack", category:"premium", price:42, rating:5, badge:"PREMIUM", tags:["Archival"], img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd5678ef901234abcd5678ef901234"},

  // Extra canvases to raise count
  {id:30, title:"Gallery Wrap 40x60", category:"canvas", price:75, rating:5, img:"https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ff12ee34dd56aa78bb90cc12dd34ee56"},
  {id:31, title:"Neon Marker Set", category:"markers", price:26, rating:4, img:"https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ffee11223344aabbccdd55667788aa99"},
  {id:32, title:"Pencil Extender", category:"colored_pencils", price:5, rating:3, img:"https://images.unsplash.com/photo-1520975917804-9a3a2f3f4b6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ccbb99887766554433221100aabbccdd"},
  {id:33, title:"Brush Cleaner", category:"brushes", price:7, rating:4, img:"https://images.unsplash.com/photo-1526312426976-3d75cdd0e4a9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=44556677889900aabbccddeeff112233"},
  {id:34, title:"Sketching Kit Mini", category:"sketchbooks", price:14, rating:4, img:"https://images.unsplash.com/photo-1511910849309-2f5a7a0638b1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=99887766554433221100aabbccddeeff"}
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
