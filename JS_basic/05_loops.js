// LOOPS IN JAVASCRIPT:
// Loops are used to execute a block of code repeatedly as long as a condition is true.


// 1. FOR LOOP
// Best used when you know in advance how many times you want to iterate.
// Syntax: for (initialization; condition; updation)

// Example :
          for (let i = 1; i <= 3; i++) {
          console.log("Count:", i);
        }

        // Output:
        // Count: 1
        // Count: 2
        // Count: 3

// 2. WHILE LOOP
// Evaluates the condition BEFORE executing the block.

// Example :
          let count = 1;
          
          while (count <= 3) {
            console.log("While count:", count);
            count++; 
        }

        // Output:
        // While count: 1
        // While count: 2
        // While count: 3

// 3. DO...WHILE LOOP
// Executes the block ONCE BEFORE checking the condition.
// Guarantees execution at least once, even if condition is false.

// Example :
          let num = 5;
          do {
            console.log("Do-While ran with num = ", num);
            num++;
        } while (num < 3);

        // Output: Do-While ran with num = 5

// 4. FOR...OF LOOP (Iterating over Arrays & Strings)
// Used to directly iterate over values of iterable objects.

// Example :
          // Iterating an Array:
          const fruits = ["Apple", "Mango", "Banana"];
          
          for (const fruit of fruits) {
            console.log("Fruit:", fruit);
        }
        
          // Iterating a String:
          const str = "JS";
          
          for (const char of str) {
            console.log("Character:", char);
        }

// 5. FOR...IN LOOP (Iterating over Object Properties)
// Used to loop through the keys (properties) of an Object.

// Example :
          const student = {
            name: "Abhishek",
            age: 21,
            cgp: 8.7
        };
          for (const key in student) {
            console.log(`${key}: ${student[key]}`);
        }

        // Output:
        // name: Abhishek
        // age: 21
        // cgp: 8.7