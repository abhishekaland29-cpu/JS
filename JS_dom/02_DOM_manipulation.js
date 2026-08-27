// DOM MANIPULATION IN JAVASCRIPT:
// Modifying element attributes, creating dynamic HTML elements, and updating styles.

// 1. ATTRIBUTE MANIPULATION
// Used to inspect, change, or remove HTML attributes (e.g., src, href, id, class).

const link = document.querySelector("a");

// getAttribute: Reads the value of an attribute
console.log(link.getAttribute("href"));

// setAttribute: Modifies an existing attribute or adds a new one
link.setAttribute("href", "https://github.com");
link.setAttribute("target", "_blank");

// removeAttribute: Completely removes the attribute
link.removeAttribute("target");



// 2. DYNAMIC DOM MANIPULATION (Creating & Inserting Elements)


// createElement: Creates a new element node in memory (not in the DOM tree yet)
const newDiv = document.createElement("div");
newDiv.textContent = "I am a dynamic element!";

// Select parent container
const container = document.querySelector(".container");

// appendChild: Adds the element as the LAST child of the parent
container.appendChild(newDiv);

// prepend: Adds the element as the FIRST child of the parent
const heading = document.createElement("h2");
heading.textContent = "Dynamic Heading";
container.prepend(heading);

// removeChild: Removes a specific child element from a parent
const oldItem = document.querySelector("#old-item");
if (oldItem) {
  container.removeChild(oldItem);
}


// 3. STYLE UPDATES (direct style vs classList)


const box = document.querySelector(".box");

// Direct inline styles (Not recommended for bulk styling)
box.style.backgroundColor = "blue";
box.style.fontSize = "20px"; // Use camelCase for CSS properties

// classList API (Best Practice for styling):

// add(): Adds one or more classes
box.classList.add("active", "highlight");

// remove(): Removes specified classes
box.classList.remove("highlight");

// toggle(): Toggles a class (adds if missing, removes if present)
box.classList.toggle("hidden");

// contains(): Checks if a class exists (returns true/false)
console.log(box.classList.contains("active")); // Output: true