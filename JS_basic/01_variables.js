// VARIABLES : Variable are container for Data
// example :
 let fullname = "Abhishek Aland";
 let age = 20;
 let CGP = 8.7;
 let a = null;
 let x = undefined;

 console.log(CGP);
 console.log(a);
 console.log(x);

//  Output = 8.7
             null
             undefined

// Defining a variable in JS:

// USING VAR :
//           - Variable can be redeclared and updated.
//           - It is global scope variable.
//           - It was mostly used befor 2015.
var city = "Pune";
var city = "Mumbai"; // Valid with var

// USING LET :
//           - Variable cannot be redeclared but can be updated.CGP
//           - A block scope variable.
let score = 100;
score = 105; // Valid update
// let score = 200; // Error: Identifier 'score' has already been declared 

// USING CONST :
//           - Variable cannot be redeclared or updated
//           - A block scope variable.
const birthYear = 2004;
// birthYear = 2005; // Error: Assignment to constant variable
