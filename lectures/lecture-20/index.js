console.log("------ While Loop ------");

/*
Infinity Loop

let start = 1;
while (start <= 10) {
  console.log(start);
}
*/

let start = 1;
while (start <= 10) {
  if (start === 8) break;
  console.log(`start variable is now: ${start}`);
  start++;
}

console.log(`start variable after loop execution: ${start}`);

let i = 8;
while (i) {
  console.log(i);
  i--;
}

console.log("------ Do ... While Loop ------");

let number;

do {
  number = +prompt("Enter a number less than 8: ");
} while (number > 8);

console.log(`User number was: ${number}`);

console.log("------ For Loop ------");

let forStart;
for (forStart = 1; forStart < 10; forStart++) {
  console.log(`forStart variable is now: ${forStart}`);
}

console.log(forStart); // 10

for (forStart = 8; forStart >= 0; forStart--) {
  if (forStart % 2 === 0) continue;
  console.log(`forStart variable is now: ${forStart}`);
  if (forStart === 3) break;
}

console.log("------ Skipping Parts ------");

i = 8;

for (; i; ) {
  console.log(`${i} from for loop`);
  i--;
}

console.log("------ Nested Loop ------");
// The Multiplication Table Using Nested Loop
// 1 2 3 4 5 6 7 8 9 10
let numberSingle;
let numbersTable;

for (numberSingle = 1; numberSingle <= 10; numberSingle++) {
  for (numbersTable = 1; numbersTable <= 10; numbersTable++) {
    console.log(
      `${numberSingle} x ${numbersTable} = ${numberSingle * numbersTable}`
    );
  }
}

console.log("------ Switch Statement ------");

const myName = "Ahmed";

if (myName === "Shawqi") {
  console.log("You are Shawqi!");
} else if (myName === "Ahmed" || myName === "Sama") {
  console.log("You are Ahmed!");
  console.log("You are Sama!");
} else {
  console.log("I do not know you!");
}

switch (myName) {
  case "Shawqi":
    console.log("You are Shawqi!");
    break;
  case "Ahmed":
  case "Sama":
    console.log("You are Ahmed!");
    console.log("You are Sama!");
    break;
  default:
    console.log("I do not know you!");
}

const myNumber = "5";
const mySecondNumber = 20;

switch (+myNumber) {
  case mySecondNumber - myNumber: // (mySecondNumber - myNumber) === +myNumber -> (20 - "5") === 10 -> 15 === 10 -> false
    console.log("Number is 10");
    break;
  case mySecondNumber > +myNumber: // (mySecondNumber > +myNumber) === +myNumber -> (20 > 5) === 5 -> true === 5 -> false
    console.log("myNumber is less then mySecondNumber");
    break;
  default:
    console.log("Number is not 10 or 20");
}

// Tasks
// 1. Last Loop Value
console.log("------ First Task ------");
let iFirst = 3;

while (iFirst) {
  console.log(iFirst--);
}

console.log(`iFirst value after loop execution: ${iFirst}`);

// 2. Which Values Does The While Loop Show
console.log("------ Second Task ------");
let iSecond = 0;
let iThird = 0;
let iFourth = 0;
let iFifth = 0;

while (++iSecond < 5) console.log(iSecond);
while (iThird++ < 5) console.log(iThird);

for (iFourth = 2; iFourth <= 5; iFourth++) console.log(iFourth);
for (iFifth = 2; iFifth <= 5; ++iFifth) console.log(iFifth);

// 3. Output Even Numbers using `if` and `while` From 0 to 10
console.log("------ Third Task ------");
let iEighth = 0;

while (iEighth <= 10) {
  if (iEighth % 2 === 0) console.log(iEighth);

  iEighth++;
}

for (iEighth = 0; iEighth <= 10; iEighth++) {
  if (iEighth % 2 === 0) console.log(iEighth);
}

// 4. Replace `for` with `while`
console.log("------ Fourth Task ------");
let iSixth = 0;
for (iSixth = 0; iSixth < 3; iSixth++) {
  console.log(iSixth);
}

iSixth = 0;
while (iSixth < 3) {
  console.log(iSixth++);
}

// 5. Repeat Until User Input is `Free Palestine` or `Fu*k Israel`
console.log("------ Fifth Task ------");

let userInput = prompt("Say The Truth: ");

while (userInput !== "Free Palestine" && userInput !== "Fu*k Israel") {
  console.log("You are fu*king wrong!");
  userInput = prompt("Say The Truth: ");
}

let userInputSecond;

do {
  userInputSecond = prompt("Say The Truth: ");
} while (
  userInputSecond !== "Free Palestine" &&
  userInputSecond !== "Fu*k Israel"
);

// 6. Output Prime Numbers From 1 to 10 using `for` Loop
console.log("------ Sixth Task ------");

let range = 10;

primeLoop: for (
  let compareNumber = 1;
  compareNumber <= range;
  compareNumber++
) {
  for (let rangeNumber = 2; rangeNumber < compareNumber; rangeNumber++) {
    if (compareNumber % rangeNumber === 0) continue primeLoop;
  }

  console.log(compareNumber); // prime number
}

// 7. Re-write The `if` into `switch`
console.log("------ Seventh Task ------");

let x = +prompt("Write a value for x: ", "");

if (x === 0) {
  console.log(0);
}

if (x === 1) {
  console.log(1);
}

if (x === 2 || x === 3) {
  console.log(2, 3);
}

switch (x) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log(2, 3);
    break;
}
