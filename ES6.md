# Minimize documentation from http://es6-features.org

[Constants](#Constants)<br/>
[Scoping](#Scoping)<br/>
[Arrow Functions](#Arrow-Functions)<br/>
[Extended Parameter Handling](#Extended-Parameter-Handling)<br/>
[Template Literals](#Template-Literals)<br/>
[Extended Literals](#Extended-Literals)<br/>
[Enhanced Regular Expression](#Enhanced-Regular-Expression)<br/>
[Enhanced Object Properties](#Enhanced-Object-Properties)<br/>
[Destructuring Assignment](#Destructuring-Assignment)<br/>
[Modules](#Modules)<br/>
[Classes](#Classes)<br/>
[Symbol Type](#Symbol-Type)<br/>
[Iterators](#Iterators)<br/>
[Generators](#Generators)<br/>
[Map/Set & WeakMap/WeakSet](#Map-Set)<br/>
[Typed Arrays](#Typed-Arrays)<br/>
[New Built-In Methods](#New-Methods)<br/>
[Promises](#Promises)<br/>
[Meta-Programming](#Meta-Programming)<br/>
[Internationalization & Localization](#Internationalization-Localization)<br/>


#### `Constants`
**Constants** - also known as "immutable variables", i.e., variables which cannot be re-assigned new content.<br/>
```
const PI = 3.141593
```
#### `Scoping`
**Block-Scoped Variables** - no hoisting.<br/>
**Block-Scoped Functions**<br/>
####  `Arrow-Functions`
**Expression Bodies**<br/>
**Statement Bodies**<br/>
**Lexical this**<br/>
```
this.nums.forEach((v) => {
  console.log(v)
})
```
####  `Extended-Parameter-Handling`
**Default Parameter Values**<br/>
```
function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50
```
**Rest Parameter** - Aggregation of remaining arguments into single parameter<br/>
```
function multiply( ...theArgs) {
  return theArgs.map(element => {
    return element * 2
  })
}

let arr = multiply(15, 25, 42)
console.log(arr)  // [30, 50, 84]
```
**Spread Operator**<br/>
```
// spread operator doing the concat job 
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = [...arr,...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5 ] 
```
#### `Template-Literals`
**String Interpolation** - Template Strings `${}`<br/>
**Custom Interpolation**<br/>
**Raw String Access**<br/>
#### `Extended-Literals`
**Binary & Octal Literal**<br/>
```
0b111110111 === 503
0o767 === 503
```
**Unicode String & RegExp Literal**<br/>
#### `Enhanced-Regular-Expression`
**Regular Expression Sticky Matching**<br/>
#### `Enhanced-Object-Properties`
**Property Shorthand**<br/>
```
let x = 0, y = 0
obj = { x, y }
```
**Computed Property Names**<br/>
**Method Properties**<br/>
```
obj = {
    foo (a, b) {
        …
    },
    *quux (x, y) {
      //generator function
    }
}
```
#### `Destructuring-Assignment`
**Array destructuring**<br/>
```
let list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]
```
**Object destructuring, Shorthand Notation**<br/>
```
let { op, lhs, rhs } = obj;
```
**Object destructuring , Deep Matching**<br/>
```
var { op: a, lhs: { op: b }, rhs: c } = obj
```
**Object And Array Matching, Default Values**<br/>
```
let obj = { a: 1 }
let list = [ 1 ]
let { a, b = 2 } = obj
let [ x, y = 2 ] = list
```
**Parameter Context Matching**<br/>

**Fail-Soft Destructuring**<br/>
#### `Modules`
**Value Export/Import** - Support for exporting/importing values from/to modules without global namespace pollution.<br/>
**Default & Wildcard** - Marking a value as the default exported value and mass-mixin of values.<br/>
#### `Classes`
**Class Definition**<br/>
```
class A {
    constructor () {
    }
}
```
**Class Inheritance**<br/>
```
class B extends A {}
```
**Class Inheritance, From Expressions**<br/>
**Base Class Access**<br/>
**Static Members**<br/>
**Getter/Setter**<br/>
#### `Symbol-Type`
**Symbol Type** - Unique and immutable data type to be used as an identifier for object properties.<br/>
```
Symbol("foo") !== Symbol("foo")
Object.getOwnPropertySymbols(obj)
```
**Global Symbols**<br/>
#### `Iterators`
**Iterator & For-Of Operator**<br/>
#### `Generators`
**Generator Function, Iterator Protocol** - control flow can be paused and resumed<br/>
**Generator Function, Direct Use**<br/>
```
function* range (start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}

for (let i of range(0, 10, 2)) {
    console.log(i) // 0, 2, 4, 6, 8
}
```
**Generator Matching**<br/>
**Generator Control-Flow**<br/>
**Generator Methods**<br/>
#### `Map-Set`
Set Data-Structure<br/>
Map Data-Structure<br/>
Weak-Link Data-Structures<br/>
#### `Typed-Arrays`
Typed Arrays<br/>
#### `New-Methods`
Object Property Assignment<br/>
Array Element Finding<br/>
String Repeating<br/>
String Searching<br/>
Number Type Checking<br/>
Number Safety Checking<br/>
Number Comparison<br/>
Number Truncation<br/>
Number Sign Determination<br/>
#### `Promises`
Promise Usage<br/>
Promise Combination<br/>
#### `Meta-Programming`
Proxying<br/>
Reflection<br/>
#### `Internationalization-Localization`
Collation<br/>
Number Formatting<br/>
Currency Formatting<br/>
Date/Time Formatting<br/>
