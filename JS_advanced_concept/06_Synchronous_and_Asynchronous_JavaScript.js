// Synchronous vs Asynchronous JavaScript:

// 1.Synchronous JavaScript:
// In synchronous execution, code runs one line at a time. The next line waits until the previous operation finishes.

// Example :
console.log("Start");

console.log("Middle");

console.log("End");

// Output: 
    //   Start
    //   Middle
    //   End

// 2.Asynchronous JavaScript:
// In asynchronous execution, some operations can start and finish later while JavaScript continues executing other code.

// Example:
console.log("Start");

setTimeout(() => {
    console.log("Delayed");
}, 2000);

console.log("End");

// setTimeout() schedules the callback to run later.

// Output:
    //   Start
    //   End
    //   Delayed