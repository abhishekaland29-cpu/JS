// Closures :
// A closure is a feature where an inner function retains access to its outer (enclosing) function's variables, even after the outer function has finished executing and was popped off the Call Stack.
// Whenever a Closure is created it is stored in a "Backlink".

//  Example :
function createCounter() {
    let count = 0;
    return function increment() {
        count++; 
        console.log(count);
    };
}

const counter = createCounter(); // createCounter() finishes and is popped off the Call Stack

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3


// Even though createCounter() has completely finished executing, counter() still remembers and modifies the original count variable.

// Scope Chain vs. Call Stack:
    //The Call Stack tracks function calls and order of execution.
    //The Scope Chain determines variable visibility based on where functions are written in the code.