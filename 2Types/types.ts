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

//Type aliases: A way to create a new name for a type.

type Product={
    name: string;
    price: number;
    quentity: number;
    isPaid: boolean;
}

let product1:Product={
    name: "shoes",
    price: 2000,
    quentity: 10,
    isPaid: false,
}

let product2:Product={
    name: "bags",
    price: 3000,
    quentity: 20,
    isPaid: false,
}

// now calculate the total price of product

let totalPrice1=(product1:Product)=>{
  return `the total price of ${product1.name} is ${product1.price*product1.quentity}`
}

console.log(totalPrice1(product1))

