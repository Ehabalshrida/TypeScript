//Notes:
// typeScript static type
// console.log("welcome Type script");
let price: number = 1;
let isActive: boolean = true;
let title: any = 10;
title = "yousef";
title = true;
let book; // it use it as any type
function handleInput(input: any) {
  console.log(input);
}
const arr: number[] = [1, 2, 4];
const arrStr: string[] = ["1", "2", "4"];
const arrAny: any[] = [1, "rr", true, undefined, null];
let arrBoolean: boolean[];
//tuple : array with fixed length
let arrTuple: [number, string] = [1, "dee"];
let arrTupleAny: [number, any];
arrTupleAny = [1, "reee"];
arrTupleAny = [4, true];
// enum in type script
enum Size {
  Smal = "small",
  Medium = "medium",
  Large = "large",
}
let tableSize: Size = Size.Medium;
// console.log({ tableSize });
// functions
// without return
function handleName(firstName: string, lastName: string, midName: string): void {
  let anotherNmae: string = "name";
  console.log(firstName + lastName);
}
// with return
function handleNameWithReturn(firstName: string, lastName: string, midName: string): string {
  return firstName + lastName;
}
// objects
// type aliase
type User = {
  readonly id: number;
  firstName?: string;
  isAdmin: boolean;
  lastName: string;
  fullName(fullName: string): string;
};

let user1: User = {
  id: 1,
  firstName: "ali",
  lastName: "hasan",
  isAdmin: true,
  fullName: (fullName: string) => {
    return fullName;
  },
};
let user2: User = {
  id: 2,
  lastName: "hasan",
  isAdmin: true,
  fullName: (fullName: string) => {
    return "hello" + fullName;
  },
};
// union type
// we can more than one type for the variable
type data = number | string;
const dataNum: data = 3;
const dataStr: data = "ali";
// const dataBool : data = true ==> error since not allowed to have boolean data

let age: number | string = 12;
age = "12";
function handleAge(age: string | number): number | string {
  if (typeof (age === "number")) {
    return 123;
  } else {
    return "123";
  }
}

// intersection type

type Details = {
  price: number;
  bookName: string;
};
type Author = {
  authorName: string;
};
type Book = Details & Author; // this called intersection type

let myBook: Book = {
  price: 10,
  bookName: "data",
  authorName: "ahmad",
};

// literal type

type Price = 1 | 2;
type Data = number | string;
let value: 1 | 3;

let myData: Data = "true";
// let myData:Data = true
let myNumber: Price = 2;
// let myNumber: Price = 3 error
value = 3;
// value = 4 error

// unknown type
// wee don't know what's the type
function handleInputType(input: unknown): void {
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

// never type
/*the differenece bettween void and never
 function with type void reach to the end of the function block
 but never not reach to it
 */
function handleNeverType(message: string): never {
  throw new Error(message);
  // console.log(never)
}
// objects and classes

class Acount {
  // public readonly id: number;
  // public owner: string;
  // private balance: number;
  private static _members: number = 0;
  public userName?: string;
  // constructor(id: number, owner: string, balance: number) {
  //   this.id = id;
  //   this.owner = owner;
  //   this.balance = balance;
  // }

  // parameters properities
  constructor(public readonly id: number, public owner: string, private _balance: number) {
    Acount._members++;
  }
  // static keyword
  static logger(): void {
    console.log("belong to class");
  }

  chargeBalance(amount: number): void {
    this._balance = amount;
  }
  getBalance(): number {
    return this._balance;
  }
  // getters & setters
  get member(): number {
    return Acount._members;
  }
  get balance(): number {
    return this._balance;
  }
  set balance(amount: number) {
    this._balance = this._balance + amount;
  }
}
class Car {}

let yousefAccount = new Acount(1, "yousef", 100);
let AhmadAccount = new Acount(2, "Ahmad", 100);

// console.log({ yousefAccount });
yousefAccount.chargeBalance(300);
// yousefAccount.id= error since id readonly
yousefAccount.userName = " yousefAli";
// yousefAccount._balance error its private can't be access outside the class
// console.log({ yousefAccountBalance: yousefAccount._balance }); error its private can't be access outside the class
// console.log({ yousefAccount });
// console.log({ yousefAccountBalance: yousefAccount.getBalance() });
// console.log({ yousefAccountBalance: yousefAccount.balance });
yousefAccount.balance = 400;
// console.log({ yousefAccountBalance: yousefAccount.balance });

// instanceof : to check if this object of class x
//  console.log(yousefAccount instanceof Acount); // true
//  console.log(yousefAccount instanceof Car);    // false
// Acount.logger()
// console.log(Acount._members) error private can't be accessed out of class
// console.log(yousefAccount.member);
// console.log(AhmadAccount.member);

// inheritance
// parent/ base/ super class
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk(): void {
    console.log("walking");
  }
  protected drink(): void {
    console.log("drinking");
  }
}
// child / derived/ sub class
class student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  override get fullName(): string {
    return "student " + super.fullName;
  }
  student(): void {
    console.log("from student");
    this.drink();
  }
}
// inherit from sub class
class Kg2 extends student {
  constructor(public kgAge: number, studentId: number, firstName: string, lastName: string) {
    super(studentId, firstName, lastName);
  }
}

