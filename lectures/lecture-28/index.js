// Revision

// JavaScript Environments
console.log("JavaScript Environment");

console.log(this);

// ensure that the alert function is available in both environments.
let alert =
  typeof window === "undefined"
    ? function (message) {
        console.log(message);
      }
    : window.alert;

/*
This code must run in both environments.
Just as an example for JavaScript different environments.
*/

alert("This code must run in both environments.");

// Please note that the following code will not run in Node.JS environment.
// JavaScript Variables
const x_1 = 10;
let x_2 = 20;
var x_3 = 30;

console.log(this);

console.log(window.x_1); // undefined
console.log(window.x_2); // undefined
console.log(window.x_3); // 30

// Differences between let, const and var:
// 1. only variables declared with var will be available in the window object.

const condition = true;
if (condition) {
  const y_1 = 100;
  let y_2 = 200;
  var y_3 = 300;
}

// console.log(y_1); // Uncaught ReferenceError: y_1 is not defined
// console.log(y_2); // Uncaught ReferenceError: y_2 is not defined
console.log(y_3); // 300

function executeSomething() {
  const a_1 = 1000;
  let a_2 = 2000;
  var a_3 = 3000;

  console.log(a_1, a_2, a_3);
}

// console.log(a_1);
// console.log(a_2);
// console.log(a_3);

executeSomething();

const b_1 = 10000;
let b_2 = 20000;
var b_3 = 30000;

function executeSomethingElse() {
  // b_2 = "Modified b_2";
  // let b_2 = 200000; // ReferenceError: Cannot access 'b_2' before initialization
  b_3 = "Modified b_3";
  var b_3 = 300000;
  console.log(b_3); // 300000
}

// in strict mode, we can not use undeclared variables.
// b_4 = 40000;
// console.log(b_4);

console.log(b_3);

executeSomethingElse();

console.log(b_3);

// 2. block-scoped: variables declared with let and const will not be available outside the block (if, while, for, etc.).
// function-scoped: variables declared with const, let, and var will not be available outside the function.

// Data Types
/*
1. Primitive Data Types:
- Number
- String
- Boolean
- Null
- Undefined

2. Non-Primitive Data Types:
- Object
*/

function getNotifications(isSignedIn, hasNotifications) {
  if (!isSignedIn) return;

  // Fetch notifications from database...

  return {
    message: hasNotifications ? "You have 10 notifications." : null,
    count: hasNotifications ? 10 : 0,
  };
}

const notifications = getNotifications(true, true);
console.log(notifications);

function initializeSettings(user, options) {
  if (!user) return; // return undefined

  const settings = {
    username: user.username ?? "user-guest",
    theme: options.theme ?? "light",
    language: options.language ?? "en",
    isNotificationsEnabled: options.isNotificationsEnabled ?? true,
  };

  return settings;
}

const user = { username: "shawqicauses" };

const options = {
  theme: "dark",
  language: "ar",
  isNotificationsEnabled: false,
};

const settings = initializeSettings(user, options);
console.log(settings);

// Type Conversions
console.log(Number(""));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(NaN));
console.log(Number("10"));
console.log(Number("10 Shawqi"));

console.log(String(0));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("false"));

console.log("10" + 5);
console.log("10" - 5);

// Comparisons
// > < >= <= convert their operands to numbers before comparing.
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true

// Strange Rule in `==` Operator
console.log(null == 0); // false
console.log(null == undefined); // true

console.log("" == 0);
console.log(false == 0);
console.log(true == 1);

if ("10") {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// Logical Operators
// AND (&&), OR (||), NOT (!), Nullish Coalescing (??)

console.log("" || null || undefined || false || NaN);

// 1. convert the operands to boolean values before applying the operator -> false || false || false || false.
// 2. return the first truthy value or the last value if all are falsy -> false (NaN).
// 3. convert the result to the original type -> NaN.

console.log(true && 10 && 1 && "Shawqi");

// 1. convert the operands to boolean values before applying the operator -> true || true || true || true.
// 2. return the first falsy value or the last value if all are truthy -> true ("Shawqi").
// 3. convert the result to the original type -> "Shawqi" (string).

if (true && 10 && 1 && "Shawqi") {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

const operation_1 = true || console.log("Log from OR operator.") || false;
console.log(operation_1);

const operation_2 = false || console.log("Log from OR operator.") || true;
console.log(operation_2);

function generateUser() {
  console.log("Generating user...");

  return {
    username: "shawqicauses",
    age: 21,
  };
}

let userFromDatabase;

// loading user from database...

const userOR = userFromDatabase || generateUser();
console.log(userOR);

// Loops
// exercises:

// 1. write a function that takes a number and returns the factorial of that number.

function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));

// 2. write a function that takes a user object and returns the sum of all the properties values of the object.

const userCart = {};

function insertProductsToCart(cart, quantity) {
  let i = 1;

  while (i <= quantity) {
    const productName = prompt("Enter product name:");
    const productQuantity = prompt("Enter product quantity:");
    const productPrice = prompt("Enter product price:");

    // cart: {apple: {quantity: 1, price: 10}}
    cart[productName] = {
      quantity: productQuantity,
      price: productPrice,
    };

    i++;
  }
}

// insertProductsToCart(userCart, 3);

const output = {
  apple: { quantity: "3", price: "8" },
  eggs: { quantity: "10", price: "5" },
  orange: { quantity: "4", price: "9" },
};

// console.log(userCart);

function calculateCartPrice(cart) {
  let prices = {};

  for (const key in cart) {
    console.log(cart[key]);

    // price.apple = cart.apple.quantity * cart.apple.price
    prices[`${key}-price`] = cart[key].quantity * cart[key].price;
  }

  let priceTotal = 0;

  for (const key in prices) {
    priceTotal = priceTotal + prices[key];
  }

  return {
    prices,
    priceTotal,
  };
}

console.log(calculateCartPrice(output));

// Functions
function functionDeclaration() {
  greet();
  console.log("Function Declaration");
}

const functionExpression = function () {
  console.log("Function Expression");
};

functionDeclaration();

functionExpression();

function anotherFunction(callback, runCallback) {
  if (runCallback) {
    callback();
  }
}

anotherFunction(() => {
  console.log("Callback Function.");
}, true);

function greet() {
  console.log("AsSalam Alaikum.");
}

// greetExpression();

const greetExpression = function nameIgnored() {
  console.log("AsSalam Alaikum.");
};

const sum = (a, b) => a + b;
