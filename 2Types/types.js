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
var product1 = {
    name: "shoes",
    price: 2000,
    quentity: 10,
    isPaid: false,
};
var product2 = {
    name: "bags",
    price: 3000,
    quentity: 20,
    isPaid: false,
};
// now calculate the total price of product
var totalPrice1 = function (product1) {
    return "the total price of ".concat(product1.name, " is ").concat(product1.price * product1.quentity);
};
console.log(totalPrice1(product1));
