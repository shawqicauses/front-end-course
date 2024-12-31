// JSON
console.log("-------- JSON --------");

// invoices web application
// get/create/update/delete invoice
// invoices -> data
// Requests: index.html/index.css/index.js (front-end application/env - browser - client)
// Responses: server.(js/php/py) (back-end application/env - server and database)
// Request -> Server -> Get Invoices
// Response -> Client -> Invoices Data

const user = {
  email: "...",
  password: "secret-password",
  token: undefined,
};

const userData = JSON.stringify(user);
const usersData = JSON.stringify([user, user]);

const invoiceData = JSON.parse('{"id": 1, "name": "I-01"}');
const invoicesData = JSON.parse(
  '[{"id": 1, "name": "I-01", "paid": true}, {"id": 2, "name": "I-02"}]'
);

// Setters/Getters
console.log("-------- Setters/Getters --------");

const invoice = {
  owner: "ahmed",
  titleValue: "I-01",

  isOwner() {
    if (this.owner !== "ahmed") {
      console.log(`You are not the owner. The owner must be Ahmed.`);
      return false;
    }

    return true;
  },

  get title() {
    return this.isOwner() ? this.titleValue : undefined;
  },

  set title(value) {
    if (this.isOwner()) this.titleValue = value;
    else return undefined;
  },
};

console.log(invoice.title); // get

invoice.title = "I-01-Paid"; // set
// invoice.setTitle("I-01-Paid");
console.log(invoice.title); // get

// Prototype Inh.
console.log("-------- Prototype --------");

const userObject = {
  email: "...",
  _name: undefined,

  get name() {
    return this._name;
  },

  set name(value) {
    this._name = value;
  },

  greet() {
    console.log(this);
    console.log("Hey!");
  },
};

const adminObject = {
  // email: "....",
  deleteUser() {
    console.log("User has been deleted!");
  },
};

const superAdminObject = {
  deleteDatabase() {
    console.log("Database has been deleted!");
  },
};

// userObject: prototype object
adminObject.__proto__ = userObject;
// adminObject: prototype object
superAdminObject.__proto__ = adminObject;
// superAdminObject: prototype object
// userObject.__proto__ = superAdminObject; // Error: Cyclic prototype value

// user -> super -> admin -> user

userObject.name = "Shawqi User";
adminObject.name = "Shawqi Admin";
superAdminObject.name = "Shawqi Super Admin";

console.log(userObject.name);
console.log(adminObject.name);
console.log(superAdminObject.name);

console.log(adminObject.email);

userObject.greet();
adminObject.greet();
superAdminObject.greet();

adminObject.deleteUser();

console.log("-------- F.Prototype --------");

function Admin() {
  this.deleteUser = function () {
    console.log("User has been deleted!");
  };
}

// By default -> function -> prototype p. -> constructor -> function

// Admin.prototype = userObject;

// Method no. 01
// Admin.prototype.myProperty = "Hey from prototype!";

// Method no. 02
Admin.prototype = {
  myProperty: "Hey from prototype!",
  constructor: Admin,
};

const adminA = new Admin(); // adminA.__proto__ = userObject
const adminB = new Admin();
const adminC = new adminB.constructor();

console.log(adminA.constructor);
console.log(adminB.constructor);
console.log(adminC);

let greet = function () {};
console.log(greet.prototype.constructor === greet);

// OOP and Classes
