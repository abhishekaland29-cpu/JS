//  Encapsulation:
        //  Encapsulation is the OOP principle of bundling data (properties) and the methods that operate on that data into a single unit (an object or class), while restricting direct access to some of the object's internal components. It prevents external code from directly modifying internal state unpredictably.

        // Key Concepts:
            //   -Data Hiding: Protecting an object's internal state from unauthorized external manipulation.
            //   -Controlled Access: Exposing clear, controlled public interfaces (methods or accessors) to interact with or modify internal state safely.
            //   -Implementation Techniques in JS:
                     // 1.ES6+ Private Fields (#): Native language-level private properties and methods.
                     // 2.Closure Scope (Pre-ES6): Variables trapped inside function scope to simulate privacy.
                     // 3.Naming Conventions: Using an underscore prefix (_property) to signal private intent (though still publicly accessible).

        // Example:
             class BankAccount {
                #balance = 0;
                
                constructor(owner, initialDeposit) {
                    this.owner = owner; // Public field
                    this.#balance = initialDeposit;
                }
                
                deposit(amount) {
                    if (amount <= 0) {
                        console.log("Deposit amount must be positive.");
                        return;
                    }
                    this.#balance += amount;
                    console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
                }
                getBalance() {
                    return this.#balance;
                }
            }
            const account = new BankAccount("Alex", 100);
            account.deposit(50);             // Output: Deposited: $50. New Balance: $150
            console.log(account.getBalance()); // Output: 150

            // Direct access to private property throws a SyntaxError
            // console.log(account.#balance);  // Error: Private field '#balance' must be declared in an enclosing class