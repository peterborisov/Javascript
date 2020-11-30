# Asynchronous Programming
In a **synchronous programming** model, things happen one at a time. 
When you call a function that performs a long-running action, it returns only when the action has finished and it can return the result. 
This stops your program for the time the action takes.<br/>

An **asynchronous model** allows multiple things to happen at the same time. When you start an action, your program continues to run. 
When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).

## Asynchronous Patterns
1. [Callbacks](#Callbacks)<br/>
2. [Promises](#Promises)<br/>
3. [Async/Await](#Async-Await)<br/>
4. [Generators](#Generators)<br/>

#### `Callbacks`
The action is started, and when it finishes, the callback function is called with the result.<br/>
**Pros** Because of this, callbacks are supported in every platform/environment/engine without the need for additional packages or transpiling.<br/>
**Cons** Callback hell.<br/>
There can be only one callback.
```
doThing('value', (err, result) => {
    if (err) {
        // handle error here
        console.error(err);
    } else {
        // handle success here
        console.log(result);
    }
});
```

#### `Promises`
ES6 standart, alternative of callbacks<br/>
A promise is an asynchronous action that may complete at some point and produce a value.<br/>
**Pros**  Promise.all() allows for multiple operations to be run in parallel rather than just asynchronously.<br/>
We can call .then on a Promise as many times as we want(chainable).<br/>
You can define a single error handler using .catch() added to the end of your promise chain.<br/>

**Cons** memory usage when using promises instead of callbacks.<br/>
Avoid the Pyramid of Doom
```
doThing('value')
    .then(value => {
        // handle success here
        console.log(value);
    })
    .catch(reason => {
        // handle error here
        console.error(reason);
    });
```
**prototype.then()<br/>
prototype.catch()**<br/>
The **.then()** is used to specify what to do if the promise is fulfilled and **.catch()** specifies what to do if the promise is not fulfilled.

#### `Async-Await`
ES7 new way of promise<br/>
Under the hood, they are just a new way of calling promises: an “async” function is actually a function that returns a promise. This means that you can call .then() on async functions and await promises.
The **async** and **await** keyword enables asynchronous, promise-based behavior so that code could be written a lot cleaner and avoid promise chains.

```
try {
    const result = await doThing('value');
    // handle success here
    console.log(result);
} catch (ex) {
    // handle error here
    console.error(ex);
}

async function name(params) {
  const result = await waitforfunction()
}
```

#### `Generators`
Functions in which we can use and control the iterator, meaning that functions can be paused and resumed at any time. This is a powerful tool for when we want to get each value only when we need, instead of getting all of them at once. This is possible with the addition of the word yield to JavaScript.
```
function* iterate(array) {
  for(let value of array) {
    yield value
  }
}

const it = iterate(['Imaginary', 'Cloud'])
it.next()
it.next()
it.next()

// RESULT:
// { value: 'Imaginary', done: false }
// { value: 'Cloud', done: false }
// { value: undefined, done: true }
```

## Ajax-XHR(XMLHttpRequest)
#### AJAX = Asynchronous JavaScript And XML.<br/>
AJAX just uses a combination of:<br/>
A browser built-in XMLHttpRequest object (to request data from a web server)<br/>
JavaScript and HTML DOM (to display or use the data).<br/>
The XMLHttpRequest object can be used to exchange data with a server behind the scenes.Update parts of a web page without reloading it. 
```
Client -> JS call -> xmlHttpRequest -> server -> XML/Json -> HTML response
var xhttp = new XMLHttpRequest();
```

#### AJAX - Send a Request To a Server
```
To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
//GET is simpler and faster than POST, and can be used in most cases.
```
#### AJAX - Server Response
**onreadystatechange** Defines a function to be called when the readyState property changes<br/>
**readyState** Holds the status of the XMLHttpRequest.<br/>
**status**<br/>
**statusText** Returns the status-text (e.g. "OK" or "Not Found")<br/>

## API(Aplication Programming Interface)
Is a set of definitions, protocols, and tools for building software and applications. Allow programmers to access specific features or data of an application.<br/>
APIs are messengers that relay information back and forth between different applications and servers. In fact, each time you type a URL into your web browser, you are using an API.

## REST(Representation State Transfer)
Architecture style for designing networked applications<br/>
REST, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. 