const newStudent = new student(1, "ali", "shaker");
// console.log(newStudent)
// console.log(newStudent.fullName)
// console.log(newStudent.walk())
// console.log(newStudent.student())
// console.log('........')
const kg2 = new Kg2(4, 1, "ali", "shaker");
// console.log(kg2)
// console.log(kg2.fullName)
// console.log(kg2.walk())
// console.log(kg2.student())

// inherit constructor
// when you don't have properities inside the child
// so constructor inherited from parent class
// and no need to define constuctor inside derived
// class

class Teacher extends Person {
  override get fullName(): string {
    return "teacher " + super.fullName;
  }
}

const teacher = new Teacher("mohammad", "ahmad");
const stud = new student(1, "ali", "shaker");

// console.log(teacher.fullName)
// console.log(stud.fullName)

// access modifiers
// public : can be access everywhere
// private: access only inside the class which it defined in.
// protected: access inside the class and any inherited class from it (class and all sub classes)

// polymorphism:

const studentPerson = new student(1, "hassan", "ali");
const teacherPerson = new Teacher("hassan", "ali");

const people: Person[] = [studentPerson, teacherPerson];
for (let person of people) {
  // console.log(person.fullName)
}

// index signature

// this format not allowed in type script
// let user = {}
// user.name="ali"

class Employee {
  [key: string]: any;
}
let employee = new Employee();

employee.name = "ali";
employee.grade = "A";
employee.isPass = true;
employee.age = 22;

// console.log({employee})

// abstract class and abstract method
// 1- abstract class can't be create instance of, but it can be inherited
// 2- inside abstract class you can create abstract method and non abstract method
// 3- abstract method shouldn't have a body inside the abstarct class
// 4- absract method should be overrided inside the child class
// 5- abstract method define only inside abstract class
// 6- can have a constructor
abstract class Payment {
  constructor(public currency: string) {}
  abstract pay(): void;

