const expression = 10;

const string = "Shawqi";
const character = `S ${string} ${expression}`;

console.log("-------- Special Characters --------");

console.log(`Shawqi
Hatem`);

console.log("Shawqi\nHatem");

console.log(
  `Shawqi
Hatem` === "Shawqi\nHatem"
);

console.log("Shawqi\tHatem");

console.log(
  "Shawqi Hatem is a \"Web Developer\" and 'Instructor'. He is \\ super-cool!"
);

console.log("-------- String Length --------");

console.log(string.length);
console.log((string + " ").length);
console.log((string + "\n").length);
console.log((string + "\t").length);
console.log((string + "\\").length);

console.log("-------- Accessing Characters --------");

console.log(string[0]);
console.log(string[1]);

// string.length -> 6
// [0, 1, 2, 3, 4, 5]
// ["S", "h", "a", "w", "q", "i"]
// [string.length - 1] -> last character
console.log(string[string.length]); // undefined
console.log(string[string.length - 1]); // last character

console.log(string.at(0));
console.log(string.at(1));
console.log(string.at(-1));

const object = { 1: "First", 2: "Second", 3: "Third" };

for (const key in object) {
  console.log(object[key]);
}

for (const char of string) {
  console.log(char);
}

let myString = "Shawqi";
myString = "Shawqi Hatem";
console.log(myString);

// will not work
myString[0] = "s";
myString[8] = "h";

console.log(myString);
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

console.log("-------- Searching For Sub-Strings --------");

let email = "  shawqicauses@outlook.com    ";
email = email.trim();

let ageString = "I am 21 years-old";
let isSubscribed = "Is subscribed: true";

console.log(email);
console.log(email.indexOf("s")); // 0
console.log(email.lastIndexOf("s")); // 11
console.log(email.lastIndexOf("causes")); // 6
console.log(email.lastIndexOf("Hatem")); // -1
console.log(isSubscribed.lastIndexOf(true)); // 15

console.log(email.includes("shawqi")); // true
console.log(email.includes("hatem")); // false
console.log(isSubscribed.includes(true));

console.log(email.startsWith("shawqicauses"));
console.log(email.startsWith("Shawqi Hatem"));
console.log(isSubscribed.endsWith(true));
console.log(isSubscribed.endsWith(false));

console.log("-------- Getting a Sub-Strings --------");

const username = email.slice(0, 12);

console.log(username);

// -1 -> .length - 1 -> last character
const domain = email.slice(13);
console.log(domain);

// const domainType = email.slice(email.length - 3, email.length);
const domainType = email.slice(-3);
console.log(domainType);

const ageNumber = ageString.substring(5, 7);
console.log(ageNumber);

const name = email.substr(0, 6);
console.log(name);

const company = email.substr(-11, 7);
console.log(company);

console.log("-------- String --------");
// Task - 01
// write a function `upperFirstCharacter(string)` that returns the `string` with the uppercase first character.
// upperFirstCharacter("shawqi") === "Shawqi" -> true.

function upperFirstCharacter(string) {
  let result = "";
  result = string[0].toUpperCase();
  // result += string.slice(1); // method no. 01
  for (const char of string) {
    if (char === string[0]) continue;
    result += char;
  }

  return result;
}

console.log(upperFirstCharacter("shawqi"), "Shawqi");
console.log(upperFirstCharacter("shawqi") === "Shawqi");

// Task - 02
// write a function `truncate(string, maxLength)` that checks the length of the `string` and, if it exceeds `maxLength` replace the end of the `string` with the ellipsis character "...", to make its length equal to `maxLength`.

// truncate("AsSalam Alaikum, how are you?", 25) -> "AsSalam Alaikum, how are ...".

function truncate(string, maxLength) {
  let result = "";

  if (string.length > maxLength) {
    // result = string.slice(0, maxLength) + "..."; // method no. 01

    for (let char = 0; char <= maxLength - 1; char++) {
      result += string[char];
    }

    result += "...";
  } else {
    result = string;
  }

  return result;
}

console.log(truncate("AsSalam Alaikum, how are you?", 25));

// Task - 03
// write a function `extractAmountValue` that would extract the numeric value from such string and return it.
// extractAmountValue("$120") -> 120.

// 0. all amounts will be prefixed by dollar sign.
// 2. we might have more than one amount in the string.

function extractAmountValue(value) {
  let amounts = {};
  let amountsKey = 1;

  for (let index = 0; index <= value.length - 1; ) {
    index += 1;
    if (isNaN(value[index]) || value[index] === " ") {
      continue;
    }

    const amount = parseInt(value.slice(index));
    amounts[amountsKey] = amount;

    index += String(amount).length;
    amountsKey += 1;
  }

  let result = "";
  for (const key in amounts) {
    result += amounts[key] + " ";
  }

  return result;
}

// console.log(extractAmountValue("$120"));
console.log(extractAmountValue("I have 81260, 12 USD, 230 ILS, and 5110!"));
