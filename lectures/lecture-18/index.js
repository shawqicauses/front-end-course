/*
Comparisons, Conditional Branching, and Logical Operators
- greater/less than (>, <)
- greater/less than or equal to (>=, <=)
- equal to (==) (===)
- not equal to (!=) (!==)

0. Boolean is The Result
- all comparisons return a boolean value.
- true - means "yes", "correct", or "the truth".
- false - means "no", "wrong", or "not the truth".
- a comparison result can be assigned to a variable.

1. String Comparison
- to see wether a string is greater than another, JavaScript uses the so-called "dictionary" or "lexicographic" ordering (fun assignment search for it).
- in other words, strings are compared letter by letter.
- string comparison algorithm:
1. compare the first character of both strings.
2. if the first character from the first string is greater (or less), than the other string's, then the first string is greater (or less) than the second. We are done.
3. otherwise, if both strings' first characters are the same, compare the second characters the same way.
4. if both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

2. Comparison of Different Data Types
- when comparing values of different data types, JavaScript converts the values to numbers.

3. Strict Equality
- a non-strict equality (==) has a problem, it can not differentiate between `0` from `false`.
- this happens because operands of different types are converted to numbers by the non-strict equality operator (==). An empty string, just like `false`, becomes a zero.
- strict equality (===) solves this problem. It checks the equality without type conversion.
- in other words if `a` and `b` are of different types, then a === b immediately returns false without an attempt to convert them.

4. Comparison w/ Null and Undefined
- for a strict check (===): there values are different, because each of them is a different type.
- for a non-strict check (==): there is a special rules, these two are a "sweet couple", they equal each other in the sense of ==.
- for maths and other comparisons < > <= >= null and undefined are converted to numbers: null becomes 0, undefined becomes NaN.

5. Strange Result: null vs. 0
- equality check (==) and comparisons (<, <=, >, >=) work differently. Comparisons convert null to a number, treating it as 0. Equality checks (==) for undefined and null is defined such that, without any conversions, they equal each other and do not equal anything else.

6. An Incomparable Undefined
- the value of undefined should not be compared to other values.

7. Conditional Branching
- sometimes we need to preform different actions based on different conditions. To do that, we use the `if` statement and the conditional operator (?:).

8. The `if` Statement
- the `if` statement is used to execute a block of code if a condition is true.

9. Boolean Conversion - Falsy and Truthy Values
- let us recall the conversion rules from the type conversion lecture.
- falsy values: 0, "", null, undefined, NaN, all become false.
- truthy values: everything else becomes true.

10. The `else` Statement
- the `else` statement is used to execute a block of code if the condition of the `if` statement is false.

11. The `else if` Statement
- the `else if` statement is used to test several variants of a condition.

12. Conditional/Question Mark/Ternary Operator (?:)
- sometimes we need to assign a variable depending on a condition.
- how many operands does it have?

13. Multiple ?: Operators

LECTURE 19

14. Logical Operators
- there are four logical operators in JavaScript: AND, OR, NOT, and Nullish Coalescing.
- although they are called logical, they can be applied to values of any type, not only booleans.

15. OR Operator (||)
- in classical programming, the logical OR operator is meant to manipulate boolean values only, if any of its operands/arguments are true, then the result is true.
- in JavaScript, it is a little bit trickier and more powerful.
- OR evaluates operands from left to right.
- it converts each operand to a boolean and finds the first truthy value in its operands and returns it.
- if all operands are falsy, then it returns the last operand.
- a value is returned in its original form, without conversion.

15. Short Circuit Evaluation
- it means that OR operator processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the rest of the operands.

16. AND Operator (&&)
- in classical programming, the logical AND operator is meant to manipulate boolean values only, if all of its operands/arguments are true, then the result is true.
- AND evaluates operands from left to right.
- it converts each operand to a boolean and finds the first falsy value in its operands and returns it.
- if all operands are truthy, then it returns the last operand.
- a value is returned in its original form, without conversion.

17. Precedence Of AND Is Higher Than OR

18. Do Not Replace `if` with `&&` and `||`

19. NOT Operator (!)
- the boolean NOT operator is represented with the exclamation mark (!).
- it converts its operand to a boolean and returns the inverse value.
- a double NOT (!!) converts its operand to a boolean.
- the precedence of NOT is higher than that of AND and OR.

20. Nullish Coalescing Operator (??)
- in short, the value is defined if it is not `null` or `undefined`.
- it returns the first operand that is not `null` or `undefined`.
- the common use of this operator is to provide a default value for a variable.
- in a sequence of ?? operators, the first operand that is not `null` or `undefined` is returned. Otherwise, the last operand is returned.

21. Nullish Coalescing (??) vs. Or (||)
*/