  protected paid(): void {
    console.log(true);
  }
  protected notPaid(): void {
    console.log(false);
  }
}
class PayWithDinar extends Payment {
  pay(): void {
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
  pay(): void {
    console.log(this.currency);
  }
  yesPaid() {
    this.paid();
  }
  noPaid() {
    this.notPaid();
  }
}

// const payment = new Payment() not allowed
let paymentWithDinar = new PayWithDinar("Dinar");
let paymentWithDrhm = new PayWithDrhm("Drhm");
// console.log(paymentWithDinar.currency)
// console.log(paymentWithDinar.pay())
// console.log(paymentWithDinar.noPaid())
// console.log("abstraction")
// console.log(paymentWithDrhm.currency)
// console.log(paymentWithDrhm.pay())
// console.log(paymentWithDrhm.yesPaid())

// interface
// define with methods without body
// should be implement them when you implement the interface by using any class
// interface can be extendes from more than one interface
// class can implement more than one interface
// class can inherite from only one class not allowed multi inheritance
// abstract class inherited but interface implemented by another class
// abstract is class

interface Auth {
  register(userName: string, password: string, email: string): void;
  login(password: string, email: string): void;
  role: string;
}
interface Auth2 extends Auth {}
interface Auth3 {}
interface Auth4 extends Auth3, Auth2 {}
class Account implements Auth, Auth3 {
  role: string = "admin";
  register(userName: string, password: string, email: string): void {
    // console.log({userName, password, email})
  }
  login(password: string, email: string): void {
    // console.log({password, email})
  }
}
let account = new Account();
account.register("nadeen", "1234", "nadeen@gmail.com");
account.login("1234", "nadeen@gmail.com");

// encapsulation
// not allowed to access any properity direct, you have to define it as private field and define
// getter and setter method to do that

// generics -
//1- generics class
// by this way we make the variable type as dynamic values
// can be set when create an instance
class Product<N, P> {
  constructor(public name: N, public price: P) {}
  getProductName<N>(val: N): N {
    return val;
  }
}

const product1 = new Product("apple", 12);
const product2 = new Product("apple", "12");
//2- generics functions and methods

function getData<N>(num: N): N {
  return num;
}

// console.log(getData<Number>(1))
// console.log(product1.getProductName<string>('apple'))

// 3- generics interface

interface Item<T> {
  item: T;
  desc: string;
  price: number;
}

type Fruit = {
  color: string;
  weight: number;
  type: string;
};
let product: Item<Fruit> = {
  item: {
    color: "orange",
    weight: 12,
    type: "italy",
  },
  desc: "usefull fruit",
  price: 10,
};
// 4- generic constraints
// to define constrains on the acceptable data type
function handleProduct<T extends string | Number>(product: T): T {
  return product;
}
handleProduct<string>("footbal"); // pass
handleProduct("footbal"); // pass, note we can remove value between <> as we did with class
handleProduct<number>(4); // pass
// handleProduct<boolean>(true) // error

interface Article {
  title: string;
  writter: string;
}
type laptop = {
  brand: string;
  expireDate: string;
};
type NewsLetter = {
  title: string;
  writter: string;
};

function getProduct<T extends laptop | Article>(product: T): T {
  return product;
}
getProduct({ title: "string", writter: "string" });
getProduct<Article>({ title: "string", writter: "string" });
getProduct<laptop>({ brand: "string", expireDate: "string" });

// 5- extends generic class
// how to inherite from class has geniric type
// 1- if the child class not generic type
class Store<T> {
  private _product: T[] = [];
  addToProduct(product: T): void {
    this._product.push(product);
  }
}

class Electronic extends Store<laptop> {}

const laptop = new Electronic();

laptop.addToProduct({ brand: "string", expireDate: "string" });
// 2- if the child class if generic type
class Library<T> extends Store<T> {}
const library = new Library<Article>();
library.addToProduct({ title: "string", writter: "string" });

// keyof

interface Iperson {
  userName: string;
  email: string;
  password: string;
}
//ex1:
// type Human= keyof Iperson <===>"userName" | "email" | "password"

// const human: Human = "userName"
// ex2:

type TypePerson = {
  userName: string;
  email: string;
  password: string;
  description: string;
};
// type Human= keyof TypePerson
// const human: Human = "description"

// ex3:

const objectPerson = {
  userName: "string",
  email: "string",
  password: "string",
  description: "string",
  price: 1,
};

type Human = keyof typeof objectPerson;
const human: Human = "price";

// to clear type of variable using interface
interface BookStu {
  price: number;
  title: string;
  description: string;
}

const bookStr: BookStu = {
  price: 12,
  title: "string",
  description: "string",
};

// type mapping in type script :

type Invoice = {
  id: number;
  value: number;
};

let invoice: Invoice = {
  id: 1,
  value: 100,
};

// console.log({ invoice })
invoice.id = 3;
// console.log({ invoiceAfterChange: invoice })

// i want t change the type to be read only
// you have to use index signature and keyof

type InvoiceReadonly<T> = {
  readonly [key in keyof T]: T[key];
};
let newInvoive: InvoiceReadonly<Invoice> = {
  id: 5,
  value: 101,
};
// console.log({ newInvoive })
// newInvoive.id = 6 ==> it reads only

// utility types in typeScript
//  we have 22 utility types in type script
// 1- omit type
// to exclude any properity we don't need it
type calendar = {
  startDate: string;
  endDate: string;
  day: string;
  month: string;
};

const date1: Omit<calendar, "day" | "month"> = {
  startDate: "string",
  endDate: "string",
};
// 2- pick type
// to include any properity we don't need it
const date2: Pick<calendar, "day" | "month"> = {
  day: "string",
  month: "string",
};
// 2- Partial type
// make all property optional
const date3: Partial<calendar> = {
  day: "string",
  month: "string",
};
// debugger
let userName: string = "ali";

if (userName === "ali") {
  userName = "hasan";
  console.log(callNexName("Khaled"));
}

function callNexName(name: string): string {
  // console.log({name})
  return "Mr" + name;
}
// console.log({userName})

// decorator - class decorator

// function Controller (constructor: Function):void{
// constructor.prototype.endPoint = '/api/auth'
// constructor.prototype.login = ()=>{
//   console.log("logged in")
// }
// constructor.prototype.logout = function(){
//   console.log("logout")
// }
// }
// @Controller
// class Auth {

// }
// const auth = new Auth()
// @ts-ignore
// console.log(auth.endPoint)
// @ts-ignore

// console.log(auth.login())
// @ts-ignore
// console.log(auth.logout())

// decorator factory : used to pass params to decorator

function Controller(endPoint: string) {
  return (constructor: Function) => {
    constructor.prototype.endPoint = endPoint;
    constructor.prototype.login = () => {
      console.log("logged in");
    };
    constructor.prototype.logout = function () {
      console.log("logout");
    };
  };
}
@Role("admin")
@Controller("/api/auth")
class Auth {}
@Role("user")
@Controller("/api/products")
class Products {}

const auth = new Auth();
const products = new Products();
// @ts-ignore
// console.log(auth.endPoint);
// @ts-ignore
// console.log(products.endPoint);

// decorator composition : class can use more than decorator 

// let define new decorator

function Role (role: string){
  return (constructor: Function)=>{
    constructor.prototype.role = role

  }
}

// console.log(auth.role)
//@ts-ignore
// console.log(products.role)

// method decorator 

function Logger (constructor:Object, methodName: string, descriptor: PropertyDescriptor){
// console.log({constructor, methodName, descriptor})
const originMethod = descriptor.value
descriptor.value = function (foodType:string){
console.log("beforCallingOriginMethod")
originMethod.call(this, foodType)
console.log("afterCallingOriginMethod")
}
}
function Handler (constructor:Object, methodName: string, descriptor: PropertyDescriptor){
  // console.log({constructor, methodName, descriptor})
  descriptor.value = function (){console.log("no call")}
  
  
  }

class Animal {
  @Handler
  walk(){
    console.log("walking")
  }
  @Logger
  eat(foodType:string){
    console.log({foodType})
  }

}
//@ts-ignore
const animal = new Animal()
// animal.walk()
// animal.eat("orange")

// accessor decorator : which apply on getter method
function ToUpperCase( constructor:Object, getterMethod: string, descriptor:PropertyDescriptor){
// console.log({constructor, getterMethod, descriptor})
const orignalMethod = descriptor.get
descriptor.get = function (){
  const result = orignalMethod?.call(this)
  return result.toUpperCase()
}
}
class Client {
  constructor(public firstname: string, public lastName: string){

  }
  @ToUpperCase
  get fullName():string
{
  return this.firstname + this.lastName
}}

const client = new Client("ali","hassan")
// console.log({client})
// console.log({clientFullName: client.fullName})

// properity decorator:
// apply on the property 
function ValidatEmail (constructor: object, propertyName:string){
let value:string

const descriptor:PropertyDescriptor = {
  get(){
    return value
  },
  set(newVal){
    if (!newVal.includes("@") || !newVal.includes(".com")){
      throw new Error("inavlid email")
    }else {
      value = newVal
    }
  }
  
}
Object.defineProperty(constructor,propertyName, descriptor)
}
class UserReg {
  @ValidatEmail
  email: string ;
constructor(email:string){
  this.email= email
}
}
// const userReg = new UserReg("ali@")
const userReg = new UserReg("ali@dd.com")

// console.log(userReg.email)

// parameter decorator

function GetParameterIndex(constructor: Object, parameterName:string, parameterIndex:number){
  console.log({constructor, parameterName, parameterIndex})
  if(parameterIndex === 0){
    console.log("First Param")
  }
  else  if (parameterIndex === 1){
    console.log("Second Param")
  }
}

class DataUser {

  getData(@GetParameterIndex index:number, page:number){
    console.log({index,page})
  }
}