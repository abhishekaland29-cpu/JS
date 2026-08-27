// STRINGS IN JAVASCRIPT:
// Strings are sequence of characters used to represent text.


// 1. CREATING STRINGS & TEMPLATE LITERALS

// Example of Creating a String :
          let singleQuote = 'Hello';
          let doubleQuote = "World";

// Template Literals (ES6) - Uses backticks (``)
// Allows string interpolation and multi-line strings easily.
// Example of Template Literals :
          let name = "Abhishek";
          let age = 21;
          
          let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
          console.log(greeting); 
          
          // Output: Hello, my name is Abhishek and I am 21 years old.


// 2. STRING PROPERTIES & INDEXING
// Strings are zero-indexed and IMMUTABLE (cannot be changed directly).

// Example :
          let str = "JavaScript";
          
          console.log(str.length); // Output: 1
          console.log(str[0]);      // Output: 'J'
          console.log(str[4]);      // Output: 'S'

// Immutability Check:
str[0] = "Y"; // Doesn't throw error, but won't change the string
console.log(str); // Output: "JavaScript"


// 3. COMMON STRING METHODS
// Note: String methods ALWAYS return a new string (does not modify original).

// Example :
          let message = "   JavaScript Programming   ";

// Case Changing:
          console.log(message.toUpperCase()); // Output: "   JAVASCRIPT PROGRAMMING   "
          console.log(message.toLowerCase()); // Output: "   javascript programming   "

// Trimming Whitespace:
          let trimmed = message.trim();
          console.log(trimmed); // Output: "JavaScript Programming"

// Extracting Parts of a String:
// slice(start, end) -> end index is excluded
          console.log(trimmed.slice(0, 10));  // Output: "JavaScript"
          console.log(trimmed.slice(11));     // Output: "Programming" (till the end)

// Replacing Content:
          let text = "I love Python";
          let updatedText = text.replace("Python", "JavaScript");
          console.log(updatedText); // Output: "I love JavaScript"

// Checking for Substrings:
          let sample = "Frontend Developer";
          console.log(sample.includes("Developer")); // Output: true 
          console.log(sample.startsWith("Front"));   // Output: true
          console.log(sample.endsWith("er"));        // Output: true

// Splitting String into an Array:
          let tags = "html,css,javascript,react";
          let tagArray = tags.split(",");
          console.log(tagArray); // Output: ["html", "css", "javascript", "react"]