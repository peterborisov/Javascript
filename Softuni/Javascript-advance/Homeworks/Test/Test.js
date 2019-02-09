var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }

    Animal.prototype.toString = function () {
        return this.name + ' ' + this.age;
    };
    return Animal;
}());

var Cat = (function (parent) {
    function Cat(name, age, color) {
        parent.call(this, name, age);
        this.color = color;
    }

    Cat.prototype.toString = function () {
        return parent.prototype.toString.call(this) + ' ' + this.color;
    };
    return Cat;
}(Animal));

var Dog = (function (parent) {
    function Dog(name, age, color, guard) {
        parent.call(this, name, age, color);
        this.guard = guard;
    }

    Dog.prototype.toString = function () {
        return parent.prototype.toString.call(this) + ' ' + (this.guard ? 'Is guard' : 'IS Not guard');
    };
    return Dog
}(Cat));

var cat = new Cat('cat', 15, 'white');
var dog = new Dog('gosho', 20, 'black', true);
console.log(dog.toString());
console.log(cat.toString());

