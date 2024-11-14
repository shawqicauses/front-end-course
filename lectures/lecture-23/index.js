/*
Lecture 23: JavaScript Objects - References and Copying

0. Objects
- as we know, there are 8 data types in JavaScript: string, number, bigint, boolean, null, undefined, object, and symbol.
- seven of them are called "primitive" types, because their values contain only one single thing.
- objects are a non-primitive type, they are used to store keyed collections of various data and more complex entities.
- objects penetrate almost all aspects of the language.
- an object can be created using figure brackets `{}`. with an optional list of properties. a property is a "key: value" pair, where the key is a string (also called property name) and value can be anything.
- an empty object can be created using one of two syntaxes: `{}` or `new Object()`.

1. Literals and Properties
- we can immediately create an object using `{}` and add properties to it.
- a property has a key (also know as name or identifier) before the colon `:` and a value to the right of it.
- to remove a property, we can use the `delete` operator.
- we can use multi-word property names, but then they must be quoted.

2. Square Brackets
- we can access a property using square brackets `[]` with a quoted property name. and we have to for multi-word property names.
- square brackets also provides a way to obtain the property as the result of an expression. the dot notation can not be used for that.

3. Computed Properties
- we can use square brackets in an object literal when create an object. That is called computed properties.

4. Property Value Short-Hand

5. Property Names Limitations

6. Property Existence Test: `in` Operator
- a notable feature of objects in JavaScript, compared to other languages, is that it is possible to access any property. There will be no error if the property does not exist.
- reading a non-existent property will just returns `undefined`.
- there is also a special operator `in` that can be used to check if a property exists in an object. `"key" in object`.

7. The `for...in` Loop
- to walk over all keys of an object, there exists a special form of the loop called `for...in`.

8. Ordered Like An Object
- objects are ordered in a special fashion, integers properties are sorted, others appear in creation order.

9. Tasks

10. Object References and Copying
- one of the fundamental differences between objects versus primitives is that object are stored and copied by reference, not by value, whereas primitives are copied as a whole value.
- objects are stored somewhere in memory, and the reference to that memory location is stored in the variable.
- when an object is copied, the reference to the original object is copied, but the object itself is not copied or duplicated.

11. Comparison of Objects

12. Const Objects Can Be Modified

13. Cloning and Merging Objects
- what if we need to duplicate an object?
- we can use the `for...in` or `Object.assign` function to do that.
- we can create a new object and replicate the structure of the existing one, by iterating over its keys and copying them on the primitive level.
- we can also use the `Object.assign` function which takes two or more objects as arguments and returns a new object with the properties of the objects merged into it.

14. Deep Cloning
- what if there are properties that are objects themselves?
- to make two objects truly separate, we should use a cloning loop that examines each key's value and if it is an object, then replicate its structure as well. this is called deep cloning or structured cloning.
- there is `structuredClone` function that implements deep cloning.

Lecture 24

15. Garbage Collection
- memory management in JavaScript is performed automatically and invisibly to us. we create primitives, objects, functions... all that takes memory.
- what happens when something is not needed anymore? how does JavaScript engine discover it and clean it up?
- the main concept of memory management in JavaScript is reachability.
- simply put, "reachable" values are those that are accessible or usable somehow. they are guaranteed to be stored in memory.

A) there is a base set of inherently reachable values, they can not be deleted for obvious reasons:
1. the currently executing function, its local variables and parameters.
2. other functions on the current chain of nested calls, their local variables and parameters.
3. global variables.
4. others - we will explain them later.

- these values are called "roots".

B) any other value is considered reachable if it is from a root by a reference or by a chain of references.

16. Internal Algorithms
- the basic garbage collection algorithm is called "mark and sweep".
1. the garbage collector takes roots and "marks" remember them.
2. then it visits and "marks" all the references from them.
3. then it visits marked objects and marks their references. all visited objects are remembered, so as not to visit the same object twice in the future.
4. ...and so on until every reachable (from the roots) references are visited.
5. all objects except marked ones are deleted.

- that is the concept of how garbage collection works. JavaScript engines apply many optimizations to make it run faster and do not introduce any delays in the code execution.

- some of the optimizations are:
1. generational collection.
2. incremental collection.
3. idle-time collection.

Lecture 26
17. Object Methods, `this` Keyword
- objects are usually created to represent entities of the real world, such as users, orders, etc.
- and in the real world, the user can act: select something from the shopping cart, log in, log out, etc.
- actions are represented in JavaScript by function.
- a function that is a property of an object is called a method.
- of course we can use a pre-declared function as a method.

17.1 Object-Oriented Programming (OOP)
- when we write our code using objects to represent entities, that is called object-oriented programming (OOP).
- OOP is a big thing, an interesting science of its own. How to use the right entities? How to organize the interactions between them? ... etc.

17.2 Method Short-Hand
- to be honest, the notations are not full identical. There are subtle differences related to object inheritance (will be covered later).

17.3 `this` In Methods
- it is common that an object method needs to access the information stored in the object to do its job.
- to access the object, a method can use the `this` keyword.
- the value of the `this` keyword is the object (for now).
- during the execution of the method, the value of `this` will be the object.
- technically, it is also possible to access the object without `this`. But...

17.4 `this` Is Not Bound
- in JavaScript, the `this` keyword behaves unlike other programming languages. It can be used in any function, even if it is not a method.
- the value of `this` is evaluated during the run-time, depending on the context. But.. what context?
- global functions context: in strict mode, the `this` keyword is `undefined`, in non-strict mode, it is the global object `window`.

17.5 Arrow Functions Have No `this`
- arrow functions do not have their own `this` keyword. When we reference `this` inside an arrow function, it refers to the outer "normal" function.

18. Constructor, Operator `new`
- the regular {...} syntax allows us to create on object, but often we need to create many similar objects, like multiple users, menu items, and so on.
- that can be done using constructors functions and "new" operator.
- a constructor function is technically a function with tow conventions: 1. they are named with a capital letter first. 2. they should be executed using the `new` operator.

18.1 What Happens When We Use `new` With A Constructor Function?
1. the `new` operator creates a new empty object and assigns it to `this`.
2. the function body executes.
3. the function returns the `this` value.

- this is the main purpose of constructors: to create and object and return it (in order to implement reusable object creation code).

- technically, any function can be used as a constructor (except for the arrow functions).

18.2 Constructor Mode Test: `new.target`

18.3 Return From Constructors

18.4 Omitting Parentheses

18.5 Methods In Constructor

19. Optional Chaining
- the optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property does not exist.

19.1 The Non-Existing Property Problem

19.2 Short-Circuiting
*/

