// Single Line Comment

/*
Multi Line Comment
Second Line
*/

console.log("Hello from index.js!");
alert("Second Alert");

// Variables

/*
Memory Storage:
myName = "Shawqi Hatem"
myAge = 30 (programmer declared it without assigning a value)
*/

// Declaration and Assignment = Initialization
let myName = "Shawqi Hatem"; // Variable Initialization
console.log(myName);

let myAge; // 1. Variable Declaration
console.log(myAge); // undefined

myAge = 30; // 2. Variable Assignment
console.log(myAge); // 30

myAge = 31; // 4. Re-assignment
console.log(myAge);

// console.log(myJob); // ReferenceError: myJob is not defined

// Multiple Variables Declaration
let ayaName = "Aya",
  ayaAge = 20,
  ayaJob;

console.log(ayaName, ayaAge, ayaJob);

// let myAge; // SyntaxError: Re-Declaration

// let vs. var
// 1. Re-Declaration
var alaaName = "Alaa";
console.log(alaaName);

var alaaName = "Alaa Mohammed";
console.log(alaaName); // Alaa Mohammed

// 2. Scope
if (true) {
  let somethingTrue = "Something True";
  console.log(somethingTrue);
  var somethingFalse = "Something False";
}

// console.log(somethingTrue); // ReferenceError: somethingTrue is not defined
console.log(somethingFalse);

// in "use strict" mode, a ReferenceError will occurred
someNumber = 10; // -> var someNumber = "10"
console.log(someNumber);

/*
Variables Naming Conventions:
- variables should be named in camel case.
- Pascal Case / Kebab Case / Snake Case (fun assignment search for it)
- variables only contains letters, numbers, and _ or $
- variables should not start with a number
- always use meaningful names
*/

let shawqiFavColor = "black"; // camel case
