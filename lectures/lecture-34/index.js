const developers = [
  {
    id: 1,
    name: "Shawqi",
    email: "shawqicauses@outlook.com",
    job: "Front-End Developer",
  },
  {
    id: 2,
    name: "Shadi",
    email: "shadi@outlook.com",
    job: "Front-End Developer",
  },
  {
    id: 3,
    name: "Ahmad",
    email: "ahmad@outlook.com",
    job: "Back-End Developer",
  },
  {
    id: 4,
    name: "Sama",
    email: "sama@outlook.com",
    job: "Full-Stack Developer",
  },
  {
    id: 5,
    name: "Mohammed",
    email: "mohammed@outlook.com",
    job: "Full-Stack Developer",
  },
  {
    id: 6,
    name: "Haneen",
    email: "haneen@outlook.com",
    job: "Back-End Developer",
  },
];

// forEach, find(), filter(), map()
// forEach() -> iterating over arrays.
const forEachReturnType = developers.forEach((developer, index, array) => {
  // Bad Practice
  // array[index].name = `${index + 1} ${developer.name}`;
  // Bad Practice
  // developer.name = `${index + 1} ${developer.name}`;
  console.log(developer.name);
});

console.log(forEachReturnType);

// find() -> searching in arrays.
// finds first element that matches callback condition and returns it.
// if no element matches callback condition it returns undefined.

const firstBackEnd = developers.find((developer) => {
  // callback condition
  return developer.job === "Back-End Developer";
});

console.log(firstBackEnd);
console.log(developers);

// filter() -> searching in arrays for multiple elements.
// filters all elements that match callback condition and returns them in an array.
// if no element matches callback condition it returns empty array.

const backEnds = developers.filter(
  (developer) => developer.job === "Back-End Developer"
);

console.log(backEnds);
console.log(developers);

// map() -> transforming arrays.
// [...] -> [...]
// first it iterates over an array elements, modifies them base on callback condition, and returns a new modified/transformed array.

const developersNames = developers.map((dev) => dev.name);
const developersJobs = developers.map((dev) => dev.job);
console.log(developersNames);
console.log(developersJobs);

/*
react => UI = data + ... (wrong)
react => f(data) = UI (correct)

React renders array easily in The DOM.

[...] (must be string or React Components) -> Renders in DOM.

developersNames -> Shawqi Shadi Ahmad Sama Mohammed Haneen.

Data:
developers[]

UI
<div>
    <h1>Name</h1>
    <p>Email</p>
</div>

Component (function):
const User = function (data) {
    return (
        <div>
            <h1>Name: {data.name}</h1>
            <p>Email: {data.email}</p>
        </div>
    )
}

const developersHTML = developers.map((developer) =>
    <User name={developer.name} email={developer.email} />
)

developersHTML[]
*/

// sort()
const array = [1, 5, 12, 10, 3, 20];

const arraySorted = array.sort((a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});

console.log(array);
console.log(arraySorted);

// reverse()
const arrayReversed = arraySorted.reverse();
console.log(arrayReversed);

// split() and join()
const myName = "Shawqi-Hatem-Fares";
const myNameArray = myName.split("-");

const myNameJoined = myNameArray.join(" ");

// const senderName = prompt("Your Name?");
// const message = prompt("Your Message?");
// const receivers = prompt("Receivers? Please separate them by a comma.");

// const receiversArray = receivers.split(",", 2);

// receiversArray.forEach((receiver) => {
//   alert(`${senderName} says to ${receiver}: ${message}`);
// });

const array_2 = [1, 2, 3];
const arrayCloned = array_2.map((element) => element);

console.log(arrayCloned);
console.log(arrayCloned === array_2);

// reduce()
const prices = [10, 12, 5, 3, 20];
const total = prices.reduce((accumulator, price) => {
  return accumulator + price;
}, 0);

console.log(total);

const products = [
  { id: 0, name: "Phone", price: 1000, taxRate: 0.1 },
  { id: 1, name: "Laptop", price: 500, taxRate: 0.05 },
  { id: 2, name: "Head-phones", price: 100, taxRate: 0.15 },
];

const priceTotal = products.reduce((sum, product) => {
  // 0 + (1000 + (1000 * 0.1))
  // 1100 + (500 + (500 * 0.05))
  // 1625 + (100 + (100 * 0.15))
  return sum + (product.price + product.price * product.taxRate);
}, 0);

console.log(priceTotal);

// const description = products.reduce((string, product, index, array) => {
//   if (index !== array.length - 1) return string + product.name + ", ";
//   else return string + product.name;
// }, "You bought ");

const productNames = products.reduce((array, product) => {
  return array.concat(product.name);
}, []);

console.log(productNames);

const description = `You bought ${productNames.join(", ")}`;
console.log(description);

// Array.isArray()
function pleaseGiveMeAnArray(input) {
  if (Array.isArray(input)) console.log("Yes it is an array! :)");
  else console.log("No it is not an array! :(");
}

// Maps and Sets
// Maps
const object = { name: "Shawqi" };
const object_2 = { name: "Ahmad" };

const weird = {
  1: "First",
  1: "Second",
  [object]: "Shawqi Object",
  [object_2]: "Ahmad Object",
};

console.log(weird);
console.log(weird[1]);
console.log(weird["1"]);

console.log(String(object), String(object_2));
console.log(String(object) === String(object_2));
console.log(weird["[object Object]"]);

const map = new Map([
  [1, "First"],
  ["1", "Second"],
  [object, "Shawqi Object"],
  [object_2, "Ahmad Object"],
]);

console.log(map);
console.log(map.size);

console.log(map.get(1));
console.log(map.get("1"));

console.log(map.get(object));
console.log(map.get(object_2));

map.set(2, "Second").set(3, "Third");

console.log(map.has("2"));
console.log(map.has(object));
console.log(map.has(object_2));

// map.delete(2);
// map.clear();

for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) console.log(value);

for (const pair of map.entries()) console.log(pair[0], pair[1]);

for (const element of map) console.log(element);

const numbers = {
  1: "First",
  2: "Second",
  3: "Third",
  4: "Fourth",
};

const numbersMap = new Map(Object.entries(numbers));
console.log(numbersMap);

const numbersObject = Object.fromEntries(numbersMap);
console.log(numbersObject);

const set = new Set();

set.add("Shawqi");
set.add("Shawqi");
set.add("Ahmad");
set.add("...");

set.delete("Ahmad");

console.log(set);
console.log(set.size);

console.log(set.has("Shawqi"));
console.log(set.has("Ahmad"));

// set.clear();

for (const value of set.keys()) console.log(value);
for (const value of set.values()) console.log(value);
for (const value of set.entries()) console.log(value);
