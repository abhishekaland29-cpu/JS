// Data type in JS :
//              - Primitive
//              - Non-Primitive

// PRIMITIVE :

// 1. NUMBER :
          {let age = 21;
          let price = 500;
          
          console.log(age);   // Output : 21
          console.log(typeof age);     // Output : "number"
}
// 2. String :
          {let name = "Abhi";
          
          console.log(name);   // Output : Abhi
          console.log(typeof name);     // Output : "string"}
}
// 3. Boolean :
          isfollow = true;
          
          console.log(isfollow);   // Output : true
          console.log(typeof isfollow);     // Output : "boolean"

// 4. Undefined :
          {let x;
          
          console.log(x);   // Output : Undefined
          console.log(typeof x);     // Output : "undefined"
}
// 5. Null :
          let age = null;
          
          console.log(age);   // Output : null
          console.log(typeof age);     // Output : "object"

// 6. Big INT :
          {let x = BigInt("215627389");
          
          console.log(x);   // Output : 215627389
          console.log(typeof x);     // Output : "bigint"
}
// 7. Symbol :
          let x = Symbol("Hello");
          
          console.log(x);   // Output : Symbol(Hello)
          console.log(typeof x);     // Output : "symbol"

// NON-PRIMITIVE :

//  Objects : Mutable collection of key-value pairs or list of values.

// Declaring Object:
          const objname = {
            key : "Value"
          }

// example :
          const Student = {
            name : "Abhishek",
            age : 21 ,
            CGP : 8.7 ,
            isPassed : true 
          };

          console.log(Student.name);   // output = "Abhishek"
          console.log(Student.age);    // output = 21

// Array : Ordered List of values (A special type of obj)

// 1.Declaring an Array :
          let fruits = ["Apple", "Banana", "Cherry"];
          
          console.log(fruits[0]); // Output: Apple (first item)
          console.log(fruits[fruits.length - 1]); // Output: Cherry (last item)

          fruits[1] = "Mango"; // Replaces "Banana" with "Mango"
          console.log(fruits); // Output: ["Apple", "Mango", "Cherry"]

// 2. ADDING / REMOVING ELEMENTS :
          // push(): Adds to the END
          fruits.push("Orange");
          console.log(fruits); // Output: ["Apple", "Mango", "Cherry", "Orange"]

          // pop(): Removes from the END
          let removedLast = fruits.pop(); 
          console.log(removedLast); // Output: Orange

          // unshift(): Adds to the START
          fruits.unshift("Grapes");
          console.log(fruits); // Output: ["Grapes", "Apple", "Mango", "Cherry"]

          // shift(): Removes from the START
          let removedFirst = fruits.shift();
          console.log(removedFirst); // Output: Grapes

// 3. SEARCHING IN ARRAYS :
          let numbers = [10, 20, 30, 40, 50];

          // indexOf(): Returns index of element (-1 if not found)
          console.log(numbers.indexOf(30)); // Output: 2

          // includes(): Checks if element exists (returns true/false)
          console.log(numbers.includes(20)); // Output: true
          console.log(numbers.includes(99)); // Output: false

// 4. CUTTING & SPLICING :
          let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
          
          // slice(start, end): Extracts a portion WITHOUT modifying original array
          let subColors = colors.slice(1, 4); // Index 1 up to (not including) 4
          console.log(subColors); // Output: ["Green", "Blue", "Yellow"]
          
          // splice(start, deleteCount, item1, ...): MODIFIES original array (add/remove)
          colors.splice(2, 1, "White"); // At index 2, remove 1 item and insert "White"
          console.log(colors); // Output: ["Red", "Green", "White", "Yellow", "Purple"]


// 5. UTILITY OPERATIONS :

          // join(): Converts array into a string
          let words = ["JavaScript", "is", "Fun"];
          let sentence = words.join(" ");
          console.log(sentence); // Output: "JavaScript is Fun"
         
          // concat(): Merges two arrays together
          let arr1 = [1, 2];
          let arr2 = [3, 4];
          let combined = arr1.concat(arr2);
