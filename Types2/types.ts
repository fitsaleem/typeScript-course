// In TypeScript, types are an essential feature, providing a way to add additional information about values. This can be very helpful in catching errors during compile time instead of runtime, and helps with tooling support, such as auto-completion and refactoring.


//1 Basic Types:

// Boolean: Represents a logical entity and can have two values: true and false.

let isDone:boolean=true;
let isNotDone=false;

console.log(isDone);
console.log(isNotDone);


// Number: Represents both integers and floating-point values.

let age:number=20;
let students=30;
let averageMarks=70.5;

console.log(age)
console.log(students)
console.log(averageMarks)

// String: Represents a sequence of characters.

let name:string="saleem";
let nickName="salu"

console.log(name.toUpperCase())
console.log(nickName.toLocaleUpperCase())


//Any: You can use this type if you are not sure what type a value will have.

let notSure:any=5;
notSure="maybe striung"
notSure=true;
console.log(notSure)
export {}

