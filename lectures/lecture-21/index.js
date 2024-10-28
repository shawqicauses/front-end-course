/*
Lecture 21: Functions
- functions are the main building blocks of the program. They allow the code to be used many times without repetition.

0. Function Declarations
- to create a function, we use a function declaration.
- the `function` keyword goes first, then goes the name of the function, then a list of parameters (optional) between the parentheses (comma-separated), and finally the function body (the code of the function) between curly braces.
- we call/execute the function by using its name followed by parentheses.

1. Local Variables/Outer Variables
- a variables declared inside a function is only visible inside that function.
- a variable declared outside a function is visible inside that function. The function can also modify it.
- if a same-named variable is declared inside the function then it shadows the outer one.

2. Parameters
- we can pass data to functions by using parameters.
- when a value is passed to a function parameter, it is called an argument.
- parameter: is the variable listed inside the parentheses of the function declaration.
- argument: is the value passed to the function when it is called.

3. Default Values For Parameters
- if a function is called, but an argument is not passed, then the corresponding value becomes undefined.
- we can specify a default value for a parameter in the function declaration, by using the `=` operator.
- old JavaScript: we had to use the `||` operator to assign a default value to a parameter. Or check if it is `undefined`.

4. Returning Values From Functions
- a function can return a value back into the calling code as the result.
- the directive `return` can be in any place of the function body. When the execution reaches the `return` statement, the function stops and returns the value to the calling code.
- it is possible to use an empty `return` (without any value), That causes the function to exit immediately and return `undefined`.

5. Best Practices For Functions
- functions are actions, so their name is usually a verb.
- it should be brief and as accurate as possible.
- one function - one action.
- two independent actions deserve two independent functions.
- functions should be short and do exactly one thing.
- if that thing is big, maybe it is worth it to split the function into smaller ones.
- a separate function is not only easier to test and debug, its very existence is a great comment.

Lecture 22

6. Function Expressions
- in JavaScript, a function is not a magical language structure, but a special kind of value.
- the syntax we used before is called a function declaration.
- there is another syntax for creating a function, called a function expression.
- it allows us to create a function in the middle of any expression.
- example: create a function and assign it to a variable.

7. Function is a Value
- no matter how the function is created, it is a value.
- we can copy the function to another variable.

8. Callback Functions
- the idea is we pass a function as an argument to another function and we expect it to be called back later if necessary.

Exercise:
- create a function that takes four parameters:
1. a: number
2. b: number
3. firstFn: a function that will do an arithmetic operation with the two numbers.
4. secondFn: a function that will do another arithmetic operation with the two numbers.

Exercise 02:
- create a function that takes three parameters:
- a: a question
- b: a function to be executed if the user confirmed the question.
- c: a function to be executed if the user denied the question.

9. Function Declarations vs Function Expressions

9.1 Syntax
- function declaration: function name (parameters) { body }
- a function declared as a separate statement, in the main code flow.
- function expression: function (parameters) { body }
- a function created inside an expression or inside another syntax construct.

9.2 Creation
- another subtle difference is when a function is created by the JavaScript engine.
- a function declaration can be called earlier than it is defined.
- that is due to internal algorithms, when JavaScript prepares the whole script, it first looks for global Function Declarations and creates them.
- a function expression is created when the execution reaches it and it is usable only from that moment.

10. Arrow Functions
- there is another very simple and concise syntax for creating functions. That is often better than Function Expressions.
- it is called Arrow Functions.
- the syntax is: parameter => body
- arrow functions can be used in the same places as function expressions.
*/

// global/outer variable
let greeting = "Hi";
let nameToPrint = "John";

// declaring the function
function print() {
  // local/inner variable
  // shadowing the outer variable
  console.log("AsSalam Alaikum, Danya.");

  let nameToPrint = "Ahmed";

  // modifying the outer variable
  greeting = "AsSalam Alaikum";

  console.log(`${greeting}, ${nameToPrint}!`);
}

console.log("Greeting: ", greeting);

// console.log(nameToPrint); // ReferenceError: nameToPrint is not defined

print(); // calling/executing the function

console.log("Greeting: ", greeting);

// input (optional) -> function (action) -> output (optional)

function createGreetingMessage(someone, age = 18) {
  // old JavaScript
  // setting a default value for the parameter (method no. 01)
  // if (someone === undefined) someone = "Haneen";

  // setting a default value for the parameter (method no. 02)
  return `AsSalam Alaikum, ${
    someone || "Anonymous"
  }! You are ${age} years old.`;

  console.log("Done Creating The Message"); // will be ignored because it came after `return`
}

// console.log(someone); // ReferenceError: someone is not defined

createGreetingMessage();
const esraaGreeting = createGreetingMessage("Esraa", 20);
const aboodGreeting = createGreetingMessage("Abood", 25);

console.log(esraaGreeting);
console.log(aboodGreeting);

console.log(console.log("Shawqi"));
console.log(createGreetingMessage("Shawqi", 26));
// createGreetingMessage(true, 10 >= 20);

function confirmIsAuthorized() {
  return confirm("Do you have a permission from your parents/lawyers?");
}

function checkIsLegal(age) {
  // if (age >= 18) return true;
  // return confirmIsAuthorized();

  console.log("------ Task 01 --------");
  // return age >= 18 || confirmIsAuthorized();
  return age >= 18 ? true : confirmIsAuthorized();
}

if (checkIsLegal(20)) console.log("Shawqi is legal");
else console.log("Shawqi is not legal");

// 2 ** 3 -> 2 * 2 * 2 -> 8

function power(base, exponent) {
  if (base % 1 !== 0 || exponent % 1 !== 0) {
    console.log("Please enter an integer.");
    return null;
  }

  let result = base;

  for (let i = 1; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(2, 0.5));
console.log(power(2, 3) === 8);
console.log(power(3, 3));
console.log(power(3, 3) === 27);
