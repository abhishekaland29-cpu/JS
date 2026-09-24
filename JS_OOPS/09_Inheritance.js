// Inheritance (extends):
        // Inheritance is an OOP mechanism that allows a child class (subclass) to inherit properties and methods from a parent class (superclass). In JavaScript, inheritance enables code reuse and establishes a hierarchical relationship between classes, leveraging the prototype chain under the hood.

        // Key Concepts:
            // -extends Keyword: Used in class declarations to create a child class that inherits from a parent class (class Child extends Parent).
            // -Code Reuse: Shared functionality defined once in a parent class is automatically available across all child classes.
            // -Prototype Linkage: Under the hood, using extends connects Child.prototype to Parent.prototype using the prototype chain.
            // -Subclass Specialization: Child classes can inherit all generic behaviors from parent classes while adding their own specialized properties or methods.

        // Example:
             // Parent Class (Superclass)
             class Animal {
                constructor(name) {
                    this.name = name;
                }

                eat() {
                    console.log(`${this.name} is eating.`);
                }
            }

            class Dog extends Animal {
                bark() {
                    console.log(`${this.name} says: Woof!`);
                }
            }

            const myDog = new Dog("Buddy");

            // Inherited method from Animal class
            myDog.eat();  // Output: Buddy is eating.

            // Specialized method from Dog class
            myDog.bark(); // Output: Buddy says: Woof!

// Inheritance Relationship:

// Dog instance (myDog)
//   │
//   ├──> Dog.prototype (Contains bark)
//           │
//           ├──> Animal.prototype (Contains eat)
//                   │
//                   └──> Object.prototype