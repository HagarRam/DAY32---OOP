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
// 	toupper() {
// 		return this.name.toUpperCase();
// 	}
// }

//2
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	resultPrice() {
		let newPrice = (this.price = Math.round(price * 100) / 100);
		return newPrice;
	}
}

//ex4
class Circle {
	#radius;
	constructor(radius) {
		this.#radius = radius;
	}
	diameter() {
		return this.#radius * 2;
	}
}
// const circle1 = new Circle(5);
// console.log(circle1.diameter()); // 10

//ex5
class Person {
	#firstName;
	#lastName;
	#age;
	constructor(firstName, lastName, age) {
		this.#age = age;
		this.#firstName = firstName;
		this.#lastName = lastName;
	}
	displayInfo() {
		return `${this.#firstName} ${this.#lastName} ${this.#age}`;
	}
}
//ex6
class BankAccount {
	constructor(accountHolder, accountNumber, accountBalance) {
		this.accountBalance = accountBalance;
		this.accountNumber = accountNumber;
		this.accountHolder = accountHolder;
	}
	deposit(amount) {
		return (this.accountBalance += amount);
	}
	withdraw(amount) {
		return (this.accountBalance -= amount);
	}
	checkBalance() {
		return this.accountBalance;
	}
}

//ex7
//a
class Animal {
	constructor(name, species) {
		this.name = name;
		this.species = species;
	}
	makeSound() {
		return `${this.name}  his sound ${this.species} `;
	}
}

class Dog extends Animal {
	constructor(name, species) {
		super(name, species);
	}
	bark() {
		return `dog is barking`;
	}
}
class Cat extends Animal {
	constructor(name, species) {
		super(name, species);
	}
	meow() {
		return `the cat is meowing`;
	}
}
class Lion extends Animal {
	constructor(name, species) {
		super(name, species);
	}
	roar() {
		return `the lion is roaring`;
	}
}
