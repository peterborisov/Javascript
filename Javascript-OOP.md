[Objects](#Objects)<br/>
[Prototypes](#Prototypes)<br/>
[Prototypical Inheritance](#Prototypical-Inheritance)
[Classes](#Classes)<br/>
[Modules](#Modules)<br/>

## `Objects`
1- Introduction<br/>
2- Object Literals
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
3- Factories
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

4- Constructors
Calling the constructor function with the new keyword
```
function Circle(radius){
  this.radius = radius;
}
const another = new Circle(1)
```

5- Constructor Property

6- Functions are Objects
7- Value vs Reference Types
8- Adding or Removing Properties
9- Enumerating Properties
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
