# javascript terminology list
[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Y](#y) | [Z](#z)

# a
[API](#api) | [Anonymous functions](#anonymous-functions) | [Asynchronous functions](#asynchronous-functions) | 
[Asynchronous Programming](#asynchronous-programming)

#### `asynchronous-programming`
Code that does not run completely as part of a normal execution cycle is said to run asynchronously. Asynchronously executed code in this context basically means that one defines code now to occur later in the future while not blocking other code from running synchronously. The simplest example of this is setTimeout().
Basically, when you ask JavaScript to wait to run some code, while not blocking the rest of the program from running, you are dealing with asynchronous code.
https://vimeo.com/96425312

#### `asynchronous functions`
Asynchronous functions usually accept a callback as a parameter and execution continues on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty. Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze).

#### `anonymous functions`
Since Anonymous Functions are function expressions rather than the regular function declaration which are statements. Function expressions are more flexible. We can assign functions to variables, object properties, pass them as arguments to other functions.

#### `api`
In computer programming, an application programming interface (API) is a set of subroutine definitions, protocols, and tools for building software and applications. API is some kind of interface which has a set of functions that allow programmers to access specific features or data of an application.

# b
[Main menu](#javascript-terminology-list)<br/>

# c
[Main menu](#javascript-terminology-list)<br/>
[closure](#closure) | [callback function](#callback-functions) | [CRUD](#crud) | [currying](#currying) | [coercion](#coercion) | [Continuation](#continuation)

#### `Continuation`
At any given point in a program, the part of the code that's yet to be executed is known as a continuation.
Continuations are often seen in asynchronous programming when the program needs to wait to receive data before it can continue. The response is often passed off to the rest of the program, which is the continuation, once it's been received.

#### `coercion`
Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion.
**explicit type coercion**: Number(value)
**implicit type coercion**: Since JavaScript is a weakly-typed language, values can also be converted between different types automatically (1 == null, 2 / '5').
**String conversion**
```
String(123) // explicit
123 + ''    // implicit
```
**Boolean conversion**
```
Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator
```
**Numeric conversion**
```
Number('123')   // explicit
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit
```

#### `currying`
Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
Currying doesn’t call a function. It just transforms it.
```
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
log(multiply(1)(2)(3)) // 6
```

#### `crud`

| CRUD Methods | REST API Methods | Description |
| --- | --- | --- |
| Create | POST | It is used to create a resource.|
| Read | GET | It is used to read a resource. |
| Update | PUT | It is used to update a resource. |
| Delete | DELETE | It is used to delete a resource.|

#### `closure`
Closures are inner functions inside of an outer function. They have their own local scope and has access to outer function's scope, parameters (but NOT arguments object), and they also have access to global variables.
```
const outer = () => {
  let i = 0;
return () => {
    return i++;
  }
}
let increment = outer();
increment() //prints 0
increment() //prints 1
```
#### `callback functions`
Callback is a function passed into another function as an argument to be executed later.

# d
[Main menu](#javascript-terminology-list)<br/>
[Data Types](#data-Types) | [destructuring object](#destructuring-object)

#### `destructuring object`
Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays, and place them into distinct variables.
```
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

#### `data Types`
| Primitive Types | A primitive is not an object and has no methods of its own. |
| --- | --- |
| Boolean | true or false |
| Null | no value |
| Undefined | a declared variable but hasn’t been given a value |
| Number | integers, floats, etc |
| String | an array of characters i.e words |
| Symbol | a unique value that's not equal to any other value |

| Reference Types | A reference type can contain other values. |
| --- | --- |
| Array | store multiple values in a single variable |
| Object | collection of key/value pairs |
| Function | building blocks of readable, maintainable, and reusable code |

# e
[Main menu](#javascript-terminology-list)<br/>
[event](#event) | [event delegation](#event-delegation) | [event bubbling](#event-bubbling) | [event handler](#event-handler) | 
[event capturing](#event-capturing) | [Event Loop](#event-loop) | [Execution Context](#execution-context) | 

#### `execution context`
```
When a JavaScript engine executes a script, it creates execution contexts. 
Each execution context has two phases: the creation phase and the execution phase.

Creation phase:
- Create a global object i.e., window in the web browser or global in Node.js.
- Create a this
- Setup a memory heap
- Store the function declarations in the memory heap

Execution phase:
During the execution phase, the JavaScript engine executes the code line by line. 
In this phase, it assigns values to variables and executes the function calls.

```

#### `event`
An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).
```
Mouse events: click, contextmenu, mouseover / mouseout, mousedown / mouseup, mousemove 
Form element events: submit, focus
Keyboard events: keydoun, keyup
Document events: DOMContentLoaded 
CSS events: transitionend 
```
#### `event delegation`
Event delegation allows you to avoid adding event listeners to specific nodes instead, the event listener is added to one parent.
```
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});
```
#### `event bubbling`
When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
If you want to stop the event bubbling, this can be achieved by the use of the event.stopPropagation() method. 

#### `event capturing`
Event Capturing is the event starts from top element to target element.

#### `event handler`
Handler – a function that runs in case of an event. Handlers are a way to run JavaScript code in case of user actions. The handler is always in the DOM property: the HTML-attribute is just one of the ways to initialize it.

#### `event loop`
The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is pushed onto the call stack to be executed.

# f
[Main menu](#javascript-terminology-list)<br/>
[filter](#filter) | [Function declarations](#function-declaration) | [Function expressions](#function-expression) | [First Class Functions](#first-class-function) | 
[Function Composition](#function-composition) | 

#### `function composition`
The act of putting two functions together to form a third function where the output of one function is the input of the other.
```
const compose = (f, g) => (a) => f(g(a)) // Definition
```

#### `filter`
The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. 
```
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]
```
#### `function declaration`
Function declarations have its body hoisted.
```
hoisted(); // Output: "This function has been hoisted."
function hoisted() {
  console.log('This function has been hoisted.');
};
```
#### `function expression`
Function expression body is not hoisted(they have the same hoisting behaviour as variables).
If you try to invoke a function expression before it is defined, you will get an Uncaught TypeError: XXX is not a function error.
```
expression(); //Output: "TypeError: expression is not a function

let expression = function() {
  console.log('Will this work?');
};
```
#### `first class function`
Can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.

# g
[Main menu](#javascript-terminology-list)<br/>

# h
[Main menu](#javascript-terminology-list)<br/>
[hoisting](#hoisting) | [heap](#heap) | [higher-order function](#higher-order-function) | 

`higher-order function`
A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result. Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is map.

#### `hoisting`
When you execute a piece of JavaScript code, the JavaScript engine creates the global execution context.
The global execution context has two phases: creation and execution.
During the creation phase, the JavaScript engine moves the variable and function declarations to the top of their scope.
```
//var
console.log(hoist); // Output: undefined
var hoist = 'The variable has been hoisted.';
//This is what the code above looks like to the interpreter:
var hoist;
console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';

//let
console.log(hoist); // Output: ReferenceError: hoist is not defined ...
let hoist = 'The variable has been hoisted.';
```
#### `heap`
Heap is the place (memory) where objects are stored when we define variables.

# i
[Main menu](#javascript-terminology-list)<br/>
[Inheritance](#inheritance)

#### `inheritance`
```
Class Inheritance: A class is like a blueprint — a description of the object to be created. 
Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.
Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.
```

# j
[Main menu](#javascript-terminology-list)<br/>
[JavaScript environment](#javaScript-environment) | [JSONP](#jsonp)

#### `jsonp`
JSONP(JSON with Padding) is a method for sending JSON data without worrying about cross-domain issues, does not use the XMLHttpRequest object, uses the <script> tag instead. Requesting a file from another domain can cause problems, due to cross-domain policy.
Requesting an external script from another domain does not have this problem.

#### `javaScript environment`
Heap, Stack, Web api, Event loop, Callback queue

# k
[Main menu](#javascript-terminology-list)<br/>

# l
[Main menu](#javascript-terminology-list)<br/>

# m
[Main menu](#javascript-terminology-list)<br/>
[map](#map) | [method](#method) | 

#### `method`
When a function is a property of an object.

#### `map`
The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
```
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]
```
# n
[Main menu](#javascript-terminology-list)<br/>
[null](#null)

#### `null`
- null must be assigned.
- null is a value of a variable and is a type of object.
- a === null;

# o
[Main menu](#javascript-terminology-list)<br/>
[object](#object) |

#### `object`
Unordered list of key-value pairs. The key is usually a string or a symbol. The value can be a value of any primitive type (string, boolean, number, undefined, or null), an object, or a function.
**Host** — objects like window, XmlHttpRequest, DOM nodes and so on, which is provided by the browser environment.
**Native** — String, Math, RegExp, Object, Function etc. - core predefined objects always available in JavaScript. 

# p
[Main menu](#javascript-terminology-list)<br/>
[Prototype Inheritance](#prototype-inheritance) | [Prototype Chain](#prototype-chain) | [Promise](#promise) | [Partial Aplication](#partial-aplication) | [Purity](#purity) |
[Predicate](#predicate)

#### `predicate`
A predicate is a function that returns true or false for a given value. A common use of a predicate is as the callback for array filter.

#### `purity`
A function is pure if the return value is only determined by its input values, and does not produce side effects.

#### `partial aplication`
Partially applying a function means creating a new function by pre-filling some of the arguments to the original function.

#### `promise`
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
**Pros:**
	Avoid callback hell which can be unreadable.
	Makes it easy to write sequential asynchronous code that is readable with .then().
	Makes it easy to write parallel asynchronous code with Promise.all().
**Cons:**
	Slightly more complex code (debatable).
	In older browsers where ES2015 is not supported, you need to load a polyfill in order to use it.

#### `prototype chain`
When we look for a property of an object, the JavaScript engine will first check the object itself for the existence of the property.  
If not found, it’ll go to the prototype’s prototype, and on and on until it finds an object with a __proto__ property equal to null.
If found, it’ll use that property.

#### `prototype inheritance`
JavaScript is a prototype based language, so whenever we create a object, engine adds a prototype property inside a object(Object.prototype). The Object.prototype object has many built-in properties such as toString(), valueOf(), etc.
In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
Inheritance in JavaScript works through prototypes and this form of inheritance is often called **prototypal inheritance**.
Object.getPrototypeOf(x);

# q
[Main menu](#javascript-terminology-list)<br/>
[Queue](#queue) | 

#### `queue`
The Callback Queue is a FIFO data structure. This is where your asynchronous code gets pushed to, and waits for the execution. A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function which gets called in order to handle the message.

# r
[Main menu](#javascript-terminology-list)<br/>
[reduce](#reduce) | [ReferenceError](#referenceError) | [REST](#rest) | [Rest parameters](#rest-parameters) | 

#### `rest parameters`
A function can be called with any number of arguments, no matter how it is defined. List of arguments to array of args.
```
function sumAll(...args) { // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

#### `rest`
REST, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. 
The six principles of RESTful API are:\
**Stateless** -  When the request from the client is sent to the server, it contains all the required information to make the server process it\
**Client-Server** - Separating the functionality\
**Uniform Interface** - To obtain the uniformity throughout the application, REST has defined four interface constraints\
**Cacheable** - In order to provide a better performance, applications are made cacheable.\
**Layered System** - The layered system allows an application to be most stable by limiting component behavior.\
**Code on demand** - Constraint that is used optionally and least. 

#### `reduce`
The reduce() method reduces an array of values down to just one value. 
```
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10
```

#### `referenceError`
In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.

# s
[Main menu](#javascript-terminology-list)<br/>
[strict mode](#strict-mode) | [Single Threaded](#single-threaded) | [Stack](#stack) | [Stack Trace](#stack-trace) | [Spread Operator](#spread-operator) | [server-side rendering](#server-side-rendering) | [SPA](#spa) | [Synchronous function](#synchronous-function) | [Side effects](#side-effects) | 

#### `side effects`
A function or expression is said to have a side effect if apart from returning a value, it interacts with (reads from or writes to) external mutable state.

#### `synchronous function`
In synchronous functions, statements complete before the next statement is run. In this case the program is evaluated exactly in order of the statements and execution of the program is paused if one of the statements take a very long time.

#### `spa`
In modern SPAs, **client-side rendering** is used instead. The browser loads the initial page from the server, along with the scripts (frameworks, libraries, app code) and stylesheets required for the whole app. When the user navigates to other pages, a page refresh is not triggered. New data required for the new page, usually in JSON format, is retrieved by the browser via AJAX requests to the server. The SPA then dynamically updates the page with the data via JavaScript, which it has already downloaded in the initial page load. This model is similar to how native mobile apps work.

#### `server-side rendering`
When the user navigates to another URL, a full-page refresh is required and the server sends fresh new HTML for the new page. This is called server-side rendering.

#### `spread operator`
It allows an iterable to expand in places where 0+ arguments are expected. Replace apply(). Array of arguments to list of paramenters.
```
const codeburst = 'CODEBURST';
const characters = [ ...codeburst ];
// [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]
```

#### `strict mode`
This strict context prevents certain actions from being taken and throws more exceptions. 

#### `single threaded`
JavaScript is a single-threaded programming language. In other words, it can do only one thing at a time.
This means it has one call stack and one memory heap, if you have a process which takes long time, then it will block other processes to run. (alert('')).

#### `stack`
Holds our function calls. On each new function call, it’s pushed on top of the stack. 
Stack is known to have a LIFO (Last In First Out) mechanism.
JavaScript engine uses a call stack to manage execution contexts.

#### `stack trace`
A stack trace is a list of the functions, in order, that lead to a given point in a software program(console.trace()). 

# t
[Main menu](#javascript-terminology-list)<br/>
[this](#this) | 

#### `this`
Reference the object that is currently calling the function(parent object).
If a function is called as a method, such as obj.method() - this is the object that the function is a property of.

# u
[Main menu](#javascript-terminology-list)<br/>
[undefined](#undefined) | [Unary Operators](#unary-operators) | [undeclared](#undeclared) | 

#### `undeclared`
Variable that has been declared without let, var, const keyword.

#### `undefined`
Variable that has been declared but no value exists and is a type of itself ‘undefined’.
Undefined is not valid in JSON while null is.
typeof a === "undefined";

#### `unary operators`
```
Unary plus (+)  – convert an operand into a number
Unary minus (-) – convert an operand into a number and negate the value after that.
prefix / postfix increments (++) – add one to its operand
prefix / postfix decrements (--) – subtract one from its operand.
```

# v
[Main menu](#javascript-terminology-list)<br/>
[variable scope](#variable-scope) | 
#### `variable scope`
```
Global Scope: A variable is said to be globally scoped if it is visible from all other scopes.
Local Scope: Variables that are declared inside of a function are 'locally scoped' to that function.
Block Scope: A block scoped variable is a variable that is only accessible within a block(let, const).
Lexical Scope: The inner function has access to the variable declared in the parent scope. 
```

# w
[Main menu](#javascript-terminology-list)<br/>
[Web API](#web-api)

#### `web api`
Web APIs is a term referencing to all APIs provided by the browser to access different native functionalities of devices through JS code(Manipulating documents, Fetching data from the server...). Web API as the name suggests, is an API over the web which can be accessed using HTTP protocol. It is a concept and not a technology.

# x
[Main menu](#javascript-terminology-list)<br/>

# y
[Main menu](#javascript-terminology-list)<br/>

# z
[Main menu](#javascript-terminology-list)<br/>

