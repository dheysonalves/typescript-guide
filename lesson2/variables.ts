// type annotation

/** If you wanna consider that a variable has
	exactly that type, you should consider type annotation */

// Primitive types
let apples: number = 5;
let food: string = "ham";
let hasName: boolean = true;
let nothing: undefined | null = null;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green"];
let numbers: number[] = [1, 3, 5];
let truthy: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

const json = '{"x": 10, "y": 20}';
const parsed: { x: number; y: number } = JSON.parse(json);
console.log(parsed);
