// 1. Object Literals:
        //    An Object Literal is a comma-separated list of key-value pairs wrapped in curly braces ({}). It is the simplest and most direct way to create a single object in JavaScript without needing a class or constructor function.

        // Key Concepts:
            // -Properties: Key-value pairs that store data (state).
            // -Methods: Properties that hold functions to perform actions (behavior).
            // -Literal Syntax: Defines and populates the object instantly at runtime.
        
        // Example:
             const user = {
                name: "Alex",
                role: "Developer",
                
                greet() {
                    console.log(`Hello, I'm ${this.name}.`);
                }};
                
                console.log(user.name); // Output: Alex
                user.greet();          // Output: Hello, I'm Alex.   