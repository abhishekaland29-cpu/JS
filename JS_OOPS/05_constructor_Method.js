// constructor() Method:
        //  The constructor() method is a special lifecycle method within a JavaScript class responsible for creating and initializing an object instance. It executes automatically whenever a new class instance is instantiated using the new keyword.

        // Key Concepts:
            //   -Singular Limitation: A class can contain at most one constructor() method. Defining more than one results in a SyntaxError.
            //   -Automatic Creation: If no explicit constructor() is defined in a class, JavaScript supplies a default empty constructor (constructor() {}).
            //   -State Initialization: Used primarily to accept parameters and bind instance properties onto this.
            //   -Subclass Requirement: In child classes that extend a parent class, the constructor() must call super() before accessing or referencing this.

        // Example:
              class Product {
                constructor(name, price) {
                    this.name = name;
                    this.price = price;
                    this.createdAt = new Date();
                }
                
                getDetails() {
                    console.log(`${this.name} costs $${this.price}`);
                }
            }
            
            const laptop = new Product("Laptop", 1200);
            laptop.getDetails(); // Output: Laptop costs $1200