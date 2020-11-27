# JavaScript Design Patterns
Design patterns are reusable solutions to commonly occurring problems in software design.
They are both exciting and a fascinating topic to explore in any programming language.
## Categories of Design Patterns

### Creational Design Patterns
**As the name suggests, these patterns are for handling object creational mechanisms.**<br/>
1. [Constructor Pattern](#Constructor-Pattern)<br/>
2. [Factory Pattern](#Factory-Pattern)<br/>
3. [Prototype Pattern](#Prototype-Pattern)<br/>
4. [Singleton Pattern](#Singleton-Pattern)<br/>

### Structural Design Patterns
**These patterns are concerned with class and object composition.**<br/>
1. [Adapter Pattern](#Adapter-Pattern)<br/>
2. [Composite Pattern](#Composite-Pattern)<br/>
3. [Decorator Pattern](#Decorator-Pattern)<br/>
4. [Façade Pattern](#Façade-Pattern)<br/>
5. [Flyweight Pattern](#Flyweight-Pattern)<br/>
6. [Proxy Pattern](#Proxy-Pattern)<br/>


### Behavioral Design Patterns
**These patterns are concerned with improving communication between dissimilar objects.**<br/>
1. [Chain of Responsibility Pattern](#Chain-of-Responsibility-Pattern)<br/>
2. [Command Pattern](#Command-Pattern)<br/>
3. [Iterator Pattern](#Iterator-Pattern)<br/>
4. [Mediator Pattern](#Mediator-Pattern)<br/>
5. [Observer Pattern](#Observer-Pattern)<br/>
6. [State Pattern](#State-Pattern)<br/>
7. [Strategy Pattern](#Strategy-Pattern)<br/>
8. [Template Pattern](#Template-Pattern)<br/>


### Creational Design Patterns
#### `Constructor-Pattern`
This is a class-based creational design pattern. Constructors are special functions that can be used to instantiate new objects with methods and properties defined by that function.
```
// Function-based syntax
function Hero(name, specialAbility) {
  // setting property values
  this.name = name;
  this.specialAbility = specialAbility;

  // declaring a method on the object
  this.getDetails = function() {
    return this.name + ' can ' + this.specialAbility;
  };
}

// ES6 Class syntax
class Hero {
  constructor(name, specialAbility) {
    // setting property values
    this._name = name;
    this._specialAbility = specialAbility;

    // declaring a method on the object
    this.getDetails = function() {
      return `${this._name} can ${this._specialAbility}`;
    };
  }
}

// creating new instances of Hero
const IronMan = new Hero('Iron Man', 'fly');

console.log(IronMan.getDetails()); // Iron Man can fly
```

#### `Factory-Pattern`
In this, we provide a generic interface that delegates the responsibility of object instantiation to its subclasses.
```
class BallFactory {
  constructor() {
    this.createBall = function(type) {
      let ball;
      if (type === 'football' || type === 'soccer') ball = new Football();
      else if (type === 'basketball') ball = new Basketball();
      ball.roll = function() {
        return `The ${this._type} is rolling.`;
      };

      return ball;
    };
  }
}

class Football {
  constructor() {
    this._type = 'football';
    this.kick = function() {
      return 'You kicked the football.';
    };
  }
}

class Basketball {
  constructor() {
    this._type = 'basketball';
    this.bounce = function() {
      return 'You bounced the basketball.';
    };
  }
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.
```

#### `Prototype-Pattern`
In this, we use a sort of a “skeleton” of an existing object to create or instantiate new objects.This pattern is specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classic object-oriented inheritance. 
```
// using Object.create as was recommended by ES5 standard
const car = {
  noOfWheels: 4,
  start() {
    return 'started';
  },
  stop() {
    return 'stopped';
  },
};

// Object.create(proto[, propertiesObject])

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.__proto__ === car); // true
```

#### `Singleton-Pattern`
Singleton is a special creational design pattern in which only one instance of a class can exist. 
```
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo
```

### Structural Design Patterns

### Behavioral Design Patterns


source: https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15
