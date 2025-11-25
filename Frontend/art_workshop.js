// ====================== SIDE MENU ======================

// Get references to menu elements
const menuBtn = document.getElementById('menuBtn');       // Button to open menu
const menuPanel = document.getElementById('menuPanel');   // Side menu panel
const closeBtn = document.getElementById('closeBtn');     // Button to close menu

// Open the menu when menuBtn is clicked
menuBtn.addEventListener('click', () => menuPanel.classList.add('open'));

// Close the menu when closeBtn is clicked
closeBtn.addEventListener('click', () => menuPanel.classList.remove('open'));


// ====================== SLIDER ======================

// Get all slides
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;       // Tracks the current active slide
let autoPlayInterval;       // Interval ID for auto-sliding

// Show slide based on index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');   // Remove active from all slides
        if(i === index) slide.classList.add('active'); // Add active to current slide
    });
}

// Go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    showSlide(currentSlide);
    resetAutoPlay();  // Reset autoplay interval so timer restarts
}

// Automatically play slides every 2 seconds
function autoPlay() {
    autoPlayInterval = setInterval(() => nextSlide(), 2000);
}

// Reset autoplay by clearing interval and starting again
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlay();
}

// Start autoplay on window load
window.onload = autoPlay;


// ====================== LANGUAGE SWITCH ======================

// Get references to language dropdown
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.getElementById('languageOptions');

// Toggle dropdown display when language icon is clicked
languageDropdown.addEventListener('click', () => {
    languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
});

// Object storing translations for French and Arabic
const translations = {
    'fr': {
        'sliderTitles': ['Atelier de Peinture Acrylique','Atelier de Modelage','Atelier de Peinture pour Enfants','Atelier de Poterie pour Enfants'],
        'sectionTitle': 'Nos Ateliers',
        'sectionDesc': 'Explorez nos ateliers créatifs et libérez votre potentiel artistique.',
        'cardTitles': ['Peinture Acrylique','Art du Modelage','Peinture pour Enfants','Atelier de Poterie','Art Islamique','Aquarelle','Atelier de Dessin','Sculpture en Argile'],
        'cardDescs': [
            'Apprenez à créer des œuvres acryliques vibrantes étape par étape.',
            'Explorez les techniques de création artistique à la main.',
            'Ateliers de peinture amusants spécialement conçus pour les enfants.',
            'Expérience pratique de poterie pour enfants.',
            'Découvrez la beauté de l’art islamique avec des techniques créatives.',
            'Apprenez des techniques délicates de peinture à l’aquarelle.',
            'Maîtrisez le dessin au crayon et au fusain de manière créative.',
            'Créez d’incroyables sculptures en argile lors de sessions pratiques.'
        ]
    },
    'ar': {
        'sliderTitles': ['ورشة الرسم بالأكريليك','ورشة تشكيل الفن','ورشة رسم للأطفال','ورشة الفخار للأطفال'],
        'sectionTitle': 'ورش العمل لدينا',
        'sectionDesc': 'استكشف ورشنا الإبداعية وأطلق العنان لإمكانياتك الفنية.',
        'cardTitles': ['الرسم بالأكريليك','فن التشكيل','رسم الأطفال','ورشة الفخار','الفن الإسلامي','الألوان المائية','ورشة الرسم','تماثيل الطين'],
        'cardDescs': [
            'تعلم كيفية إنشاء أعمال أكريليك حيوية خطوة بخطوة.',
            'استكشف تقنيات تشكيل القطع الفنية يدوياً',
            'ورش الرسم الممتعة المصممة خصيصاً للأطفال.',
            'تجربة عملية للفخار للأطفال للاستمتاع والتعلم.',
            'اكتشف جمال الفن الإسلامي بالتقنيات الإبداعية.',
            'تعلم مهارات الرسم بالألوان المائية بدقة.',
            'اتقن تقنيات الرسم بالقلم والفحم بطريقة إبداعية.',
            'قم بإنشاء تماثيل طينية رائعة في جلسات عملية.'
        ]
    }
};

// ====================== TEXT ANIMATION ======================

// Function to animate text changes with fade-out/fade-in effect
function animateTextChange(element, newText){
    element.classList.add('fade-out'); // Start fade-out
    setTimeout(() => {
        element.textContent = newText;  // Change text
        element.classList.remove('fade-out');
        element.classList.add('fade-in'); // Fade in
        setTimeout(() => element.classList.remove('fade-in'), 500); // Remove class after animation
    }, 400);
}

// ====================== LANGUAGE SELECTION ======================

// Loop through all language options
document.querySelectorAll('.language-options div').forEach(el => {
    el.addEventListener('click', () => {
        const lang = el.dataset.lang; // Get selected language
        languageOptions.style.display = 'none'; // Hide dropdown

        if(lang === 'fr' || lang === 'ar'){  // Apply translations
            const sliderTitles = translations[lang].sliderTitles;
            document.querySelectorAll('.slide .title').forEach((el,i) => animateTextChange(el, sliderTitles[i]));
            animateTextChange(document.getElementById('sectionTitle'), translations[lang].sectionTitle);
            animateTextChange(document.getElementById('sectionDesc'), translations[lang].sectionDesc);

            const cardTitles = document.querySelectorAll('.cardTitle');
            const cardDescs = document.querySelectorAll('.cardDesc');
            cardTitles.forEach((el,i) => animateTextChange(el, translations[lang].cardTitles[i]));
            cardDescs.forEach((el,i) => animateTextChange(el, translations[lang].cardDescs[i]));

        } else { // English default
            const englishSlider = ['Acrylic Painting Workshop','Hand building Art Workshop','Kids Painting Workshop','Pottery Workshop for Kids'];
            const englishTitles = ['Acrylic Painting','Hand Building Art','Kids Painting','Pottery Workshop','Islamic Art','Watercolor','Drawing Workshop','Clay Sculpture'];
            const englishDescs = [
                'Learn to create vibrant acrylic artworks step by step.',
                'Explore the techniques of hand-building creative art pieces.',
                'Fun painting workshops specially designed for children.',
                'Hands-on pottery experience for kids to enjoy and learn.',
                'Explore the beauty of Islamic art with creative techniques.',
                'Learn delicate watercolor painting skills for stunning results.',
                'Master pencil and charcoal drawing techniques creatively.',
                'Create amazing clay sculptures in hands-on sessions.'
            ];

            // Update slider titles
            document.querySelectorAll('.slide .title').forEach((el,i) => animateTextChange(el, englishSlider[i]));
            animateTextChange(document.getElementById('sectionTitle'), 'Our Workshops');
            animateTextChange(document.getElementById('sectionDesc'), 'Explore our creative workshops and unleash your artistic potential.');

            // Update cards
            const cardTitles = document.querySelectorAll('.cardTitle');
            const cardDescs = document.querySelectorAll('.cardDesc');
            cardTitles.forEach((el,i) => animateTextChange(el, englishTitles[i]));
            cardDescs.forEach((el,i) => animateTextChange(el, englishDescs[i]));
        }
    });
});
