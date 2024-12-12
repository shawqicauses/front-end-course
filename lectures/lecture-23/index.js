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

Lecture 27
18. Constructor, Operator `new`
- the regular {...} syntax allows us to create on object, but often we need to create many similar objects, like multiple users, menu items, and so on.
- that can be done using constructors functions and "new" operator.
- a constructor function is technically a function with two conventions: 1. they are named with a capital letter first. 2. they should be executed using the `new` operator.

18.1 What Happens When We Use `new` With A Constructor Function?
1. the `new` operator creates a new empty object and assigns it to `this`.
2. the function body executes.
3. the function returns the `this` value.

- this is the main purpose of constructors: to create an object and return it (in order to implement reusable object creation code).

- technically, any function can be used as a constructor (except for the arrow functions).

18.2 Constructor Mode Test: `new.target`

18.3 Return From Constructors

18.4 Omitting Parentheses

18.5 Methods In Constructor

19. Optional Chaining
- the optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property does not exist.

19.1 The Non-Existing Property Problem

19.2 Short-Circuiting

Lecture 30
20. Methods Of Primitives
- JavaScript allows us to work with primitives as if they were objects.
- it also provides methods to call as such.
- but how does it work if primitives are not objects?
- a primitive is a value of a single thing (string, number, bigint, boolean, symbol, null, and undefined).
- an object is capable of storing multiple values as properties ({name: "Shawqi"}).
- there is other kinds of objects in JavaScript such as functions and arrays.
- one of the best things about objects is that we can store a function as one of its properties (we called it methods).
- there are many built-in objects already exists and they have different properties and methods (we will discover them soon).
- but their features come with a cost, objects are heavier than primitives, they require additional resources to support the internal machinery.

20.1 A Primitive As An Object
- a paradox faced by the creator of JavaScript.
- there are many things one would want to do with a primitive, like a string or a number.
- it would be great to access them using methods.
- also, primitives must be as fast and light-weight as possible.
- the solution? primitives are still primitive, a single value, as desired.
- the language allows access to methods and properties of strings, numbers, and booleans.
- in order for that to work, a special "object wrapper" that provides the extra functionality is created, and then is destroyed.
- the "object wrappers" are different for each primitive type and are called `String`, `Number`, and `Boolean`.

- for example, a string is a primitive.
- the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods like `toUpperCase()`.
- the methods run and return a new string.
- then the special object is destroyed, leaving the primitive `text` alone.
- so primitives can provide methods, but they still remain light-weight.
- the JavaScript engine highly optimizes this process, it may even skip the creation of the extra object at all, but it must still adhere to the specification and behave as if it creates one.
- constructors `String`, `Number`, and `Boolean` are for internal use only.
- some languages like Java allow us to explicitly create "wrapper objects" for primitives using a syntax like `new Number(1)`, in JavaScript that is also possible for historical reasons, but highly unrecommended, things will go crazy in several places.
- null/undefined have no methods. they are the exceptions, they have no corresponding "wrapper objects" and provide no methods.

20.2 Tasks:
- can you add a string property?

let string = "Hello";
string.number = 8;
console.log(string.number);

21. Numbers
- in modern JavaScript there are two types of numbers: regular numbers and BigInt numbers.
- more ways to write a number:
1. underscore syntactic sugar: 1_000_000.
2. `e` syntactic sugar: 1e9 -> 1_000_000_000 / 1-e3 -> 0.001.
3. `toString`, Hex, Binary, and Octal Numbers (fun assignment, search for it).

21.1 Rounding
- rounding is one of the most used operations when working with numbers.
- `Math` is one of the built-in objects in JavaScript.
- `Math.floor()` rounds down: 3.1 becomes 3, -1.1 becomes -2.
- `Math.ceil()` rounds up: 3.1 becomes 4, -1.1 becomes 1.
- `Math.round()` rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In the middle case 3.5 becomes 4 and -3.5 becomes -3.
- `Math.trunc()` removes anything after the decimal point without rounding 3.1 becomes 3, -1.1 becomes 1.
- `toFixed(n: number)` rounds the number to `n` digits after the point and returns a string representation of the result. if the decimal part is shorter than required, zeros are appended to the end.

