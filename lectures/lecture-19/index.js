/*
NEXT LECTURE (20)

Loops: While and For, Switch Statement
- we often need to repeat actions. For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.
- Loops are a way to repeat the same code multiple times.

0. The `while` Loop
- while the condition is true, the code inside the loop is executed.
- a single execution of the loop is called a "loop iteration".
- any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

1. The `do ... while` Loop
- the condition is evaluated after the loop is executed.
- this form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy.

2. The `for` Loop
- the `for` loop is more complex, but it is the most commonly used loop.
- for (begin; condition; step (increment/decrement or anything you want)) { body }
- begin: executes once upon entering the loop.
- condition: checked before every loop iteration.
- body: runs again and again while the condition is truthy.
- step: executes after the body on each loop iteration.

3. Skipping Parts Of `for` Loop/Breaking The Loop/Continuing The Loop
- normally, a loop exits when its condition becomes falsy, but we can exit at any time using the special `break` statement.
- we can also exit the current iteration of the loop using the `continue` statement.

4. Switch Statement
- A `switch` statement can replace multiple `if` statements.
- if there is no `break` then the execution continues with the next `case` without any checks.
- expressions can be a `switch`/`case` argument.
- `case` can be grouped together.
- `switch` uses `===` operator for comparisons.
*/

/*
- OR Operator (||) Truth Table
A    B    Result
T    T    T
T    F    T
F    T    T
F    F    F

- AND Operator (&&) Truth Table
A    B    Result
T    T    T
T    F    F
F    T    F
F    F    F

- NOT Operator (!) Truth Table
A    Result
T    F
F    T
*/

console.log("------ OR Operator (||) ------");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("" || false);
console.log(0 || false);
console.log(NaN || false);
console.log(null || false);
console.log(undefined || false);

console.log("" || 0 || true || false);
console.log("Shawqi" || false);

console.log(0 || "" || 100 || false || null);
console.log("North Gaza - Jabalia" || 100 || false || true || null);
console.log(false || undefined || "" || 0 || null);

const firstName = null;
const secondName = "Maslama";
const userName = firstName || secondName || "Anonymous";

if (userName) {
  console.log(`Free Palestine, ${userName}`);
} else {
  console.log("Also Free Palestine");
}

console.log("------ AND Operator (&&) ------");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(0 && "" && 100 && false && null);
console.log("North Gaza - Jabalia" && 100 && false && true && null);
console.log(true && NaN && undefined && "" && 0 && null);
console.log(true && 100 && "0" && "Gaza Strip");

const number = 19;

if (number >= 18 && number <= 23) {
  console.log("You are in a university!");
} else {
  console.log("I do not know!");
}

console.log("------ NOT Operator (!) ------");
console.log(!true);
console.log(!false);

console.log(!0);
console.log(!"");
console.log(!NaN);

console.log(!100);

console.log(Boolean(null));
console.log(!null);
console.log(!!null);

console.log(!!undefined);

console.log(+"0");
console.log(Number("0"));

console.log(null || (2 && 3) || 4);

console.log("------ Nullish Coalescing Operator (??) ------");

const height = 0;
let settingsEnabled = false;

const solution = height ?? "There is no defined height";
const message = settingsEnabled ?? "There is no defined settings";

settingsEnabled = settingsEnabled ?? true;
console.log(settingsEnabled);

console.log(solution);
console.log(message);

console.log(null ?? "" ?? undefined ?? true);
console.log(undefined ?? false ?? "" ?? null);

console.log(null ?? undefined ?? undefined ?? null);

const userRate = prompt("How good is Israel? - out of 10");
const userMessage = +userRate ?? 1;
console.log(`You rated Israel ${userMessage}/10.`);
