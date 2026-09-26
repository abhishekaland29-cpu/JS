// Getters & Setters (get / set):
// Getters and Setters are special accessor methods that bind an object property to a function. When the property is accessed, the getter runs; when a value is assigned to the property, the setter runs. They allow properties to be accessed like standard fields while executing code under the hood.

// Key Concepts:
// get Keyword: Defines an accessor method that takes no arguments and returns a value when the property is read.
// set Keyword: Defines an accessor method that takes exactly one argument and executes when a value is assigned to the property.
// Encapsulated Property Naming: To avoid infinite recursion, internal backing properties are typically named with an underscore prefix (e.g., _temperature) or declared as private fields (#temperature).
// Computed Properties & Validation: Enables real-time data validation, access logs, or computed properties derived dynamically from other fields.

// Example:
class Temperature {
    #celsius = 0; // Private backing field

    constructor(celsius) {
        this.celsius = celsius; // Triggers the setter for validation
    }

    // Getter for Celsius
    get celsius() {
        return this.#celsius;
    }

    // Setter for Celsius (Includes validation logic)
    set celsius(value) {
        if (typeof value !== "number") {
            throw new TypeError("Temperature must be a valid number.");
        }
        if (value < -273.15) {
            console.log("Temperature below absolute zero is invalid.");
            return;
        }
        this.#celsius = value;
    }

    // Getter for Fahrenheit (Computed property)
    get fahrenheit() {
        return (this.#celsius * 9) / 5 + 32;
    }
}

const temp = new Temperature(25);

// 1. Reading properties via getters (No function call parentheses needed)
console.log(temp.celsius);    // Output: 25
console.log(temp.fahrenheit); // Output: 77 (Computed on the fly)

// 2. Writing values via setter
temp.celsius = 30;
console.log(temp.fahrenheit); // Output: 86

// 3. Validation safeguard in action
temp.celsius = -500;          // Output: Temperature below absolute zero is invalid.