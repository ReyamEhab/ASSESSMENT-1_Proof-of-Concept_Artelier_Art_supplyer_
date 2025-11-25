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
