// FUNCTIONS IN JAVASCRIPT:
// A block of code designed to perform a specific task, executed when called/invoked.


// 1. FUNCTION DECLARATION
// Standard way to define a function. Standard declarations are HOISTED (can be called before defined).

// Example :
          function greet(name) {
            return `Hello, ${name}!`;
        }

          // Calling / Invoking the function
          let greetingMsg = greet("Abhishek");
          console.log(greetingMsg); // Output: "Hello, Abhishek!"


// 2. FUNCTION EXPRESSION
// Storing a function inside a variable. NOT hoisted (must be defined before calling).

// Example :
          const multiply = function (a, b) {
            return a * b;
        };

          console.log(multiply(4, 5)); // Output: 20


// 3. ARROW FUNCTIONS (ES6+)
// A shorter syntax for writing function expressions.

// Example :
          // Standard Arrow Function
          const add = (a, b) => {
            return a + b;
        };
          
          // Implicit Return (Single line arrow function - omit `{}` and `return`)
          const square = num => num * num;

          console.log(add(10, 20)); // Output: 30
          console.log(square(5));   // Output: 25


// 4. DEFAULT PARAMETERS
// Provides fallback values if arguments are omitted or passed as undefined.

// Example :
          function calculateTotal(price, taxRate = 0.18) {
            return price + (price * taxRate);
        }
        
          console.log(calculateTotal(100));       // Uses default taxRate (0.18) -> Output: 118
          console.log(calculateTotal(100, 0.05)); // Overrides default taxRate -> Output: 105


// 5. REST PARAMETERS (...)
// Allows a function to accept an indefinite number of arguments as an Array.

// Example :
          function sumAll(...numbers) {
            let total = 0;
            for (let num of numbers) {
                total += num;
            }
            return total;
        }
          console.log(sumAll(10, 20, 30, 40)); // Output: 100