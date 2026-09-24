// class Declaration:
    //   Introduced in ES6, the class declaration is syntactic sugar built over JavaScript's existing prototype-based inheritance model. It provides a cleaner, more readable, and structured syntax for creating object blueprints and handling object-oriented patterns without changing how JavaScript fundamentally operates under the hood.

    // Key Concepts:
        //    -Syntactic Sugar: Provides cleaner syntax for constructor functions and prototypes without introducing a traditional class-based inheritance model.
        //    -Strict Mode Enforcement: All code declared inside a class body automatically executes in strict mode ("use strict").
        //    -Hoisting Behavior: Unlike standard function declarations, class declarations are hoisted into a Temporal Dead Zone (TDZ) and cannot be instantiated before they are declared in code execution.
        //    -Non-Callable: A class cannot be called directly as a standalone function (e.g., User()); it strictly requires the new keyword (new User()).

    // Example:
         class User {
            constructor(name, role) {
                this.name = name;
                this.role = role;
            }
            
            describe() {
                console.log(`${this.name} is a ${this.role}.`);
            }
        }
        
        const user1 = new User("Alex", "Software Engineer");
        user1.describe(); // Output: Alex is a Software Engineer.

        console.log(typeof User); // Output: "function"
        console.log(user1.describe === User.prototype.describe); // Output: true
    