console.log("------ Boolean is The Result --------");
console.log(2 > 1);
console.log(2 == 2);
console.log(2 != 1);
console.log(2 < 1);
console.log(typeof (2 > 3));
console.log(1 > "Shawqi");

console.log("------ String Comparison --------");
console.log("Z" > "A");
console.log("Green" > "And");
console.log("Green" < "Grape");
console.log("Letter" == "Letter");
console.log("Letter" < "Letters");

// ABC...XYZ - abc...xyz
// fun assignment search for `Unicode`
console.log("A" > "a");

console.log("------ Comparison of Different Data Types --------");
console.log(1 == true); // 1 == 1
console.log(1 > false); // 1 > 0
console.log(0 == false); // 0 == 0
console.log(0 == ""); // 0 == ""

console.log(0 == null); // false
console.log(0 == undefined); // false

console.log(10 > "20");

console.log(Number("010"));
console.log("010" > 5);

const firstNumber = 0;
console.log(Boolean(firstNumber));
const secondNumber = "0";
console.log(Boolean(secondNumber));

console.log(firstNumber == secondNumber);

console.log("------ Strict Equality --------");
console.log((firstNumber == Boolean(firstNumber)) == ""); // 0 == 0 == 0
console.log(false == "false");
console.log(false == "  0  ");
console.log(0 === "0");
console.log(false === "false");
console.log(firstNumber === Boolean(firstNumber));

console.log("------ The `if`/`else`/`else if` Statement --------");

if (0 < 1) console.log("0 is less than 1");

const year = 2022;
if (year > 2022) console.log("It has been 2 years since 2022");

const userAge = prompt("How old are you?", 18);

if (Number(userAge) === 18) console.log("You are 18 years old");

if (userAge > 18) {
  // in ( ) we must use an expression
  console.log("You are older than 18");
  console.log("You are " + userAge + " years old");
}

let x = 10;

if ((x = 12) > 10) {
  console.log("x is greater than 10");
}

if ("") console.log("empty string is here!");

const isProPalestine = true;

if (isProPalestine) {
  console.log("I am a pro-Palestine person!");
} else {
  console.log("I am a !@#$%");
}

isProPalestine
  ? console.log("I am a pro-Palestine person! - from ternary operator")
  : console.log("I am a !@#$% - from ternary operator");

const yearsOfExperience = prompt(
  "How many years of experience do you have?",
  5
);

if (yearsOfExperience >= 6) {
  console.log("You are a senior developer!");
} else if (yearsOfExperience >= 3) {
  console.log("You are an intermediate developer!");
} else {
  console.log("You are a junior developer!");
}

yearsOfExperience >= 6
  ? console.log("You are a senior developer! - Ternary")
  : yearsOfExperience >= 3
  ? console.log("You are an intermediate developer! - Ternary")
  : console.log("You are a junior developer! - Ternary");

const developerLevel =
  yearsOfExperience >= 6
    ? "You are a senior developer! - Ternary"
    : yearsOfExperience >= 3
    ? "You are an intermediate developer! - Ternary"
    : "You are a junior developer! - Ternary";

console.log(developerLevel);
