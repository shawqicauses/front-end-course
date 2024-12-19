// keyed collections -> I can access data in this collection using keys.

const experience = {
  November_2020: "OMQ Digital Solutions",
  September_2022: "5-PAL",
  February_2023: "ISS Gate",
  October_2023: "Act-Hub",
  July_2024: "MikaByte",
};

const experienceArrayOfObjects = [
  {
    name: "OMQ Digital Solution",
    month: "November",
    year: "2020",
  },
  {},
];

console.log(experienceArrayOfObjects[0].month);

const userData = {
  name: "Shawqi Hatem",
  username: "@shawqicauses",
  age: 21,
  job: {
    title: "Front-End Developer",
    yearsOfExperience: 6,
  },
  cv: { experience },
};

console.log(experience);

experience["Freelancing_2019_2020"] = "Freelancing";

console.log(experience);

// Arrays

const o = { 1: "I am an Object!" };

const o_2 = o;

o.b = 8;

console.log(o === o_2);

const array = [];
const array_2 = new Array();

const array_3 = array_2;

console.log(typeof array);
console.log(array_2 === array_3);

const shawqi = ["Shawqi", "Hatem", "Fares", 21, true, null, "undefined"];

const shawqi_2 = {
  0: "Shawqi",
  1: "Hatem",
  2: "Fares",
};

console.log(shawqi);
console.log(o[1]);

console.log(shawqi[0]);
console.log(shawqi[1]);
console.log(shawqi[shawqi.length - 1]);

// please do not add a non-numeric property to an array.
shawqi.name = "Shawqi";
console.log(shawqi.name);

console.log(shawqi_2[0]);

const name = "Shawqi";
name[0] = "s";
console.log(name);

// Bad Practices
const mutable_array = ["Shawqi", "Hatem"];
mutable_array[0] = "shawqi";
mutable_array[1] = 21;
mutable_array[2] = true;

// mutable_array[mutable_array.length] = { something: "I do not know" };

mutable_array[20] = false;

console.log(mutable_array);
console.log(mutable_array[15]);
console.log(mutable_array.length);

mutable_array.length = 2;
console.log(mutable_array);

mutable_array.length = 10;
console.log(mutable_array);
console.log(mutable_array[5]);

const numbers = [0, 1, 2, 3, 4];
console.log(numbers[-1]);

// at() -> positive index -> key.
// at() -> negative index -> array.length + (negative index).

console.log(numbers.at(-1));
console.log(numbers.at(1) === numbers[1]);
console.log(numbers.at(-1) === numbers[numbers.length - 1]);

// There is nothing in JavaScript called: Stack, Queue, or DeQueue. They are all arrays.
// `push` is a method that arrays support in JavaScript.
// The code under is just an example.

// A Queue in JavaScript
// What we need?
// 1. ordered collection
const queue = [];

// 2.1 push operation: appends an element to the end.
// What does `push` do:
// 1. appends an element to the end of the array.
// 2. updates the length.
queue.push(1);
queue.push(2);
queue.push("Shawqi");
queue.push("Hatem");
queue.push(21);

console.log(queue);

// 2.2 shift operation: get an element from the beginning of the array, advancing the queue elements so the second one becomes the first one.
// What does `shift` do?
// 1. Returns the first element from the array.
// 2. Removes the first element from the array.
// 3. Advancing the elements, so the second one becomes the first one.
// 4. Updates the length.

queue.shift();
console.log(queue);

console.log(queue.shift());
console.log(queue);

// A Stack in JavaScript
// What we need?
// 1. ordered collection
const stack = [];

// 2.1 push operation
stack.push(1);
stack.push("Shawqi");
stack.push("Hatem");
stack.push(true);
console.log(stack);

// 2.2 pop operation
// What does `pop` do?
// 1. Returns the last element from the array.
// 2. Removes the last element from the array.
// 3. Updates the length.
stack.pop();
stack.pop();
console.log(stack.pop());
console.log(stack);

