"use strict";

const user = {
  name: "Shawqi",
  age: 21,
};

// A function that is a property of an object is called a method.
user.greet = function () {
  console.log("AsSalam Alaikum, everyone!");
};

// Using a pre-declared function as a method.
const respondToGreeting = function () {
  console.log("WaAlaikum AsSalam!");
};

user.respondToGreeting = respondToGreeting;

console.log(user);

user.greet();
user.respondToGreeting();

// Methods short-hand
user.username = "shawqicauses";

const admin = {
  name: "Admin",
  username: "admin",
  greet: user.greet,
  respondToGreeting: respondToGreeting,
  createSomething: function () {
    console.log("Something created!");
  },
  deleteSomething() {
    console.log("Something deleted!");
  },
};

admin.greet();
admin.respondToGreeting();
admin.createSomething();
admin.deleteSomething();

// `this` in methods
let customer = {
  id: 1,
  name: "Noha",
  username: "noha-yasser",
  getInfo: function () {
    console.log("customer", this); // this is the customer object

    console.log(
      `Customer Information: ID: ${this.id}, Name: ${this.name}, Username: ${this.username}`
    );
  },
};

customer.getInfo();

const anotherCustomer = customer;
anotherCustomer.id = 2;
anotherCustomer.name = "Ahmed";
anotherCustomer.username = "ahmed-habbash";

customer = null;

anotherCustomer.getInfo();

// `this` is not bound

/*
1. normal function or arrow function? ->
normal function -> is it in strict mode? yes -> undefined | no -> (window) global object
arrow function -> always (window) global object

2. normal method or arrow method? ->
normal method -> the current object
arrow method -> (window) global object
*/

var username = "shawqicauses";

// normal function
const a = function () {
  console.log(window === this);
  this.alert("AsSalam Alaikum!");
};

// a();

// "use strict"
const b = function () {
  console.log(this);
};

// b();

// objects
const aObject = {
  name: "Shawqi",
  introduceYourself: function () {
    console.log(this);

    const nFunction = function () {
      console.log(this);
    };

    nFunction();

    const arrowFunction = () => {
      console.log(this);
    };

    arrowFunction();

    console.log(`AsSalam Alaikum, I am ${this.name}`);
  },
  arrowIntroduceYourself: () => {
    console.log(this);
  },
};

aObject.introduceYourself();
aObject.arrowIntroduceYourself();

console.log("--------------------------------");

console.log(this); // (window) global object

const c = () => {
  console.log(this);
};

c();

// Tasks - 01
function createUser(name) {
  return {
    name,
    ref: this,
  };
}

const userShawqi = createUser("Shawqi");
console.log(userShawqi.ref);

// Tasks - 02
const createUserRef = function (name, age) {
  const user = {
    name,
    age,
    ref: undefined,
    createRef: function () {
      this.ref = this;
    },
  };

  user.createRef();

  return user;
};

const userSama = createUserRef("Sama", 21);
console.log(userSama.ref);

const mohammedObject = {
  name: "Mohammed",
  age: 21,
  functionsNormals: function () {
    console.log(this); // current object

    const nFunction = function () {
      console.log(this); // undefined
    };

    nFunction();

    const arrowFunction = () => {
      console.log(this); // current object
    };

    arrowFunction();
  },
  functionsArrow: () => {
    console.log(this); // (window) global object

    const nFunction = function () {
      console.log(this); // undefined
    };

    nFunction();

    const arrowFunction = () => {
      console.log(this); // (window) global object
    };

    arrowFunction();
  },
};

mohammedObject.functionsNormals();
mohammedObject.functionsArrow();

// Tasks - 03
// create a calculator
const calculator = {
  a: undefined,
  b: undefined,
  inputs: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
  multiply: function () {
    return this.a * this.b;
  },
  divide: function () {
    return this.a / this.b;
  },
};

calculator.inputs(10, 2);

console.log(calculator.sum());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
