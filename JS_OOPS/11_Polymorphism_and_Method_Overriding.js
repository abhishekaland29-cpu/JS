// Polymorphism & Method Overriding:
        //  Polymorphism (meaning "many forms") is the OOP principle that allows objects of different classes to respond to the same method call, each producing behavior specific to its class type. In JavaScript, polymorphism is achieved primarily through Method Overriding, where a child class provides its own implementation of a method already defined in its parent class.
        
        //  Key Concepts:
            // Interface Uniformity: Consumers can invoke the same method name on different objects without needing to check their exact class types beforehand.
            // Method Overriding: A child class replaces or extends a parent method by defining a method with the exact same name.
            // Dynamic Dispatch: At runtime, JavaScript determines which version of the method to execute by scanning up the prototype chain from the instance object.
            // No Native Method Overloading: Unlike statically typed languages (e.g., Java, C++), JavaScript does not support traditional method overloading (defining multiple methods with the same name but different parameter signatures). Subsequent declarations simply overwrite previous ones.

        // Example:
             // Base Class (Superclass)
             class Shape {
                calculateArea() {
                    return 0; // Default generic implementation
                    }
                }

                // Child Class 1
                class Circle extends Shape {
                    constructor(radius) {
                        super();
                        this.radius = radius;
                    }
                    // Method Overriding
                    calculateArea() {
                        return Math.PI * this.radius ** 2;
                    }
                }

                // Child Class 2
                class Rectangle extends Shape {
                    constructor(width, height) {
                        super();
                        this.width = width;
                        this.height = height;
                    }
  
                    // Method Overriding
                    calculateArea() {
                        return this.width * this.height;
                    }
                }

                // Polymorphic Usage: Uniform interface for processing different shapes
                const shapes = [new Circle(5), new Rectangle(4, 6), new Shape()];

                shapes.forEach((shape) => {
                    // Same method call executes distinct behavior based on the object's class
                    console.log(`Area: ${shape.calculateArea().toFixed(2)}`);
                });

                // Output:
                // Area: 78.54
                // Area: 24.00
                // Area: 0