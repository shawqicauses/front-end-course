// `splice()` method

// How to delete an element from the array the same way we used to do with objects.
let object = {
  propertyToDelete: "Delete me, please!",
};

console.log(object);

// object.propertyToDelete = undefined;
delete object.propertyToDelete;

console.log(object);

const array = [
  "Delete me, please.",
  "Do not delete this or you will be kicked out of this session!",
];

console.log(array.length);

delete array[0];

console.log(array);
console.log(array[0]);

// Using `splice()` method.

const array_2 = ["I", "am", "Shawqi", "H.", "M.", "F.", 21];
console.log(array_2.length);

// Removing elements from an array.
// `array.splice(start, deleteCount)`.
// `start`: the index to start from.
// `deleteCount`: how many elements to delete from the `start`.
array_2.splice(5, 1);
console.log(array_2);

// It returns the removed elements.
const elementsRemoved = array_2.splice(3, 2);
console.log(elementsRemoved);

console.log(array_2);
console.log(array_2.length);

array_2.splice(3, 0);
console.log(array_2);
console.log(array_2.length);

// Replacing elements.
array_2.splice(3, 1, "I am 21 years-old.");
console.log(array_2);
console.log(array_2.length);

// Inserting to the beginning.
array_2.splice(0, 0, "AsSalam Alaikum.", "How are you guys?");
console.log(array_2);
console.log(array_2.length);

// Inserting to the end.
// array_2.length -> 6
// array_2.length - 1 -> 5
const whatArrayIsThis = array_2.splice(array_2.length, 0, "Good Bye!");
console.log(whatArrayIsThis);

console.log(array_2);
console.log(array_2.length);

// -1 -> array_2.length - 1
array_2.splice(-1, 1); // -> `pop()`
console.log(array_2);

// -2 -> array_2.length - 2
array_2.splice(-2, 2);
console.log(array_2);

// Using `slice()` method.
// `array.slice(start, end)`.
// Not including `end`.

const array_3 = ["I", "love", "Front", "End", "Development"];

// `slice` copies the elements from `start` to `end` (not including end) and returns it in a new array.
// `slice` can not be used to remove/insert/replace elements in the array.
// We can only use it to extract and copy elements from the array and return it in a new array.
const array_3_1 = array_3.slice(0, 2);
const array_3_2 = array_3.slice(-3, array_3.length);
console.log(array_3);
console.log(array_3_1);
console.log(array_3_2);

const array_3_3 = array_3;
array_3_3.unshift("Say");

console.log(array_3_3);
console.log(array_3 === array_3_3);

// When you want to copy all the elements you can ignore the `start` and `end`.
const array_3_4 = array_3.slice();
array_3_4.unshift("Let's");

console.log(array_3);
console.log(array_3_4);
console.log(array_3 === array_3_4);

// Using `concat()` method.
const array_4_1 = [1, 2, 3];
const array_4_2 = [4, 5, 6];

const array_4 = array_4_1.concat(
  array_4_2,
  { 0: "Object", 1: "Look like an Array" },
  "String",
  7,
  8,
  9
);

console.log(array_4);
console.log(array_4_1);
console.log(array_4_2);

// Using `forEach` method.
const array_5 = ["First", "Second", "Third"];

array_5.forEach((element, index, array) => {
  // console.log("How many times is this function going to run?");
  // console.log(array[index] === element);
  console.log(element);
});

// Searching in Arrays
// Using `indexOf`, `lastIndexOf`, `includes`
const array_6 = ["A", "B", "C", "A", "C", NaN];

console.log(array_6.indexOf("A"));
console.log(array_6.indexOf("C"));
console.log(array_6.lastIndexOf("C"));

console.log(array_6.indexOf("D"));

console.log(array_6.includes("C"));
console.log(array_6.includes("D"));

// `includes()` handles `NaN` correctly.
console.log(array_6.indexOf(NaN));
console.log(array_6.includes(NaN));

// Using `find()` method.
const samaUser = { id: 10, name: "Sama", isSubscribed: false };

const users = [
  { id: 2, name: "Shawqi", isSubscribed: true },
  { id: 0, name: "Israa", isSubscribed: false },
  samaUser,
  { id: 8, name: "Ahmed", isSubscribed: true },
  { id: 5, name: "Gadeer", isSubscribed: false },
  { id: 20, name: "Fouad", isSubscribed: true },
];

// Searching for a user.
// const userId = Number(prompt("What user are you looking for?"));
const userId = 10;

const user = users.find(function (element, index, array) {
  return element.id === userId;
});

const userIndex = users.findIndex(function (element) {
  return element.id === userId;
});

const myUser = users.includes(samaUser);

// `undefined` if `find()` could not find any element in the array based on the callback condition.
console.log(user, userIndex);
console.log(myUser);

// Using `filter()` method.
const usersSubscribed = users.filter(function (element) {
  return element.isSubscribed;
});

console.log(users, usersSubscribed);

// Transforming an Array
// Using `map()` method

const usersHTML = users.map(function (element) {
  return `<div>Name: ${element.name} - ID: ${element.id}</div>`;
});

console.log(usersHTML);

const array_7 = [1, 2, 3, 4, 5];
const array_7_1 = array_7.map((element) => element * 10);

const array_7_2 = [];

array_7.forEach((element) => {
  array_7_2.push(element * 10);
});

console.log(array_7_1, array_7_2);

// Using `sort()` method.
const array_8 = [1, 2, 10, 14, 3, 25];
const array_8_2 = [1, 2, 10, 14, 3, 25];

array_8.sort(function (a, b) {
  if (a > b) return 1; // `a` must come after `b`.
  if (a === b) return 0; // do not change any thing.
  if (a < b) return -1; // `b` must come after `a`.
});

array_8_2.sort((a, b) => a - b);

console.log(array_8_2);
