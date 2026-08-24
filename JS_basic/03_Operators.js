// Operators In JS : Used to perform some Operations on Data.
//    eg = + , - , * , / , % .

// 1. ARITHMETIC OPERATORS
// Used to perform basic mathematical calculations.
            let a = 10;
            let b = 3;

            console.log(a + b);  // Addition: 13
            console.log(a - b);  // Subtraction: 7
            console.log(a * b);  // Multiplication: 30
            console.log(a / b);  // Division: 3.3333333333333335
            console.log(a % b);  // Modulus (Remainder): 1
            console.log(a ** b); // Exponentiation (10^3): 1000

// Increment & Decrement:
            let x = 5;
            x++; // Increment (x = x + 1) -> 6
            x--; // Decrement (x = x - 1) -> 5

// 2. ASSIGNMENT OPERATORS
// Used to assign values to variables.
            let num = 20;
            num += 5;  // Equivalent to: num = num + 5  (25)
            num -= 10; // Equivalent to: num = num - 10 (15)
            num *= 2;  // Equivalent to: num = num * 2  (30)
            num /= 3;  // Equivalent to: num = num / 3  (10)
            num %= 4;  // Equivalent to: num = num % 4  (2)

// 3. COMPARISON OPERATORS
// Return a boolean value: true or false.
            let val1 = 5;
            let val2 = "5";

            // Equal to (==) - Loose equality (converts types automatically)
            console.log(val1 == val2);  // Output: true

            // Strict Equal to (===) - Checks BOTH value and data type (RECOMMENDED)
            console.log(val1 === val2); // Output: false (number vs string)

            // Not Equal (!=) vs Strict Not Equal (!==)
            console.log(val1 != val2);  // Output: false
            console.log(val1 !== val2); // Output: true

// Greater/Lesser comparisons
            console.log(10 > 5);   // true
            console.log(10 < 5);   // false
            console.log(10 >= 10); // true
            console.log(5 <= 4);   // false

// 4. LOGICAL OPERATORS
// Used to combine multiple conditions.
            let age = 20;
            let hasID = true;

            // AND (&&): Returns true ONLY if both conditions are true
            console.log(age >= 18 && hasID); // Output: true

            // OR (||): Returns true if AT LEAST ONE condition is true
            let isWeekend = false;
            let isHoliday = true;
            console.log(isWeekend || isHoliday); // Output: true

            // NOT (!): Reverses the boolean logical result
            console.log(!hasID); // Output: false

// 5. TERNARY OPERATOR (Short-hand if/else)
// Syntax: condition ? expressionIfTrue : expressionIfFalse
            let userAge = 20;
            let message = userAge >= 18 ? "Adult" : "Minor";
            
            console.log(message); // Output: "Adult"