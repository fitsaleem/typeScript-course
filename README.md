# typeScript-course
Typescript tutorial series for beginners to advance lavel

**why you want to learn typescript , why its better then javaScript**

Typescript is a superset of JavaScript that adds static typing and advanced features to the language. It helps developers to catch potential errors during compilation. With Typescript, you can enjoy the benefits of object-oriented programming and compile-time error checking, making your code more maintainable and reliable.

It was develop my microsoft on oct,1,2012, and now its open source with large community support.

any valid javaScript code is also a valid typescript code.

Its providing extra features like interface,tuples,enums,geneeric,classs and so on.

browsers donot support type script so at the end you will compile it on javaScript.

typescript is just a development tool.


# TypeScript types:

In TypeScript, types are an essential feature, providing a way to add additional information about values. This can be very helpful in catching errors during compile time instead of runtime, and helps with tooling support, such as auto-completion and refactoring.

Here are some of the basic and advanced types in TypeScript:

**Basic Types:**

1: Boolean: Represents a logical entity and can have two values: true and false.

2: Number: Represents both integers and floating-point values.

3: String: Represents a sequence of characters.

4: Any: You can use this type if you are not sure what type a value will have.

(You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
 )

5: Void: Mostly used in function return types to represent the lack of return values.

6: Never: The never type in TypeScript represents a type of values that never occur. It's the return type for functions that never return or always throw an exception.

7: Type aliases: A way to create a new name for a type.

8: Enum:  commonly used when you want to represent values and choose one value from multiple options. In typescript when enum constant are not explicitly assigned numeric values they are automatically assigned incremental numerice value starting from 0.the default numerice value of first  enum constant is 0.  