// LIFO principle in Stack:
// 1. added 5 using push.
// 2. added 8 using push.
// 3. added "Shawqi" using push. -> "Shawqi" is Last-In
// 4. took "Shawqi" using pop. "Shawqi" -> is First-Out

// FIFO principle in Queue:
// 1. added 4 using push. -> 4 is First-In
// 2. added 10 using push.
// 3. added Haneen using push.
// 4. added 9 using push.
// 5. took 4 using shift. -> 4 is First-Out

// DeQueue
const both = [];
both.push(1);
both.push(2);
both.unshift(1.5, 2.5);
both.unshift(0);
both.pop();
both.shift();
console.log(both);

// Task 01: Create a real Stack in JavaScript

// 1. create the constructor function
function Stack() {
  // this = {}
  this.length = 0;

  // 2. push
  this.push = function (element) {
    // 2.1 appends an element to the end.
    this[this.length] = element;
    // 2.2 updates the length.
    this.length += 1;
  };

  // 3. pop
  this.pop = function () {
    const last = this[this.length - 1];
    // 3.2 removes the last element from the array.
    // delete this[this.length - 1]
    this[this.length - 1] = undefined;

    // 3.3 updates the length.
    this.length -= 1;

    // 3.1 returns the last element from the array.
    return last;
  };

  // return this
}

const myStack = new Stack();
console.log(myStack.length);

myStack.push(8);
myStack.push(5);
console.log(myStack[0], myStack[1], myStack.length);

console.log(myStack.pop());
console.log(myStack[0], myStack[1], myStack.length);

function Queue() {
  // this = {}

  this.length = 0;

  this.push = function (element) {
    this[this.length] = element;
    this.length += 1;
  };

  this.shift = function () {
    const first = this[0];
    // 2. removes the first element from the array.
    // queue: [2, 3, 4]
    // shift: [3, 4]
    // current status: [undefined, 3, 4]
    for (let index = 0; index < this.length; index++) {
      this[index] = this[index + 1];
    }

    for (const key in this) {
      if (!this[key]) delete this[key];
    }

    // 3. updates the length,
    this.length -= 1;

    // 1. returns the first element from the array.
    return first;
  };

  // return this
}

const myQueue = new Queue();

myQueue.push(5);
myQueue.push(8);
myQueue.push(10);
myQueue.push(15);
console.log(myQueue);

myQueue.shift();
console.log(myQueue.shift());
console.log(myQueue);

// Loops
const loopArray = ["Shawqi", "Hatem", "Fares", 21];

loopArray.bad = "Why are you doing this to that array?";

// please do not use `for..in` with arrays.
for (const key in loopArray) {
  console.log(loopArray[key]);
}

for (const element of loopArray) {
  console.log(element);
}

// new Array()
const lengthArray = new Array(2);
console.log(lengthArray[1]);
console.log(lengthArray.length);

// toString()
console.log(loopArray.toString());

// Multi-D Arrays
const multiDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// multi-D Arrays -> array[rows][columns]
// multi-D Array 3 x 3
// rows -> 0 1 2
// columns -> 0 1 2
console.log(multiDArray[0][0]);
console.log(multiDArray[0][1]);
console.log(multiDArray[0][2]);

console.log(multiDArray[1][0]);
console.log(multiDArray[1][1]);
console.log(multiDArray[1][2]);

console.log(multiDArray[2][0]);
console.log(multiDArray[2][1]);
console.log(multiDArray[2][2]);

const rows = 4;
const columns = 5;
const myMultiDArray = [];

for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
  myMultiDArray[rowIndex] = [];
  for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
    myMultiDArray[rowIndex][columnIndex] = Math.random().toFixed(2);
    console.log(`myMultiDArray[${rowIndex}][${columnIndex}]`);
  }
}

console.log(myMultiDArray);
