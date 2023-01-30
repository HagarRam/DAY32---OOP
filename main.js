//part 1:
//ex1
class Shape {
	constructor(sideLength, name, sides) {
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
	}
	calcPerimeter() {
		let result = this.sides * this.sideLength;
		return result;
	}
}

let square = new Shape('square', 4, 5);
console.log(square.calcPerimeter());

let triangle = new Shape('triangle', 3, 3);
console.log(triangle.calcPerimeter());

//B
class Square extends Shape {
	static sides = 4;
	static name = 'square';
	constructor(sideLength) {
		super(sideLength);
	}
	calcArea() {
		return 4 * this.sideLength;
	}
}

let avc = new Square(4);
console.log(avc);
console.log(avc.calcArea());
//ex2
//1
// class Circle {
// 	static PI = 3.14;
// 	constructor(radius) {
// 		this.radius = radius;
// 	}
// 	area() {
// 		return Circle.PI * this.radius ** 2;
// 	}
// }

//2
class Account {
	constructor(balance, owner) {
		this.balance = balance;
		this.owner = owner;
	}
	static create(owner) {
		return new Account(0, owner);
	}
}

//ex3
//1
// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	set toupper(x) {
// 		this.name = x.toUpperCase();
// 	}
// }

// let name1 = new Person('hagar');
// name1.toupper = 'hagar';
// console.log(name1.name);

//2
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	get resultPrice() {
		return this._price;
	}
	set resultPrice(x) {
		this.price = Math.round(x);
		return x;
	}
}
let name2 = new Product('hagar', 3.3333);
name2.resultPrice = 3.3333;
console.log(name2.price);

//ex4
// class Circle {
// 	#radius;
// 	constructor(radius) {
// 		this.#radius = radius;
// 	}
// 	get diameter() {
// 		return this.#radius;
// 	}
// 	set diameter(x) {
// 		this.#radius = x * 2;
// 		return this.#radius;
// 	}
// }
// const circle1 = new Circle(5);
// circle1.diameter = 5;
// console.log(circle1.diameter); // 10
// console.log(circle1.radius); // 5
// console.log(circle1.diameter); // 20
// console.log(circle1.radius); // 10

//ex5
// class Person1 {
// 	#firstName;
// 	#lastName;
// 	#age;
// 	constructor(firstName, lastName, age) {
// 		this.#age = age;
// 		this.#firstName = firstName;
// 		this.#lastName = lastName;
// 	}
// 	get displayInfo() {
// 		return [this.#age, this.#firstName, this.#lastName];
// 	}

// 	set displayInfo(value) {
// 		if (value[0] > 0) {
// 			return `${value[1]} ${value[2]} ${value[0]}`;
// 		} else {
// 			throw 'The radius must be a positive number';
// 		}
// 	}
// }
// const person12 = new Person1('John', 'Doe', 30);
// console.log(person12.displayInfo); // "John Doe (30 years old)"
// person12.age = -10; // Invalid age
// console.log(person12.displayInfo); // "John Doe (30 years old)"

//ex6
// class BankAccount {
// 	constructor(accountHolder, accountNumber, accountBalance) {
// 		this.accountBalance = accountBalance;
// 		this.accountNumber = accountNumber;
// 		this.accountHolder = accountHolder;
// 	}
// 	get checkBalance() {
// 		return this.accountBalance;
// 	}
// 	set deposit(x) {
// 		return (this.accountBalance += x);
// 	}
// 	set withdraw(x) {
// 		return (this.accountBalance -= x);
// 	}
// 	set checkBalance() {
// 		return this.accountBalance;
// 	}
// }

// const myAccount = new BankAccount('123456', 'John Doe', 100);
// console.log(myAccount.checkBalance); // 100
// myAccount.deposit = 50;
// console.log(myAccount.checkBalance); // 150
// myAccount.withdraw = 25;
// console.log(myAccount.checkBalance); // 125

