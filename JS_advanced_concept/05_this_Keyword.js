// "this" Keyword :

// What is "this" ?
    //this is a special JavaScript keyword that refers to a context/object. 
    // The important thing to remember is:
        // The value of this depends on how the code is being called. 
    // It is not simply the object where the function was written.

// this in Different Contexts:
// 1.Global Scope:
        // Outside any function or object, this refers to the global object.
        // In browsers: window
        // In Node.js: global / empty object {}

        // Example:
                console.log(this); 
                // Logs Window object (in browser)

// 2.Inside a Standard Function:
        // In a regular function, this depends on whether strict mode ("use strict";) is enabled.

        // Example:
                function showThis() {
                    console.log(this);
                }
                
                showThis(); 
                // Non-strict mode: window
                // Strict mode ("use strict"): undefined

// 3.Inside an Object Method:
        // When a function is called as a method of an object (e.g., obj.method()), this points directly to the object before the dot.

        // Example:
                const user = {
                    name: "Abhishek",
                    greet() {
                        console.log(this.name); // `this` points to `user`
                        }
                    };
                    
                    user.greet(); // Logs: "Abhishek"

// 4.Inside Event Handlers:
        // When attached to a DOM event listener, this refers to the DOM element that triggered the event.

        // Example:
                let button = document.querySelector("button"); 
                button.addEventListener("click", function() {
                    console.log(this); // Logs the <button> element
                    }
                );

//Arrow Functions and Lexical "this" :
        // Arrow functions do not have their own this. Instead, they inherit this from their outer (lexical) scope at the time they are defined.

        // Example:
                const Info = {
                    name: "Abhishek",
                    
                    // Standard method: `this` points to user
                    greetStandard: function() {
                        console.log("Standard:", this.name);
                    },
                    
                    // Arrow function: `this` looks outside user -> points to window
                    greetArrow: () => {
                        console.log("Arrow:", this.name);
                    }
                };
                
                Info.greetStandard(); // Logs: "Standard: Abhishek"
                Info.greetArrow();    // Logs: "Arrow: undefined" (or "")

// Why Arrow Functions "Lose" this as Methods:
        // An object literal { ... } does not create a new scope. Therefore, an arrow function declared as an object method inherits this from the scope where the object itself was created (usually global/window).
        // When Arrow Functions Shine: Callbacks inside Methods

        // Example:
                const team = {
                    title: "Devs",
                    members: ["Abhishek", "Rahul"],
                    
                    showMembers() {
                        // Arrow function preserves `this` from showMembers()
                        this.members.forEach((member) => {
                            console.log(`${member} is on team ${this.title}`);
                        });
                    }
                };
                
                team.showMembers();
                //  It will Log "Abhishek is on team Devs" and "Rahul is on team Devs".

// Manual Binding: call(), apply(), and bind():
        // When you want to explicitly define what this refers to, JavaScript provides three built-in methods:
            // 1.call(thisArg, arg1, arg2...): Invokes the function immediately with this set to thisArg, passing arguments individually.

            // Example:
                function introduce(city, country) {
                    console.log(`Hi, I am ${this.name} from ${city}, ${country}.`);
                }
                
                const person1 = { name: "Abhishek" };
                const person2 = { name: "Priya" };

                introduce.call(person1, "Pune", "India");
                // It Logs "Hi, I am Abhishek from Pune, India."

            // 2.apply(thisArg, [arg1, arg2...]): Invokes the function immediately with this set to thisArg, passing arguments as an array.

            // Example:
                introduce.apply(person2, ["Delhi", "India"]); 
                // It Logs "Hi, I am Priya from Delhi, India."

            // 3.bind(thisArg, arg1, arg2...): Does not invoke the function immediately. Instead, it returns a brand-new copy of the function with this permanently bound.

            // Example:
                const boundFunc = introduce.bind(person2, "Pune", "India");
                boundFunc();
                // Logs: Hi, I am Priya from Pune, India.