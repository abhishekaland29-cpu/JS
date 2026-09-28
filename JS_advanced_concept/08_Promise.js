// 1.Promise:
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// A Promise has three states:
// Pending
//    ↓
//  ┌───────┐
//  ↓       ↓
// Fulfilled  Rejected

// Example:
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Task successful");
    } else {
        reject("Task failed");
    }

});

// resolve() = Used when the operation is successful.
// reject() = Used when the operation fails.

// 2..then() and .catch() :
// We use .then() to handle a successful Promise and .catch() to handle an error.
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data received");
    } else {
        reject("Something went wrong");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// resolve() → .then()
// reject()  → .catch()

// 3.Promise with setTimeout():
// A common way to simulate an asynchronous operation:
function delay() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("2 seconds completed");
        }, 2000);

    });
}

delay().then((message) => {
    console.log(message);
});
// The Promise resolves after 2 seconds.

// 4.Promise Chaining:
// Promises can be chained using multiple .then() calls.
task1()
    .then((result) => {
        console.log(result);
        return task2();
    })
    .then((result) => {
        console.log(result);
        return task3();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });