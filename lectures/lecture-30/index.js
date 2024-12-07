"use strict";
console.log("-------- Methods Of Primitives --------");

const username = "Shawqi";
const age = 21.0250158;

console.log(username.length);
console.log(username.startsWith("Sh"));
console.log(username.toUpperCase());
console.log(username);

console.log(21.03);

const user = {
  username: "shawqicauses",
  email: "shawqicauses@outlook.com",
  signIn() {
    console.log("Signed in...");
  },
};

user.signIn();

function amIObject() {
  return "Yes";
}

amIObject();

const user_2 = user;
user_2.username = "something";

console.log(user.username);
console.log.name;

new Array().length;

/*
Memory:

Primitive:
username -> "Shawqi"

Non-Primitive:
user -> address
address -> {username: ...}
*/

const number_1 = 0;
const number_2 = Number(0);
const number_3 = new Number(0);

console.log(number_1 === number_2);
console.log(number_2 === number_3);

if (number_2) console.log("Great!");

if (number_3) console.log("Ops!");

let string = "Hello";
// string.number = 8;
// console.log(string.number);

console.log("-------- Numbers --------");
console.log(1_000_000_000);
console.log(1e3); // 2 * 1000
console.log(2.5e9); // 2.5 * 1000000000
console.log(1e-6); // 1 / 1000000
console.log(2e-3); // 2 / 1000000

/*
N        Floor        Ceil    Round
1.1      1            2       1
1.5      1            2       2
1.9      1            2       2
-1.1     -2           -1      -1
-1.5     -2           -1      -2
-1.9     -2           -1      -2
*/

console.log(Math.floor(1.1));
console.log(Math.floor(-1.1));
console.log(Math.floor(1.5));
console.log(Math.floor(-1.5));
console.log(Math.floor(1.9));
console.log(Math.floor(-1.9));

console.log(Math.ceil(1.1));
console.log(Math.ceil(-1.1));
console.log(Math.ceil(1.5));
console.log(Math.ceil(-1.5));
console.log(Math.ceil(1.9));
console.log(Math.ceil(-1.9));

console.log(Math.round(1.1));
console.log(Math.round(-1.1));
console.log(Math.round(1.5));
console.log(Math.round(-1.5));
console.log(Math.round(1.9));
console.log(Math.round(-1.9));

console.log(Math.trunc(1.1));
console.log(Math.trunc(-1.1));
console.log(Math.trunc(1.5));
console.log(Math.trunc(-1.5));
console.log(Math.trunc(1.9));
console.log(Math.trunc(-1.9));

console.log((2.5618).toFixed(2)); // "2.56"
console.log((2.5618).toFixed(3)); // "2.562"
console.log((2.5618).toFixed(4)); // "2.5618"
console.log((2.5618).toFixed(5)); // "2.56180"

console.log(+(2.5618).toFixed(5)); // 2.5618

// to understand "Imprecise Calculations" you must either watch the lecture or go to https://javascript.info/number#imprecise-calculations

// console.log(0.1 + 0.2);

/*
Disk Space: 256 GB (SSD or HDD)
Memory Space: 8 GB (RAM)

8 Bit: 0-1-0-1-0-1-0-1 (1 Byte)
1024 Byte -> 1 KiloByte
1024 Kilo-Byte -> 1 MegaByte
1024 Mega-Byte -> 1 GigaByte

-1.12
number variable: 64-bit (8 Bytes)
64 -> 52-bit for digits + 11-bit for decimal point + 1-bit for the sign
*/

console.log("-------- isNaN and isFinite --------");

const input = Number("something");

console.log(input);
console.log(input === NaN);
console.log(NaN === NaN);
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(""));
console.log(isNaN(null));
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN(input));

console.log(Infinity === Infinity);
console.log(isFinite(true));
console.log(isFinite(false));
console.log(isFinite(0));
console.log(isFinite(input));

console.log("-------- parseInt and parseFloat --------");
const width = "100rem100";
const height = "rem100";
const padding = "12.5rem";

console.log(parseInt(width));
console.log(parseInt(height));
console.log(parseFloat(padding));

console.log("-------- Other Math Functions --------");
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.min(2, 4, 6, -2, 10));
console.log(Math.max(2, 4, 6, -2, 10));
console.log(Math.pow(2, 3));
