// Lexical Scope :
         //JavaScript uses lexical scoping, which means an inner function has access to variables defined in its outer (parent) scope based on where the function is declared in your code—not where it is called.

        //  Example:
               const globalVar = "Global";
               
               function outer() {
                const outerVar = "Outer";
                function inner() {
                    console.log(globalVar); // "Global"
                    console.log(outerVar);  // "Outer"
                    }
                    inner();
                }
                outer();