## [Objects](#Objects)<br/>
## [Prototypes](#Prototypes)<br/>
## [Prototypical Inheritance](#Prototypical-Inheritance)
## [Classes](#Classes)<br/>
## [Modules](#Modules)<br/>

## `Objects`
1- Introduction<br/>
2- Object Literals<br/>
Object Literal is generally used to create a single object.
```
const username = 'dipakkr';
const name = 'Deepak Kumar';
const country = 'India';
const password = '123456';

const user = { 
	username,
	name, 
	country,
	password,
};
```
3- Factories<br/>
As the name suggests, object instances are created by using a factory to make the required object for us.<br/>
When it’s not a constructor function or class, it’s called a factory function.
```
//Factory function
function createCircle(radius){
  return {
    radius
  }
}
```

4- Constructors<br/>
Calling the constructor function with the new keyword
```
function Circle(radius){
  this.radius = radius;
}
const another = new Circle(1)
```

5- Constructor Property<br/>
Any value except **null** and **undefined** has a constructor property, which refers to the corresponding type function.
The constructor property in a prototype is automatically setup to reference the constructor function.
```
Number() for numbers: (1).constructor === Number
Boolean() for booleans: (true).constructor === Boolean
String() for strings: ('hello').constructor === String
Symbol() for symbols: Symbol().constructor === Symbol
```
6- Functions are Objects<br/>

7- Value vs Reference Types<br/>
**Primitives**: String, Number, Boolean, Symbol, Undefined, Null<br/>
**Reference**: Object, Function, Array<br/>
The size of a primitive value is fixed, therefore, **JavaScript stores the primitive value on the stack**. If the value is a primitive value, when you access the variable, you manipulate the **actual value** stored in that variable. In other words, the variable that stores a primitive value is **accessed by value**.<br/>
On the other hand, the size of a reference value is dynamic so **JavaScript stores the reference value on the heap(memory)**. Unlike a primitive value, when you manipulate an object, you work on the **reference of that object**, rather than the actual object. It means a variable that stores an object is **accessed by reference**.
```
To determine the type of a primitive value you use the typeof operator.
let x = 10;
console.log(typeof(x)); // number

To find the type of a reference value, you use the instanceof operator:
let rgb = ['red','green','blue'];
console.log(rgb instanceof Array); // true
```

8- Adding or Removing Properties<br/>
```
Dot Notation:
let a = obj.something;
delete obj.something;
Bracket Notation
let b = obj['something'];
delete obj['something'];
```

9- Enumerating Properties<br/>
```
[[Enumerable]] – indicates that if a property will be returned in the for...in loop  or Object.keys() method.
ES6 obj.propertyIsEnumerable('nameProp') // => true/false
```

10- Abstraction
11- Private Properties and Methods 
12- Getters and Setters
13- Cheat Sheet
14- Exercise- Stop Watch
15- Solution- Stopwatch

## `Prototypes`
1- Inheritance
2- Prototypes and Prototypical Inheritance
3- Multi-level Inheritance
4- Property Descriptors
5- Constructor Prototypes
6- Prototype vs. Instance Members
7- Iterating Instance and Prototype Members
8- Avoid Extending the Built-in Objects
9- Cheat Sheet
10- Exercise
11- Solution

## `Prototypical-Inheritance`
1- Creating Your Own Prototypical Inheritance
2- Resetting the Constructor
3- Calling the Super Constructor
4- Intermediate Function Inheritance
5- Method Overriding
6- Polymorphism
7- When to Use Inheritance
8- Mixins
9- Cheat Sheet
10- Exercise Prototypical Inheritence
11- Solution Prototypical Inheritance
12- Exercise- Polymorphism
13- Solution- Polymorphism

## `Classes`
1- ES6 Classes
2- Hoisting
3- Static Methods
4- The This Keyword
5- Private Members Using Symbols
Private Members Using WeakMaps
7- Getters and Setters
8- Inheritance
9- Method Riding
10- Cheat Sheet
11- Exercise
12- Solution

## `Modules`
1- Modules
2- CommonJS Modules
3- ES6 Modules
4- ES6 Tooling
5- Babel
6- Webpack
7- Cheat Sheet