console.log("------ Objects ------");
// Primitives Way
const name = "Shawqi Hatem";
const username = "shawqicauses";
const age = 26;
const isSubscribed = true;

// Non-Primitives Way
let user = {
  name: "Wassem Abd El-Hadi",
  username: "waseemabdelhadi",
  email: "me@wassem.com",
  age: 23,
  "Likes JavaScript": true,
  isSubscribed: false,
};

console.log(typeof user);
console.log(user);

// Accessing properties - Dot notation
console.log(typeof user.name);
console.log(user.username);

console.log(typeof user.isSubscribed, user.isSubscribed);

// Adding/Updating/Deleting properties - Dot notation
user.country = "Gaza";
user.isSubscribed = true;
delete user.age;

console.log(user);

// Accessing properties - Brackets notation
// Adding/Updating/Deleting properties - Brackets notation
console.log(user["Likes JavaScript"]);

user["Likes JavaScript"] = false;
delete user["Likes JavaScript"];

console.log(user);

// Computed properties
console.log("------ Computed Properties ------");
console.log(user["name"]);
// console.log(user[email]); // ReferenceError: email is not defined

const key = "email";
console.log(user[key]);

const fruits = {};
const whatTypeOfFruits = prompt("What type of fruits did you buy?", "peach");
fruits[whatTypeOfFruits] = 10;

console.log(fruits);

