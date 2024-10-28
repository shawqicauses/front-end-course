console.log("Lecture 22");

/*
Memory Storage:
x: 10
createIslamicGreeting: function (name) {body}
createTheTruth: function (type) {body}
*/

function createIslamicGreeting(name) {
  console.log("Start Creating The Message...");
  return `AsSalam Alaikum, ${name}!`;
}

console.log(createIslamicGreeting);
console.log(typeof createIslamicGreeting); // function
console.log(typeof createIslamicGreeting("Shawqi")); // string

console.log("------ Function Expressions ------");

let createTheTruth = function iDoNotKnow(type) {
  if (type === 1) return "Free Palestine";
  if (type === 2) return "Fu*k Israel";

  return "Free Palestine / Fu*k Israel";
};

// console.log(iDoNotKnow()); // ReferenceError: iDoNotKnow is not defined
console.log(createTheTruth(1));

console.log("------ Function is a Value ------");

// const copyOfCreateIslamicGreeting = createIslamicGreeting("Sama");
// copyOfCreateIslamicGreeting("Sama"); // copyOfCreateIslamicGreeting is not a function

const copyOfCreateIslamicGreeting = createIslamicGreeting;

const greeting = copyOfCreateIslamicGreeting("Sama");

console.log(greeting);

console.log("------ Callback Functions ------");

function myCalculator(
  firstNumber,
  secondNumber,
  firstFunction,
  secondFunction
) {
  console.log(firstFunction(firstNumber, secondNumber));
  console.log(secondFunction(firstNumber, secondNumber));
}

// myCalculator(10, 20, sum, multiply);

myCalculator(
  10,
  20,
  function sum(a, b) {
    return a + b;
  },
  function multiply(a, b) {
    return a * b;
  }
);

// sum(10, 20); // ReferenceError: sum is not defined
// multiple(10, 20); // ReferenceError: multiple is not defined

function askUser(question, yes, no) {
  if (confirm(question)) yes();
  else no();
  console.log("Thanks for your feedback!");
  return;
}

const yes = function () {
  console.log("You still have manners in this world!");
};

const no = function () {
  console.log("You are a f*cking idiot!");
};

askUser("Are you a pro-Palestine?", yes, no);

console.log("------ Function Declarations vs Function Expressions ------");

print(8);

function print(number) {
  console.log(number);
}

print(18);

// anotherPrint(28); // ReferenceError: anotherPrint is not defined

const anotherPrint = function (number) {
  console.log(number);
};

anotherPrint(38);

console.log("------ Arrow Functions ------");

const arrowMultiply = (a, b) => a * b;
console.log(arrowMultiply(10, 20));

const arrowSum = (a, b) => {
  console.log(a, b);
  return a + b;
};

console.log(arrowSum(10, 20));

// Re-write this with arrow functions
const arrowAskUser = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();

  console.log("Thanks for your feedback!");
  console.log("Question: ", question);

  return;
};

arrowAskUser(
  "Are you a pro-Palestine?",
  () => console.log("You still have manners in this world!"),
  () => console.log("You are a f*cking idiot!")
);
