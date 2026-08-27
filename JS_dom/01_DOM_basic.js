// DOCUMENT OBJECT MODEL (DOM):
// The DOM is an object-oriented representation of the web page.
// It allows JavaScript to access, modify, and dynamically alter HTML & CSS.


// 1. DOM TREE STRUCTURE & NODES
// Everything in the DOM is a Node:
// - Document Node: Entry point to the DOM.
// - Element Node: HTML tags (e.g., <div>, <p>).
// - Text Node: The text inside HTML elements.
// - Comment Node: HTML comments (<!-- comment -->).



// 2. SELECTING ELEMENTS

// By ID (returns a single Element or null) :
          const heading = document.getElementById("main-heading");

// By Class Name (returns a LIVE HTMLCollection - not an Array) :
          const items = document.getElementsByClassName("list-item");

// querySelector (returns the FIRST matching Element) :
          const firstCard = document.querySelector(".card");

// querySelectorAll (returns a STATIC NodeList) :
          const allButtons = document.querySelectorAll("button");


// 3. TEXT / CONTENT ACCESS & CONFUSION POINT

// Suppose HTML is: 
          // <div id="demo">Hello <span style="display:none">World</span></div>

          const demo = document.getElementById("demo");

          // innerText: Respects CSS styling (ignores hidden text)
          console.log(demo.innerText); 
          // Output: "Hello"

          // textContent: Ignores CSS styling (retrieves all hidden text & whitespace)
          console.log(demo.textContent); 
          // Output: "Hello World"

          // innerHTML: Parses and returns full HTML markups inside the element
          console.log(demo.innerHTML); 
          // Output: "Hello <span style=\"display:none\">World</span>"


// 4. LIVE HTMLCollection vs STATIC NodeList

// HTMLCollection (Live): Updates automatically when the DOM changes.
// Returned by: getElementsByClassName, getElementsByTagName
const liveList = document.getElementsByClassName("box");

// NodeList (Static): Takes a fixed snapshot; does NOT auto-update on DOM changes.
// Returned by: querySelectorAll
const staticList = document.querySelectorAll(".box");