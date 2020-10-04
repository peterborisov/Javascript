//@ts-check

/*1. Area and Volume Calculator
Write a function which calculates the area and the volume of a figure, which is defined by its coordinates
(x, y, z).
*/

// function area() { return this.x * this.y }
// function vol() { return this.x * this.y * this.z }

function solve(area, vol, args) {
    return JSON.parse(args)
        .map(el => {
            return {
                area: Math.abs(area.call(el)),
                volume: Math.abs(vol.call(el))
            }
        })
}

console.log(solve(area, vol, `[
    { "x": "1", "y": "2", "z": "10" },
    { "x": "7", "y": "7", "z": "10" },
    { "x": "5", "y": "2", "z": "10" }
]`));


/*
2.	Person
Write a JS program which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( "{firstName} {lastName}" ) properties which should be all accessibles, we discovered that "accessible" also means "mutable". This means that:
•	If .firstName or .lastName have changed, then .fullName should also be changed.
•	If .fullName is changed, then .firstName and .lastName should also be changed.
•	If fullName is invalid, you should not change the other properties. A valid full name is in the format

"{firstName} {lastName}"
*/

class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        let names = fullName.split(' ');
        if (names.length === 2) {
            this.firstName = names[0];
            this.lastName = names[1];
        };
        `${this.firstName} ${this.lastName}`
    }
    get firstName() { return this.first; }
    set firstName(firstName) { this.first = firstName; }

    get lastName() { return this.last; }
    set lastName(lastName) { this.last = lastName }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla

/*
3.ArrayMap
Write a function that takes 2 parameters (array and a function) that uses .reduce() to implement a simple version of .map().
*/

function arrayMap(...args) {
   return args[0].reduce((a, b) => [...a, args[1](b)], [])
}

let nums = [1, 2, 3, 4, 5];
console.log(arrayMap(nums, (item) => item * 2)); // [ 2, 4, 6, 8, 10 ]

/*
5.	Spy
Write a function that takes 2 parameters target(an object) and method(a string) and tracks how many times the method of an object is called.
*/

function Spy(target, method) {
    let originalFunction = target[method]
    let result = {
        count: 0
    }
    target[method] = function () {
        result.count++;
        return originalFunction.apply(this, arguments)
    }

    return result;
}

let spy = Spy(console, "log");

console.log(spy); // { count: 1 }
console.log(spy); // { count: 2 }
console.log(spy); // { count: 3 }

