var Person = function (fName, lName, age) {
    this._firstName = fName;
    this._lastName = lName;
    this._age = age;

    Object.defineProperty(this, 'firstName', {
        set: function (fName) {
            if (fName.length <= 3 || fName.length >= 20) {
                throw new Error('First name must be more then 3 and less then 20');
            }
            this._firstName = fName;
        },

        get: function () {
            return this._firstName;
        }
    });

    Object.defineProperty(this, 'lastName', {
        set: function (lName) {
            if (lName.length <= 3 || lName.length >= 20) {
                throw new Error('Last name must be more then 3 and less then 20');
            }
            this._lastName = lName;
        },

        get: function () {
            return this._lastName;
        }
    });

    Object.defineProperty(this, 'age', {
        set: function (age) {
            if (age <= 0 || age >= 150) {
                throw new Error('Age must be more then 0 and less then 150');
            }
            this._age = age;
        },

        get: function () {
            return this._age;
        }
    });
    Person.prototype.toString = function () {
        return this._firstName + ' ' + this._lastName + ' ' + this._age;
    };

};

var peter = new Person("Peter", "Jackson", 21);
var gosho = new Person("Gosho", "Goshov", 23);
console.log(peter.toString());
console.log(gosho.toString());
