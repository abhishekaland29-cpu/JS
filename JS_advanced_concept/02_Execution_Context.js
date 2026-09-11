// Execution Context :
                // Before executing a single line of code, JavaScript runs through a two-phase process:
                
                    // 1.Memory Creation Phase (Creation Phase)
                    // 2.Code Execution Phase

// Phase 1: Memory Creation Phase :
            // In this phase, JavaScript scans your code to allocate memory for all variables and functions. No code is actually executed yet.
            
            // Variables (var): Allocated memory and initialized with undefined.

            // Variables (let & const): Allocated memory, but placed in a Temporal Dead Zone (TDZ) without being initialized.
             
            // Functions: Stored in memory with their entire function body definitions.

            var age = 25;
            let name = "Abhi";
           
            function greet() {
                console.log("Hello");
            }
            // What happens in Memory Creation Phase:
            // age --> undefined
            // name --> <uninitialized> (in TDZ)
            // greet --> function() { console.log("Hello"); }

// Phase 2: Code Execution Phase:
            // In this phase, JavaScript runs through the code line by line from top to bottom. It assigns actual values to variables and executes function calls.

            // var age = 25; --> Replaces undefined with 25.
            // let name = "Abhi"; --> Initializes name with "Abhi" (exits TDZ).
            // function greet()... --> Skipped (already stored in memory).
            // When a function is called, a brand-new Function Execution Context is created, repeating both Phase 1 and Phase 2 specifically for that function!


// ===================================================
//              EXECUTION CONTEXT
// ===================================================
// 1. Memory Phase (Creation)   | 2. Execution Phase
// -----------------------------|---------------------
// var age   --> undefined      | age = 25
// let name  --> <uninitialized>| name = "Abhi"
// greet     --> fn()           | runs function calls
// ===================================================


// CALL STACK :
        //   A call stack in JavaScript is a data structure that keeps track of which functions are currently being executed. It follows the Last In, First Out (LIFO) principle.

        // How it works:
            // 1.When a function is called, it is pushed onto the stack.
            // 2.The JavaScript engine executes that function.
            // 3.When the function finishes, it is popped off the stack.
            // 4.Execution returns to the function below it in the stack.

            function first() {
                console.log("First");
                second(); 
                console.log("First ends");
            }
            function second() {
                console.log("Second");
                third();
            }
            function third() {
                console.log("Third");
            }
            first();

            // Call stack execution
// | Step               | Call Stack               |
// | ------------------ | ------------------------ |
// | Start              | Empty                    |
// | `first()` called   | `first`                  |
// | `second()` called  | `first → second`         |
// | `third()` called   | `first → second → third` |
// | `third()` returns  | `first → second`         |
// | `second()` returns | `first`                  |
// | `first()` returns  | Empty                    |

// Output : First
         // Second
         // Third
         // First ends