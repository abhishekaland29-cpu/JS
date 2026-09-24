// Private Fields (#field) & Public Fields:
        // Class Fields allow properties to be declared directly inside a class body without needing to assign them inside the constructor(). Public Fields are accessible and mutable from anywhere, while Private Fields (prefixed with #) are strictly scoped to the class body and cannot be accessed or modified from outside the class or by child subclasses.

        // Key Concepts:
            // -Public Fields: Declared without a keyword or prefix. They automatically attach as properties to every created instance.
            // -Private Fields (# Prefix): Language-enforced private properties. Attempting to read or write a #field outside its class results in a compile-time/runtime SyntaxError.
            // -Encapsulation Mechanism: Unlike underscore conventions (_field), # provides true encapsulation at the V8 engine level.
            // -Initialization Order: Instance fields (both public and private) are evaluated and initialized right before the constructor() body runs (or immediately after super() in derived classes).

        // Example:
            class Wallet {
                currency = "USD";
                #balance = 0;
                
                constructor(initialAmount) {
                    this.#balance = initialAmount;
                }
  
                showBalance() {
                    console.log(`Current Balance: ${this.#balance} ${this.currency}`);
                }
  
                #validateTransaction(amount) {
                    return amount > 0 && amount <= this.#balance;
                }
  
                withdraw(amount) {
                    if (this.#validateTransaction(amount)) {
                        this.#balance -= amount;
                        console.log(`Withdrew: $${amount}`);
                    } else {
                        console.log("Transaction failed: Invalid or insufficient funds.");
                    }
                }
            }

            const myWallet = new Wallet(500);
            console.log(myWallet.currency); // Output: "USD"
            
            // Public method interacting with private state
            myWallet.withdraw(100);          // Output: Withdrew: $100
            myWallet.showBalance();         // Output: Current Balance: 400 USD

            // Attempting to access private field externally
            // console.log(myWallet.#balance); // Error: Private field '#balance' must be declared in an enclosing class