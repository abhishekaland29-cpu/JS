// 2. Constructor Functions:
        //    A Constructor Function is a regular JavaScript function used as a blueprint to create and initialize multiple instances of objects with the same properties and methods. It is invoked using the new keyword.

        // Key Concepts:
            //  -Naming Convention: Written with a capital first letter (e.g., Car, User) to signal that it should be called with new.
            //  -Instance Creation: Allows creating distinct objects (instances) that share a common structure.

        // Example:
             function User(name, role) {
                this.name = name;
                this.role = role;
                
                this.greet = function() {
                    console.log(`Hello, I'm ${this.name}, a ${this.role}.`);
                };}
                
                const user1 = new User("Alex", "Developer");
                const user2 = new User("Sarah", "Designer");
                
                user1.greet(); // Output: Hello, I'm Alex, a Developer.
                user2.greet(); // Output: Hello, I'm Sarah, a Designer.