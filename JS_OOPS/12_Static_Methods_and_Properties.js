// Static Methods & Properties:
//   Static Methods and Properties are members attached directly to the class definition itself rather than to individual instances of the class. They are accessed directly through the class name and cannot be accessed via class instances.

// Key Concepts:
//  static Keyword: Used to prefix method or property declarations inside a class body.
//  Class-Level Scope: Memory for static members is allocated once on the constructor function/class object itself, not duplicated across instances.
//  No Direct Access to this Instance State: Inside a static method, the this keyword refers to the class definition itself, not an individual instantiated object (new ClassName()).
//  Inheritance: Static members are inherited by subclasses via the prototype chain established between constructor functions.

// Example:
class MathUtility {
    // Static Property: Holds utility constants
    static APP_NAME = "MathUtils";
    static PI = 3.14159;

    // Instance Property
    version = "1.0.0";

    // Static Method: Utility helper function
    static calculateSquare(number) {
        return number * number;
    }

    // Instance Method
    showVersion() {
        console.log(`Version: ${this.version}`);
    }
}

// 1. Accessing Static Members (Called directly on the Class)
console.log(MathUtility.APP_NAME);               // Output: "MathUtils"
console.log(MathUtility.calculateSquare(4));     // Output: 16

// 2. Accessing via Instances
const util = new MathUtility();
util.showVersion();                              // Output: "Version: 1.0.0"

// Static members are undefined on instances!
console.log(util.APP_NAME);                      // Output: undefined
// util.calculateSquare(4);                      // TypeError: util.calculateSquare is not a function