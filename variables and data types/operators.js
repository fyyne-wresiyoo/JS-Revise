// operators are the symbols which perform any kind of operation 
// arithmetic operations , comparison operations , logical operations etc
// ARITHMETIC OPERATORS
let x = 10;
let y = 4;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus
console.log(x ** y); // Exponentiation  



// ASSIGNMENT OPERATORS 
let a = 10; // Assignment
a += 5; // a = a + 5  its the same

console.log(a); // 15



//COMPARISON OPERATORS 

let p = 10;
let q = '10';

console.log(p==q);

console.log(p===q);// Strict Equality


//logical operators 
let bool1 = true;
let bool2 = false;                      
console.log(bool1 && bool2); // AND
console.log(bool1 || bool2);    // OR
console.log(!bool1); // NOT
// NOT operator is used to reverse the logical state of its operand. If a condition is true, NOT operator will make it false and vice versa.




//ternary operator
console.log("Ternary Operator Example:");
let age = 18;
let canVote = (age >= 18) ?  "Yes, can vote" : "No, cannot vote";
console.log(canVote); 
/** 
 * let variable = value
 * let anotherVariable = condition ? valueIfTrue : valueIfFalse
 * console.log(variable);
 */




// uninary operators

// post and pre
console.log("Unary Operator Example:");
let count = 5;

console.log(count++); // Post-increment: returns 5, then count becomes 6
console.log(count); // Presents 6
console.log(++count); // Pre-increment: count becomes 7, then returns 7

console.log(count--); // Post-decrement: returns 7, then count becomes 6
console.log(--count); // Pre-decrement: count becomes 5, then returns 5


