//SCOPE : Scope determines where variables are accessible in your code. 

// JavaScript has three primary types of scope.
        // 1.Global Scope 
        // 2.Functional Scope 
        // 3.Block Scope

// 1.Global Scope :
            // Variables declared outside any function or block live in the global scope. They are accessible from anywhere in your code.

             const globalVar = "I am everywhere!";

             function showGlobal() {
             console.log(globalVar); // Accessible
             }
             showGlobal();

// 2.Functional Scope : 
             // Variables declared with var, let, or const inside a function exist only within that function.

             function myFunction() {
                var secret = "12345";
                let name = "Fatima";
                console.log(secret); // "12345"
                }
                // Uncaught ReferenceError: secret is not defined
            console.log(secret);


// 3.Block Scope :
             // Variables declared with let and const inside curly braces {} (such as if statements, for loops, or plain blocks) cannot be accessed outside that block.

             {
                let blockScopedLet = "I am safe inside";
                var leakedVar = "I leak outside!";
            }
             console.log(leakedVar); // "I leak outside!"
             // Uncaught ReferenceError: blockScopedLet is not defined
             
             console.log(blockScopedLet);

             