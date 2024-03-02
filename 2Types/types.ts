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
let nickName="saluu"

console.log(name.toUpperCase())
console.log(nickName.toLocaleUpperCase())
// for only captilize first letter
console.log(name.charAt(0).toUpperCase()+ name.slice(1));
console.log(nickName.charAt(0).toUpperCase()+nickName.substring(1));


let months :string[] = ["January", "February", "March", "April"];

let newArray = months.slice(1 , 3);
console.log(newArray);

let secondNewArray= months.splice(1,2,"may");
console.log(secondNewArray);
console.log(months);



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


//Union types: Used to define a type that could be one of several types.
// more recomanded to use union type instent of type Any.

let a:number | string;

a=5;
a="ali"
// a=true this will not allow

// example with Array

let arr1:string[]=["saleem","ali"]; //this will only allow string type array
console.log(arr1)

let arr2:number[]=[1,2]; //this will only allow number type array
console.log(arr2)

let arr3:(string |number | boolean)[]=["saleem",1,true];
console.log(arr3);

// Tuple: Represents an array where the type of certain elements is known.

let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

x.push("saleem");
x.push("ali"); //so now this is not following the protocals which we give above its allowing to add more values while we just restrict above to only 2 values will be in tuple.



// enums:  commonly used when you want to represent values and choose one value from multiple options.

// use const with enum to reduce code when it compile to js.

const enum Role {
    admin="admin"
    ,user="admin"
}

type LoginAccess ={
  name: string,
  email: string,
  role: string,
}


const user1:LoginAccess={
    name: "saleem",
    email: "saleem@gmail.com",
    role: Role.admin
}

let user2:LoginAccess={
    name: "ali",
    email: "ali@gmail.com",
    role: Role.user
}

let isAdmin=(Role:LoginAccess)=>{
const { name,role}=Role;
return role=== "admin" && name==="saleem" ?` ${name} is allow to edit`: `${name} is not allow to edit`
}


console.log(isAdmin(user1));
console.log(isAdmin(user2));

export {}