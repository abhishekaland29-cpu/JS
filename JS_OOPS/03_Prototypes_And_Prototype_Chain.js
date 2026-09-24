// 3.Prototypes & Prototype Chain:
        //  In JavaScript, Prototypes are the underlying mechanism by which objects inherit features from one another. Every object has an internal reference link to another object called its prototype. The Prototype Chain is the series of linked prototype objects that JavaScript searches through to locate properties or methods.

        // Key Concepts:
                //   -prototype Property: A concrete property on constructor functions (and classes) that defines the shared methods/properties to be inherited by all instances created by that constructor.
                //   -[[Prototype]] / __proto__: The internal reference on an object instance pointing to its parent prototype object.
                //   -Memory Efficiency: Attaching methods to a constructor's prototype ensures that all instances share a single copy in memory, rather than recreating identical functions for every instance.

        // Example:
                 function Person(name) {
                    this.name = name;
                }
                
                Person.prototype.sayHello = function() {
                    console.log(`Hi, I'm ${this.name}`);
                };
                
                const user1 = new Person("Alex");
                const user2 = new Person("Sarah");
                
                user1.sayHello(); // Output: Hi, I'm Alex
                user2.sayHello(); // Output: Hi, I'm Sarah
                 
                console.log(user1.hasOwnProperty('name'));     // true  (Property belongs directly to instance)
                console.log(user1.hasOwnProperty('sayHello')); // false (Delegated via prototype chain)
                console.log(Object.getPrototypeOf(user1) === Person.prototype); // true


// Prototype Chain Hierarchy:

// user1 (Instance)
//   │
//   ├──> Person.prototype (Contains sayHello)
//           │
//           ├──> Object.prototype (Contains toString, hasOwnProperty)
//                   │
//                   └──> null (End of chain)