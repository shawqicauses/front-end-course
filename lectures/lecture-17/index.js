/*
Type Conversions - Basic Operators and Maths - Comparisons

0. Type Conversions
- most of the time, operators and functions automatically convert the data types of their operands.
- for example `alert` automatically converts the data type of its argument to a string. Mathematical operations also convert the data types of their operands to numbers.
- there are also cases when we need to explicitly convert the data type of a value.

0.1. String Conversion
- string conversion happens when we need the string of a value.
- we can call the `String` function to convert a value to a string.

0.2. Numeric Conversion
- numeric conversion in mathematical functions and expressions happens automatically.
- for example `"6" / "2"` will be `3`, and `"6" * "2"` will be `12`.
- we can call the `Number` function to convert a value to a number. explicit conversion is usually required when we read a value from a string-based source (such as a user input) but expect a number to be entered.
- if the string is not a valid number, the result of such a conversion is NaN.

0.2.1. Numeric Conversion Rules
- undefined becomes NaN.
- null becomes 0.
- true and false become 1 and 0.
- strings?

0.3 Boolean Conversion
- boolean conversion happens in logical operations (will be covered in the upcoming lectures) but we can also perform it explicitly with using the `Boolean` function.
- values that are intuitively "empty", like 0, empty string, null, undefined, and NaN, become false. Other values become true.
- "0", " "?

1. Basic Operators and Maths
- addition, multiplication, subtraction, division, and so on.

1.1. Unary, Binary, and Operand Terminologies
- unary operators: operators that only have one operand.
- binary operators: operators that have two operands.
- operand: the value that an operator operates on.

1.2. Math
- the following math operations are supported in JavaScript:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Remainder (%)
6. Exponentiation (**)

- the reminder (%) operator returns the remainder of the division of its operands.
- the exponentiation (**) operator returns the result of raising its first operand to the power of the second operand.

1.3 String Concatenation with Binary +
- usually the plus operator (+) sums numbers. But, if the binary operator is applied to strings, it merges (concatenates) them.
- if any of the operands is not a string, it will be converted to a string.
- it does not matter whether the first operand is a string or the second one.
- 2 + 2 + "1"? "1" + 2 + 2?
- the binary plus operator is the only operator that supports strings in such a way, other arithmetic operators work only with numbers and always convert their operands to numbers.

1.3 Numeric Conversion with Unary +
- the plus operator (+) exists in tow forms: the binary form that we used above and the unary form.
- the unary plus operator (+) converts its operand if it is not a number to a number.
- it does the same thing as Number function, but is shorter.
- unary pluses are applied first, they convert strings to numbers, and then the binary plus operator (or any other arithmetic operator) is applied.
- but why?

1.4 Operator Precedence
- if an expression has more than one operator, the execution order is defined by their precedence. or, in other words, the default priority order of operators.
- parentheses override any precedence.
- there are many operators in JavaScript, every operator has a corresponding precedence number. The one with the highest precedence is executed first.

1.5 Assignment (=) Returns a Value
- the fact of (=) being an operator, not a magical language construct has an interesting implication.
- all operators in JavaScript return a value. That is obvious for + and -, but also true for =.
- the assignment operator (=) returns the value assigned to the variable.

1.6 Chaining Assignments
- another interesting feature is the ability to chain assignments.
- chained assignments are executed from right to left.

1.7 Modify-in-Place Operators
- we often need to apply an operator to a variable and store the new result in that same variable.
- we can do that with the modify-in-place operators.
- modify-in-place operators exist for all arithmetic operators.
- precedence?

1.8 Increment/Decrement Operators
- increasing and decreasing a number by one is among the most common numerical operations. So, there are special operators for it.
- increment operator (++) increases the value of a variable by one.
- decrement operator (--) decreases the value of a variable by one.
- 5++?
- the increment/decrement operators can be applied either before or after a variable. When the operator is applied after, it is in "postfix form", and when it is applied before, it is in "prefix form".
- is there any difference between the two? yes, all operators return values, there is no exception. prefix form returns the value before the operation, postfix form returns the value after the operation.
*/

// interactions in JavaScript automatically convert the data types of their arguments to a string.
console.log("Lecture 17");

let num = 8;
console.log(num, typeof num);
// alert(8);

const userNumber = "20";
console.log(typeof userNumber);

// string conversion
num = String(num);
console.log(num, typeof num);
console.log(String(true), typeof String(true)); // "true"
console.log(String(null), typeof String(null)); // "null"
console.log(String(undefined), typeof String(undefined)); // "undefined"

// numeric conversion
// mathematical operators automatically convert the data type of their operands to numbers.
console.log("6" / 2);
console.log(6 * "2");
console.log("6" - "2");

console.log("6" + "2", typeof ("6" + "2"));

const userNumberConverted = Number(userNumber);
console.log(userNumberConverted, typeof userNumberConverted);

console.log("------ Numeric Conversion Rules --------");
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("8"));
console.log(Number("  20  ")); // 20
console.log(Number("1998 - Shawqi")); // NaN
console.log(Number("")); // 0

// boolean conversion
console.log("------ Boolean Conversion --------");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// if there is anything in the string, it will be converted to true.
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(-0.5));
console.log(Boolean(1));
console.log(Boolean("Shawqi"));

// basic operators and maths
console.log("------ Basic Operators and Maths --------");

console.log(8 % "3"); // 2
console.log("2" ** 3); // 8
console.log(4 ** (1 / 2)); // 2

// string concatenation with binary +
console.log("------ String Concatenation with Binary + ------");

console.log("6" + 8, typeof ("6" + 8));
console.log("6" + "8", typeof ("6" + "8"));
console.log(6 + "8", typeof (6 + "8"));
console.log(6 + 8, typeof (6 + 8));

console.log(2 + 2 * "Shawqi");
console.log((2 + 2) * "Shawqi");
console.log("2" + 2 * "Shawqi");
console.log("1" + 2 + 2);

// numeric conversion with unary +
console.log("------ Numeric Conversion with Unary + ------");
console.log(+"6", typeof +"6");

const firstNumber = "6";
const secondNumber = "2";

console.log(firstNumber + secondNumber);
console.log(+firstNumber + +secondNumber);

// operator precedence
console.log("------ Operator Precedence --------");
console.log((2 + 5) * 3 ** 2);

// assignment (=) returns a value
console.log("------ Assignment (=) Returns a Value --------");
let x = 20;
let y = 10;
let z = 20 + (y = x + 10);
console.log(z, y);

// chaining assignments
console.log("------ Chaining Assignments --------");
x = y = c = 10 * (2 + x);
console.log(x, y, c);

// modify-in-place operators
console.log("------ Modify-in-Place Operators --------");
x += 80; // x = x + 80
console.log(x);

x -= 20; // x = x - 20
console.log(x);

// increment/decrement operators
console.log("------ Increment/Decrement Operators --------");
console.log(++x);
console.log(--x);

// console.log(++5); // SyntaxError: invalid increment/decrement operand

console.log(x++);
console.log(x);

let a = 1,
  b = 2,
  d = 3;

const f = (a = --b) * (d - (b + 1)) + a;
console.log(f);

// bitwise operators/comma operator (fun assignment search for it)
