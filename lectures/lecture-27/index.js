const greet = function () {
  console.log(
    `AsSalam Alaikum. I am ${this.name} and I have been born on ${this.dob}. So, I am ${this.age} years old.`
  );
};

const user = {
  name: "Shawqi",
  age: 21,
  greet,
};

console.log(user);
user.greet();

const ahmed = user;
ahmed.name = "Ahmed";
ahmed.dob = "2002-01-01";
ahmed.age = 22;

console.log(ahmed);

// constructor function
function User(name, dob, age) {
  // this = {}

  this.name = name;
  this.dob = dob;
  this.age = age;

  this.greet = greet;

  // this = {name: name, age: age}
  // return this
  console.log(this);
}

const yasser = new User("Yasser", "1995-01-01", 29);
console.log(yasser);
yasser.greet();

const fouad = new User("Fouad", "1999-01-01", 25);
console.log(fouad);
fouad.greet();

const israa = new User("Israa", "2000-01-01", 24);
console.log(israa);
israa.greet();

// another example
function ErrorLog(code, message) {
  // this = {}
  console.log("Error!");

  this.code = code;
  this.message = message;

  // return this
}

const error = new ErrorLog(404, "Not Found");
const serverError = new ErrorLog(500, "Internal Server Error");

console.log(error);
console.log(error.code);
console.log(error.message);

console.log(serverError);
console.log(serverError.code);
console.log(serverError.message);

// another example
function cart() {
  // this = {}
  console.log("You do not have any items in your cart.");

  // return this
}

const arrowCart = () => {
  console.log("You do not have any items in your arrow cart.");
};

cart();
arrowCart();

console.log(new cart());
// console.log(new arrowCart()); // Uncaught TypeError: arrowCart is not a constructor

const stupid = {
  name: "Stupid",
  f() {
    console.log(this);
    console.log("This is so stupid!");
  },
};

stupid.f();

// in method short-hand: Uncaught TypeError: stupid.f is not a constructor
// in normal method: it is a constructor
// console.log(new stupid.f());

const item = new (function () {
  // this = {}
  this.name = "Item";
  console.log("This is an item function.");
  // return this
})();

console.log(item);
// console.log(new item()); // Uncaught TypeError: item is not a constructor

// constructor mode test
function Customer(name, username, email) {
  if (!new.target) {
    return new Customer(name, username, email);
  }

  this.name = name;
  this.username = username;
  this.email = email;
}

const customer = Customer("Shawqi", "shawqicauses", "shawqicauses@outlook.com");

const customer_2 = Customer(
  "Shawqi 02",
  "shawqicauses_02",
  "shawqicauses_02@outlook.com"
);

console.log(customer);
console.log(customer_2);

// return from constructors
function Device(name, price = 0) {
  // this = {}
  this.name = name || "Un-known Device";
  this.price = price;

  this.tax = this.price * 0.1;
  this.priceIncludingTax = this.price + this.tax;

  this.calculateTax = function (taxRate = 0.1) {
    this.tax = this.price * taxRate;
    return this.tax;
  };

  this.calculatePriceIncludingTax = (taxRate = 0.1) => {
    this.priceIncludingTax = this.price + this.calculateTax(taxRate);
    return this.priceIncludingTax;
  };

  // if you return a primitive value, it will be ignored
  // if you return an object, it will override the default object
  return null;
}

const device = new Device("Samsung Galaxy S24", 1000);
console.log(device);

console.log("-------- Device 01 Tax Calculation --------");

console.log(device.calculateTax(0.2));
console.log(device.calculatePriceIncludingTax(0.2));
console.log(device);

console.log("-------- Device 01 Price Including Tax Calculation --------");

const device_2 = new Device("iPhone 16", 3000);
console.log(device_2);

// Omitting Parentheses
const device_3 = new Device();
console.log(device_3);

// another example

function GPTUser(firstName, lastName, username, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = null;

  this.username = username;
  this.email = email;

  this.subscription = null;

  this.setFullName = function () {
    this.fullName = `${this.firstName} ${this.lastName}`;
  };

  this.setSubscription = function (subscription) {
    this.subscription = subscription;
  };

  this.deleteSubscription = function () {
    this.subscription = null;
  };
}

const gptAhmed = new GPTUser(
  "Ahmed",
  "Habbash",
  "ahmedhabbash",
  "ahmedhabbash@gmail.com"
);

console.log(gptAhmed);
console.log(gptAhmed.fullName);
console.log(gptAhmed.subscription);

gptAhmed.setFullName();
gptAhmed.setSubscription("Pro");

console.log(gptAhmed.fullName);
console.log(gptAhmed.subscription);

gptAhmed.deleteSubscription();
console.log(gptAhmed.subscription);

// Tasks
// 1. fix this so the output is true..

const obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

console.log(new A() === new B());

// 2. create a calculator
function Calculator() {
  this.num_1 = undefined;
  this.num_2 = undefined;

  this.inputs = function (num_1, num_2) {
    this.num_1 = num_1;
    this.num_2 = num_2;
  };

  this.sum = function () {
    return this.num_1 + this.num_2;
  };

  this.subtract = function () {
    return this.num_1 - this.num_2;
  };

  this.multiply = function () {
    return this.num_1 * this.num_2;
  };

  this.divide = function () {
    return this.num_1 / this.num_2;
  };
}

const calculator = new Calculator();

// calculator.inputs(
//   Number(prompt("Num 01?", "1")),
//   Number(prompt("Num 02?", "1"))
// );

// console.log(calculator.sum());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

// 3. create a counter
function Counter(initial = 0) {
  this.value = initial;

  this.increment = function (value = 1) {
    this.value = this.value + value;
  };

  this.decrement = function (value = 1) {
    this.value = this.value - value;
  };

  this.read = function () {
    return this.value;
  };

  this.reset = function (value = initial) {
    this.value = value;
  };
}

const counter = new Counter(10);
console.log(counter.read());

counter.increment(5);
console.log(counter.read());

counter.decrement(9);
console.log(counter.read());

counter.reset(8);
console.log(counter.read());

// Optional Chaining
console.log("---------- Optional Chaining ----------");
const subscription = {
  payment: {
    method: { type: "Credit Card" },
    amount: 100,
  },
};

console.log(subscription.payment);
console.log(subscription.payment.method);
console.log(subscription.payment.method.type);

const anotherSubscription = {};

// falsy values
// undefined
// ull
// NaN
// false
// 0
// ""

// truthy values: otherwise

console.log(anotherSubscription.payment);
console.log(anotherSubscription.payment?.method);
console.log(anotherSubscription.payment?.method?.type);

// the optional chaining operator only works with declared variables
// console.log(declared?.value); // Uncaught ReferenceError: declared is not defined

// the optional chaining operator considers the falsy values as the nullish operator
const anotherDeclared = {};
// console.log(anotherDeclared?.value.x); // Uncaught TypeError: Cannot read properties of null (reading 'x')

// short-circuiting
function Student(name) {
  this.name = name;
}

const key = "age";

const student = new Student("Mohammed");
student[key] = 21;

student.greet = function () {
  console.log(`AsSalam Alaikum, I am ${this.name}`);
};

student.greet();
console.log(student[key]);

let anotherStudent = new Student("Shawqi");
anotherStudent.greet?.();

anotherStudent = null;
console.log(anotherStudent?.[key]);

// anotherStudent?.greet = "..."; // Uncaught SyntaxError: Invalid left-hand side in assignment