22.2 Imprecise Calculations
- internally, a (regular) number (not BigInt) is represented in 64-bit format, so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.
- if a number is really huge, it may overflow the 64-bit storage and become a special numeric value `Infinity`.
- it happens quite often the loss of precision.
- consider this: 0.1 + 0.2 === 0.3 (false?) / 0.1 + 0.2 === 0.30000000000000004 (true?).
- why does this happen? a number is stored in memory in its binary form, a sequence of bits - ones and zeros. but frictions like 0.1 and 0.2 that look simple in the decimal numeric system are actually unending frictions in their binary form.
- 0.1 is 1/10, one-tenth in the decimal numeric system, such numbers are easily representable. compare it to 1/3 one-third. it becomes an endless fraction 0.333333(3).
- so division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. For the same reason, in the binary numeric system, the division by powers of 2 is guaranteed to work well, but 1/10 becomes an endless binary fraction.
- there is no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal friction.
- the numeric format (IEEE-754) solves this by rounding to the nearest possible number. these rounding rules normally do not allow us to see that "tiny precision loss", but it exists.
- we can see this in actions using `0.1.toFixed(20)`. and when we sum two numbers, their "precision loss" add up. that is why 0.1 + 0.2 is not exactly 0.3.
- not only JavaScript has this issue. it exists in many other programming languages.

21.3 `isNaN` and `isFinite`
- `NaN`, `Infinity`, and `-Infinity` are special numeric values but not normal numbers, so there are special functions to check for them: `isNaN` and `isFinite`.
- `isNaN` converts its argument to a number and then tests it for being `NaN`.
- `isFinite` converts its argument to a number and returns true if it is a regular number.
- but do we need these functions? can not we just use the comparison `number === NaN`? unfortunately not, the value `NaN` is a unique in that it does not equal any thing including it self.

21.4 `Number.isNaN()` and `Number.isFinite()`
- the more strict versions of `isNaN` and `isFinite` functions.
- they do not auto convert their argument into a number, but check if it belongs to the number type instead.

21.4 `parseInt()` and `parseFloat()`
- they read a number from a string until they can not.
- `parseInt()` reads integers, `parseFloat()` reads floating-point numbers.
- `parseInt("100rem")` -> 100
- `parseFloat("100.20rem")` -> 100.20
- `parseInt("A100.20rem")` -> NaN

21.5 `Math.random()`, `Math.max()`, `Math.min()`, and `Math.pow()`

Lecture 31
22. Strings
- in JavaScript textual data is stored as strings, there is no separate type for a single character.
- quotes: single, double, and back-ticks. single and double are essentially the same. back-ticks allow us to embed any expression into the string, by wrapping it in ${...}.
- another advantage of using back-ticks is that they allow a string to span multiple lines.

22.1 Special Characters
- it is still possible to create multi-line strings with single and double quotes by using so-called "new-line character" written as "\n", which denotes a line break.

character    description
\n           new line
\' \" \`     quote (escape quote)
\\           back-slash (escape back-slash)
\t           tab

- as you can see, all special characters start with a back-slash character (\). it is also called an "escape character".

22.2 String Length
- `length` property has the string length: `"Shawqi".length` -> 6

22.3 Accessing Characters
- to get a character at position (index), use square brackets `[index]` or call the `at(index)` method. the first character starts from the zero position/index.

let string = "Shawqi";
string[0]; -> "S"
string.at(0); -> "S"
string[length - 1]; -> "i"
string.at(-1); -> "i"

- iterate over characters using `for..of`:

for (const character of string) {
  console.log(character);
}

22.4 Strings Are Immutable
- strings can not be changed in JavaScript. it is impossible to change a character.

string[0] = "s"; -> error (in strict mode)

22.5 Changing The Case `toLowerCase()` and `toUpperCase()`

22.6 Searching For Sub-Strings `indexOf()`, `lastIndexOf()`, `includes()`, `startsWith()` and `endsWith()`

22.7 Getting a Sub-String `slice()`, `substring()`, and `substr()`
- `slice(start, end)`:
returns the part of the string from `start` to `end` (not including end).
if there is no `end` slice goes till the end of the string.
negative values mean the position is counted from the end of the string.

- `substring(start, end)`:
returns the part of the string between `start` and `end` (not including end).
this is almost the same as `slice()` but it allows the `start` to be greater than the `end`.
negative values are not supported.

- `substr(start, length)`:
returns the part of the string from `start` with the given `length`.
negative values are allowed for `start`.

22.8 Trimming String `trim()`

23. Arrays
- objects allow us to store keyed collections of values.
- what if we need an ordered collection where we have a 1st, 2nd, and 3rd element and so on to store list of things in order.
- we can not use objects here because they are not ordered, they do not provide methods to manage the order of elements, or to elements at the beginning, at the end, or even between existing elements.

23.1 Arrays Declaration
- like objects:

const array = new Array();
const array = [];

- almost all the time, the second syntax is used. we can supply initial elements in the brackets.

const array = ["Shawqi", "Hatem", "Something"];

