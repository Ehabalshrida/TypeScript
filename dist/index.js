"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let price = 1;
let isActive = true;
let title = 10;
title = "yousef";
title = true;
let book;
function handleInput(input) {
    console.log(input);
}
const arr = [1, 2, 4];
const arrStr = ["1", "2", "4"];
const arrAny = [1, "rr", true, undefined, null];
let arrBoolean;
let arrTuple = [1, "dee"];
let arrTupleAny;
arrTupleAny = [1, "reee"];
arrTupleAny = [4, true];
var Size;
(function (Size) {
    Size["Smal"] = "small";
    Size["Medium"] = "medium";
    Size["Large"] = "large";
})(Size || (Size = {}));
let tableSize = Size.Medium;
function handleName(firstName, lastName, midName) {
    let anotherNmae = "name";
    console.log(firstName + lastName);
}
function handleNameWithReturn(firstName, lastName, midName) {
    return firstName + lastName;
}
let user1 = {
    id: 1,
    firstName: "ali",
    lastName: "hasan",
    isAdmin: true,
    fullName: (fullName) => {
        return fullName;
    },
};
let user2 = {
    id: 2,
    lastName: "hasan",
    isAdmin: true,
    fullName: (fullName) => {
        return "hello" + fullName;
    },
};
const dataNum = 3;
const dataStr = "ali";
let age = 12;
age = "12";
function handleAge(age) {
    if (typeof (age === "number")) {
        return 123;
    }
    else {
        return "123";
    }
}
let myBook = {
    price: 10,
    bookName: "data",
    authorName: "ahmad",
};
let value;
let myData = "true";
let myNumber = 2;
value = 3;
function handleInputType(input) {
    if (typeof input === "string") {
        input.toUpperCase();
    }
    if (typeof input === "number") {
        input.toFixed();
    }
    if (typeof input === "boolean") {
        input.valueOf();
    }
}
function handleNeverType(message) {
    throw new Error(message);
}
class Acount {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        Acount._members++;
    }
    static logger() {
        console.log("belong to class");
    }
    chargeBalance(amount) {
        this._balance = amount;
    }
    getBalance() {
        return this._balance;
    }
    get member() {
        return Acount._members;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        this._balance = this._balance + amount;
    }
}
Acount._members = 0;
class Car {
}
let yousefAccount = new Acount(1, "yousef", 100);
let AhmadAccount = new Acount(2, "Ahmad", 100);
yousefAccount.chargeBalance(300);
yousefAccount.userName = " yousefAli";
yousefAccount.balance = 400;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
    drink() {
        console.log("drinking");
    }
}
class student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    get fullName() {
        return "student " + super.fullName;
    }
    student() {
        console.log("from student");
        this.drink();
    }
}
class Kg2 extends student {
    constructor(kgAge, studentId, firstName, lastName) {
        super(studentId, firstName, lastName);
        this.kgAge = kgAge;
    }
}
const newStudent = new student(1, "ali", "shaker");
const kg2 = new Kg2(4, 1, "ali", "shaker");
class Teacher extends Person {
    get fullName() {
        return "teacher " + super.fullName;
    }
}
const teacher = new Teacher("mohammad", "ahmad");
const stud = new student(1, "ali", "shaker");
const studentPerson = new student(1, "hassan", "ali");
const teacherPerson = new Teacher("hassan", "ali");
const people = [studentPerson, teacherPerson];
for (let person of people) {
}
class Employee {
}
let employee = new Employee();
employee.name = "ali";
employee.grade = "A";
employee.isPass = true;
employee.age = 22;
class Payment {
    constructor(currency) {
        this.currency = currency;
    }
    paid() {
        console.log(true);
    }
    notPaid() {
        console.log(false);
    }
}
class PayWithDinar extends Payment {
    pay() {
        console.log(this.currency);
    }
    yesPaid() {
        this.paid();
    }
    noPaid() {
        this.notPaid();
    }
}
class PayWithDrhm extends Payment {
    pay() {
        console.log(this.currency);
    }
    yesPaid() {
        this.paid();
    }
    noPaid() {
        this.notPaid();
    }
}
let paymentWithDinar = new PayWithDinar("Dinar");
let paymentWithDrhm = new PayWithDrhm("Drhm");
class Account {
    constructor() {
        this.role = "admin";
    }
    register(userName, password, email) {
    }
    login(password, email) {
    }
}
let account = new Account();
account.register("nadeen", "1234", "nadeen@gmail.com");
account.login("1234", "nadeen@gmail.com");
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getProductName(val) {
        return val;
    }
}
const product1 = new Product("apple", 12);
const product2 = new Product("apple", "12");
function getData(num) {
    return num;
}
let product = {
    item: {
        color: "orange",
        weight: 12,
        type: "italy",
    },
    desc: "usefull fruit",
    price: 10,
};
function handleProduct(product) {
    return product;
}
handleProduct("footbal");
handleProduct("footbal");
handleProduct(4);
function getProduct(product) {
    return product;
}
getProduct({ title: "string", writter: "string" });
getProduct({ title: "string", writter: "string" });
getProduct({ brand: "string", expireDate: "string" });
class Store {
    constructor() {
        this._product = [];
    }
    addToProduct(product) {
        this._product.push(product);
    }
}
class Electronic extends Store {
}
const laptop = new Electronic();
laptop.addToProduct({ brand: "string", expireDate: "string" });
class Library extends Store {
}
const library = new Library();
library.addToProduct({ title: "string", writter: "string" });
const objectPerson = {
    userName: "string",
    email: "string",
    password: "string",
    description: "string",
    price: 1,
};
const human = "price";
const bookStr = {
    price: 12,
    title: "string",
    description: "string",
};
let invoice = {
    id: 1,
    value: 100,
};
invoice.id = 3;
let newInvoive = {
    id: 5,
    value: 101,
};
const date1 = {
    startDate: "string",
    endDate: "string",
};
const date2 = {
    day: "string",
    month: "string",
};
const date3 = {
    day: "string",
    month: "string",
};
let userName = "ali";
if (userName === "ali") {
    userName = "hasan";
    console.log(callNexName("Khaled"));
}
function callNexName(name) {
    return "Mr" + name;
}
function Controller(endPoint) {
    return (constructor) => {
        constructor.prototype.endPoint = endPoint;
        constructor.prototype.login = () => {
            console.log("logged in");
        };
        constructor.prototype.logout = function () {
            console.log("logout");
        };
    };
}
let Auth = class Auth {
};
Auth = __decorate([
    Role("admin"),
    Controller("/api/auth")
], Auth);
let Products = class Products {
};
Products = __decorate([
    Role("user"),
    Controller("/api/products")
], Products);
const auth = new Auth();
const products = new Products();
function Role(role) {
    return (constructor) => {
        constructor.prototype.role = role;
    };
}
function Logger(constructor, methodName, descriptor) {
    const originMethod = descriptor.value;
    descriptor.value = function (foodType) {
        console.log("beforCallingOriginMethod");
        originMethod.call(this, foodType);
        console.log("afterCallingOriginMethod");
    };
}
function Handler(constructor, methodName, descriptor) {
    descriptor.value = function () { console.log("no call"); };
}
class Animal {
    walk() {
        console.log("walking");
    }
    eat(foodType) {
        console.log({ foodType });
    }
}
__decorate([
    Handler
], Animal.prototype, "walk", null);
__decorate([
    Logger
], Animal.prototype, "eat", null);
const animal = new Animal();
function ToUpperCase(constructor, getterMethod, descriptor) {
    const orignalMethod = descriptor.get;
    descriptor.get = function () {
        const result = orignalMethod === null || orignalMethod === void 0 ? void 0 : orignalMethod.call(this);
        return result.toUpperCase();
    };
}
class Client {
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstname + this.lastName;
    }
}
__decorate([
    ToUpperCase
], Client.prototype, "fullName", null);
const client = new Client("ali", "hassan");
function ValidatEmail(constructor, propertyName) {
    let value;
    const descriptor = {
        get() {
            return value;
        },
        set(newVal) {
            if (!newVal.includes("@") || !newVal.includes(".com")) {
                throw new Error("inavlid email");
            }
            else {
                value = newVal;
            }
        }
    };
    Object.defineProperty(constructor, propertyName, descriptor);
}
class UserReg {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    ValidatEmail
], UserReg.prototype, "email", void 0);
const userReg = new UserReg("ali@dd.com");
function GetParameterIndex(constructor, parameterName, parameterIndex) {
    console.log({ constructor, parameterName, parameterIndex });
    if (parameterIndex === 0) {
        console.log("First Param");
    }
    else if (parameterIndex === 1) {
        console.log("Second Param");
    }
}
class DataUser {
    getData(index, page) {
        console.log({ index, page });
    }
}
__decorate([
    __param(0, GetParameterIndex)
], DataUser.prototype, "getData", null);
//# sourceMappingURL=index.js.map