// Empty objects
let emptyObject = {};
let anotherEmptyObject = new Object();
console.log(emptyObject);
console.log(anotherEmptyObject);

// Will understand it later
console.log(Boolean(emptyObject));
// console.log({} === {}); // false

// Property Value Short-Hand
console.log("------ Property Value Short-Hand ------");

function createUser(name, username, email, isSubscribed) {
  return {
    name, // name: name
    username,
    email,
    isSubscribed,
  };
}

const waseem = createUser(
  "Wassem Abd El-Hadi",
  "waseemabdelhadi",
  "me@wassem.com",
  true
);

console.log(waseem);

// Property Names Limitations
console.log("------ Property Names Limitations ------");

let limitations = {
  let: "let",
  for: "for",
  return: "return",
};

console.log(limitations);

// Property Existence Test
console.log("------ Property Existence Test ------");

const settings = {
  fontSize: 16,
  fontWeight: 400,
  isDark: undefined,
};

console.log(settings.fontFamily);

if (settings.fontFamily === undefined) {
  console.log("`fontFamily` property does not exist! We are adding it now...");
  settings.fontFamily = "Inter";
}

console.log(settings.fontFamily);

console.log("isDark" in settings);
console.log(settings.isDark === undefined);

// The `for...in` Loop
console.log("------ The `for...in` Loop ------");

for (let key in settings) {
  console.log(`${key} is ${settings[key]}`);
}

// Ordered Like An Object
console.log("------ Ordered Like An Object ------");

let whatIsTheOrder = {
  b: "B",
  a: "A",
  2: "C",
  1: "D",
  c: "E",
};

for (let key in whatIsTheOrder) {
  console.log(whatIsTheOrder[key]);
}

// Tasks
console.log("------ Tasks ------");

// 1. Sum all the properties values of the cart object
const cart = {
  fruits: 20,
  vegetables: 10,
  meat: 30,
  bread: 5,
};

let total = 0;

for (let product in cart) {
  // total = total + cart[product]
  total += cart[product];
}

console.log(total);

// 2. Give the customer a discount (- 5) if the price of the product is greater than 10

let totalAfterDiscount = 0;

for (let product in cart) {
  if (cart[product] > 10) {
    cart[product] = cart[product] - 5;
    totalAfterDiscount += cart[product];
  } else {
    totalAfterDiscount += cart[product];
  }
}

console.log(totalAfterDiscount);

// Object References and Copying
console.log("------ Object References and Copying ------");

let firstName = "Shawqi";
let lastName = firstName;
console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);

firstName = "Esraa";
console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);

const firstCustomer = { name: "Shawqi Hatem" };
let secondCustomer = firstCustomer;
console.log(firstCustomer);
console.log(secondCustomer);

// firstCustomer = { name: "Esraa" };
firstCustomer.name = "Esraa"; // TypeError: invalid assignment to const 'firstCustomer'

console.log(firstCustomer);
console.log(secondCustomer);

console.log({} == {});
console.log(Boolean({}));

console.log(firstCustomer === secondCustomer);

// Cloning and Merging Objects
console.log("------ Cloning and Merging Objects ------");

// using `for...in`
const firstObject = {
  x: 1,
  y: 2,
  z: 3,
};

const secondObject = {};

for (let key in firstObject) {
  secondObject[key] = firstObject[key];
}

console.log(firstObject === secondObject);

firstObject.x = 10;
console.log(secondObject);

// using `Object.assign`
const thirdObject = Object.assign({ x: 1 }, firstObject);

console.log(firstObject === thirdObject);
console.log(thirdObject);

// Deep Cloning
console.log("------ Deep Cloning ------");

const firstDeepObject = {
  x: 1,
  y: 2,
  z: 3,
  subObject: {
    a: 1,
    b: 2,
    c: 3,
  },
};

const secondDeepObject = structuredClone(firstDeepObject);
firstDeepObject.subObject.a = 10;
console.log(secondDeepObject.subObject.a);
console.log(firstDeepObject.subObject === secondDeepObject.subObject);
