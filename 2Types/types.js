"use strict";
// In TypeScript, types are an essential feature, providing a way to add additional information about values. This can be very helpful in catching errors during compile time instead of runtime, and helps with tooling support, such as auto-completion and refactoring.
Object.defineProperty(exports, "__esModule", { value: true });
//1 Basic Types:
// Boolean: Represents a logical entity and can have two values: true and false.
var isTrue = true;
var isFalse = false;
console.log(isTrue);
console.log(isFalse);
// Number: Represents both integers and floating-point values.
var age = 20;
var students = 30;
var averageMarks = 70.5;
console.log(age);
console.log(students);
console.log(averageMarks);
// String: Represents a sequence of characters.
var name = "saleem";
var nickName = "saluu";
console.log(name.toUpperCase());
console.log(nickName.toLocaleUpperCase());
// for only captilize first letter
console.log(name.charAt(0).toUpperCase() + name.slice(1));
// slice method Purpose: The slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// Syntax: array.slice(start, end)
console.log(nickName.charAt(0).toUpperCase() + nickName.substring(1));
// The substring method in JavaScript is used to extract a portion of a string between two specified indices and return it as a new string. The original string remains unchanged. The method can be called on any string object.
var months = ["January", "February", "March", "April"];
var newArray = months.slice(1, 3);
console.log(newArray);
var secondNewArray = months.splice(1, 2, "may");
console.log(secondNewArray);
console.log(months);
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
var totolPrice = function (product1, product2) {
    return ("total price of products is :" + (product1.price * product1.quentity + product2.price * product2.quentity));
};
console.log(totolPrice(product1, product2));
//Union types: Used to define a type that could be one of several types.
// more recomanded to use union type instent of type Any.
var a;
a = 5;
a = "ali";
// a=true this will not allow
// example with Array
var arr1 = ["saleem", "ali"]; //this will only allow string type array
console.log(arr1);
var arr2 = [1, 2]; //this will only allow number type array
console.log(arr2);
var arr3 = ["saleem", 1, true];
console.log(arr3);
// Tuple: Represents an array where the type of certain elements is known.
var x;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
x.push("saleem");
x.push("ali"); //so now this is not following the protocals which we give above its allowing to add more values while we just restrict above to only 2 values will be in tuple.
var user1 = {
    name: "saleem",
    email: "saleem@gmail.com",
    role: "admin" /* Role.admin */
};
var user2 = {
    name: "ali",
    email: "ali@gmail.com",
    role: "admin" /* Role.user */
};
var isAdmin = function (Role) {
    var name = Role.name, role = Role.role;
    return role === "admin" && name === "saleem" ? " ".concat(name, " is allow to edit") : "".concat(name, " is not allow to edit");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
