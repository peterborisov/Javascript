#### [Objects](#Objects)<br/>
#### [Prototypes](#Prototypes)<br/>
#### [Prototypical Inheritance](#Prototypical-Inheritance)
#### [Classes](#Classes)<br/>
#### [Modules](#Modules)<br/>


## `Objects`
#### 1- Introduction<br/>
#### 2- Object Literals<br/>
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
#### 3- Factories<br/>
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

#### 4- Constructors<br/>
Calling the constructor function with the new keyword
```
function Circle(radius){
  this.radius = radius;
}
const another = new Circle(1)
```

#### 5- Constructor Property<br/>
Any value except **null** and **undefined** has a constructor property, which refers to the corresponding type function.
The constructor property in a prototype is automatically setup to reference the constructor function.
```
Number() for numbers: (1).constructor === Number
Boolean() for booleans: (true).constructor === Boolean
String() for strings: ('hello').constructor === String
Symbol() for symbols: Symbol().constructor === Symbol
```
#### 6- Functions are Objects<br/>

#### 7- Value vs Reference Types<br/>
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

#### 8- Adding or Removing Properties<br/>
```
Dot Notation:
let a = obj.something;
delete obj.something;
Bracket Notation
let b = obj['something'];
delete obj['something'];
```

#### 9- Enumerating Properties<br/>
```
[[Enumerable]] – indicates that if a property will be returned in the for...in loop  or Object.keys() method.
ES6 obj.propertyIsEnumerable('nameProp') // => true/false
```

#### 10- Abstraction<br/>
The separation of some associated business logic into attributes and methods (behaviors), which can form an object.

#### 11- Private Properties and Methods<br/>
Protected fields start with _. 
Private fields start with #. JavaScript makes sure we can only access those from inside the class.

#### 12- Getters and Setters<br/>
They allow us to run the code on the reading or writing of a property.


## `Prototypes`
#### 1- Inheritance<br/>

#### 2- Prototypes and Prototypical Inheritance<br/>
When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called **prototypal inheritance**. 

#### 3- Multi-level Inheritance<br/>

#### 4- Property Descriptors<br/>
**Property flags**
Object properties, besides a value, have three special attributes (so-called “flags”):
**writable** – if true, the value can be changed, otherwise it’s read-only.
**enumerable** – if true, then listed in loops, otherwise not listed.
**configurable** – if true, the property can be deleted and these attributes can be modified, otherwise not.
```
The returned value is a so-called “property descriptor” object: it contains the value and all the flags.
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

#### 5- Constructor Prototypes<br/>
The constructor property returns a reference to the Object constructor function that created the instance object. 

#### 6- Prototype vs. Instance Members<br/>
```
function A (some){
   // Instance members
   this.some = some
}

//Prototype members
A.prototype.myMethos = function(){}
```

#### 7- Iterating Instance and Prototype Members<br/>
Object.keys(myObj) // Return instance members
for...in loop // return all members (prototype + instance)

#### 8- Avoid Extending the Built-in Objects<br/>
Don't modify objects you don't own.

## `Prototypical-Inheritance`
#### 1- Creating Your Own Prototypical Inheritance<br/>
A.prototype = Object.create(B.prototype);

#### 2- Resetting the Constructor<br/>
A.prototype = Object.create(B.prototype);
A.prototype.constructor = A;

#### 3- Calling the Super Constructor<br/>
```
function A(propA, propB) {
    B.call(this, propB)
    propA = propA;
}
```

#### 4- Intermediate Function Inheritance<br/>

#### 5- Method Overriding<br/>

#### 6- Polymorphism<br/>
```
let elements = {
    new A(),
    new B()
}
for(let el of elements){
    // Same method, used in different ways
    el.myMethod()
}
```
#### 7- When to Use Inheritance<br/>
Avoid creating inheritance hierarchies
Favor Composition(using Mixins) over inheritance

#### 8- Mixins<br/>
In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object. And a class may extend only one other class.<br/>
Mixin is a class containing methods that can be used by other classes without a need to inherit from it.<br/>
```
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
```

## `Classes`
#### 1- ES6 Classes<br/>
#### 2- Hoisting<br/>
#### 3- Static Methods<br/>
#### 4- The This Keyword<br/>
#### 5- Private Members Using Symbols<br/>
#### 6- Private Members Using WeakMaps<br/>
#### 7- Getters and Setters<br/>
#### 8- Inheritance<br/>
#### 9- Method Riding<br/>

## `Modules`
#### 1- Modules<br/>
#### 2- CommonJS Modules<br/>
#### 3- ES6 Modules<br/>
#### 4- ES6 Tooling<br/>
#### 5- Babel<br/>
#### 6- Webpack<br/>
