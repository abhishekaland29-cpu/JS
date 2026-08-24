// CONDITIONALS IN JAVASCRIPT:
// Used to execute different blocks of code based on specified conditions.


// 1. IF STATEMENT
// Executes code only if the condition evaluates to true.
            let age = 20;
            
            if (age >= 18) {
                console.log("You can vote."); // Output: You can vote.
                }

// 2. IF...ELSE STATEMENT
// Executes the 'if' block if true, otherwise executes the 'else' block.
            let mode = "dark";
            let color;
            
            if (mode === "dark") {
                color = "black";
            } else {
                color = "white";
            }
            
            console.log(color); // Output: black

// 3. ELSE IF STATEMENT
// Tests multiple conditions sequentially until one evaluates to true.
            let score = 85;
            
            if (score >= 90) {
                console.log("Grade: A");
            } else if (score >= 75) {
                console.log("Grade: B"); // Output: Grade: B
            } else if (score >= 50) {
                console.log("Grade: C");
            } else {
                console.log("Grade: Fail");
            }

// 4. SWITCH STATEMENT
// Used when evaluating a single variable against multiple exact values.
            let day = "Monday";
            
            switch (day) {
                case "Monday":
                    console.log("Start of the work week!"); // Output: Start of the work week!
                    break; // Exits the switch block
                case "Friday":
                    console.log("Weekend is near!");
                    break;
                case "Saturday":
                case "Sunday":
                    console.log("It's the weekend!");
                    break;
                default:
                    console.log("Midweek day.");
                }