//ex7
//a
// class Animal {
// 	constructor(name, species) {
// 		this.name = name;
// 		this.species = species;
// 	}
// 	makeSound() {
// 		return `${this.name}  his sound ${this.species} `;
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, species) {
// 		super(name, species);
// 	}
// 	bark() {
// 		return `dog is barking`;
// 	}
// }
// class Cat extends Animal {
// 	constructor(name, species) {
// 		super(name, species);
// 	}
// 	meow() {
// 		return `the cat is meowing`;
// 	}
// }
// class Lion extends Animal {
// 	constructor(name, species) {
// 		super(name, species);
// 	}
// 	roar() {
// 		return `the lion is roaring`;
// 	}
// }

//part 2
//ex1
// class Person {
//     	constructor(firstName, lastName, age) {
//     		this.firstName = firstName;
//     		this.lastName = lastName;
//     		this.age = age;
//     	}
//         getFullName(){
//             return `${this.firstName} ${this.lastName} `;
//         }
//     }
// class Student extends Person{
//     super(firstName, lastName, age)
//     constructor(studentId){
//         this.studentId = studentId;
//     }
//     getDetails(){
//         return `${this.firstName} ${this.lastName} ${this.studentId} `;
//     }
// }

//ex2
// class BankAccount {
// 	constructor(balance) {
// 		this._balance = balance;
// 	}
// 	get checkBalance() {
// 		return this._balance;
// 	}
// 	set deposit(x) {
// 		return (this._balance += x);
// 	}
// 	set checkBalance(x) {
// 		return (this._balance = x);
// 	}
// }

//ex3
class Car {
	constructor(make, model, year) {
		this._make = make;
		this._model = model;
		this._year = year;
	}
	getDetails(make, model, year) {
		this._make = make;
		this._model = model;
		this._year = year;
	}
	get details() {
		return [this._make, this._model, this._year];
	}
}
const car = new Car('Toyota', 'Camry', 2020);
car.getDetails('Toyota', 'Camry', 122);
console.log(car.details);
console.log(); // Make: Toyota, Model: Camry, Year: 2020
const car2 = new Car('Toyota', 'Camry', 2022);
console.log(car2.details); // Make: Honda, Model: Civic, Year: 2022

//ex4
class BankAccount {
	constructor(balance, owner, transactions) {
		this._balance = balance;
		this._owner = owner;
		this._transactions = [];
	}
	deposit(amount) {
		let balance = (this._balance += amount);
		this._transactions.push(balance);
	}
	withdraw(amount) {
		let balance = (this._balance -= amount);
		this._transactions.push(balance);
	}
	getBalance() {
		return this._balance;
	}
	getTransactions() {
		return this._transactions;
	}
}

//ex5
class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}

	run(speed) {
		this.speed = speed;
		console.log(`${this.name} is running at speed ${this.speed}.`);
	}

	stop() {
		this.speed = 0;
		console.log(`${this.name} is standing still.`);
	}
}

class Rabbit extends Animal {
	hide() {
		console.log(`${this.name} is hiding.`);
	}

	stop() {
		super.stop();
		this.hide();
	}
}

let rabbit = new Rabbit('White Rabbit');
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

//ex6

class Calculator {
	constructor(number1, number2) {
		this.number1 = number1;
		this.number2 = number2;
	}
	add(number1, number2) {
		if (number2 === undefined) {
			return number1;
		}
		return number1 + number2;
	}
}

//ex7
const formatString = (text, options = {}) => {
	if (options.uppercase === 'true') {
		return text.toUpperCase();
	} else if (options.lowercase === 'true') {
		return text.toLowerCase();
	} else {
		return text;
	}
};

console.log(formatString('Hello World!')); // Output: Hello World!
console.log(formatString('Hello World!', { uppercase: 'true' })); // Output: HELLO WORLD
console.log(formatString('Hello World!', { lowercase: 'true' })); // Output: hello world!

class Employee {
	constructor() {
		if (this.constructor == Employee)
			console.log('Object of Abstract Class cannot be created');
	}
	getSalary() {
		throw new Error('Object of Abstract Class cannot be created');
	}
	getMonthlyBonus() {
		throw new Error('Object of Abstract Class cannot be created');
	}
}
class Manager extends Employee {
	constructor(salary) {
		super();
		this.salary = salary;
	}
	getSalary() {
		return this.salary;
	}
	getMonthlyBonus() {
		return this.salary * 0.1;
	}
}
class Developer extends Employee {
	constructor(salary) {
		super();
		this.salary = salary;
	}
	getSalary() {
		return this.salary;
	}
	getMonthlyBonus() {
		return this.salary * 0.05;
	}
}

const manager = new Manager(50000);
console.log(manager.getSalary()); // 50000
console.log(manager.getMonthlyBonus()); // 5000
const developer = new Developer(40000);
console.log(developer.getSalary()); // 40000
console.log(developer.getMonthlyBonus()); // 2000
const emp = new Employee(); // it will throw error "Object of Abstract Class cannot be created"
