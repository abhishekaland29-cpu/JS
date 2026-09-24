// Abstraction:
    //   Abstraction is the OOP design principle of hiding complex internal implementation details and presenting only a clean, simplified interface to the outside world. It allows developers to interact with an object based on what it does rather than how it performs its internal operations.

    // Key Concepts:
        // -Interface vs. Implementation: Consumer code interacts only with public methods (the interface) without needing to understand or manage internal logic (the implementation).
        // -Complexity Reduction: Reduces cognitive load by abstracting multi-step workflows into single, intuitive method calls.
        // -Abstract Classes in JS: JavaScript does not have a native abstract class keyword like Java or TypeScript, but abstraction is achieved using class structures, private helper methods, or throwing errors in base methods that must be overridden by subclasses.

        // Example:
             class CoffeeMachine {
                #waterLevel = 0;
                
                constructor(waterAmount) {
                    this.#waterLevel = waterAmount;
                }
  
                makeCoffee() {
                    this.#boilWater();
                    this.#grindBeans();
                    this.#brew();
                    console.log("☕ Coffee is ready!");
                }
  
                #boilWater() {
                    console.log("Boiling water...");
                }
                #grindBeans() {
                    console.log("Grinding coffee beans...");
                }
  
                #brew() {
                    console.log("Brewing coffee...");
                }
            }

            const machine = new CoffeeMachine(500);
            machine.makeCoffee(); 
            // Output:
            // Boiling water...
            // Grinding coffee beans...
            // Brewing coffee...
            // ☕ Coffee is ready!
             
            // Internal steps remain hidden and uncallable directly:
            // machine.#boilWater(); // SyntaxError: Private field '#boilWater' must be declared in an enclosing class