/*
Lecture 21: Functions
- functions are the main building blocks of the program. They allow the code to be used many times without repetition.

0. Function Declaration
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
- a separate function us not only easier to test and debug, its very existence is a great comment.

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
4. secondFn: a function that will do an arithmetic operation with the two numbers.
*/
