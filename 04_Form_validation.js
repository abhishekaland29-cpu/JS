// FORMS AND FORM VALIDATION IN JAVASCRIPT


// 1. READING VALUES FROM FORM CONTROLS


const usernameInput = document.querySelector("#username");
const bioTextarea = document.querySelector("#bio");
const countrySelect = document.querySelector("#country");

// Reading input, textarea, and select elements using `.value`
console.log("Input Value:", usernameInput.value);
console.log("Textarea Value:", bioTextarea.value);
console.log("Selected Option Value:", countrySelect.value);



// 2. CONFUSION POINTS

// Difference between .value and .textContent:
// - .value: Reads/sets data entered inside form fields (<input>, <textarea>, <select>).
// - .textContent: Reads/sets text inside standard HTML elements (<div>, <p>, <span>).

// Form submission vs Button click:
// Always listen to the form's "submit" event rather than a button's "click" event.
// "submit" handles both mouse clicks and pressing "Enter" inside inputs.



// 3. PREVENT DEFAULT & JS-BASED VALIDATION

const signupForm = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorContainer = document.querySelector("#error-message");

signupForm.addEventListener("submit", (e) => {
  // Prevent browser's default page reload on submission
  e.preventDefault();

  // Reset previous errors
  errorContainer.textContent = "";
  errorContainer.style.display = "none";

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Pattern attribute vs Custom Regex:
  // - HTML5 pattern attribute (e.g., pattern="[a-z]{3,}") works via inline HTML.
  // - Custom Regex in JS allows deeper, dynamic validation logic:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Inline / Conditional Validation Logic
  if (email === "" || !emailRegex.test(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    showError("Password must be at least 6 characters long.");
    return;
  }

  console.log("Form validated & ready for API transmission!", { email, password });
});

function showError(message) {
  errorContainer.textContent = message;
  errorContainer.style.display = "block";
}



// 4. PRACTICE: INTERACTIVE FEEDBACK FORM WITH ERROR HIGHLIGHTS

const feedbackInput = document.querySelector("#feedback-text");

feedbackInput.addEventListener("blur", (e) => {
  // Highlights red if input is left empty on blur
  if (e.target.value.trim() === "") {
    e.target.style.borderColor = "red";
  } else {
    e.target.style.borderColor = "green";
  }
});