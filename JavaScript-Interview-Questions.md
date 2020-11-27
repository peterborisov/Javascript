[JavaScript Interview Questions](#JavaScript-Interview-Questions)<br/>
[HTML Interview Questions](#HTML-Interview-Questions)<br/>
[CSS Interview Questions](#CSS-Interview-Questions)

# JavaScript Interview Questions
**1**. What will print?<br/>
**2**. What will print?<br/>
**3**. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?<br/>
**4**. What are the benefits, of including 'use strict' at the beginning of a JavaScript source file?<br/>
**5**. Will they both return the same thing?<br/>
**6**. How can you reliably test if a value is equal to NaN?<br/>
**7**. What will be the output?<br/>
**8**. In what order will the numbers 1-4 be logged to the console?<br/>
**9**. Is a palindrome(less than 160 characters)<br/>
**10**. Write a sum method which will work properly when invoked using either syntax below.<br/>
**11**. Consider the following code snippet:<br/>
**12**. Assuming d is an “empty” object in scope, say:<br/>
**13**. What will the code below output to the console and why?<br/>
**14**. What will the code below output to the console?<br/>
**15**. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?<br/>
**16**. What will be the output of the following code:<br/>
**17**. What would the following lines of code output to the console?<br/>
**18**. Can you name two programming paradigms important for JavaScript app developers?<br/>
**19**. What is the difference between classical inheritance and prototypal inheritance?<br/>
**20**. What are the pros and cons of functional programming vs object-oriented programming?<br/>
**21**. What is functional programming?<br/>
**22**. What are the differences between null and undefined?<br/>
**23**. What are the differences between == and ===?<br/>
**24**. How would you compare two objects in JavaScript?<br/>
**25**. If you want to use an arbitrary object as value of this, how will you do that?<br/>
**26**. Write a simple function to tell whether 2 is passed as parameter or not?<br/>
**27**. What the heck is this in JavaScript?<br/>
**28**. Does JavaScript pass parameter by value or by reference?<br/>
**29**. Difference between: function Person(){}, var person = Person(), and var person = new Person()?<br/>
**30**. Explain the differences on the usage of foo between function foo() {} and var foo = function() {}<br/>
**31**. What’s the difference between an “attribute” and a “property”?<br/>
**32**. Explain the same-origin policy with regards to JavaScript.<br/>
**33**. Explain the difference between mutable and immutable objects.<br/>
**34**. Explain the difference between synchronous and asynchronous functions.<br/>
**35**. What are the differences between ES6 class and ES5 function constructors?<br/>
**36**. How to compare two objects with nested properties in JavaScript?<br/>
**37**. List special numeric values.<br/>
**38**. Explain the Map , Set , WeakMap and WeakSet.<br/>
**39**. List the methods to search in an array.<br/>
**40**. What is the purpose of the file package-lock.json?<br/>
**41**. What is Cross-Origin Requests and CDN?<br/>
**42**. What are web workers?<br/>

#### 1.What will print?
```
(function(){
  var a = b = 3;
})();

console.log("a " + (typeof a !== 'undefined'));
console.log("b " + (typeof b !== 'undefined'));

In fact, var a = b = 3; is actually shorthand for:
b = 3;
var a = b;

no 'strict mode': a false, b true
'strict mode': ReferenceError: b is not defined
```

#### 2.What will print?
```
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar

In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.
In the inner function, though, this no longer refers to myObject. 
As a result, this.foo is undefined in the inner function, 
whereas the reference to the local variable self remains in scope and is accessible there.
```

#### 3.What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

#### 4.What are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
Code errors that would otherwise have been ignored, will now generate errors or throw exceptions.
**Benefits of strict mode include:**
Makes debugging easier. 
Prevents accidental globals. 
Eliminates this coercion.
Disallows duplicate parameter values. 
Makes eval() safer.

#### 5.Will they both return the same thing?
```
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

foo1:
Object {bar: "hello"}
foo2:
undefined

The reason for this has to do with the fact that semicolons are technically optional in JavaScript 
(although omitting them is generally really bad form). As a result, when the line containing the return statement 
(with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement.
```

#### 6.How can you reliably test if a value is equal to NaN?
```
NaN means 'not a number', but its type is, Number.
console.log(typeof NaN === "number");  // logs "true"
Additionally, NaN compared to anything – even itself! – is false:
console.log(NaN === NaN);  // logs "false"
```

#### 7.What will be the output?
```
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.
The example provided above is classic case that demonstrates this issue.

Result:
0.30000000000000004
false

A typical solution is to compare the absolute difference between two numbers with the special constant Number.EPSILON:
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

```

#### 8.In what order will the numbers 1-4 be logged to the console?
````
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
1
4
3
2
setTimeout() puts execution of its referenced function into the event queue.
````

#### 9.Is a palindrome(less than 160 characters)
```
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
```

#### 10.Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { 
    	return x + y; 
    };
  }
}
```

#### 11.Consider the following code snippet:
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
**(a) What gets logged to the console when the user clicks on “Button 4” and why?**
```
No matter what button the user clicks the number 5 will always be logged to the console.
```
**(b) Provide one or more alternate implementations that will work as expected.**
```
for (let i = 1; i <= 5; i++) {
  let btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Buuuu ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

#### 12.Assuming d is an “empty” object in scope, say:
var d = {};
**…what is accomplished using the following code?**
['zebra', 'horse'].forEach(function(k) {
	d[k] = undefined;
});
```
console.log(d)
{zebra: undefined, horse: undefined}
```

#### 13.What will the code below output to the console and why?
```
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

"array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"
```

#### 14.What will the code below output to the console?
```
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

"122"
"32"
"02"
"112"
"NaN2"
NaN
```

#### 15.The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
```
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

Fix is:
    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
The stack overflow is eliminated because the event loop handles the recursion, not the call stack. 
```

#### 16.What will be the output of the following code:
```
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
The code sample shown will not display the values 0, 1, 2, 3, and 4 as might be expected; rather, 
it will display 5, 5, 5, 5, and 5.
The reason for this is that each function executed within the loop will be executed after 
the entire loop has completed and all will therefore reference the last value stored in i, which was 5.
```
```
How could the use of closures help here?
for (let i = 0; i < 5; i++) {
    ((x) =>{
        setTimeout(() =>{ 
            console.log(x); 
        }, x * 1000 );
    })(i);
}
This will produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the console.
```
#### 17.What would the following lines of code output to the console?
```
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
```
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2

#### 18. Can you name two programming paradigms important for JavaScript app developers?
```
Prototypal inheritance (also: prototypes, OLOO).
Functional programming (also: closures, first class functions, lambdas).
```

#### 19.What is the difference between classical inheritance and prototypal inheritance?
**Class Inheritance:** instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.\
**Prototypal Inheritance:** instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.

#### 20.What are the pros and cons of functional programming vs object-oriented programming?
**OOP Pros:** It’s easy to understand the basic concept of objects and easy to interpret the meaning of method calls. OOP tends to use an imperative style rather than a declarative style.\
**OOP Cons:** OOP Typically depends on shared state.\
**FP Pros:** Using the functional paradigm, programmers avoid any shared state or side-effects.
FP also tends to favor declarative and denotational styles.\
**FP Cons:** Over exploitation of FP features such as point-free style and large compositions can potentially reduce readability.

#### 21. What is functional programming?
Functional programming (FP) is a programming paradigm for developing software using functions. Following the FP philosophy entails foregoing things like shared states, mutable data and side effects. Functional programming is a declarative paradigm because it relies on expressions and declarations rather than statements. Unlike procedures that depend on a local or global state, value outputs in FP depend only on the arguments passed to the function. \
Pure functions / function purity.\
Avoid side-effects.\
Simple function composition.\
Mention of features that support FP: first-class functions, higher order functions, functions as arguments/values.\
https://www.tutorialspoint.com/functional_programming/functional_programming_introduction.htm

#### 22. What are the differences between null and undefined?
**undefined**, value of the variable is not defined
**null** means empty or non-existent value which is used by programmers to indicate 'no value'.

#### 23. What are the differences between == and ===?
=== compares the types and values

#### 24. How would you compare two objects in JavaScript?
Equality check will check whether two objects have same value for same property. 
To check that, you can get the keys for both the objects. If the number of properties doesn't match, these two objects are not equal. 
Secondly, you will check each property whether they have the same value. 
```
function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
```

#### 25. If you want to use an arbitrary object as value of this, how will you do that?
**bind** allows you to borrow a method and set the value of this without calling the function. It simply returns an exact copy of the function with new value of this.

#### 26. Write a simple function to tell whether 2 is passed as parameter or not?
**arguments** is a local variable, available inside all functions that provides a collection of all the arguments passed to the function. 
arguments is not an array rather an array like object. It has length but doesn't have the methods like forEach, indexOf, etc.
First convert arguments to an array by calling slice method on an array and pass arguments. After that simply use indexOf.
```
function isTwoPassed(){
  var args = Array.prototype.slice.call(arguments);
  return args.indexOf(2) != -1;
}

isTwoPassed(1,4) //false
isTowPassed(5,3,1,2) //true
```

#### 27. What the heck is this in JavaScript?
At the time of execution of every function, JavaScript engine sets a property to the function called this which refer to the current execution context. this is always refer to an object and depends on how function is called.

#### 28. Does JavaScript pass parameter by value or by reference?
Primitive type (string, number, etc.) are passed by value and objects are passed by reference.

#### 29. Difference between: function Person(){}, var person = Person(), and var person = new Person()?
**function Person(){}** - Function Declaration.<br/>
**var person = Person()** - Function Expression. Any JavaScript Expressions (including Function Expressions) always returns a value.<br/>
**var person = new Person()** - Function Constructor.By adding the keyword ‘new’. We are instantiating a new object of the Person class constructor. A function declaration is just a regular function unless it has been instantiated, it then becomes a class constructor.

#### 30. Explain the differences on the usage of foo between function foo() {} and var foo = function() {}
**Function declarations** load before any code is executed while **Function expressions** load only when the interpreter reaches that line of code.

#### 31. What’s the difference between an “attribute” and a “property”?
**Attributes** – is what’s written in HTML.<br/>
**Properties** – is what’s in DOM objects.

#### 32. Explain the same-origin policy with regards to JavaScript.
Security mechanism that restricts how a document from one origin can interact with a resource from another origin. 

#### 33. Explain the difference between mutable and immutable objects.
**mutable object** is an object whose state can be modified after it is created(objects, arrays, functions, classes, sets, and maps.)<br/>
**immutable object** is an object whose state cannot be modified after it is created(numbers and strings.)

#### 34. Explain the difference between synchronous and asynchronous functions.
**synchronous** code is executed in sequence – each statement waits for the previous statement to finish before executing<br/>
**asynchronous** code doesn't have to wait – your program can continue to run.

#### 35. What are the differences between ES6 class and ES5 function constructors?
There is technically no class, they're both just functions. Any function can be invoked as a constructor with the keyword new and the prototype property of that function is used for the object to inherit methods from.

#### 36. How to compare two objects with nested properties in JavaScript?
```
JSON.stringify(obj1) === JSON.stringify(obj2)
```

#### 37. List special numeric values.
**Infinity**  is greater than any number<br/>
**-Infinity**  is less than any number<br/>
**NaN**  represents an error (not a number)<br/>
```
Infinity - Infinity // NaN
```

#### 38. Explain the Map , Set , WeakMap and WeakSet .
**Map**  is a collection of keyed data items, just like an Object . But the main difference is that Map allows keys of any type.<br/>
**Set** is a collection of values, where each value may occur only once.<br/>
**WeakSet**  We may only add objects. <br/>
**WeakMap** Keys must be objects, not primitive values. Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.<br/>

#### 39. List the methods to search in an array.
The methods **arr.indexOf** , **arr.lastIndexOf** and **arr.includes**  have the same syntax and do essentially the same as their string counterparts.<br/>
The **find**  method looks for a single (first) element that makes the function return true.<br/>
The **arr.findIndex**  method is essentially the same, but it returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.<br/>
The **filter**  method looks for elements that make the function return true.

#### 40. What is the purpose of the file package-lock.json ?
Automatically generated for any operations where npm modifies either the node_modules tree, or package.json.

#### 41. What is Cross-Origin Requests and CDN?
**Cross-origin requests** – those sent to another domain (even a subdomain) or protocol or port – require special headers from the remote side. That policy is called “CORS”: Cross-Origin Resource Sharing.<br/>
**CDN (Content Delivery Network)** is a group of servers spread out over many locations. These servers store duplicate copies of data so that servers can fulfill data requests based on which servers are closest to the respective end-users.

#### 42. What are web workers?
A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

# HTML Interview Questions

1. What is doctype? Why do u need it?<br/>
2. What is the use of data- attribute?<br/>
3. How can u generate public key in html?<br/>
4. How can u change direction of html text?<br/>
5. How can u highlight text in html?<br/>
6. Download order<br/>
8. What is the difference between span and div?<br/>
9. When should you use section, div or article?<br/>
10. How to serve a page content in multiple languages?<br/>
11. What is semantic HTML?<br/>
11. Difference between standard/ strict mode and quirks mode?<br/>
12.  Is there any difference between window and document?<br/>
13. Does document.onload and window.onload fire at the same time?<br/>
14. Is attribute similar to property?<br/>
15. What are the different ways to get an element from DOM?<br/>
16. What is the fastest way to select elements by using css selectors?<br/>
17. How come, I can't use forEach or similar array methods on a NodeList?<br/>

#### 1. What is doctype? Why do u need it?
Instruction to the browser to inform about the version of html document and how browser should render it.
```
<!DOCTYPE html>
<meta charset="UTF-8">
```

#### 2. What is the use of data- attribute?
Store extra information/ data in the DOM. 
```
<div id="myDiv" data-user="jsDude" data-list-size="5" data-maxage="180"></div>
```

#### 3. How can u generate public key in html?
html has a keygen element that facilitate generation of key and submission via a form.
```
 <keygen name="name" challenge="challenge string" keytype="type" keyparams="pqg-params">
```

#### 4. How can u change direction of html text?
bdo (bidirectional override)
```
<!-- Switch text direction -->
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

#### 5. How can u highlight text in html?
```
<p>Some part of this paragraph is <mark>highlighted</mark> by using mark element.</p>
```

#### 6. Download order
Does style1.css have to be downloaded and parsed before style2.css can be fetched?
No
```
<head>
    <link href="style1.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
</head>
```
Does style2.css have to be downloaded and parsed before Paragraph 1 is rendered on the page?
```
<head>
    <link href="style1.css" rel="stylesheet">
</head>
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <link href="style2.css" rel="stylesheet">
</body>
```

#### 7. What are optional closing tag? and why would u use it?
p, li, td, tr, th, html, body, etc. you don't have to provide end tag. Whenever browser hits a new tag it automatically ends the previous tag. 
```
<p>Some text
<p>Some more text
<ul>
 <li>A list item
 <li>Another list item
</ul>
```

#### 8. What is the difference between span and div?
div is a block element and span is inline element.

#### 9. When should you use section, div or article?
`<section>` It’s a chunk of related content, like a subsection of a long article, a major part of the page (eg the news section on the homepage), 
or a page in a webapp’s tabbed interface. A section normally has a heading (title) and maybe a footer too.

`article>` represents a complete, or self-contained, composition in a document, page, application.

`div>` on the other hand, does not convey any meaning, aside from any found in its class, lang and title attributes.

#### 10. How to serve a page content in multiple languages?
CMS could be used to deliver content in different language with same structure and style.
quirks mode in browser allows u to render page for as old browsers. This is for backward compatibility.

#### 11. What is semantic HTML?
HTML where the tags used to structure content are selected and applied appropriately to the meaning of the content.
Good for: Search Engine Optimization, accessibility, repurposing, light code. 

#### 11. Difference between standard/ strict mode and quirks mode?
quirks mode in browser allows u to render page for as old browsers. 

#### 12. Is there any difference between window and document?
**window** is that global object that holds global variables, global functions, location, history everything is under it. Besides, setTimeout, ajax call (XMLHttpRequest), console or localStorage are part of window.<br/>
**document** is also under window. document is a property of the window object. document represents the DOM and DOM is the object oriented representation of the html markup you have written. All the nodes are part of document. Hence you can use getElementById or addEventListener on document. These methods are not present in the window object.
```
window.document === document; //true
window.getElementById; //undefined
document.getElementById; //function getElementById() { [native code] }
```
#### 13. Does document.onload and window.onload fire at the same time?
**window.onload** is fired when DOM is ready and all the contents including images, css, scripts, sub-frames, etc. finished loaded.<br/>
**document.onload** is fired when DOM is ready which can be prior to images and other external content is loaded.

#### 14. Is attribute similar to property?
**attributes** are just like attribute in your html tag (XML style attribute) inside the starting tag. html attributes are exposed to the DOM via **property**. Hence, a property is created when DOM is parsed for each attribute in the html tag. If you change an attribute only the value of the property will change. However, the value of attribute will remain same.
 
#### 15. What are the different ways to get an element from DOM?
You can use the following methods in document:<br/>
**getElementById** to get a element that has the provided Id.<br/>
**getElementsByClassName** to get a nodelist (nodelist is not an array, rather it is array-like object) by providing a class name<br/>.
**getElementsByTagName** to get a nodelist by the provided tag name.<br/>
**querySelector** you will pass css style selector (jquery style) and this will retrurn first matched element in the DOM.<br/>
**querySelectorAll** will return a non-live nodelist by using depth-first pre order traversal of all the matched elements. Non-live means, any changes after selecting the elements will not be reflected.<br/>

#### 16. What is the fastest way to select elements by using css selectors?
If you have an ID of an element **getElmentById** is the fastest way to select an element. However, you should not have so many ID in you document to avoid style repetition. css class **getElementsByClassName** is the second quickest way to select an element.
```
    ID (#myID)
    Class (.myClass)
    Tag (div, p)
    Sibling (div+p, div~p)
    child (div>p)
    Descendant (div p)
    Universal (*)
    Attribute (input[type="checkbox"])
    Pseudo (p:first-child)
```

#### 17. How come, I can't use forEach or similar array methods on a NodeList?
Both array and nodeList have length and you can loop through elements but they are not same object. Both are inherited from Object. However array has different prototype object than nodeList. forEach, map, etc are on array.prototype which doesn't exist in the NodeList.prototype object. Hence, you don't have forEach on a nodeList.

# CSS Interview Questions

#### 1. Which one would you prefer among px, em % or pt and why?
**px** gives fine grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp.<br/>
**em** maintains relative size. you can have responsive fonts. em is the width of the letter 'm' in the selected typeface.<br/>
1em is equal to the current font-size of the element or the browser default. if u sent font-size to 16px then 1em = 16px.<br/>
**%** sets font-size relative to the font size of the body.For example, if parent font-size is 20px and child font-size is 50%. child would be 10px.<br/>
**pt**(points) are traditionally used in print. 1pt = 1/72 inch and it is fixed-size unit.

#### 2. How absolute, relative, fixed and static position differ?
**absolute**, place an element exactly where you want to place it.<br/>
**relative**, is position an element relative to itself<br/>
**fixed**, element is positioned relative to viewport or the browser window itself.<br/>
**static**, element will be positioned based on the normal flow of the document.<br/>

#### 3. What are the differences between visibility hidden and display none?
**display: none** removes the element from the normal layout flow and allow other elements to fill in.<br/>
**visibility: hidden** tag is rendered, it takes space in the normal flow but doesn't show it.<br/>

#### 4. What are the differences between inline, block and inline-block?
**inline**, elements do not break the flow. Margin/ padding will push other elements horizontally not vertically, ignores height and width.<br/>
**block**, breaks the flow and dont sits inline. they are usually container like div, section, ul and also text p, h1, etc.<br/>
**inline-block**, will be similar to inline and will go with the flow of the page. Only differences is this this will take height and width.<br/>

#### 5. What are the properties related to box model?
Technically, height, width, padding and border are part of box model and margin is related to it.

#### 6. What are the some pseudo classed u have used?
Pseudo class tells you specific state of an element. allow to style element dynamically. The most popular one is :hover. Besides i have used :visited, :focus, :nth-child, nth-of-type, :link, etc.

#### 7. How do you optimize css selectors?
Avoid universal selectors, don't repeat yourself, remove redundant selectors, be as specific as possible.

#### 8. Why would you use sprites?
When you have multiple images/ icons, browser makes separate call to the server for each one of them. Sprite is a technique to combine all/ some of them (For example, you will put jpg in one sprite) in one image.

#### 9. What is shadow DOM?
Encapsulate part of a DOM. hide subtree. you can have same ID in different shadow DOM.

#### 10. What do you know about transition?
Transition allows to add an effect while changing from one style to another. 

#### 11. What are the reasons to use preprocessor?
CSS in high level with some special syntax (declaring variable, nested syntax, mathematical operations, etc.)
