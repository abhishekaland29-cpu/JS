// EVENTS AND EVENT HANDLING IN JAVASCRIPT

// 1. EVENT BINDING (addEventListener & removeEventListener)

const btn = document.querySelector("#submit-btn");

function handleClick() {
  console.log("Button was clicked!");
}

// Binding an event
btn.addEventListener("click", handleClick);

// Unbinding / Removing an event (requires passing the named reference)
btn.removeEventListener("click", handleClick);



// 2. COMMON DOM EVENTS

const inputField = document.querySelector("#username");
const box = document.querySelector(".box");

// 'click' - Triggers when an element is clicked
btn.addEventListener("click", () => console.log("Clicked!"));

// 'input' - Triggers instantly as value changes (ideal for live typing)
inputField.addEventListener("input", (e) => console.log("Input value:", e.target.value));

// 'change' - Triggers when focus is lost after value changes
inputField.addEventListener("change", () => console.log("Field value changed permanently"));

// 'mouseover' - Triggers when mouse cursor enters element boundary
box.addEventListener("mouseover", () => console.log("Mouse hovered over box"));

// 'keyup' - Triggers when a pressed keyboard key is released
document.addEventListener("keyup", (e) => console.log("Key released:", e.key));



// 3. EVENT OBJECT & CONFUSION POINTS


// event.target vs event.currentTarget
// - event.target: The EXACT element that triggered the event.
// - event.currentTarget: The element carrying the event listener.

const card = document.querySelector(".card");

card.addEventListener("click", (e) => {
  console.log("Event Type:", e.type);                  // e.g., "click"
  console.log("Exact Clicked Target:", e.target);       // Sub-element (e.g., button/text inside card)
  console.log("Listener Owner:", e.currentTarget);     // Always '.card'
  
  // e.preventDefault(): Stops standard browser default actions (like following links)
  e.preventDefault();
});



// 4. EVENT PROPAGATION: CAPTURING VS BUBBLING

// Event Life Cycle Phases:
// 1. Capturing Phase: Document Root -> Target Node (Downwards)
// 2. Target Phase: Executes at the actual target node
// 3. Bubbling Phase: Target Node -> Document Root (Upwards - DEFAULT)

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// Capturing Listener (3rd argument set to true)
parent.addEventListener("click", () => {
  console.log("Parent Triggered (Capturing Phase)");
}, true);

// Bubbling Listener (3rd argument default/false)
child.addEventListener("click", (e) => {
  console.log("Child Triggered (Bubbling Phase)");
  
  // Stops the event from bubbling up to parent nodes
  e.stopPropagation();
});


// 5. EVENT DELEGATION & PRACTICAL EXAMPLES
// Mindset: Attach ONE listener to a parent instead of binding every child.


// Example A: Delegated event handler on a Todo List
const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("delete-btn")) {
    const todoItem = e.target.closest("li");
    todoItem.remove(); // Removes targeted item dynamically
  }
});

// Example B: Live Character Counter
const textArea = document.querySelector("#bio");
const charCountDisplay = document.querySelector("#char-count");

textArea.addEventListener("input", (e) => {
  const currentLength = e.target.value.length;
  charCountDisplay.textContent = `Character Count: ${currentLength}`;
});