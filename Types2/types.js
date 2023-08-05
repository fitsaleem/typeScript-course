"use strict";
// In TypeScript, types are an essential feature, providing a way to add additional information about values. This can be very helpful in catching errors during compile time instead of runtime, and helps with tooling support, such as auto-completion and refactoring.
Object.defineProperty(exports, "__esModule", { value: true });
//1 Basic Types:
// Boolean: Represents a logical entity and can have two values: true and false.
var isDone = true;
var isNotDone = false;
console.log(isDone);
console.log(isNotDone);
// Number: Represents both integers and floating-point values.
var age = 20;
var students = 30;
var averageMarks = 70.5;
console.log(age);
console.log(students);
console.log(averageMarks);
// String: Represents a sequence of characters.
var name = "saleem";
var nickName = "salu";
console.log(name.toUpperCase());
console.log(nickName.toLocaleUpperCase());
//Any: You can use this type if you are not sure what type a value will have.
var notSure = 5;
notSure = "maybe striung";
notSure = true;
console.log(notSure);
