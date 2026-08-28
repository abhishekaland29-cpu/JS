// LOCALSTORAGE, SESSIONSTORAGE, AND COOKIES


// 1. LOCALSTORAGE API
// Persists data with NO expiration time (data remains even after closing browser).


// setItem: Store data as key-value pairs
localStorage.setItem("username", "Abhishek");
localStorage.setItem("theme", "dark");

// getItem: Retrieve data by key
const user = localStorage.getItem("username");
console.log("Logged in user:", user); // Output: "Abhishek"

// removeItem: Delete a specific item
localStorage.removeItem("theme");

// clear: Delete ALL stored items for this domain
localStorage.clear();



// 2. SESSIONSTORAGE API
// Same methods as localStorage, but data is CLEARED automatically when tab/window closes.


sessionStorage.setItem("sessionID", "abc123xyz");
const currentSession = sessionStorage.getItem("sessionID");
console.log("Current Session:", currentSession);

// sessionStorage.removeItem("sessionID");
sessionStorage.clear();



// 3. CONFUSION POINT: WHY ONLY STRINGS WORK IN STORAGE
// Web storage APIs ONLY store data as DOMString key-value pairs.
// Storing objects/arrays directly results in automatic conversion to "[object Object]".
// Solution: Use JSON.stringify() to save and JSON.parse() to read.


const userProfile = {
  name: "Abhishek",
  role: "Developer",
  level: 1
};

// WRONG WAY:
// localStorage.setItem("profile", userProfile); 
// Output in storage: "[object Object]"

// RIGHT WAY (JSON Serialization):
localStorage.setItem("profile", JSON.stringify(userProfile));

// Reading object back:
const storedProfileString = localStorage.getItem("profile");
const parsedProfile = JSON.parse(storedProfileString);
console.log("Retrieved Object:", parsedProfile.name); // Output: "Abhishek"


// 4. BASIC COOKIE STRUCTURE & HANDLING
// Cookies can be sent to server with HTTP requests and support manual expiration dates.
// Format: "key=value; expires=Date; path=/"


// Writing a basic cookie manually
document.cookie = "userToken=987654; path=/";

// Setting a cookie with an expiration date (Expires in 7 days)
const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 7);
document.cookie = `userToken=987654; expires=${expireDate.toUTCString()}; path=/`;

// Reading cookies (returns a single string containing all cookies separated by semicolons)
console.log("All Cookies:", document.cookie); // Output: "userToken=987654; theme=light"

// Deleting a cookie (set expiration to a past date)
document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


