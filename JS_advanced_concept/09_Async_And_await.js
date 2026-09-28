// 1.Async Function:
// An async function is a function that always returns a Promise.

async function greet() {
    return "Hello";
}

// Even though we return a normal string: "Hello"
// the function actually returns a Promise.

// We can handle it using:
greet().then((message) => {
    console.log(message);
});

// 2.await

// await is used inside an async function to wait for a Promise to settle.

async function getData() {

    const result = await fetchData();

    console.log(result);

}

// 3.Instead of writing:

fetchData()
    .then((result) => {
        console.log(result);
    });

// we can write:

async function getData() {
    const result = await fetchData();
    console.log(result);
}

// This often makes asynchronous code easier to read.

// try...catch with Async/Await

// Errors in async/await can be handled using try...catch.

async function getData() {

    try {

        const result = await fetchData();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}
Structure
try {
    // Code that may fail
}
catch (error) {
    // Handle error
}

// For asynchronous code:

// async
//   ↓
// await Promise
//   ↓
// success → continue
// error   → catch

// 4.Chaining Async Operations

// Multiple asynchronous operations can be executed sequentially.

async function processData() {

    const user = await getUser();

    const posts = await getPosts(user.id);

    const comments = await getComments(posts[0].id);

    console.log(comments);
}

// Here:

// getUser()
//    ↓
// getPosts()
//    ↓
// getComments()

// The next operation starts after the previous Promise is resolved.

// 5.Async/Await vs .then()/.catch()

// Using .then()

getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

// Using async/await

    async function showData() {

    try {
        const data = await getData();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }

}

// Both work with Promises.

// Async/await is essentially a cleaner syntax for working with Promises.