// 1.Callback:
// A callback is a function passed as an argument to another function and executed later

// Example:
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome!");
}

greet("Abhishek", message);

// Here:message is passed as a callback.

// 2.Callback with setTimeout():
setTimeout(() => {
    console.log("Task completed");
}, 2000);

// The function inside setTimeout() is a callback.

// 3.Callback Hell:
// When multiple asynchronous operations depend on each other, callbacks can become deeply nested.
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks completed");
            });
        });
    });
});
// This structure is called Callback Hell.

// Problems:
//   -Difficult to read
//   -Difficult to debug
//   -Difficult to maintain
//   -Error handling becomes complicated

// Promises were introduced to provide a cleaner way of handling asynchronous operations.