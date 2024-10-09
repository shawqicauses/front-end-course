console.log("Lecture 16");

let myName = "Shawqi Hatem";
console.log(myName);

myName = "Shawqi H.";
console.log(myName);

const truth = "Free Palestine";
console.log(truth);

// truth = "Not Free Palestine";
// console.log(truth); // TypeError: invalid assignment to const 'truth'

const COLOR_RED = "#F00";
console.log(COLOR_RED);

let myAge;
console.log(myAge);

myAge = 30;
console.log(myAge);

// const someoneAge; // SyntaxError: missing = in const declaration
// console.log(someoneAge);

// const someoneName = 21;
// const someoneName = 25; // SyntaxError: re-declaration of const someoneName

let othersAge = 40;
console.log(othersAge);
othersAge = 42;
console.log(othersAge);

// let othersAge = 45; // SyntaxError: re-declaration of let othersAge

var studentAge = 18;
console.log(studentAge);
studentAge = 19;
console.log(studentAge);

var studentAge = 20;
console.log(studentAge);

if (studentAge > 18) {
  const hisID = "ID";
  let hisStudentNumber = "123456789";
  var hisDegree = "Computer Science";
  console.log(hisID, hisStudentNumber, hisDegree);
}

// console.log(hisID, hisStudentNumber); // ReferenceError: hisID is not defined
console.log(hisDegree);

// in strict mode: ReferenceError: assignment to undeclared variable studentPassport
studentPassport = "Passport"; // -> var studentPassport = "ID";
console.log(studentPassport);

const myFirstName = "1";
const MyFirstName = "2";

console.log(myFirstName, MyFirstName);

// Data Types

// Numbers
const myNumber = 10; // -> in other languages it looks like: Int myNumber = 10;
const hisNumber = 10.5; // -> in other languages it looks like: Float hisNumber = 10.5;
console.log(hisNumber - myNumber);
console.log(hisNumber + myNumber);
console.log(hisNumber * myNumber);
console.log(hisNumber / myNumber);

const myZero = 0;

console.log(myNumber / myZero); // Infinity
console.log(-10 / myZero); // -Infinity
console.log(myName / myNumber); // NaN

// Strings
const herString = "Hello";
const hisString = "World";
const otherString = `I just want to say: ${herString} ${hisString}`;
const theirString = `${herString} to ${hisString}`;
const myFancyString = `My name is ${myName} and I want to say ${truth}. I am ${
  2024 - 1998
} years old.`;

console.log(otherString);
console.log(theirString);
console.log(myFancyString);

// Booleans
const myBoolean = true;
const hisBoolean = false;

console.log(myBoolean, hisBoolean);

myAge = 18;

const isLegallyOldEnough = myAge >= 18;
const isInSchool = myAge < 18;
const isInFirstYearOfUniversity = myAge === 19;

console.log(isLegallyOldEnough);
console.log(isInSchool);
console.log(isInFirstYearOfUniversity);

// Null/Undefined

let userName = null;
console.log(userName);

// user entered his name
userName = "Someone's Name";
console.log(userName);

// Objects/Arrays
const myObject = { name: "Shawqi Hatem", age: 30 };
const myArray = ["Shawqi Hatem", 30, 1998];

// `typeof` operator
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof myBoolean);
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// Interactions
const myAlert = alert(`Hi ${myName}!`);
console.log("Alert:", myAlert);

const userAge = prompt("How old are you?", 18);
console.log(userAge, typeof userAge);
console.log(Number(userAge), typeof Number(userAge));

const userAgeNumber = Number(userAge);
const isUserInSchool = userAgeNumber <= 18;
console.log("Is user in school?", isUserInSchool);

console.log(
  "Back to string again:",
  String(userAgeNumber),
  typeof String(userAgeNumber)
);

const userIsStudent = confirm("Are you a student?");
console.log(userIsStudent);
