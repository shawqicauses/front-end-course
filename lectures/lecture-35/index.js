// Array Destructuring

let students = ["A", "G", "I", "S", "N", "H", "..."];

// Converting an array into a unique array using Set().
let uniqueStudents = new Set(students);

// it is fine to do so
let firstStudent = students[0];
let secondStudent = students[1];

// Destructuring Assignment
let [fStudent, , tStudent, ...otherStudents] = students;

let username = "Shawqi Hatem";

// let usernameArray = username.split(" ");
// let firstUsername = usernameArray[0];
// let secondUsername = usernameArray[1];

let user = {};

[user.firstUsername, user.secondUsername] = username.split(" ");

let map = new Map([
  [1, "F"],
  [2, "S"],
  [3, "T"],
]);

for (let [key, value] of map) console.log(key, value);

let a = 5;
let b = 8;

[a, b] = [b, a];
console.log(a, b);

let viewers = ["A"];
let [fViewer = "S", sViewer = "SH"] = viewers;

// Object Destructuring
function createViewer({
  name,
  username = "10203040",
  email = "me@example.com",
  age = 18,
  settings,
}) {
  return {
    name,
    username,
    email,
    age,
    settings,
  };
}

createViewer({
  name: "Shawqi",
  setting: {
    fontSize: 24,
  },
});

function getViewer() {
  // fetch viewer data from database/server/API
  return {
    name: "Viewer",
    username: "Viewer_22-08-2024",
    email: "viewer@something.com",
    age: 21,
    settings: {
      volume: 75,
      fontSize: 24,
    },
  };
}

// let viewerName = viewer.name
// let viewerAge = viewer.age

// what: goes where
let {
  username: viewerUsername,
  settings: { volume, fontSize },
  sessions: s = [],
  ...props
} = getViewer();
console.log(viewerUsername);

let array = [1, 2, 3];
console.log(array[4]);

let object = { 1: "F", 2: "S" };
console.log(object[3]);

// Dates
const now = new Date();

const January_01_1970 = new Date(0);
const January_02_1970 = new Date(24 * 60 * 60 * 1000);
const January_01_2024 = new Date(54 * 365 * 24 * 60 * 60 * 1000);

const today = new Date("2024-12-28");

const yesterday = new Date(2024, 11, 27, 17, 50, 35, 500);

console.log(yesterday.getFullYear());
console.log(yesterday.getMonth());
console.log(yesterday.getDate());
console.log(yesterday.getHours());
console.log(yesterday.getMinutes());
console.log(yesterday.getSeconds());
console.log(yesterday.getMilliseconds());

yesterday.setFullYear(2025);

// JSON Methods
let obj = {
  email: "...",
  password: "...",
  toString() {
    return `{email: ${this.email}, password: ${this.password}}`;
  },
};
