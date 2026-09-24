// super() Keyword:
        // The super keyword is used inside child classes (subclasses) to access and invoke functions from a parent class (superclass). Used as super(...), it calls the parent class's constructor; used as super.method(), it references methods on the parent class.

        // Key Concepts:
            // -Constructor Invocation: When a child class defines its own constructor(), it must call super() before using the this keyword.
            // -Property Initialization: Calling super() executes the parent class's constructor, properly binding and initializing parent instance properties on the child object.
            // -Method Calls (super.method()): Allows a child class to call or extend a parent method without completely replacing its functionality.
            // -Temporal Enforceability: Accessing this before calling super() results in a ReferenceError.
        
        // Example:
             // Parent Class
             class Employee {
                constructor(name, salary) {
                    this.name = name;
                    this.salary = salary;
                }

                getDetails() {
                    return `${this.name} earns $${this.salary}/year.`;
                }
            }

            // Child Class
            class Manager extends Employee {
                constructor(name, salary, department) {
                    super(name, salary);
                    this.department = department;
                }

                getDetails() {
                    return `${super.getDetails()} Manages the ${this.department} department.`;
                }
            }

            const manager = new Manager("Alex", 95000, "Engineering");

            console.log(manager.getDetails()); 
            // Output: Alex earns $95000/year. Manages the Engineering department.