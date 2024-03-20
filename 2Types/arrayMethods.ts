// difference beteen slice , seplice .shift ,unshift ,push ,pop

// In JavaScript, arrays are a fundamental data structure that allows you to store multiple values in a single variable. Understanding the difference between various array methods is crucial for manipulating arrays effectively. Let's break down the differences between slice, splice, shift, unshift, push, and pop.

// slice
// Purpose: The slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// Syntax: array.slice(start, end)
// Example:

let fruits : string[] = ['apple', 'banana', 'mango', 'orange'];
let citrus : string[] = fruits.slice(1, 3); // ['banana', 'mango']

// splice
// Purpose: The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// Example:

let months: string[] = ['January', 'February', 'March', 'April'];
let newArray :string[] = months.splice(1, 2, 'May'); // ['February', 'March']

// shift
// Purpose: The shift method removes the first element from an array and returns that removed element. This method changes the length of the array.
// Syntax: array.shift()
// Example:

let colors = ['red', 'green', 'blue'];
let removedColor = colors.shift(); // 'red'

// unshift
// Purpose: The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
// Syntax: array.unshift(item1, item2, ...)
// Example:

let numbers = [2, 3, 4];
let newLength = numbers.unshift(1); // 4

// push
// Purpose: The push method adds one or more elements to the end of an array and returns the new length of the array.
// Syntax: array.push(item1, item2, ...)
// Example:

let animals = ['cat', 'dog'];
let newAnmials = animals.push('elephant'); // 3


// pop
// Purpose: The pop method removes the last element from an array and returns that element. This method changes the length of the array.
// Syntax: array.pop()
// Example:

let cars = ['BMW', 'Audi', 'Mercedes'];
let removedCar = cars.pop(); // 'Mercedes'

// Understanding the differences between these array methods will help you choose the right method for your specific use case. Whether you need to extract a portion of an array, modify the original array, or add/remove elements from the beginning or end of an array, these methods provide the necessary functionality to manipulate arrays effectively.