- array elements are numbered, starting with zero. we can get an elements by its number in square brackets.

console.log(array[0]); -> "Shawqi"

- we can replace elements.

array[0] = "Other Name";
-> ["Other Name", "Hatem", "Something"]

- or add a new one to the array.

array[3] = "Fares";
-> ["Other Name", "Hatem", "Something", "Fares"]

- the total count of the elements in the array is its `length`.

array.length -> 4.

- an array can store elements of any type.
- for negative index values we use `at()` method.

23.2 A Queue and A Stack: Pop, Push, Shift, and Un-Shift
- a queue is one of the most common uses of an array. in computer science this means an ordered collection of elements which supports two operations:
1. push: appends an elements to the end.
2. shift: get an element from the beginning, advancing the queue, so the the 2nd element becomes the 1st.
- arrays support both operations.

- a stack supports two operations:
1. push: appends an element to the end.
2. pop: takes an element from the end.
- for stacks, the latest pushed item is received first, that is also called LIFO (Last-In-First-Out) principle. for queues, we have FIFO (First-In-First-Out).

- arrays in JavaScript can work both as a queue and as a stack. they allow you to add/remove elements, both to/from the beginning or the end.
- in computer science, the data structure that allows this, is called dequeue.

- `pop`: extracts the last element of the array and returns it.
- `push`: append the elements to the end of the array.
- `shift`: extracts the first element of the array and returns it.
- `unshift`: add the element to the beginning of the array.

- `push` and `unshift` can add multiple elements at once.

23.3 Internals
- an array is a special kind of object. the square brackets used to access a property `array[0]` actually come from the object syntax. that is essentially the same as `object[key]` where `array` is the object while numbers (indexes) are used as keys.
- they extend objects providing special methods to work with the ordered collections of data and also the `length` property. but at the core it is still an object.

- but what makes arrays really special in their internal representation? the engine tries to store its elements in the contiguous memory area, one after another, and there are other optimizations as well, to make arrays work really fast.

- but they all break if we quit working with an array as with an ordered collection and start working with it as if it were a regular object. the engine will see that we are working with the array as wit ha regular object. array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

- the ways to misuse an array:
1. add a non-numeric properties like `array.test = 5`.
2. make holes, like: add `array[0]` and then `array[1000]` (and nothing between them).
3. fill the array in the reverse order.

- please think of arrays as special structures to work with the ordered data. they provide special methods for that. arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. and if you need arbitrary keys, chances are high that you actually require a regular object.

23.4 Performance
- methods `push`/`pop` run fast, while `shift`/`unshift` are slow.
- why it is faster to work with the end of an array than with its beginning?
- the `shift` operation must do three things here: `array.shift()`
1. remove the element with the index 0.
2. move all elements to the left, re-number them from the index 1 to 0, from 2 to 1, and so on.
3. Update the `length` property.

- the more elements in the array the more time to move them, more in-memory operations.

- the similar thing happens with `unshift`, to add an element to the beginning of the array we need first to move existing elements to the right, increasing their indexes.

- `push`/`pop` do not need to move anything, to extract an element from the end, the `pop` method cleans the index and shortens `length`.

- again, the `pop` method does not need to move anything because other elements keep their indexes. that is why it is blazingly fast.

23.5 Loops `for..in` and `for..of`
- the loop `for..in` iterates over all properties not only the numeric ones.
- there are so-called "array-like" objects in the browser and in other environments, that look like arrays. that is, they have `length` and indexes properties, but they may also have other non-numeric properties and methods, which we usually do not need.
- the `for..in` loop will list them though. so if we need to work with array-like objects, then these extra properties can become a problem.
- the `for..in` loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. of course it is still fast, but we should be aware of the difference.
- generally, we should not use `for..in` for arrays.

23.6 A Word About `length` and Truncating/Clearing Arrays

23.7 `new Array()`

23.8 Multi-Dimensional Arrays

23.9 `toString`

23.10 Do Not Compare Arrays With `=`

24. Array Methods
- how to delete an element from the array? the arrays are objects so we can use `delete` but the array will still have the same length, because delete removes a value by the key. this is fine for objects but for arrays we usually want the rest of the elements to shift and occupy the freed place. we expect to have a shorter array now.

24.1 `splice()`, `slice()`, and `concat()`
- `array.splice(start, count, element_1, element_2, elements...)`: it modifies `array` starting from the index `start` removes `count` elements and inserts element_1 and 2 if they exists at their place. returns an array of the removed elements.
- `slice(start, end)`: it returns a new array copying to it all items from index `start` to `end` (not including end).
- negative values are allowed in both methods.

25.2 `forEach()`
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
