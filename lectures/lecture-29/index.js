// Revision

// Functions
// Functions Declarations
d();

function d() {
  console.log("Functions Declarations");
}

// Function Expressions
// e(); // ReferenceError: Cannot access 'e' before initialization

// name will be ignored
const e = function s() {
  console.log("Function Expressions");
};

// const s = "Shawqi";

d();
e();

// if s is defined: TypeError: s is not a function
// if s is not defined: ReferenceError: s is not defined
// s();

// Arrow Functions (a special form of F.E.)

const a = (n) => n + 10;

console.log(a(20));

// Global/Local Variables

const name_1 = "Global 01";
let name_2 = "Global 02";
var name_3 = "Window Global 03";

console.log(this.name_1);
console.log(this.name_2);
console.log(this.name_3);

function greet(name_1 = "Local 01", name_2) {
  let name_3 = name_1 + " " + (name_2 || "Local 02");

  console.log("Accessing Variables");
  /*
  accessing variables in functions -> is it a param? / is it a local variable? -> yes -> inner value.
                                                                               -> no -> outer value.
  */

  console.log(`AsSalam Alaikum, ${name_1}`);
  console.log(`AsSalam Alaikum, ${name_2}`);
  console.log(`AsSalam Alaikum, ${name_3 ?? window.name_3}`);

  console.log("Accessing Global Variables Using: `this`");
  // this in normal functions + non-strict mode: window (global object).
  // this in normal functions + strict mode: undefined.
  // we used optional chaining to ensure that we will not face any errors..
  // even if we are using strict mode.
  console.log(`AsSalam Alaikum, ${this?.name_1}`);
  console.log(`AsSalam Alaikum, ${this?.name_2}`);
  console.log(`AsSalam Alaikum, ${this?.name_3}`);
}

greet();

/*
function type -> normal -> mode -> strict -> undefined.
                                -> non-strict -> window (global object).
              -> arrow -> window.
*/

const doSomething = (condition = false, trueFn, falseFn) => {
  console.log("Arrow Functions");
  // inherit outer this
  console.log(this);

  if (condition) trueFn();
  else falseFn();
};

doSomething(
  10 > 20,
  () => {
    console.log("This will be executed if true...");
  },
  () => {
    console.log("This will be executed if false...");
  }
);

// Objects
const usernameKey = "@" + "username";
const settings = { theme: "dark" };

const user = {
  name: "Shawqi",
  [usernameKey]: "shawqicauses",
  settings,
};

user.name = "Shawqi Hatem";
user.email = "shawqicauses@outlook.com";

const key = "age";
user[key] = 21;

console.log(user);

// Property Existence Check
console.log(!user.id ? "ID does not exist." : "ID exists.");
console.log(!("id" in user) ? "ID does not exist." : "ID exists.");

// Loop Over Object Properties
for (const key in user) {
  console.log(
    `${key}: ${typeof user[key] === "object" ? "This is an object" : user[key]}`
  );
}

// Comparisons
// console.log({} === {}); // false?

// Cloning
// const user_2 = Object.assign({}, user);
const user_2 = structuredClone(user);
user_2.name = "Shawqi 02";

console.log(user_2 === user);
console.log(user_2, user);

user_2.settings.theme = "light";

console.log(user_2.settings.theme === user.settings.theme);
console.log(user_2.settings.theme, user.settings.theme);

// Creating Our Own Deep Cloning Function
const object = {
  first: "1",
  second: "2",
  third: "3",
  fourth: {
    first: "1",
    second: "2",
    third: {
      first: "1",
      second: {
        first: "1",
      },
    },
  },
};

function shawqiAssign(source = {}) {
  if (typeof source !== "object") {
    console.log("You must provide a valid object as a parameter.");
    console.log("Re-assigning parameter to empty object: `{ }`.");
    source = {};
  }

  const objectCloned = {};

  // loop over source object
  for (const key in source) {
    // if one of source object properties is an object
    // loop over that property
    if (typeof source[key] === "object") {
      // create another empty object in cloned object
      // to copy nested object properties
      // example: objectCloned["fourth"] = {}
      objectCloned[key] = {};
      const objectNested = source[key];

      // loop over nested object properties
      for (const keyNested in objectNested) {
        // same as else block...
        // example: objectCloned["fourth"]["first"] = source["fourth"]["first"] = "1"
        objectCloned[key][keyNested] = objectNested[keyNested];
      }
    } else {
      // assign property with same name from source object to cloned object
      // example: objectCloned["first"] = source["first"] = "1"
      objectCloned[key] = source[key];
    }
  }

  return objectCloned;
}

const objectCloned = shawqiAssign(object);
objectCloned.third = "4";

if (objectCloned.fourth) objectCloned.fourth.first = "2";

console.log(objectCloned, object);
console.log(objectCloned.fourth === object.fourth);
console.log(objectCloned === object);

console.log(objectCloned.fourth.third === object.fourth.third);

function shawqiStructured(source = {}) {
  let cloned = {};

  /*
    shawqiStructured(s_1): execution no. 1
        - create e_1: {}
        - loop over s_1:  
            - e_1.first = s_1.first
            - e_1.second = s_1.second
            - e_1.third = s_1.third
            - s_1.fourth is an object!
                - shawqiStructured(s_2 = s_1.fourth): execution no. 2
                    - create e_2: {}
                    - loop over s_2:
                        - e_2.first = s_2.first
                        - e_2.second = s_2.second
                        - s_2.third is an object!
                            - shawqiStructured(s_3 = s_2.third): execution no. 3
                                - create e_3: {}
                                - loop over s_3:
                                    - e_3.first = s_3.first
                                    - e_3.second = s_3.second
                                - return e_3
                        - assign e_2.third = return e_3
                    - return e_2
            - assign e_1.fourth = e_2
        - return e_1
  */

  for (const key in source) {
    if (typeof source[key] === "object")
      cloned[key] = shawqiStructured(source[key]);
    else cloned[key] = source[key];
  }

  return cloned;
}

const objectStructured = shawqiStructured(object);
objectStructured.fourth.third.second.first = "5";
console.log(objectStructured, object);
console.log(
  objectStructured.fourth.third.second === object.fourth.third.second
);

// `this` Keyword

/*
method type -> normal -> current object.
            -> arrow  -> inherit outer this.
*/

const thisObject = {
  username: "Shawqi",
  nMethod: function () {
    console.log(this.username);

    // functions rules
    const nMNested = function () {
      console.log(this);
    };

    nMNested();
  },
  aMethod: () => {
    console.log(this.username); // inherit outer this: window.

    // functions rules
    const aMNested = () => {
      console.log(this);
    };

    aMNested();
  },
};

thisObject.nMethod();
thisObject.aMethod();

// Constructor Functions
// new keyword did the following:
// 1. create an empty object and assign it to this: `this = {}`.
// 2. the function body executed (and it supposed to modify `this`).
// 3. return `this`.

function User(name) {
  this.name = name;
}

const constructorUser = shawqiNew(User, "Shawqi");
const constructorUser_2 = new User("Shawqi");
console.log(constructorUser, constructorUser_2);

function shawqiNew(constructorFunction, name) {
  // stop no. 01
  let myThis = {};

  // stop no. 02
  constructorFunction.bind(myThis)(name);

  // stop no. 03
  return myThis;
}

const obj_1 = { name: "Shawqi" };
const obj_2 = { name: "Fouad" };

function sayName() {
  console.log(this.name);
}

sayName.bind(obj_1)();
sayName.bind(obj_2)();
