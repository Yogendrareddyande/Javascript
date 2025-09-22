// hoisting:
// Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope.
// In JavaScript, a variable can be used before it has been declared.
// This is because the variable declaration is hoisted to the top of its scope.
//  Variable Declarations with var
// console.log(a); // undefined
// var a = 5;

// 1. Function Declarations

sayHello(); 

function sayHello() {
  console.log("Hello!");
}

//2.function Expressions
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};
sayHi(); // "Hi!"




// What is Scope?

// Scope means:
// 👉 Where in your code you can access variables and functions.

// 👉 The context in which variables and functions are accessible.
// 👉 The visibility of variables and functions in different parts of your code.

// Types of Scope in JavaScript
// 1. Global Scope
// 2. Local Scope (Function Scope)
// 3. Block Scope (introduced in ES6 with let and const)
// 4. Lexical Scope

// 1. Global Scope
// Variables declared outside of any function or block have global scope.
// They can be accessed from anywhere in the code.
var globalVar = "I am a global variable";

function showGlobalVar() {
  console.log(globalVar); // Accessible here
}
showGlobalVar();

console.log(globalVar); // Accessible here too

// 2. Local Scope (Function Scope)
// Variables declared within a function are in local scope.
// They can only be accessed within that function.
function localScopeExample() {
  var localVar = "I am a local variable";
  console.log(localVar); // Accessible here
}

localScopeExample();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// 3. Block Scope
// Variables declared with let or const within a block (e.g., inside if, for, while) have block scope.
// They can only be accessed within that block.
if (true) {
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar); // Accessible here
}


// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

// 4. Lexical Scope
// Lexical scope means that inner functions have access to variables declared in their outer (enclosing) functions.
function outerFunction() {
  var outerVar = "I am from the outer function";
    function innerFunction() {
    console.log(outerVar); // Accessible here
  }
    innerFunction();
}
outerFunction();
// innerFunction(); // Uncaught ReferenceError: innerFunction is not defined
// console.log(outerVar); // Uncaught ReferenceError: outerVar is not defined
